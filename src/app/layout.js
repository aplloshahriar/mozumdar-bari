import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/navbar/NavBar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/shared/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        <Banner></Banner>
        <container className="min-h-screen">{children}</container>
        <Footer></Footer>
      </body>
    </html>
  );
}
