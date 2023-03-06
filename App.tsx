import React from 'react';
import {Header} from './components/Header/Header';
import {NativeBaseProvider} from 'native-base';
import {Image} from 'react-native';
import {Text} from 'native-base';
// import {Image}

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <Header />
      {/* <Image source={require('./assets/images/cryptomonedas.png')} alt="hola" /> */}
      <Text>Aqui va la imagen</Text>
    </NativeBaseProvider>
  );
}

export default App;
