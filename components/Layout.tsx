import { ReactNode } from "react";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

export default function Layout(props: { children: ReactNode }) {
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
        </div>
      </div>
    </Drawer>
  )
}