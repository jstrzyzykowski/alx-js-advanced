import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

const messageFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nickname is required'),
  message: Yup.string()
    .required('Message is required'),
});

export const messageFormValidationOpt = { resolver: yupResolver(messageFormSchema) };

