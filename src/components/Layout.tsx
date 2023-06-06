import { FC, ReactNode } from "react";

import Navbar from "./Navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
