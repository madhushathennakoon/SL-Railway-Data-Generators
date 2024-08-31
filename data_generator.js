const axios = require("axios");
const { lineString } = require("@turf/helpers");
const length = require("@turf/length").default;
const along = require("@turf/along").default;
const cron = require("node-cron");

const routes = require("./train_routes");

function calculateDistance(speed, intervalInSeconds) {
  return (speed / 3600) * intervalInSeconds;
}

let latestLocationData = {};
let lastSentTime = {};

const API_KEY = "madhusha-sampath";

async function sendLocationData(trainId) {
  if (latestLocationData[trainId]) {
    try {
      const response = await axios.post(
        "https://4iecw6fm2f.execute-api.ap-southeast-1.amazonaws.com/api/train/add",
        latestLocationData[trainId],
        {
          headers: {
            "x-api-key": API_KEY, // Include the API key in the request headers
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(`Error sending data for Train ${trainId}:`, error.message);
    }
  }
}

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
scheduleTrainRoute(1, routes.colomboToBadulla, 150, 10);
scheduleTrainRoute(2, routes.colomboToMatara, 150, 10);
scheduleTrainRoute(3, routes.colomboToTrincomalee, 150, 10);
scheduleTrainRoute(4, routes.colomboToJaffna, 150, 10);
scheduleTrainRoute(5, routes.colomboToPuttalam, 150, 10);
scheduleTrainRoute(6, routes.colomboToMatale, 150, 10);
scheduleTrainRoute(7, routes.colomboToKelaniValley, 150, 10);
