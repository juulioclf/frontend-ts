// components/NoNavbarLayout.tsx
import { ReactNode } from 'react';

type NoNavbarLayoutProps = {
  children: ReactNode;
};

const NoNavbarLayout = ({ children }: NoNavbarLayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default NoNavbarLayout;
