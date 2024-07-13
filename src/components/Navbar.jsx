import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { bizsafe, iso14001, iso45001, iso9001, logo, sme500 } from "../assets";
import Button from "./Button";
import Nav from "./Nav";
import Hamburger from "./Hamburger";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [openNavigation, setOpenNavigation] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY && window.scrollY > 80) { // if scroll down
                setIsVisible(false);
            } else { // if scroll up
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={`sticky top-0 h-[80px] flex items-center justify-between px-6 ${openNavigation ? 'bg-n-8' : 'bg-white backdrop-blur-sm'} z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="xl:px-6">
                <NavLink to="/"><img src={logo} className="w-[220px] lg:w-[280px]" alt="logo" /></NavLink>
            </div>
            {!openNavigation && 
            <div className="flex h-full gap-x-10">
                <div className="hidden xl:flex items-center gap-x-5 py-1">
                    <img src={iso9001} width={40} />
                    <img src={iso45001} width={40} />
                    <img src={iso14001} width={40} />
                    <img src={sme500} width={130} />
                    <img src={bizsafe} width={110} />
                </div>
                <button onClick={toggleNavigation}>
                    <MdMenu className={`text-2xl text-black`} />
                </button>
            </div>}
            <AnimatePresence>
                {openNavigation && (
                    <motion.div initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 300 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed top-0 right-0 w-screen md:w-1/2 xl:w-1/4 h-screen bg-white/40 backdrop-blur-3xl flex flex-col items-center z-50">
                        <div className="lg:hidden fixed top-2 left-6">
                            <img src={logo} width={240} alt="logo" />
                        </div>
                        <button onClick={toggleNavigation} className="fixed top-4 right-2 m-4">
                            <MdClose className="text-2xl" />
                        </button>
                        <div className="w-full pt-20">
                            <Hamburger handleClick={handleClick} />
                        </div>
                        <div className="fixed right-0 w-5 h-auto z-10 bg-b-300"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;