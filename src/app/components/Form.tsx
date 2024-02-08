'use client';

import * as Form from '@radix-ui/react-form';
import React, { useState } from 'react';
import fetchUser from '../api/github';

import Image from 'next/image';
import icon from '../../../public/android-chrome-512x512.png';

const FormContainer: React.FC = () => {
  const [username, setUsername] = useState('');

  function handleForm(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    fetchUser(username);
  }
  return (
    <>
      <Form.Root
        onSubmit={handleForm}
        className="w-11/12 flex flex-col m-auto gap-4 items-center my-8"
      >
        <Image alt="icon" priority={true} src={icon} width={300}></Image>
        <Form.Field
          name="username"
          className="flex flex-col items-center text-center gap-2"
        >
          <Form.Label className="text-lg">
            Insert the name you are looking for
          </Form.Label>
          <Form.Control
            className="bordersContainers rounded-md px-1 py-1"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
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
