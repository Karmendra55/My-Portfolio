import weatherapp from "../assets/projects/weather-app.png"
import passwordgen from "../assets/projects/password-generator.png"
import unitconversion from "../assets/projects/unit-conversion.png"
import asldetection from "../assets/projects/ASL-detection.png"
import frauddetection from "../assets/projects/fraud-detection.png"
import vehicle from "../assets/projects/vehicle-prediction.png"

export const projects = [
  {
    id: 1,
    slug: "asl-detection",
    title: "American Sign Language Detection",
    description:
      "A system addressing the communication gap between hearing and speech-impaired individuals and others, offering gesture recognition, & learning support.",

    tech: [
      "Python",
      "TensorFlow",
      "Streamlit",
      "Pandas",
    ],

    github: "https://github.com/Karmendra55/ASL_Detection",
    live: "",
    image: asldetection,
    featured: true,
  },

  {
    id: 2,
    slug: "fraud-detection",
    title: "Fraud Detection",
    description:
      "A system to detect fraudulent transactions in digital payments using RF Classification and SHAP Explanations.",

    tech: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "ShaP",
    ],

    github: "https://github.com/Karmendra55/Fraud_Detection",
    live: "",
    image: frauddetection,
    featured: true,
  },

  {
    id: 3,
    slug: "vehicle-price-prediction",
    title: "Vehicle Price Prediction",
    description:
      "The Program enables users to predict the price based on its specifications, compare multiple configurations, and analyze structured dataset entries.",

    tech: [
      "Python",
      "ShaP",
      "Jupyter",
      "Streamlit",
    ],

    github: "https://github.com/Karmendra55/Vehicle_Price_Prediction",
    live: "",
    image: vehicle,
    featured: true,
  },

  {
    title: "Weather Forecast App",
    description:
      "Desktop weather application integrating OpenWeatherMap APIs with real-time forecasting and GUI visualization.",

    tech: [
      "Python",
      "Tkinter",
      "REST API",
    ],

    github: "https://github.com/Karmendra55/Basic-Weather-Forcasting",
    live: "",
    image: weatherapp,
    featured: false,
  },

  { 
    title: "Password Generator Tool",
    description:
      "Customizable secure password generation tool with configurable rules and desktop interface.",

    tech: [
      "Python",
      "Tkinter",
      "Security",
    ],

    github: "https://github.com/Karmendra55/Password_Generator_Tool",
    live: "",
    image: passwordgen,
    featured: false,
  },

  {
    title: "Universal Unit Converter",
    description:
      "Desktop toolkit providing quick unit conversions and integrated calculation utilities in a modular interface.",

    tech: [
      "Python",
      "Requests",
      "JSON",
    ],

    github: "https://github.com/Karmendra55/Universal_Unit_Converter",
    live: "",
    image: unitconversion,
    featured: false,
  },
]