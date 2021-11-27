/** @format */

import React from 'react';
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => ({
  values: values.firstName ? values : {},
  errors: !values.firstName
    ? {
      firstName: {
        type: 'required',
        message: 'This is required.'
      }
    }
    : {}
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));
  console.log('formState', formState);

  return (
    <form onSubmit={onSubmit}>
      <input {...register('firstName')} placeholder="Bill" />
      {errors?.firstName && <p>{errors.firstName.message}</p>}

      <input {...register('lastName')} placeholder="Luo" />

      <input type="submit" />
    </form>
  );
}
