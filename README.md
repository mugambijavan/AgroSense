
# AgroSense AI

AgroSense AI is a mobile application designed to support Kenyan farmers by delivering actionable insights through real-time crop health monitoring, weather impact predictions, resource usage optimization, and market trend forecasting. The app leverages Microsoft Fabric for unified data integration and Azure AI for advanced analytics while using Appwrite for user authentication (including Google OAuth).

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Authentication (Appwrite)](#authentication-appwrite)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Contact](#contact)

## Overview
AgroSense AI addresses critical challenges in agriculture by providing:
- **Real-time Crop Health Monitoring**: Assess crop conditions using sensor data and AI-driven insights.
- **Weather Impact Predictions**: Forecast weather patterns and their potential effects on crops.
- **Resource Usage Optimization**: Offer recommendations for the efficient use of water, fertilizers, and pesticides.
- **Market Trend Forecasting**: Help farmers plan sales by forecasting market prices and demand.

## Features
- **Home**:  
  A dashboard providing a concise overview of crop health, weather updates, and market trends.
- **Crop Monitoring**:  
  Displays detailed data on crop health (e.g., soil moisture, pest detection) with insights derived from AI analytics.
- **Weather Forecast**:  
  Shows predicted weather patterns and evaluates their potential impact on crops.
- **Resource Optimization**:  
  Recommends optimal usage of water, fertilizers, and pesticides based on real-time data.
- **Market Trends**:  
  Forecasts market prices and demand to aid farmers in making informed sales decisions.

## Technology Stack
- **Microsoft Fabric**:  
  For data integration and management.
- **Azure AI**:  
  Powers advanced analytics such as crop health assessments and weather predictions.
- **Expo & React Native**:  
  For cross-platform mobile application development.
- **React Native Paper & Native Wind**:  
  For pre-built UI components and Tailwind CSS-inspired styling.
- **Appwrite**:  
  Manages user authentication and logging, including Google OAuth integration.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- A Git client (e.g., Git, GitHub Desktop)
- An Appwrite instance (self-hosted or cloud)

### Steps to Install
1. **Clone the Repository**
   ```bash
   git clone https://github.com/mugambijavan/AgroSense.git
   cd AgroSense
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the project root and add your configuration settings:
   ```env
   # Microsoft Fabric & Azure AI
   FABRIC_API_ENDPOINT=https://your-fabric-endpoint
   AZURE_AI_KEY=your-azure-ai-key

   # Appwrite Configuration
   APPWRITE_ENDPOINT=https://your-appwrite-endpoint
   APPWRITE_PROJECT_ID=your-appwrite-project-id
   APPWRITE_API_KEY=your-appwrite-api-key
   ```
   Replace the placeholder values with your actual credentials.

## Configuration
- **Microsoft Fabric**:  
  Update the configuration files with your Fabric API endpoints and credentials to enable data ingestion and management.
- **Azure AI**:  
  Set up your Azure AI services by configuring the correct API keys and endpoints in the `.env` file.
- **Appwrite**:  
  Ensure that your Appwrite instance is set up and running, and that you have the required credentials to enable user authentication.

## Authentication (Appwrite)
AgroSense AI uses Appwrite to log users and handle authentication, including Google OAuth. Follow these steps to set up Appwrite for your project:

1. **Set Up Appwrite Project**:
   - Sign up or log in to [Appwrite](https://appwrite.io/).
   - Create a new project for AgroSense AI.
   - Note the `APPWRITE_PROJECT_ID` and set up the API keys as required.

2. **Enable Google Authentication**:
   - In your Appwrite project dashboard, navigate to the Authentication settings.
   - Enable the Google OAuth provider and enter your Google API credentials (Client ID and Client Secret).
   - Make sure to configure the authorized redirect URLs according to Appwrite's documentation.

3. **Configure Appwrite in the Application**:
   - The application will use the environment variables set in your `.env` file (`APPWRITE_ENDPOINT`, `APPWRITE_PROJECT_ID`, `APPWRITE_API_KEY`) to connect to your Appwrite instance.
   - Use the Appwrite SDK in your project to manage user sessions, log in users, and handle Google OAuth.

4. **Sample Code Snippet for Initialization**:
   ```javascript
   // appwriteConfig.js
   import { Client, Account } from 'appwrite';

   const client = new Client()
     .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your Appwrite Endpoint
     .setProject(process.env.APPWRITE_PROJECT_ID); // Your Appwrite Project ID

   export const account = new Account(client);
   ```
   Use this configuration to authenticate users and manage sessions within your app.

## Usage
1. **Start the Application**
   Launch the Expo development server:
   ```bash
   expo start
   ```
   Follow the on-screen instructions to open the app on your mobile device or emulator.

2. **Explore the App Features**
   - **Home Screen**:  
     Provides an overview of crop health, weather updates, and market trends.
   - **Crop Monitoring**:  
     View detailed sensor data and AI insights on crop conditions.
   - **Weather Forecast**:  
     Check predictive analytics on upcoming weather patterns.
   - **Resource Optimization**:  
     Access recommendations for optimal resource usage.
   - **Market Trends**:  
     See market price forecasts and demand predictions.

3. **User Authentication**:
   - On launch, users can log in using the Appwrite authentication system.
   - Select the Google sign-in option to authenticate via OAuth.
   - Once authenticated, users’ sessions will be managed by Appwrite, and their logs will be maintained in your Appwrite instance.

## Deployment
- **Building the App**:  
  Use Expo's build service to create production-ready builds for Android and iOS:
  ```bash
  expo build:android
  expo build:ios
  ```
- **Publishing**:  
  Deploy your app to the relevant app stores or distribute it internally. Ensure production configurations (such as API keys and endpoints) are correctly set.

## Contribution Guidelines
We welcome contributions! To contribute:
1. **Fork the Repository**:  
   Create your own fork of the project.
2. **Create a Feature Branch**:  
   Develop your feature or bug fix on a separate branch.
3. **Commit Your Changes**:  
   Ensure commits are descriptive and adhere to the project’s code style.
4. **Submit a Pull Request**:  
   Provide a detailed description of your changes and submit a pull request for review.

Please follow the coding standards, add tests where applicable, and update documentation as needed.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any questions or feedback, please reach out:
- **Project Maintainer**: [Mugambi Javan](mailto:mugambijavan@gmail.com)
- **GitHub**: [mugambijavan](https://github.com/mugambijavan)

- **Project Maintainer**: [Preston Osoro ](mailto:prestonosoro56@gmail.com)
- **GitHub**: [preston-56](https://github.com/preston-56)

- **Project Maintainer**: [Joseph Oluoch ](mailto:ochiengolu@gmail.com)
- **GitHub**: [AmazyJoe](https://github.com/AmazyJoe)

---

*AgroSense AI aims to leverage cutting-edge technology to empower farmers with actionable insights, driving enhanced productivity and sustainability in agriculture.*
```

