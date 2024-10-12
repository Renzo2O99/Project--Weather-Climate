import { motion } from 'framer-motion';
import { Weather } from "../../hooks/useWeather"
import { formatTemperature } from "../../utils"
import styles from './WeatherDetail.module.css'

interface WeatherDetailProps {
  weather: Weather
}

export const WeatherDetail = ({ weather }: WeatherDetailProps) => {
  // Definir la animación de aparición
  const animationProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div className={styles.container} {...animationProps}>
      <h2 className={styles.title}>El Clima en <span className={styles.name}>{weather.name}</span></h2>

      <p className={styles.current}>{formatTemperature(weather.main.temp)} &deg;C</p>

      <div className={styles.temperatures}>
        <p>Min: <span>{formatTemperature(weather.main.temp_min)} &deg;C</span></p>
        
        <p>Max: <span>{formatTemperature(weather.main.temp_max)} &deg;C</span></p>
      </div>
    </motion.div>
  )
}