import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Nunito } from "next/font/google";
import { FC, ReactNode } from "react";

import Layout from "@/components/Layout";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Enrico's Personal Website",
    description: "Enrico Giovanno's Personal Website",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body className={font.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
};

export default RootLayout;
