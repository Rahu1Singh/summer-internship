import { useState } from "react"
import { navbaritems, productitems } from "../constants"
import { AnimatePresence, motion } from "framer-motion"
import Button from "./Button"

const Nav = ({text}) => {
    return (
        <div className={`flex flex-col lg:flex-row`}>
            {navbaritems.map((item) => (
                <FlyoutLink key={item.id} href={item.url} className={`${text} px-8 py-6 text-lg font-medium ${item.onlyMobile ? "lg:hidden" : ""} hover:text-b-800 hover:scale-[1.2] hover:font-bold transition-all`} FlyoutContent={item.title==="Products"?ProductsContent: ""}>
                    {item.title}
                </FlyoutLink>
            ))}
        </div>
  )
}

const FlyoutLink = ({children, href, FlyoutContent, className}) => {
    const [open, setOpen] = useState(false);
    const showFlyout = FlyoutContent && open;

    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative w-fit h-fit">
            <a href={href} className={className}>
                {children}
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 7 }} exit={{ opacity: 0, y: 15 }} style={{ translateX: "-50%" }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute left-1/2 top-12 bg-whitebg rounded-lg text-black">
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const ProductsContent = () => {
    return (
        <div className="w-64 p-6 ">
            <div className="mb-6 space-y-5">
                {productitems.map((item) => (
                    <a key={item.id} href={item.url} className="block text-base text-left font-medium hover:underline">
                        {item.title}
                    </a>
                ))}
            </div>
            <Button className="w-full bg-white text-b-700 rounded-lg border-2 border-b-700 px-4 font-semibold transition-colors hover:bg-b-700 hover:text-white">
                View All Products
            </Button>
        </div>
    )
}

export default Nav
