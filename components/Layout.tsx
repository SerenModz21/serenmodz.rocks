import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props: LayoutProps) {
  return (
    <div className="mx-0 sm:mx-auto sm:max-w-2xl">
      {/* navbar */}
      <Navbar />

      {/* main content */}
      <main>{props.children}</main>

      {/* footer */}
      {!props.hideFooter && <Footer />}
    </div>
  );
}

type LayoutProps = {
  children: ReactNode;
  hideFooter?: boolean;
};
