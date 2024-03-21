import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Tech Stack Resume",
  description: "Durotoye tech stack resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body></body>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
