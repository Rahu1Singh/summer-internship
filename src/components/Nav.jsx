import { useState } from "react"
import { navbaritems, productitems } from "../constants"
import { AnimatePresence, motion } from "framer-motion"

const Nav = () => {
    return (
        <div className={`flex flex-col lg:flex-row`}>
            {navbaritems.map((item) => (
                <FlyoutLink key={item.id} href={item.url} className={`px-8 py-6 text-lg font-medium ${item.onlyMobile ? "lg:hidden" : ""} hover:text-b-800 hover:scale-[1.2] hover:font-bold transition-all`} FlyoutContent={item.title==="Products"?ProductsContent: ""}>
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
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 7 }} exit={{ opacity: 0, y: 15 }} style={{ translateX: "-50%" }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute left-1/2 top-12 bg-b-200/25 backdrop-blur-sm rounded-lg text-black">
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
            <button className="w-full bg-white text-g-700 rounded-lg border-2 border-g-700 px-4 py-2 font-semibold transition-colors hover:bg-g-700 hover:text-white hover:border-g-700">
                View All Products
            </button>
        </div>
    )
}

export default Nav
