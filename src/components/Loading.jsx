import Loader from "react-js-loader";

function Loading() {
    return (
        <div className='w-11/12 h-[830px] bg-blue-400 flex justify-center items-center rounded-xl0'>
            <h1 className='mr-6 font-montserrat font-bold text-3xl text-lightblue-100'>
                Loading...
            </h1>
            <Loader type='spinner-default' backgroundColor="#bbdefb" color="#bbdefb" size={100} />
        </div>
    )
}

export default Loading;