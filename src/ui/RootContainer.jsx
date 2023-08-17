import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';
import { useState } from 'react';

const AnimatedOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet}</>;
};

function RootContainer() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                <AnimatedOutlet />
            </motion.div>
        </AnimatePresence>
    );
}

export default RootContainer;
