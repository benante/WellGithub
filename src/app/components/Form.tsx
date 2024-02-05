'use client';

import * as Form from '@radix-ui/react-form';
import React from 'react';

const FormContainer: React.FC = () => {
  return (
    <Form.Root className="w-11/12 flex flex-col m-auto gap-4 items-center ">
      <Form.Field
        name="username"
        className="flex flex-col items-center text-center gap-2"
      >
        <Form.Label />
        Insert the name you are looking for
        <Form.Control className="bordersContainers rounded-md px-1 py-1" />
        <Form.Message match="valueMissing">
          Please insert a user name
        </Form.Message>
        {/* <Form.ValidityState /> */}
      </Form.Field>
      <Form.Submit className="spaceInText bordersContainers py-2 px-11 rounded-md bg-black text-white">
        Submit
      </Form.Submit>
    </Form.Root>
  );
};

export default FormContainer;
