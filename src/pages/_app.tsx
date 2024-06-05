import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { NextPageWithLayout } from '@/types';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthProvider>
      {getLayout(<Component {...pageProps} />)}
    </AuthProvider>
  );
};
