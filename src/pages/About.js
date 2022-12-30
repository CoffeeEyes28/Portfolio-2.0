import React from "react";

import { motion } from 'framer-motion'








export default function About(){







    return (
        <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        >
            
        </motion.div>
    )
}