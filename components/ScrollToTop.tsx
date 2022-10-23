import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const main = document.querySelector("#content");
    if (!main || !ref.current) return;
    const onScroll = () => {
      const method = main.scrollTop > 0 ? "remove" : "add";
      ref.current!.classList[method]("hidden");
    }
  
    const onClick = () => {
      main.scrollTo({ top: 0, behavior: "smooth" });
    }

    onScroll();
    main.addEventListener("scroll", onScroll);
    ref.current.addEventListener("click", onClick);

    return () => {
      main.removeEventListener("scroll", onScroll);
      ref.current?.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className="hidden p-3 btn btn-circle bottom-5 right-10 fixed"
      ref={ref}
    >
      <FaArrowUp className="w-4 h-4 animate-bounce" />
    </button>
  )
}