import { ReactNode } from "react";
import Drawer from "./Drawer";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props: LayoutProps) {
  return (
    <Drawer>
      <div>
        <div className="sm:max-w-2xl mx-0 sm:mx-auto">
          {/* navbar */}
          <Navbar />

          {/* main content */}
          <main>
            {props.children}
          </main>

          {/* footer */}
          {/* TODO: make new footer */}
          {!props.hideFooter && <Footer />}
        </div>
      </div>
    </Drawer>
  )
}

type LayoutProps = {
  children: ReactNode;
  hideFooter?: boolean;
}