import { useEffect, useState } from 'react'
import Loading from "./components/Loading";
import './App.css'
import UpcomingForecast from './components/UpcomingForecast'

function App() {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await new Promise(resolve => setTimeout(resolve, 750));
            const data = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Varna/next7days?unitGroup=metric&include=days%2Chours&key=C76CWLS823EW43TYUF5MQF693&contentType=json');
            setForecast(await data.json());
        }

        fetchData();
        document.body.style.backgroundColor = "#010c16"
    }, []);


    return (
        <>
            {forecast ? <UpcomingForecast data={forecast} /> : <Loading />}
        </>
    )
}

export default App
