// components/layouts/DefaultLayout.js

import NavBar from "../NavBar";
import { LayoutProps } from "./LayoutTypes";


const PublicLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
