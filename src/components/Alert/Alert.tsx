import { ReactNode } from "react"
import styles from './Alert.module.css'
import { motion } from "framer-motion";

export const Alert = ({children}: {children: ReactNode}) => {
  const animationProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
    {...animationProps}
    className={styles.alert}>
      {children}
    </motion.div>
  )
}
