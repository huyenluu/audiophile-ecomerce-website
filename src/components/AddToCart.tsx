import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { IoMdCheckmark } from 'react-icons/io';
import { ButtonDefault } from '../ui/Buttons';

interface AddToCartButtonProps {
    payload: any;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ payload }) => {
    const dispatch = useDispatch();
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAddToCart = async () => {
        setLoading(true);
        await dispatch(addItem(payload));
        setLoading(false);

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000); // switch back to text after 2 seconds
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: loading ? 0.5 : 1 }} // Add some opacity animation when loading
        >
            <ButtonDefault
                onClick={handleAddToCart}
                className="bg-orange hover:bg-orange-lighter w-[160px] h-[50px] overflow-hidden"
            >
                <AnimatePresence>
                    {showSuccess ? (
                        <motion.span
                            key="success"
                            initial={{ opacity: 0, y: '-100%' }}
                            animate={{ opacity: 1, y: 0}}
                            exit={{ opacity: 0, y:'-100%'}}
                            className="flex justify-center items-center"
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <IoMdCheckmark className="w-6 h-6" />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="text"
                            initial={{ opacity: 0, y: '-100%'}}
                            animate={{ opacity: 1, y: '0'}}
                            exit={{ opacity: 0, y: '-100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            Add to Cart
                        </motion.span>
                    )}
                </AnimatePresence>
            </ButtonDefault>
        </motion.div>
    );
}

export default AddToCartButton;
