import { Alert } from './components/Alert/Alert'
import { Form } from './components/Form/Form'
import { Spinner } from './components/Spinner/Spinner'
import { WeatherDetail } from './components/WeatherDetail/WeatherDetail'
import styles from './css/App.module.css'
import useWeather from './hooks/useWeather'

function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Weather Climate
        </h1>
      </header>

      <div className={styles.container}>
        <Form 
          fetchWeather={fetchWeather}
        />

        {loading && <Spinner />}

        {hasWeatherData && !loading && 
          <WeatherDetail 
            weather={weather}
          />
        }

        {notFound && <Alert>Ciudad No Encontrada</Alert>}
      </div>
    </>
  )
}

export default App
