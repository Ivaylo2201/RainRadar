import { useEffect, useState } from 'react'
import Loading from "./components/Loading";
import './App.css'
import UpcomingForecast from './components/UpcomingForecast'
import CurrentForecast from './components/CurrentForecast';
import ForecastDetails from './components/ForecastDetails';
import Timeline from './components/Timeline';

function App() {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await new Promise(resolve => setTimeout(resolve, 550));
            const data = await fetch(
                'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sofia/next7days?unitGroup=metric&include=days%2Chours&key=Q8NFGDZ7BX4LYUKXQX295NSMS&contentType=json'
            );
            setForecast(await data.json());
        }

        fetchData();
        document.body.style.backgroundColor = "#010c16"
    }, []);

    return (
        forecast ? <div className='w-full h-[775px] mt-14 bg-blue-400 rounded-xl flex
        flex-col items-center overflow-hidden'>
            <div className='w-full h-16 bg-green-400 mb-7 flex justify-center items-center'>
                Search box here
            </div>
            <div className='w-full h-5/6 flex flex-col justify-between items-center  '>
                <div className='w-[85%] h-[55%] flex'>
                    <div className='w-1/5 h-full'>
                        <CurrentForecast data={forecast} />
                    </div>
                    <div className='w-4/5 h-full flex flex-col justify-evenly ml-10'>
                        <ForecastDetails data={forecast} />
                        <Timeline data={forecast} />
                    </div>
                </div>
                <hr className='w-5/6 border-blue-200'></hr>
                <div className='w-[91%] h-2/5'>
                    <UpcomingForecast data={forecast} />
                </div>
            </div>
        </div> : <Loading />
    )
}

export default App
