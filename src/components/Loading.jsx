import Loader from "react-js-loader";

function Loading() {
    return (
        <div className='w-full h-[775px] mt-14 bg-blue-400 rounded-xl flex
         justify-center items-center overflow-hidden'>
            <h1 className='mr-6 font-montserrat font-bold text-3xl text-lightblue-100'>
                Loading...
            </h1>
            <Loader type='spinner-default' backgroundColor="#bbdefb" color="#bbdefb" size={100} />
        </div>
    )
}

export default Loading;