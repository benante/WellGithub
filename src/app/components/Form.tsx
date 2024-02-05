'use client';

import * as Form from '@radix-ui/react-form';
import React from 'react';

const FormContainer: React.FC = () => {
  return (
    <Form.Root>
      <Form.Field name="input">
        <Form.Label />
        <Form.Control />
        <Form.Message match="valueMissing" />
        Please insert a user name
      </Form.Field>
      <Form.Submit>{/* <button>Search</button> */}</Form.Submit>
    </Form.Root>
  );
};

export default FormContainer;
