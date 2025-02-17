'use client';

import * as Form from '@radix-ui/react-form';
import Loading from './Loading';
import React, { useState } from 'react';
import { fetchUser } from '../api/github';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import icon from '../../../public/android-chrome-512x512.png';

const FormContainer: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');

  // this function is a basic promise used to set the loading time before data get handled
  const loadingTime = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2500);
    });
  };

  async function handleForm(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    try {
      event.preventDefault();
      setLoading(true);
      const data = await fetchUser(username);
      await loadingTime();
      // if user is not found throw Error and redirect to error page in the catch statement
      if (!data.login) {
        throw new Error('User not found');
      }
      // else push to user's page
      console.log(data);
      router.push(`/user/${username}`);
    } catch (error) {
      router.push('/error');
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
