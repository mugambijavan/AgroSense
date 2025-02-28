# AgroSense AI

AgroSense AI is a mobile application designed to empower Kenyan farmers by providing real-time data and AI-driven insights. Leveraging Microsoft Fabric for data integration and Azure AI for advanced analytics, the app helps farmers monitor crop health, predict weather impacts, optimize resource usage, and forecast market trends. Built with Expo and React Native, AgroSense AI is a functional, real-world AI solution.

---

## Table of Contents

1. [Project Goals and Alignment](#project-goals-and-alignment)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation Instructions](#installation-instructions)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Development Guidelines](#development-guidelines)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)
11. [Contribution](#contribution)
12. [License](#license)
13. [Acknowledgments](#acknowledgments)
14. [Contact Information](#contact-information)

---

## Project Goals and Alignment

AgroSense AI was developed to create a real-world AI application using Microsoft Fabric and Azure AI. Its goals are to:

- **Support Kenyan Farmers**: Provide actionable insights to improve productivity and sustainability.
- **Utilize Microsoft Fabric**: Integrate data storage (OneLake), ingestion (Data Factory), and processing (Data Warehouse).
- **Leverage Azure AI**: Deliver advanced analytics like crop health analysis and market predictions.

### Technology Stack

- **Frontend**: Expo, React Native, React Navigation, React Native Paper, Victory Native
- **Backend**: Microsoft Fabric (OneLake, Data Factory, Data Warehouse), Azure AI
- **Authentication**: Microsoft Entra ID via MSAL
- **Additional Tools**: Axios (API requests), AsyncStorage (offline caching), i18next (localization), Lottie (animations)

---

## Features

- **Authentication**: Secure login with Microsoft Entra ID.
- **Real-Time Data Integration**: Combines weather feeds, soil sensors, satellite imagery, and market prices.
- **AI-Driven Insights**: Offers crop health analysis, pest detection, irrigation advice, and market forecasts.
- **Interactive Dashboards**: Displays data with dynamic charts and graphs.
- **Offline Capabilities**: Stores data for use without internet access.
- **Multi-Language Support**: Available in English and Swahili.
- **Push Notifications**: Alerts for weather changes or market updates.

---

## Prerequisites

To run the project, you’ll need:

- **Node.js** (v14 or higher)
- **Expo CLI**: Install with `npm install -g expo-cli`
- **Git**: For cloning the repository
- **Microsoft Fabric Account**: Access to a workspace
- **Azure AD Application**: For authentication
- **Expo Go App**: For mobile testing (iOS/Android)

---

## Installation Instructions

### Frontend Setup

1. **Clone the Repository**:
 
2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npx expo start
   ```
   - Scan the QR code with Expo Go or press `a` (Android) or `i` (iOS) for emulators.

### Backend Setup (Microsoft Fabric)

1. **Create a Workspace**: Log into [Microsoft Fabric](https://app.fabric.microsoft.com) and set up a new workspace.
2. **Set Up Data Ingestion**:
   - Use Data Factory to create pipelines for data sources (e.g., OpenWeatherMap, soil sensors).
3. **Process Data**:
   - Store and process data in Data Warehouse.
4. **Deploy AI Models**:
   - Train models in Fabric’s notebooks and expose them via REST APIs.

---

## Configuration

### Authentication

1. **Azure AD Application**:
   - Register an app in [Azure Portal](https://portal.azure.com) under "Microsoft Entra ID."
   - Set the redirect URI (e.g., `msauth.com.example.agrosenseai://auth`).
   - Note the **Client ID** and **Tenant ID**.

2. **Update `authConfig.ts`**:
   - Edit `src/config/authConfig.ts` with your Client ID, Tenant ID, and redirect URI.

### API Endpoints

- Set the Fabric API endpoint in `src/services/api.ts`:
  ```typescript
  const API_BASE_URL = 'https://your-fabric-api-endpoint.com';
  ```

---

## Usage

### Running the App

- Launch with `npx expo start` and use Expo Go or an emulator.

### Navigating the App

- **Login Screen**: Sign in with Microsoft Entra ID.
- **Dashboard Screen**: View real-time data and charts.
- **Detail Screens**: Explore weather, soil, imagery, and market data.

---

## Development Guidelines

### Code Structure

- **`src/components/`**: Reusable UI elements (e.g., `Button.tsx`).
- **`src/navigation/`**: Navigation setup (`AppNavigator.tsx`).
- **`src/screens/`**: Screen components (e.g., `DashboardScreen.tsx`).
- **`src/services/`**: API and auth logic (`api.ts`, `auth.ts`).
- **`src/styles/`**: Global styles.
- **`src/i18n/`**: Localization files.
- **`src/config/`**: Config files (e.g., `authConfig.ts`).

### Adding New Features

- **Screens**: Add to `src/screens/` and update `AppNavigator.tsx`.
- **Components**: Create in `src/components/`.
- **APIs**: Extend `api.ts`.

---

## Testing

- **Unit Tests**: Run with Jest (`npm test`).
- **End-to-End Tests**: Use Detox for device testing.

---

## Deployment

### Mobile App

- Build with Expo EAS:
  ```bash
  eas build --platform all
  ```
- Submit to app stores via Expo.

### Backend

- Update Fabric pipelines and monitor scalability.

---

## Troubleshooting

- **Authentication Issues**: Verify `authConfig.ts` settings.
- **API Failures**: Check the Fabric endpoint and workspace status.
- **Offline Data Problems**: Clear cache with `AsyncStorage.clear()`.

---

## Contribution

To contribute:

1. Fork the repo.
2. Create a branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push (`git push origin feature/YourFeature`).
5. Open a pull request.

Follow coding standards and add tests.

---

## License

Licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Acknowledgments

- **Microsoft Fabric**: Unified data platform.
- **Azure AI**: Analytics tools.
- **Expo**: React Native development.
- **React Native Paper**: UI components.
- **Lottie**: Animations.


This README provides everything needed to understand, set up, and contribute to AgroSense AI. Enjoy exploring the project!