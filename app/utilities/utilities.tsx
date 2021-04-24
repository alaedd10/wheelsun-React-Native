const stationsArray = [
  {
    coordinate: {
      latitude: 36.80054908621098,
      longitude: 10.187078858657264,
    },
    title: "ST-WS100",
    availableBikes: [
      {
        title: "V100-01",
        battery: "100",
        price: "6",
      },
      {
        title: "V100-02",
        battery: "90",
        price: "6",
      },

      {
        title: "V100-03",
        battery: "80",
        price: "6",
      },
      {
        title: "V100-04",
        battery: "100",
        price: "6",
      },
    ],
  },
  {
    coordinate: {
      latitude: 36.79966613808017,
      longitude: 10.178661730759739,
    },
    title: "ST-WS200",
    availableBikes: [
      {
        title: "V200-02",
        battery: "100",
        price: "6",
      },
      {
        title: "V200-03",
        battery: "50",
        price: "6",
      },
    ],
  },
  {
    coordinate: {
      latitude: 36.7955798427403,
      longitude: 10.181132589640901,
    },
    title: "ST-WS300",
    availableBikes: [
      {
        title: "V300-01",
        battery: "100",
        price: "6",
      },
      {
        title: "V300-02",
        battery: "60",
        price: "6",
      },
      {
        title: "V300-04",
        battery: "60",
        price: "6",
      },
    ],
  },
  {
    coordinate: {
      latitude: 36.80635944041088,
      longitude: 10.18148071753785,
    },
    title: "ST-WS400",
    availableBikes: [
      {
        title: "V400-03",
        battery: "100",
        price: "6",
      },
    ],
  },
  {
    coordinate: {
      latitude: 36.812814234681156,
      longitude: 10.187632392020214,
    },
    title: "ST-WS500",
    availableBikes: [],
  },
  {
    coordinate: {
      latitude: 36.812617098000544,
      longitude: 10.18056794361075,
    },
    title: "ST-WS600",
    availableBikes: [
      {
        title: "V600-01",
        battery: "75",
        price: "6",
      },
      {
        title: "V600-03",
        battery: "90",
        price: "6",
      },
    ],
  },
];

const newsArray = [
  {
    id: 1,
    image: require("../assets/bike1.jpg"),
    title: "Wheelsun Project",
    description:
      "In nisi nisi aute laboris nostrud ullamco id aliquip est quis voluptate. Eu fugiat eu sint deserunt id id adipisicing. Exercitation est pariatur laboris ut veniam ex dolor cupidatat sit quis enim. Nostrud aliquip sunt nulla nostrud reprehenderit cupidatat elit id fugiat quis.",
  },
  {
    id: 2,
    image: require("../assets/bike2.jpg"),
    title: "Wheelsun E-Bike",
    description:
      "In nisi nisi aute laboris nostrud ullamco id aliquip est quis voluptate. Eu fugiat eu sint deserunt id id adipisicing. Exercitation est pariatur laboris ut veniam ex dolor cupidatat sit quis enim. Nostrud aliquip sunt nulla nostrud reprehenderit cupidatat elit id fugiat quis.",
  },
  {
    id: 3,
    image: require("../assets/bike3.jpg"),
    title: "Health advices",
    description:
      "In nisi nisi aute laboris nostrud ullamco id aliquip est quis voluptate. Eu fugiat eu sint deserunt id id adipisicing. Exercitation est pariatur laboris ut veniam ex dolor cupidatat sit quis enim. Nostrud aliquip sunt nulla nostrud reprehenderit cupidatat elit id fugiat quis.",
  },
];

const helpArray = [
  {
    id: 1,
    title: "Terms and conditions",
    paragraph:
      "Deserunt amet ullamco sint veniam non. Fugiat aute minim voluptate proident officia laboris nisi commodo. Laboris tempor Lorem esse est dolor.",
  },
  {
    id: 2,
    title: "How it works",
    paragraph:
      "Deserunt amet ullamco sint veniam non. Fugiat aute minim voluptate proident officia laboris nisi commodo. Laboris tempor Lorem esse est dolor.",
  },
  {
    id: 3,
    title: "Pricing",
    paragraph:
      "Deserunt amet ullamco sint veniam non. Fugiat aute minim voluptate proident officia laboris nisi commodo. Laboris tempor Lorem esse est dolor.",
  },
  {
    id: 4,
    title: "Support",
    paragraph:
      "Deserunt amet ullamco sint veniam non. Fugiat aute minim voluptate proident officia laboris nisi commodo. Laboris tempor Lorem esse est dolor.",
  },
];

const getCurrentDate = () => {
  const today = new Date();

  const date =
    (today.getDate() < 10 ? "0" : "") +
    today.getDate() +
    "-" +
    (today.getMonth() < 10 ? "0" : "") +
    (today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  const time =
    (today.getHours() < 10 ? "0" : "") +
    today.getHours() +
    ":" +
    (today.getMinutes() < 10 ? "0" : "") +
    today.getMinutes();

  return time + " / " + date;
};

export { stationsArray, newsArray, helpArray, getCurrentDate };
