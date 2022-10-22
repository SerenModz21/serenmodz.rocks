import type { ReactNode } from "react";
import { NavLink } from "./Navbar"

export default function Drawer(props: { children: ReactNode }) {
  const close = () => {
    (document.getElementById("nav-menu") as HTMLInputElement).checked = false;
  };

  return (
    <div className="drawer">
      <input id="nav-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content -translate-x-0 flex flex-col">
        {props.children}
      </div>
      <div className="drawer-side">
        <label htmlFor="nav-menu" className="drawer-overlay">
          {/* <Navbar /> */}
       
            <ul className="menu p-4 overflow-y-auto w-2/4 h-screen rounded-box bg-base-100">
              <li>
                <NavLink href="/" onClick={close}>Home</NavLink>
              </li>
              <li>
                <NavLink href="/#projects" onClick={close}>Projects</NavLink>
              </li>
              <li>
                <NavLink href="/#referrals" onClick={close}>Referrals</NavLink>
              </li>
            </ul>
         
        </label>
      </div>
    </div>
  )
}