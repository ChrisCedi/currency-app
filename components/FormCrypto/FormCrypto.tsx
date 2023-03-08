import {Text, View} from 'native-base';
import {Select, Button, FormControl, Box} from 'native-base';
import {styles} from './FormCryptoStyles';
import {useFields} from './hooks/useFields';
import {useEffect, useState} from 'react';
import {CryptoApi} from '../../api/CryptoApi';

export const FormCrypto = () => {
  const {formik} = useFields();
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    try {
      const requestApi = async () => {
        const response = await CryptoApi.get(
          '/top/mktcapfull?limit=10&tsym=USD',
        );

        setCryptos(response.data.Data);
      };

      requestApi();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View>
      <FormControl>
        <Text style={styles.currencyLabel} fontSize="2xl">
          Moneda
        </Text>

        <Box style={styles.boxSelect}>
          <Select
            selectedValue={formik.values.currency}
            onValueChange={valuee => formik.setFieldValue('currency', valuee)}
            placeholder="Selecciona tu moneda"
            // error={formik.touched.currency && Boolean(formik.errors.currency)}
            // helperText={formik.touched.currency && formik.errors.currency}
          >
            <Select.Item label="Dolar de Estados Unidos" value="USD" />
            <Select.Item label="Peso Mexicano" value="MXN" />
            <Select.Item label="Euro" value="EUR" />
            <Select.Item label="Libra Esterlina" value="GBP" />
          </Select>
          {formik.errors.crypto && formik.touched.crypto && (
            <Text style={styles.errorMessage}>{formik.errors.crypto}</Text>
          )}
        </Box>

        <Text style={styles.currencyLabel} fontSize="2xl">
          Criptomoneda
        </Text>

        <Box style={styles.boxSelect}>
          <Select
            selectedValue={formik.values.crypto}
            onValueChange={valuee => formik.setFieldValue('crypto', valuee)}
            placeholder="Selecciona tu moneda"
            // error={formik.touched.crypto && Boolean(formik.errors.crypto)}
            // helperText={formik.touched.crypto && formik.errors.crypto}
          >
            {cryptos?.map((item, index) => (
              <Select.Item
                key={index}
                label={item?.CoinInfo?.FullName}
                value={item.CoinInfo.Name}
              />
            ))}
          </Select>
          {formik.errors.crypto && formik.touched.crypto && (
            <Text style={styles.errorMessage}>{formik.errors.crypto}</Text>
          )}
        </Box>

        <Button colorScheme="secondary" onPress={formik.handleSubmit}>
          Enviar
        </Button>
      </FormControl>
    </View>
  );
};
