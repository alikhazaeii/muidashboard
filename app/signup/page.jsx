'use client';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useRouter } from 'next/navigation';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function SlotPropsSignIn() {
  const router = useRouter();

  const handleSignIn = (provider, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    alert(`Welcome, ${email}`);
    router.push('/dashboard');
  };

  return (
    <AppProvider>
      <SignInPage
        signIn={handleSignIn}
        slotProps={{
          emailField: { variant: 'standard', autoFocus: false },
          passwordField: { variant: 'standard' },
          submitButton: { variant: 'outlined' },
          rememberMe: {
            control: (
              <Checkbox
                name="tandc"
                value="true"
                color="primary"
                sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
              />
            ),
            color: 'textSecondary',
            label: 'I agree with the T&C',
          },
        }}
        providers={providers}
      />
      <div className='absolute *:w-full *:text-center w-[500px] h-[100px] right-[50%] translate-x-[50%] bottom-0 '>
        <h1>For Enter to Dashboard</h1>
        <p className='text-xl'>Email: <strong className='text-2xl'>Alikhazaei@gmail.com</strong></p>
        <p className='text-xl'>Password: <strong className='text-2xl'>0000</strong></p>
      </div>
    </AppProvider>
  );
}
