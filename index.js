import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, {useState} from 'react';

import AppContainer from './src/app.js';

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
    );
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
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
