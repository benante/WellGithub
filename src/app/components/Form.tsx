'use client';

import * as Form from '@radix-ui/react-form';
import Loading from './Loading';
import React, { useState } from 'react';
import fetchUser from '../api/github';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import icon from '../../../public/android-chrome-512x512.png';

const FormContainer: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');

  async function handleForm(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    try {
      event.preventDefault();
      // Set loading to true, wait for the data to be fetched, then set loading to false
      setLoading(true);
      const data = await fetchUser(username);
      if (data.login) {
        console.log(data);
        router.push(`/user/${username}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
              Insert the username you are looking for
            </Form.Label>
            <Form.Control
              className="bordersContainers rounded-md px-1 py-1"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Form.Message
              match="valueMissing"
              className="text-black opacity-75"
            >
              Please insert a user name
            </Form.Message>
            {/* <Form.ValidityState /> */}
          </Form.Field>
          <Form.Submit className="spaceInText bordersContainers py-2 px-11 rounded-md bg-black text-white">
            Submit
          </Form.Submit>
        </Form.Root>
      )}
    </>
  );
};

export default FormContainer;
