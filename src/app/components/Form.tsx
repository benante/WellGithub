'use client';

import * as Form from '@radix-ui/react-form';
import React from 'react';
import Image from 'next/image';
import icon from '../../../public/android-chrome-512x512.png';

const FormContainer: React.FC = () => {
  return (
    <>
      <Form.Root className="w-11/12 flex flex-col m-auto gap-4 items-center my-8">
        <Image alt="icon" src={icon} width={300}></Image>
        <Form.Field
          name="username"
          className="flex flex-col items-center text-center gap-2"
        >
          <Form.Label />
          Insert the name you are looking for
          <Form.Control
            className="bordersContainers rounded-md px-1 py-1"
            required
          />
          <Form.Message match="valueMissing" className="text-black opacity-75">
            Please insert a user name
          </Form.Message>
          {/* <Form.ValidityState /> */}
        </Form.Field>
        <Form.Submit className="spaceInText bordersContainers py-2 px-11 rounded-md bg-black text-white">
          Submit
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default FormContainer;
