const axios = require("axios");
const { lineString } = require("@turf/helpers");
const length = require("@turf/length").default;
const along = require("@turf/along").default;
const cron = require("node-cron");

const routes = require("./trainRoutes");

function calculateDistance(speed, intervalInSeconds) {
  return (speed / 3600) * intervalInSeconds;
}

let latestLocationData = {};
let lastSentTime = {};

const API_KEY = "madhusha-sampath";

function scheduleTrainRoute(trainId, stations, speed, interval) {
  let currentStationIndex = 0;
  let distanceTravelled = 0;

  cron.schedule(`*/${interval} * * * * *`, () => {
    const now = new Date();

    if (currentStationIndex < stations.length - 1) {
      const startStation = stations[currentStationIndex];
      const endStation = stations[currentStationIndex + 1];

      const route = lineString([
        startStation.coordinates,
        endStation.coordinates,
      ]);
      const totalDistance = length(route, { units: "kilometers" });
      const distancePerInterval = calculateDistance(speed, interval);

      if (distanceTravelled >= totalDistance) {
        latestLocationData[trainId] = {
          trainId,
          location: endStation.coordinates,
          speed,
          timestamp: now.toISOString(),
        };
        currentStationIndex++;
        distanceTravelled = 0;
      } else {
        const nextLocation = along(route, distanceTravelled, {
          units: "kilometers",
        });
        latestLocationData[trainId] = {
          trainId,
          location: nextLocation.geometry.coordinates,
          speed,
          stationName: null,
          timestamp: now.toISOString(),
        };
        distanceTravelled += distancePerInterval;
      }

      // Log the current location data
      console.log(`Train ${trainId}`);
      console.log(`Location: ${latestLocationData[trainId].location}`);
      console.log(`Speed: ${latestLocationData[trainId].speed}`);
      console.log(`Timestamp: ${latestLocationData[trainId].timestamp}`);
      console.log("----------------------------------------------------------");
    } else {
      console.log(
        `Train ${trainId} has reached its final destination: ${
          stations[stations.length - 1].name
        }`
      );
    }

    if (lastSentTime[trainId] && now - lastSentTime[trainId] >= 60000) {
      sendLocationData(trainId);
      lastSentTime[trainId] = now;
    } else if (!lastSentTime[trainId]) {
      lastSentTime[trainId] = now;
    }
  });
}

// Start simulating the routes for multiple trains, moving at 150 km/h with updates every 10 seconds
scheduleTrainRoute(1, routes.colomboToKandy, 150, 10);
scheduleTrainRoute(2, routes.colomboToGalgamuwa, 150, 10);
scheduleTrainRoute(3, routes.colomboToMatara, 150, 10);
