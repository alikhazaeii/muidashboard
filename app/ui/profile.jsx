import React from 'react';
import Logout from '@mui/icons-material/Logout';
import { Account } from '@toolpad/core/Account';
import { AuthenticationContext, SessionContext } from '@toolpad/core/AppProvider';
import { useRouter } from 'next/navigation';
export default function AccountCustomSlotProps() {
  const router = useRouter()
  const demoSession = {
    user: {
      name: 'Admin',
      email: 'example@gmail.com', 
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  };

  const [session, setSession] = React.useState(demoSession);

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Admin',
            email: 'example@gmail.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
        router.push('./')
      },
    };
  }, []);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={session}>
        <Account
          slotProps={{
            signInButton: {
              color: 'success',
            },
            signOutButton: {
              color: 'success',
              startIcon: <Logout />,
            },
            preview: {
              variant: 'expanded',
              slotProps: {
                avatarIconButton: {
                  sx: {
                    width: 'fit-content',
                    margin: 'auto',
                  },
                },
                avatar: {
                  variant: 'rounded',
                },
              },
            },
          }}
        />
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
}
