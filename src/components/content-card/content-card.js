import React from "react";


let ContentCard = ({title, img, alt, desc, mobileHidden, reverse}) => {
    return (
        <div className={mobileHidden ? "hidden md:flex " : "md:flex "}>
            <div className={`w-full max-h-650 xl:max-h-1000 xl:w-full ${reverse ? "flex flex-row-reverse " : "flex flex-row"}`}>
                <img
                    className={`object-cover object-bottom xl:max-h-1000 w-5/6 ${reverse ? "md:w-1/2  pl-24" : "md:w-1/2 "}`}
                    alt={alt}
                    src={img}/>
                <div className="hidden md:flex flex-col justify-center items-start w-1/2 px-24 relative">
                    <h1 className={ `text-left text-4xl font-bold xl:text-5xl ${ reverse ? "w-64 xl:w-86" : "w-80 xl:w-5/6"}`}>{title}</h1>
                    <div className="flex flex-col items-start xl:text-xl">
                        <p className="text-left mb-4 mt-7">{desc.title1}</p>
                        <a className="font-bold" href={desc.link1C}>
                            <div className="flex items-center">
                            <span className="hover:mr-3 transform">{desc.link1}</span>
                            <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19">
                                <g fill="#1A2E3A" fillRule="evenodd">
                                    <path fillRule="nonzero"
                                          d="M12.566 8.51v1.061l-.53-.53.53-.53zm-3.56-2.45L10.065 5l4.066 4.066-4.066 4.066-1.06-1.06 3.004-3.006L9.005 6.06z"/>
                                    <path d="M5 8.35h8v1.5H5z"/>
                                </g>
                            </svg>
                        </div>
                        </a>
                        <p className="text-left mb-4 mt-7">{desc.title2}</p>
                        <a className="font-bold" href={desc.link2C}>
                            <div className="flex items-center">
                                <span className="hover:mr-3 transform">{desc.link2}</span>
                                <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19">
                                    <g fill="#1A2E3A" fillRule="evenodd">
                                        <path fillRule="nonzero"
                                              d="M12.566 8.51v1.061l-.53-.53.53-.53zm-3.56-2.45L10.065 5l4.066 4.066-4.066 4.066-1.06-1.06 3.004-3.006L9.005 6.06z"/>
                                        <path d="M5 8.35h8v1.5H5z"/>
                                    </g>
                                </svg>
                            </div>
                        </a>


                        <p className="text-left mb-4 mt-7">{desc.title3}</p>
                        <a className="font-bold" href={desc.link3C}>
                            <div className="flex items-center">
                                <span className="hover:mr-3 transform">{desc.link3}</span>
                                <svg className={`h-5 w-5 ${desc.title3 ? "": "hidden"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19">
                                    <g fill="#1A2E3A" fillRule="evenodd">
                                        <path fillRule="nonzero"
                                              d="M12.566 8.51v1.061l-.53-.53.53-.53zm-3.56-2.45L10.065 5l4.066 4.066-4.066 4.066-1.06-1.06 3.004-3.006L9.005 6.06z"/>
                                        <path d="M5 8.35h8v1.5H5z"/>
                                    </g>
                                </svg>
                            </div>
                        </a>
                        </div>
                    {/*<p dangerouslySetInnerHTML={{__html:desc}}/>*/}
                </div>
            </div>
        </div>
    );
}

export default ContentCard;


