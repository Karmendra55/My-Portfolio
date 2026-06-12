import asldetection from "../assets/projects/ASL-overview.jpg"
import frauddetection from "../assets/projects/fraud-detection-overview.jpg"
import vehicle from "../assets/projects/vehicle-prediction-overview.jpg"

export const projectDetails = {
    "asl-detection": {

        heroImage: asldetection,

        title: "American Sign Language Detection",

        subtitle:
        "Deep Learning powered gesture recognition and learning platform using MobileNetV2 and Streamlit.",

        overview:
        "An interactive sign language recognition and learning platform designed to bridge communication barriers between hearing-impaired individuals and the wider community.",

        github:
        "https://github.com/Karmendra55/ASL_Detection",

        metrics: [
        {
            label: "Dataset Size",
            value: "86K+ Images",
        },

        {
            label: "Classes",
            value: "29",
        },

        {
            label: "Accuracy",
            value: "97.58%",
        },

        {
            label: "Inference",
            value: "<1s",
        },
        ],

        problem:
        "Communication between hearing-impaired individuals and the wider community remains challenging because sign language is not universally understood. Existing learning systems often lack interactivity and practical real-time recognition capabilities.",

        solution:
        "Built a MobileNetV2-based deep learning system capable of recognizing ASL gestures and integrated it into a Streamlit platform with live detection, quizzes, word construction, prediction history, and learning tools.",

        techStack: [
        "Python",
        "TensorFlow",
        "Keras",
        "MobileNetV2",
        "Scikit-Learn",
        "Streamlit",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Joblib",
        ],

        architecture: [
        "Dataset Collection",
        "Preprocessing & Augmentation",
        "MobileNetV2 Training",
        "Fine-Tuning",
        "Model Serialization",
        "Streamlit Deployment",
        "Live Predictions",
        ],

        challenges: [
        {
            title: "Similar Gesture Confusion",

            description:
            "Signs such as V/W and J/Y produced the highest misclassification rates due to visual similarity.",
        },

        {
            title: "Real-Time Performance",

            description:
            "Balancing prediction accuracy with low-latency webcam inference required optimization and transfer learning.",
        },

        {
            title: "Dataset Variability",

            description:
            "Lighting conditions, hand positions, and background noise introduced challenges during inference.",
        },
        ],

        results: [
        "97.58% classification accuracy",
        "F1 Score of approximately 0.98",
        "Real-time recognition support",
        "Interactive learning experience",
        "Prediction history and export functionality",
        ],

        lessonsLearned: [
        "Transfer learning significantly reduced training time.",
        "Model explainability improves user trust.",
        "Interactive UX dramatically increases educational engagement.",
        ],
    },

    "fraud-detection": {

        heroImage: frauddetection,

        title: "Fraud Detection System",

        subtitle:
            "Machine learning powered fraud analytics platform with SHAP explainability and interactive dashboards.",

        overview:
            "An end-to-end fraud detection system designed to classify suspicious transactions, visualize fraud trends, and provide explainable predictions through an interactive Streamlit platform.",

        github:
            "https://github.com/Karmendra55/Fraud_Detection",

        metrics: [
            {
            label: "Dataset Size",
            value: "1.75M Records",
            },

            {
            label: "Source Files",
            value: "183 PKL Files",
            },

            {
            label: "Model",
            value: "XGBoost",
            },

            {
            label: "Features",
            value: "Behavioral + Temporal",
            },
        ],

        problem:
            "Digital payment systems process millions of transactions daily, making manual fraud investigation impossible at scale. Organizations need accurate, explainable, and scalable fraud detection systems capable of identifying suspicious transactions early.",

        solution:
            "Developed a machine learning fraud detection platform using XGBoost, Random Forest, and LightGBM models. The system combines engineered behavioral features, SHAP explainability, dashboards, batch analysis, and downloadable reporting inside a Streamlit application.",

        techStack: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
            "XGBoost",
            "LightGBM",
            "SHAP",
            "Streamlit",
            "Matplotlib",
            "Seaborn",
            "Joblib",
        ],

        architecture: [
            "PKL Data Consolidation",
            "Feature Engineering",
            "Data Cleaning",
            "Class Imbalance Handling",
            "Model Training",
            "SHAP Explainability",
            "Streamlit Deployment",
            "Batch Analysis",
        ],

        challenges: [
            {
            title: "Massive Dataset Processing",

            description:
                "Merging and processing over 1.75 million transaction records while maintaining reproducibility and efficient training workflows.",
            },

            {
            title: "Class Imbalance",

            description:
                "Fraudulent transactions represented a very small percentage of the dataset, requiring techniques such as SMOTE and careful metric selection.",
            },

            {
            title: "Model Explainability",

            description:
                "Predictions needed to be interpretable for analysts, leading to SHAP integration and feature importance analysis.",
            },
        ],

        results: [
            "Interactive fraud analytics platform",
            "SHAP-powered explainability",
            "Single and batch transaction analysis",
            "Fraud trend visualizations",
            "Exportable PDF and CSV reports",
        ],

        lessonsLearned: [
            "Data quality is often more important than model complexity.",
            "Explainability significantly increases trust in ML systems.",
            "Feature engineering has a larger impact than hyperparameter tuning in many fraud datasets.",
        ],
    },

    "vehicle-price-prediction": {

        heroImage: vehicle,

        title: "Vehicle Price Prediction",

        subtitle:
            "Machine learning regression platform for intelligent vehicle valuation and comparative analysis.",

        overview:
            "An XGBoost-powered vehicle valuation platform capable of predicting prices from specifications while providing analytical insights and batch estimation support.",

        github:
            "https://github.com/Karmendra55/Vehicle_Price_Prediction",

        metrics: [
            {
            label: "Dataset",
            value: "1,000+ Vehicles",
            },

            {
            label: "Features",
            value: "17 Attributes",
            },

            {
            label: "R² Score",
            value: "0.84",
            },

            {
            label: "RMSE",
            value: "~6970",
            },
        ],

        problem:
            "Vehicle valuation is often subjective and inconsistent due to varying specifications, brands, market conditions, and configurations. Buyers, sellers, and dealerships require a data-driven valuation system to support decision making.",

        solution:
            "Built an XGBoost-based regression system that predicts vehicle prices using manufacturer details, drivetrain configurations, engine specifications, fuel types, and other vehicle characteristics through an interactive Streamlit application.",

        techStack: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
            "XGBoost",
            "Streamlit",
            "Matplotlib",
            "Seaborn",
            "Joblib",
        ],

        architecture: [
            "Data Collection",
            "Data Cleaning",
            "Feature Engineering",
            "Encoding & Scaling",
            "Model Training",
            "Evaluation",
            "Model Serialization",
            "Streamlit Deployment",
        ],

        challenges: [
            {
            title: "High Feature Diversity",

            description:
                "Vehicle datasets contain many categorical attributes such as make, fuel type, transmission, drivetrain, and body style requiring robust preprocessing.",
            },

            {
            title: "Market Variability",

            description:
                "Vehicle prices vary significantly across manufacturers and luxury segments, making regression stability challenging.",
            },

            {
            title: "Balancing Accuracy and Usability",

            description:
                "The application needed to support both quick predictions and advanced configuration options without overwhelming users.",
            },
        ],

        results: [
            "R² score of approximately 0.84",
            "RMSE around 6970",
            "Single and batch prediction support",
            "Interactive vehicle analytics",
            "Comparative valuation workflows",
        ],

        lessonsLearned: [
            "Feature engineering strongly influences regression performance.",
            "Tree-based models outperform simple linear approaches for mixed vehicle datasets.",
            "Visualization improves confidence in predictive systems.",
        ],
    },
}