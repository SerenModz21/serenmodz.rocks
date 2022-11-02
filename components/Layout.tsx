import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props: LayoutProps) {
  return (
    <div className="sm:max-w-2xl mx-0 sm:mx-auto">
      {/* navbar */}
      <Navbar />

      {/* main content */}
      <main>{props.children}</main>

      {/* footer */}
      {!props.hideFooter && <Footer />}
    </div>
  )
}

type LayoutProps = {
  children: ReactNode;
  hideFooter?: boolean;
}