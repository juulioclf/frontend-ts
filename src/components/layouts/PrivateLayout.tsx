// components/layouts/DefaultLayout.js

import NavBar from "../NavBar";
import { LayoutProps } from "./LayoutTypes";


const PrivateLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default PrivateLayout;
