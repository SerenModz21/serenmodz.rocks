import { ReactNode } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Layout(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-between md:max-w-2xl">
      {/* navbar */}
      <Navbar />

      {/* main */}
      <main className={`px-4 ${props.className ?? ""}`.trim()}>
        {props.children}
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
