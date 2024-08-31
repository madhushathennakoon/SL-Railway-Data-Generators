const routes = {
  colomboToBadulla: [
    { name: "Colombo", coordinates: [6.933881600451961, 79.85003626721756] },
    { name: "Maradana", coordinates: [6.929641050972417, 79.86517436906172] },
    { name: "Kelaniya", coordinates: [6.961387236209059, 79.89450256721761] },
    { name: "Ragama", coordinates: [7.029965597597152, 79.9215177594665] },
    { name: "Gampaha", coordinates: [7.093780720604612, 79.99378324022732] },
    { name: "Veyangoda", coordinates: [7.152843554343121, 80.05850216721831] },
    {
      name: "Poplgahawela",
      coordinates: [7.330886433178463, 80.30113623838419],
    },
    {
      name: "Rambukkana",
      coordinates: [7.3214516199754245, 80.39016880954917],
    },
    {
      name: "Peradeniya",
      coordinates: [7.2576336217156046, 80.59022505372336],
    },
    { name: "Kandy ", coordinates: [7.289659371802432, 80.63237965372353] },
    { name: "Hatton  ", coordinates: [6.893446908465629, 80.5980865672174] },
    { name: "Haputale  ", coordinates: [6.768570298854465, 80.9575867383821] },
    { name: "Elle  ", coordinates: [6.87591062660921, 81.04709242488704] },
    { name: "Badulla   ", coordinates: [6.980225131424817, 81.0597551978967] },
  ],

  colomboToMatara: [
    { name: "Colombo", coordinates: [6.933881600451961, 79.85003626721756] },
    {
      name: "Mount Laviniya",
      coordinates: [6.831951209595042, 79.86277876721716],
    },
    { name: "Kalutara ", coordinates: [6.584138296870607, 79.95901610954657] },
    { name: "Bentota ", coordinates: [6.4224438697269255, 79.99673389789491] },
    { name: "Hikkaduwa ", coordinates: [6.142342869769711, 80.10012239604991] },
    { name: "Galle  ", coordinates: [6.033518290313829, 80.21428893837991] },
    { name: "Koggala  ", coordinates: [5.986280422667417, 80.33150556537055] },
    { name: "Matara   ", coordinates: [5.952155994996606, 80.54356082088108] },
  ],

  colomboToTrincomalee: [
    { name: "Colombo", coordinates: [6.933881600451961, 79.85003626721756] },
    { name: "Kelaniya", coordinates: [6.961387236209059, 79.89450256721761] },
    { name: "Gampaha", coordinates: [7.093780720604612, 79.99378324022732] },
    { name: "Veyangoda", coordinates: [7.152843554343121, 80.05850216721831] },
    {
      name: "Poplgahawela",
      coordinates: [7.330886433178463, 80.30113623838419],
    },
    { name: "Kurunegala", coordinates: [7.477069769542463, 80.37426526721966] },
    { name: "Maho", coordinates: [7.822951729981318, 80.2753400518816] },
    { name: "Habarana ", coordinates: [8.057432465102453, 80.76958578071758] },
    { name: "Galoya ", coordinates: [8.138006907879925, 80.86585536722264] },
    {
      name: "Polonnaruwa ",
      coordinates: [7.930380421701531, 81.0333994690658],
    },
    {
      name: "Batticaloa ",
      coordinates: [7.7246871903880665, 81.69884409789971],
    },
    {
      name: "Trincomalee ",
      coordinates: [8.584633246942463, 81.22617335372955],
    },
  ],

  colomboToJaffna: [
    { name: "Colombo", coordinates: [6.933881600451961, 79.85003626721756] },
    { name: "Kelaniya", coordinates: [6.961387236209059, 79.89450256721761] },
    { name: "Gampaha", coordinates: [7.093780720604612, 79.99378324022732] },
    { name: "Veyangoda", coordinates: [7.152843554343121, 80.05850216721831] },
    {
      name: "Poplgahawela",
      coordinates: [7.330886433178463, 80.30113623838419],
    },
    { name: "Kurunegala", coordinates: [7.477069769542463, 80.37426526721966] },
    { name: "Maho", coordinates: [7.822951729981318, 80.2753400518816] },
    { name: "Galgamuwa", coordinates: [8.002381854949368, 80.27161926722202] },
    {
      name: "Anuradhapura ",
      coordinates: [8.344653027258783, 80.41081473838875],
    },
    { name: "Vavuniya  ", coordinates: [8.754333049012411, 80.49376591140022] },
    {
      name: "Kilinochchi   ",
      coordinates: [9.389988962461778, 80.40648936722965],
    },
    { name: "Jaffna   ", coordinates: [9.665400268212679, 80.02070259606626] },
  ],

  colomboToPuttalam: [
    { name: "Colombo", coordinates: [6.933881600451961, 79.85003626721756] },
    { name: "Ragama", coordinates: [7.030290045534396, 79.92137965187833] },
    { name: "Ja-Ela", coordinates: [7.078001981558246, 79.8919679383832] },
    { name: "Negombo", coordinates: [7.2106347725730515, 79.84194604022782] },
    {
      name: "Nattandiya",
      coordinates: [7.4145458143056775, 79.86610332673325],
    },
    { name: "Chilaw", coordinates: [7.575754661071831, 79.79111279605489] },
    {
      name: "Madurankuliya",
      coordinates: [7.903210823055277, 79.82100876722151],
    },
    { name: "Puttalam", coordinates: [8.022927677933671, 79.83791666722203] },
  ],

  colomboToMatale: [
    { name: "Colombo", coordinates: [6.933881600451961, 79.85003626721756] },
    { name: "Maradana", coordinates: [6.929641050972417, 79.86517436906172] },
    { name: "Kelaniya", coordinates: [6.961387236209059, 79.89450256721761] },
    { name: "Ragama", coordinates: [7.029965597597152, 79.9215177594665] },
    { name: "Gampaha", coordinates: [7.093780720604612, 79.99378324022732] },
    { name: "Veyangoda", coordinates: [7.152843554343121, 80.05850216721831] },
    {
      name: "Poplgahawela",
      coordinates: [7.330886433178463, 80.30113623838419],
    },
    {
      name: "Rambukkana",
      coordinates: [7.3214516199754245, 80.39016880954917],
    },
    {
      name: "Peradeniya",
      coordinates: [7.2576336217156046, 80.59022505372336],
    },
    { name: "Kandy ", coordinates: [7.289659371802432, 80.63237965372353] },
    {
      name: "Katugastota ",
      coordinates: [7.330650933279983, 80.6330341113934],
    },
    {
      name: "Wattegama ",
      coordinates: [7.3507523246037065, 80.68251249420979],
    },
    { name: "Matale ", coordinates: [7.468192997783483, 80.62484805372421] },
  ],

  colomboToKelaniValley: [
    { name: "Colombo", coordinates: [6.933881600451961, 79.85003626721756] },
    {
      name: "Narahenpita ",
      coordinates: [6.8971630170452105, 79.877901453722],
    },
    { name: "Nugegoda ", coordinates: [6.872556924613324, 79.8915771825568] },
    {
      name: "maharagama ",
      coordinates: [6.848433238931213, 79.92677762488702],
    },
    { name: "Homagama ", coordinates: [6.845863283036883, 80.00417545372187] },
    { name: "Padukka ", coordinates: [6.843040598579085, 80.09114483838239] },
    { name: "Kosgama ", coordinates: [6.940830146660708, 80.13729613838268] },
    {
      name: "Avisawella ",
      coordinates: [6.954908140390173, 80.20733130954784],
    },
  ],
};

module.exports = routes;
