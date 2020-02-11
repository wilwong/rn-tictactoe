import { AppLoading,  registerRootComponent } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font';
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

import AppContainer from './src/app';

const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  console.log('wtf');
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  } else {
    return (
      <AppContainer />
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/circle.png'),
      require('./assets/cross.png'),
    ]),
    Font.loadAsync({
      // This is the font icons that we are using for 
      //our general UI, and the circles and crosses
      ...Ionicons.font,
    }),
  ])
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error)
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true)
}

registerRootComponent(App);