import React from "react";

let Join = (props) => {
    let bg
    props.bgcolor === "pink-50" ? bg = "pink-400" : bg = "vimeoBlue"
    return (
        <div className="flex flex-col justify-center pt-9 items-center min-h-450 mb-12 lg:mt-32 ">
            <h1 className="text-4xl w-1/2 md:text-6xl font-extrabold tracking-tighter lg:text-7xl xl:text-8xl text-center mb-3">
                The power of video at your fingertips.
            </h1>
            <p className="text-base w-80 md:text-xl md:w-96 text-center s lg:w-1/3 wordSpacing-2.5">
                Simple tools for you and your team to create, manage and share high-quality videos.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center pt-7 px-5 w-11/12">
                <button
                    className={`max-w-sm h-14 w-full mb-4 md:w-36 md:mb-0 md:mr-1 bg-${bg} border-2 border-transparent rounded text-white`}>
                    <span className="font-bold">Find a plan</span>
                </button>
                <button
                    className="max-w-sm h-14 w-full md:w-36 md:ml-1 bg-transparent border-2 border-gray-300 rounded font-bold">
                    Join for free
                </button>
            </div>
        </div>
    );
}

export default Join;
