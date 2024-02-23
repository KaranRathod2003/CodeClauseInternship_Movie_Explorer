import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Kingdom",
  description: "Kingdom of all Upcoming, Latest, Top Rated, and movies related stuffs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Sidebar />
      {children}</body>
    </html>
  );
}
