import type { Metadata } from "next";
import { figtree} from "./ui/font";
import "./globals.css";
import SideNav from "./ui/dashboard/side-nav";



export const metadata: Metadata = {
  title: "Dynamics 365",
  description: "sale hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased no-scrollbar`}
      >
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <SideNav/>
        <div className="no-scrollbar relative flex-grow  md:overflow-y-auto ">{children}</div>
      </div>
      </body>
    </html>
  );
}
