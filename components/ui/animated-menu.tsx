import { useState } from "react";
import { m, Variants } from "framer-motion";
import { Menu } from "lucide-react";
import clsx from "clsx";

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export const AnimatedMenu = ({ routes }: { routes: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <m.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu"
        >
            <m.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    'ml-1 flex h-9 w-9 items-center justify-center gap-2 rounded-xl bg-slate-300/50 text-slate-800',
                    'xl:w-auto xl:px-3',
                    'hover:bg-slate-300/70 sm:ml-0',
                    'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
                  )}
            >
                <Menu/>
            </m.button>

            <m.ul
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                {
                    routes && routes.map((item,idx) => (
                        <m.li key={idx} variants={itemVariants}>{item.title} </m.li>
                    ))
                }
            </m.ul>
        </m.nav>
    );
}
