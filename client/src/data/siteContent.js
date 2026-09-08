import { CloudRain, CloudSun, Sun } from "lucide-react";

export const crops = [
  {
    name: "Chilli",
    local: "Mirchi",
    status: "Healthy",
    image:
      "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=900&q=85",
    note: "Watch new leaves for curling and pale patches.",
    season: "Kharif · 90–150 days",
    water: "Light, regular irrigation",
    symptoms: ["Leaf curl", "Whitefly", "Fruit rot"],
    actions: [
      "Inspect the underside of leaves twice a week.",
      "Keep the field free of volunteer plants.",
      "Avoid overhead irrigation when humidity is high.",
    ],
  },
  {
    name: "Tomato",
    local: "Tamatar",
    status: "Watch",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=85",
    note: "Warm, humid weather can favour early blight.",
    season: "Rabi · 90–110 days",
    water: "Deep irrigation at soil level",
    symptoms: ["Early blight", "Bacterial spot", "Aphids"],
    actions: [
      "Remove badly affected leaves and destroy them away from the field.",
      "Use clean seed and give plants room for airflow.",
      "Ask a local agriculture officer before using a pesticide.",
    ],
  },
  {
    name: "Cotton",
    local: "Kapas",
    status: "Healthy",
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=900&q=85",
    note: "Good sunlight today. Keep scouting for sucking pests.",
    season: "Kharif · 160–180 days",
    water: "Avoid waterlogging",
    symptoms: ["Jassid", "Pink bollworm", "Leaf reddening"],
    actions: [
      "Check five plants at five spots in the field.",
      "Protect flowering stages from unnecessary spray.",
      "Use pheromone traps where recommended locally.",
    ],
  },
  {
    name: "Wheat",
    local: "Gehu",
    status: "Healthy",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    note: "Keep an eye on rust if cool, wet weather arrives.",
    season: "Rabi · 120–150 days",
    water: "Timely irrigation at critical stages",
    symptoms: ["Yellow rust", "Aphids", "Loose smut"],
    actions: [
      "Use certified seed when starting a new crop.",
      "Walk across the field before deciding on treatment.",
      "Harvest and dry grain properly to prevent storage losses.",
    ],
  },
];

export const weatherDays = [
  {
    day: "Today",
    icon: Sun,
    high: "31°",
    low: "24°",
    rain: "10%",
    label: "Sunny",
  },
  {
    day: "Tue",
    icon: CloudSun,
    high: "30°",
    low: "23°",
    rain: "20%",
    label: "Partly cloudy",
  },
  {
    day: "Wed",
    icon: CloudRain,
    high: "28°",
    low: "23°",
    rain: "60%",
    label: "Light rain",
  },
  {
    day: "Thu",
    icon: CloudSun,
    high: "29°",
    low: "22°",
    rain: "35%",
    label: "Cloudy",
  },
  {
    day: "Fri",
    icon: Sun,
    high: "32°",
    low: "24°",
    rain: "10%",
    label: "Sunny",
  },
];

export const advisoryCards = [
  {
    tag: "CHILLI",
    title: "Check leaves before the heat builds",
    body: "Curling leaves can have more than one cause. Look for insects under the leaf, check soil moisture, and take a clear photo before treating.",
    color: "green",
    time: "3 min read",
  },
  {
    tag: "ALL CROPS",
    title: "A simple IPM routine for every field",
    body: "Scout first, use field hygiene and natural controls where practical, and use a locally approved product only when it is needed and labelled for your crop.",
    color: "ochre",
    time: "5 min read",
  },
  {
    tag: "WEATHER",
    title: "Rain in the next 48 hours?",
    body: "Finish weeding and avoid spraying before rain. Clear blocked drainage and postpone foliar feeding until leaves can stay dry.",
    color: "blue",
    time: "2 min read",
  },
];
