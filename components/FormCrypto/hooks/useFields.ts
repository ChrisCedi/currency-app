import {useFormik} from 'formik';
import {initialValuesTypes} from '../models/models';
import * as yup from 'yup';

export const useFields = () => {
  const initialValues: initialValuesTypes = {
    currency: '',
    crypto: '',
  };

  const validationSchema = yup.object({
    currency: yup.string().required('Este campo es obligatorio'),
    crypto: yup.string().required('Este campo es obligatorio'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return {formik};
};
