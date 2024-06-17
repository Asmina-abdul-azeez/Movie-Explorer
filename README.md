# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)

>**Note**: Make sure you have Node.js and npm installed. You can download Node.js from [here](https://nodejs.org/).

## Step 1: Clone the repository

```bash
   git clone https://github.com/Asmina-abdul-azeez/Movie-Explorer.git
```

## Step 2: Navigate to the project directory

cd MovieExplorer

## Step 3: Install the dependencies

npm install

## Step 4: Generate TMDB API Key

To use TMDB (The Movie Database) API in your application, you need to generate an API key:

1. Visit the TMDB website and sign up for an account.

2. Once logged in, go to your account settings and click on the "API" section.

3. Request an API key if you haven't already. Copy the generated API key.

## Step 5: Replace API Key in the Application

In your project directory, navigate to moviesApi.ts.

Replace the placeholder API key (TMDB_API_KEY) with your actual TMDB API key obtained from Step 4.

## Step 6: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 7: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run the app — you can also run it directly from within Android Studio and Xcode respectively.
