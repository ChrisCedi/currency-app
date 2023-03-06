import {Text, View} from 'native-base';
import {styles} from './HeaderStyles';

export const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text fontSize="2xl" style={styles.title}>
        Crypto App
      </Text>
    </View>
  );
};
