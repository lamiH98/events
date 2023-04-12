import React, { useState, useEffect } from "react";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import "./_scrollToTop.scss";

const ScrollToTop: React.FC = () => {
    const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (

        <div className="top-to-btm">
            {showTopBtn && (
                <HiOutlineArrowCircleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}
        </div>
    );
};
export default ScrollToTop;