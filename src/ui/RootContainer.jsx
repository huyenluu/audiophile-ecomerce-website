import { AnimatePresence, motion } from 'framer-motion';
import { useOutlet } from 'react-router-dom';
import { useState } from 'react';

const AnimatedOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet}</>;
};

function RootContainer() {
    return (
        <AnimatePresence>
            <motion.div>
                <AnimatedOutlet />
            </motion.div>
        </AnimatePresence>
    );
}

export default RootContainer;
