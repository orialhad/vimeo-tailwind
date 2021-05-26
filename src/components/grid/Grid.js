import React from "react";


let Grid = ({imgB, imgS, link, name}) => {
    return (

        <div className="md:w-1/2 lg:w-1/3 relative max-h-500">
            {/*<a href={link}>*/}
                <img className="max-h-500 " src={imgB} alt={name}/>
                <div className="flex items-center absolute bottom-4 left-4 z-10">
                    <img className="h-14 rounded-full mr-2" src={imgS} alt={name}/>
                    <div className="text-transparent lg:hover:text-white">Video from <span
                        className="font-bold">{name}</span></div>
                </div>
            {/*</a>*/}
        </div>
    );

}

export default Grid;
