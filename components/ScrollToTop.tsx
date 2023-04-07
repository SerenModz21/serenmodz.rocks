import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () =>
            setVisible(document.documentElement.scrollTop > 0);

        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            type="button"
            aria-label="Scroll to top"
            className="btn-circle btn fixed bottom-5 right-5 p-3 sm:right-10"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <FaArrowUp className="h-4 w-4 animate-bounce" />
        </button>
    );
}
