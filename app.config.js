import 'dotenv/config';

export default {
  "expo": {
    "name": "mosqueSeek",
    "slug": "mosqueSeek",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "infoPlist": {
        "NSLocationWhenInUseUsageDescription": "We need your location to provide location-based services."
      },
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "config": {
        "googleMaps": {
          "apiKey": process.env.MAP_API_KEY, // Make sure this is in place
        },
      },
      "package": "com.disionix.mosqueseek",
      "versionCode": 1,
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "MAP_API_KEY": process.env.MAP_API_KEY,
      "eas": {
        "projectId": "3e300398-ca45-43cc-86ef-6f4b256c10a7"
      }
    }
  }
}
