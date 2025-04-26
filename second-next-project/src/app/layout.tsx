import type { Metadata } from "next";

import Navbar from "@/components/navbar/Navbar"

import "./globals.scss";


export const metadata: Metadata = {
    title: "Title metadata slot",
    description: "description inside body",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body id="body">
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
