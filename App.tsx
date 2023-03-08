import React from 'react';
import {Header} from './components/Header/Header';
import {FormCrypto} from './components/FormCrypto/FormCrypto';
import {NativeBaseProvider} from 'native-base';
import {Image} from 'react-native';
import {Text, View} from 'native-base';
import {styles} from './AppStyles';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <Header />
      <Image
        source={require('./assets/images/cryptomonedas.png')}
        style={styles.mainImage}
      />
      <View style={styles.body}>
        <FormCrypto />
      </View>
    </NativeBaseProvider>
  );
}

export default App;
