import { useEffect, useState } from 'react'
import Loading from "./components/Loading";
import './App.css'
import UpcomingForecast from './components/UpcomingForecast'
import CurrentForecast from './components/CurrentForecast';

function App() {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await new Promise(resolve => setTimeout(resolve, 550));
            const data = await fetch(
                'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Vidin/next7days?unitGroup=metric&include=days%2Chours&key=C76CWLS823EW43TYUF5MQF693&contentType=json'
            );
            setForecast(await data.json());
        }

        fetchData();
        document.body.style.backgroundColor = "#010c16"
    }, []);


    return (
        <div className='w-full h-[775px] mt-14 bg-blue-400 rounded-xl flex
                        flex-col justify-evenly items-center overflow-hidden'>
            <div className='w-full h-16 bg-green-400'></div>
            <div className='w-full h-5/6 flex flex-col justify-between items-center  '>
                <div className='w-full h-[55%] flex justify-evenly'>
                    <div className='w-1/5 h-full'>
                        <CurrentForecast data={forecast} />
                    </div>
                    <div className='w-3/5 h-full '>

                    </div>
                </div>
                <hr className='w-5/6 border-blue-200'></hr>
                <div className='w-[91%] h-2/5'>
                    <UpcomingForecast data={forecast} />
                </div>
            </div>
        </div>
    )
}

export default App
