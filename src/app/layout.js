import Header from "@/components/common/header/header";
import { Montserrat } from "next/font/google";
import "@/styles/global.scss";

import SecondPage from "@/components/whoAmI/who-am-ı";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
