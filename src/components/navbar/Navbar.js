import React, {useState} from "react";


let Navbar = (props) => {
    const [hoveredMenuNew, setHoveredNew] = useState(false);
    const [hoveredMenuSol, setHoveredSol] = useState(false);
    const [hoveredMenuProd, setHoveredProd] = useState(false);
    const [hoveredMenuInsp, setHoveredInsp] = useState(false);
    const [isOpen, setisOpen] = React.useState(false);
    const showMenuNew = () => setHoveredNew(!hoveredMenuNew);
    const showMenuSol = () => setHoveredSol(!hoveredMenuSol);
    const showMenuProd = () => setHoveredProd(!hoveredMenuProd);
    const showMenuInps = () => setHoveredInsp(!hoveredMenuInsp);
    const handleClick = () => setisOpen(!isOpen);


    return (
        <div
            className={`flex justify-between bg-${props.bgcolor} items-center h-20 min-h-70 px-5 static lg:fixed lg:w-full lg:opacity-100 lg:z-10`}>
            {/*hamburger menu */}
            {/*<div className="menu md:w-32 lg:hidden text-left">Menu</div>*/}
            <button type="button" className="block lg:hidden " onClick={handleClick}>
                <svg className="h-6 w-6 fill-current focus:ring-0" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                    {isOpen && (
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                    )}
                    {!isOpen && (
                        <path fillRule="evenodd"
                              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    )}
                </svg>
            </button>
            <div
                className={`${isOpen ? "block absolute right-0 top-0 h-full w-full z-20 bg-white border-2 border-black" : "hidden"} lg:hidden `}>
                <div className="flex flex-col justify-between items-center h-full">
                    <div className="w-full">
                        <div className="flex w-full h-16 px-5 items-center">
                            <svg onClick={handleClick} className="flex justify-center h-6 w-6 fill-current focus:ring-0"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                {isOpen && (
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                                )}
                                {!isOpen && (
                                    <path fillRule="evenodd"
                                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                                )}
                            </svg>
                            <div className="flex w-full justify-center ">
                                <svg className="h-8 w-28">
                                    <path className="hover:fill-current text-blue-600 fill-black"
                                          d="M 88.24 23.443 a 11.978 11.978 0 0 1 -0.054 -0.678 c -0.184 -3.124 0.947 -5.995 3.394 -8.61 c 2.627 -2.905 5.929 -4.358 9.908 -4.358 c 2.553 0 4.487 0.855 5.801 2.561 c 1.242 1.563 1.807 3.578 1.698 6.047 c -0.147 3.342 -1.387 6.23 -3.723 8.663 c -2.335 2.434 -5.237 3.65 -8.704 3.65 c -2.882 0 -5.072 -0.926 -6.568 -2.78 a 7.757 7.757 0 0 1 -0.871 -1.372 a 34.1 34.1 0 0 1 -1.235 0.727 c -3.868 2.217 -7.792 3.323 -11.769 3.323 c -2.956 0 -5.074 -0.982 -6.35 -2.945 a 7.353 7.353 0 0 1 -0.266 -0.422 a 21.55 21.55 0 0 1 -0.117 0.103 c -2.446 2.108 -4.89 3.162 -7.335 3.162 c -2.374 0 -3.522 -1.307 -3.45 -3.926 c 0.036 -1.164 0.265 -2.562 0.684 -4.198 c 0.42 -1.636 0.648 -2.909 0.685 -3.818 c 0.037 -1.38 -0.384 -2.073 -1.264 -2.073 c -0.952 0 -2.086 1.13 -3.404 3.384 c -1.392 2.365 -2.144 4.656 -2.252 6.874 c -0.074 1.566 0.08 2.767 0.46 3.603 c -2.546 0.073 -4.33 -0.346 -5.348 -1.256 c -0.911 -0.8 -1.33 -2.126 -1.255 -3.983 a 14.67 14.67 0 0 1 0.537 -3.492 c 0.321 -1.164 0.5 -2.2 0.537 -3.11 c 0.074 -1.347 -0.42 -2.02 -1.48 -2.02 c -0.915 0 -1.902 1.038 -2.96 3.111 c -1.06 2.073 -1.645 4.239 -1.754 6.494 c -0.073 2.037 0.058 3.455 0.392 4.256 c -2.505 0.073 -4.284 -0.454 -5.337 -1.58 c -0.48 -0.518 -0.817 -1.185 -1.01 -2.002 c -0.205 0.194 -0.415 0.386 -0.631 0.574 c -2.446 2.108 -4.89 3.162 -7.335 3.162 c -1.133 0 -2 -0.363 -2.601 -1.09 c -0.602 -0.728 -0.885 -1.672 -0.848 -2.836 c 0.035 -1.199 0.41 -3.053 1.121 -5.562 c 0.712 -2.508 1.069 -3.854 1.069 -4.036 c 0 -0.944 -0.33 -1.417 -0.985 -1.417 c -0.207 0 -0.77 0.34 -1.69 1.016 c -0.693 2.067 -2.205 4.595 -4.535 7.584 c -3.315 4.295 -6.119 6.443 -8.413 6.443 c -1.42 0 -2.624 -1.307 -3.606 -3.924 L 5.41 19.497 c -0.73 -2.615 -1.512 -3.924 -2.349 -3.924 c -0.182 0 -0.82 0.383 -1.913 1.145 L 0 15.244 a 309.082 309.082 0 0 0 3.558 -3.163 c 1.604 -1.383 2.809 -2.11 3.612 -2.183 c 1.897 -0.182 3.065 1.111 3.503 3.88 c 0.474 2.986 0.802 4.844 0.986 5.57 c 0.547 2.479 1.148 3.716 1.806 3.716 c 0.51 0 1.276 -0.803 2.298 -2.41 c 1.021 -1.608 1.568 -2.831 1.642 -3.672 c 0.146 -1.387 -0.401 -2.082 -1.642 -2.082 c -0.583 0 -1.185 0.134 -1.804 0.399 c 1.198 -3.914 3.487 -5.814 6.866 -5.706 c 2.256 0.066 3.438 1.387 3.546 3.961 L 26 12.081 c 1.57 -1.383 2.738 -2.11 3.506 -2.183 c 1.203 -0.109 2.088 0.244 2.654 1.06 c 0.564 0.816 0.774 1.875 0.63 3.18 c -0.475 2.212 -0.987 5.02 -1.534 8.425 c -0.037 1.56 0.53 2.338 1.697 2.338 c 0.51 0 1.422 -0.537 2.737 -1.615 l 0.049 -0.04 c 0.083 -0.76 0.218 -1.662 0.405 -2.708 c 0.3 -1.687 0.468 -3 0.504 -3.945 c 0.072 -0.652 -0.093 -0.979 -0.493 -0.979 c -0.22 0 -0.84 0.369 -1.862 1.104 l -1.314 -1.473 c 0.183 -0.144 1.331 -1.2 3.45 -3.164 c 1.532 -1.418 2.572 -2.145 3.119 -2.182 c 0.949 -0.073 1.715 0.318 2.299 1.172 c 0.584 0.855 0.876 1.847 0.876 2.974 c 0 0.364 -0.036 0.71 -0.108 1.037 a 10.044 10.044 0 0 1 1.916 -2.183 c 1.678 -1.455 3.558 -2.274 5.638 -2.456 c 1.788 -0.145 3.064 0.273 3.833 1.255 c 0.619 0.8 0.91 1.947 0.875 3.438 a 73.7 73.7 0 0 0 0.822 -0.71 c 0.838 -0.982 1.659 -1.763 2.462 -2.345 c 1.35 -0.982 2.756 -1.528 4.215 -1.638 c 1.752 -0.145 3.01 0.271 3.777 1.25 c 0.656 0.798 0.949 1.94 0.877 3.424 c -0.037 1.015 -0.284 2.492 -0.74 4.431 c -0.457 1.94 -0.684 3.052 -0.684 3.342 c -0.037 0.763 0.037 1.287 0.22 1.577 c 0.181 0.29 0.618 0.434 1.313 0.434 c 0.311 0 0.773 -0.2 1.385 -0.602 a 9.877 9.877 0 0 1 -0.072 -1.43 c 0.035 -2.945 1.35 -5.745 3.942 -8.401 c 2.845 -2.909 6.203 -4.365 10.072 -4.365 c 3.576 0 5.474 1.453 5.693 4.355 c 0.145 1.85 -0.877 3.755 -3.065 5.715 c -2.337 2.142 -5.276 3.502 -8.815 4.082 c 0.656 0.908 1.641 1.36 2.956 1.36 c 2.627 0 5.492 -0.664 8.596 -1.997 c 0.138 -0.058 0.274 -0.117 0.408 -0.175 Z m 14.56 -5.244 c 0.038 -0.984 -0.1 -1.886 -0.41 -2.706 c -0.31 -0.82 -0.758 -1.23 -1.341 -1.23 c -1.862 0 -3.395 1.002 -4.597 3.007 c -1.024 1.64 -1.571 3.39 -1.643 5.247 c -0.037 0.912 0.128 1.714 0.492 2.406 c 0.4 0.803 0.966 1.203 1.697 1.203 c 1.642 0 3.048 -0.965 4.216 -2.898 c 0.985 -1.604 1.513 -3.28 1.587 -5.029 Z m -21.1 -1.834 c 0.035 -0.976 -0.365 -1.465 -1.203 -1.465 c -1.094 0 -2.204 0.751 -3.334 2.253 c -1.13 1.502 -1.713 2.94 -1.748 4.315 c -0.021 0 -0.021 0.236 0 0.706 a 12.322 12.322 0 0 0 4.645 -2.985 c 1.056 -1.157 1.603 -2.1 1.64 -2.824 Z M 34.651 2.714 c -0.036 0.906 -0.492 1.775 -1.369 2.607 c -0.985 0.941 -2.153 1.412 -3.503 1.412 c -2.08 0 -3.084 -0.905 -3.011 -2.715 c 0.035 -0.94 0.592 -1.846 1.669 -2.715 C 29.513 0.435 30.708 0 32.023 0 c 0.766 0 1.405 0.3 1.917 0.896 c 0.51 0.598 0.747 1.204 0.711 1.818 Z"
                                          fill="#1A2E3A"/>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-between  divide-y-2 divide-gray-a00 divide-solid font-normal w-full px-4">
                            <div className="h-16 w-full pl-2 justify-start flex items-center ">Log in</div>
                            <div className="h-16 w-full pl-2 justify-start flex items-center ">Join</div>
                            <div className="h-16 w-full pl-2 justify-between flex items-center ">
                                Product
                                <svg className="w-2 h-1.5 ml-1">
                                    <path d="M3.5 3.757L6.328.928l.708.708L3.5 5.17-.036 1.636.672.928z"
                                          fill="#1A2E3A"/>
                                </svg>
                            </div>
                            <div className="h-16 w-full pl-2 justify-between flex items-center ">
                                Solutions
                                <svg className="w-2 h-1.5 ml-1">
                                    <path d="M3.5 3.757L6.328.928l.708.708L3.5 5.17-.036 1.636.672.928z"
                                          fill="#1A2E3A"/>
                                </svg>
                            </div>
                            <div className="h-16 w-full pl-2 justify-between flex items-center ">
                                Inspiration
                                <svg className="w-2 h-1.5 ml-1">
                                    <path d="M3.5 3.757L6.328.928l.708.708L3.5 5.17-.036 1.636.672.928z"
                                          fill="#1A2E3A"/>
                                </svg>
                            </div>
                            <div className="h-16 w-full pl-2 justify-start flex items-center ">Pricing</div>
                            <div className="h-16 w-full pl-2 justify-start flex items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                                <span className="pl-2">Search</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">

                        <button className="bg-footerBg text-white w-5/6 m-4 rounded h-12 font-bold">
                            <div className="flex justify-center items-center">
                                <svg className="h-6 w-6 mr-2" viewBox="0 0 20 20">
                                    <path
                                        d="M18 8.48a7.16 7.16 0 00-1.84-4.76A5.81 5.81 0 006.92 5a5.24 5.24 0 00-4.69 3.85A4.91 4.91 0 000 13a5.13 5.13 0 005 5h10a5.1 5.1 0 005-4.94 5.89 5.89 0 00-2-4.58zM15 16h-4v-3.59l1.29 1.29 1.41-1.41-3.7-3.7-3.71 3.7L7.7 13.7 9 12.41V16H5a3.16 3.16 0 01-3-3 2.91 2.91 0 011.52-2.58l.4-.2.08-.44A3.38 3.38 0 017.59 7h.7l.24-.66A3.69 3.69 0 0112 4a3.73 3.73 0 012.72 1.12A5.45 5.45 0 0116 9v.54l.45.3A3.79 3.79 0 0118 13.06 3.09 3.09 0 0115 16z"
                                        fill="#fff"/>
                                </svg>
                                Upload
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/*vimeo logo*/}
            <svg className="h-8 w-28 ">
                <path className="hover:fill-current text-lightBlueLogo"
                    d="M 88.24 23.443 a 11.978 11.978 0 0 1 -0.054 -0.678 c -0.184 -3.124 0.947 -5.995 3.394 -8.61 c 2.627 -2.905 5.929 -4.358 9.908 -4.358 c 2.553 0 4.487 0.855 5.801 2.561 c 1.242 1.563 1.807 3.578 1.698 6.047 c -0.147 3.342 -1.387 6.23 -3.723 8.663 c -2.335 2.434 -5.237 3.65 -8.704 3.65 c -2.882 0 -5.072 -0.926 -6.568 -2.78 a 7.757 7.757 0 0 1 -0.871 -1.372 a 34.1 34.1 0 0 1 -1.235 0.727 c -3.868 2.217 -7.792 3.323 -11.769 3.323 c -2.956 0 -5.074 -0.982 -6.35 -2.945 a 7.353 7.353 0 0 1 -0.266 -0.422 a 21.55 21.55 0 0 1 -0.117 0.103 c -2.446 2.108 -4.89 3.162 -7.335 3.162 c -2.374 0 -3.522 -1.307 -3.45 -3.926 c 0.036 -1.164 0.265 -2.562 0.684 -4.198 c 0.42 -1.636 0.648 -2.909 0.685 -3.818 c 0.037 -1.38 -0.384 -2.073 -1.264 -2.073 c -0.952 0 -2.086 1.13 -3.404 3.384 c -1.392 2.365 -2.144 4.656 -2.252 6.874 c -0.074 1.566 0.08 2.767 0.46 3.603 c -2.546 0.073 -4.33 -0.346 -5.348 -1.256 c -0.911 -0.8 -1.33 -2.126 -1.255 -3.983 a 14.67 14.67 0 0 1 0.537 -3.492 c 0.321 -1.164 0.5 -2.2 0.537 -3.11 c 0.074 -1.347 -0.42 -2.02 -1.48 -2.02 c -0.915 0 -1.902 1.038 -2.96 3.111 c -1.06 2.073 -1.645 4.239 -1.754 6.494 c -0.073 2.037 0.058 3.455 0.392 4.256 c -2.505 0.073 -4.284 -0.454 -5.337 -1.58 c -0.48 -0.518 -0.817 -1.185 -1.01 -2.002 c -0.205 0.194 -0.415 0.386 -0.631 0.574 c -2.446 2.108 -4.89 3.162 -7.335 3.162 c -1.133 0 -2 -0.363 -2.601 -1.09 c -0.602 -0.728 -0.885 -1.672 -0.848 -2.836 c 0.035 -1.199 0.41 -3.053 1.121 -5.562 c 0.712 -2.508 1.069 -3.854 1.069 -4.036 c 0 -0.944 -0.33 -1.417 -0.985 -1.417 c -0.207 0 -0.77 0.34 -1.69 1.016 c -0.693 2.067 -2.205 4.595 -4.535 7.584 c -3.315 4.295 -6.119 6.443 -8.413 6.443 c -1.42 0 -2.624 -1.307 -3.606 -3.924 L 5.41 19.497 c -0.73 -2.615 -1.512 -3.924 -2.349 -3.924 c -0.182 0 -0.82 0.383 -1.913 1.145 L 0 15.244 a 309.082 309.082 0 0 0 3.558 -3.163 c 1.604 -1.383 2.809 -2.11 3.612 -2.183 c 1.897 -0.182 3.065 1.111 3.503 3.88 c 0.474 2.986 0.802 4.844 0.986 5.57 c 0.547 2.479 1.148 3.716 1.806 3.716 c 0.51 0 1.276 -0.803 2.298 -2.41 c 1.021 -1.608 1.568 -2.831 1.642 -3.672 c 0.146 -1.387 -0.401 -2.082 -1.642 -2.082 c -0.583 0 -1.185 0.134 -1.804 0.399 c 1.198 -3.914 3.487 -5.814 6.866 -5.706 c 2.256 0.066 3.438 1.387 3.546 3.961 L 26 12.081 c 1.57 -1.383 2.738 -2.11 3.506 -2.183 c 1.203 -0.109 2.088 0.244 2.654 1.06 c 0.564 0.816 0.774 1.875 0.63 3.18 c -0.475 2.212 -0.987 5.02 -1.534 8.425 c -0.037 1.56 0.53 2.338 1.697 2.338 c 0.51 0 1.422 -0.537 2.737 -1.615 l 0.049 -0.04 c 0.083 -0.76 0.218 -1.662 0.405 -2.708 c 0.3 -1.687 0.468 -3 0.504 -3.945 c 0.072 -0.652 -0.093 -0.979 -0.493 -0.979 c -0.22 0 -0.84 0.369 -1.862 1.104 l -1.314 -1.473 c 0.183 -0.144 1.331 -1.2 3.45 -3.164 c 1.532 -1.418 2.572 -2.145 3.119 -2.182 c 0.949 -0.073 1.715 0.318 2.299 1.172 c 0.584 0.855 0.876 1.847 0.876 2.974 c 0 0.364 -0.036 0.71 -0.108 1.037 a 10.044 10.044 0 0 1 1.916 -2.183 c 1.678 -1.455 3.558 -2.274 5.638 -2.456 c 1.788 -0.145 3.064 0.273 3.833 1.255 c 0.619 0.8 0.91 1.947 0.875 3.438 a 73.7 73.7 0 0 0 0.822 -0.71 c 0.838 -0.982 1.659 -1.763 2.462 -2.345 c 1.35 -0.982 2.756 -1.528 4.215 -1.638 c 1.752 -0.145 3.01 0.271 3.777 1.25 c 0.656 0.798 0.949 1.94 0.877 3.424 c -0.037 1.015 -0.284 2.492 -0.74 4.431 c -0.457 1.94 -0.684 3.052 -0.684 3.342 c -0.037 0.763 0.037 1.287 0.22 1.577 c 0.181 0.29 0.618 0.434 1.313 0.434 c 0.311 0 0.773 -0.2 1.385 -0.602 a 9.877 9.877 0 0 1 -0.072 -1.43 c 0.035 -2.945 1.35 -5.745 3.942 -8.401 c 2.845 -2.909 6.203 -4.365 10.072 -4.365 c 3.576 0 5.474 1.453 5.693 4.355 c 0.145 1.85 -0.877 3.755 -3.065 5.715 c -2.337 2.142 -5.276 3.502 -8.815 4.082 c 0.656 0.908 1.641 1.36 2.956 1.36 c 2.627 0 5.492 -0.664 8.596 -1.997 c 0.138 -0.058 0.274 -0.117 0.408 -0.175 Z m 14.56 -5.244 c 0.038 -0.984 -0.1 -1.886 -0.41 -2.706 c -0.31 -0.82 -0.758 -1.23 -1.341 -1.23 c -1.862 0 -3.395 1.002 -4.597 3.007 c -1.024 1.64 -1.571 3.39 -1.643 5.247 c -0.037 0.912 0.128 1.714 0.492 2.406 c 0.4 0.803 0.966 1.203 1.697 1.203 c 1.642 0 3.048 -0.965 4.216 -2.898 c 0.985 -1.604 1.513 -3.28 1.587 -5.029 Z m -21.1 -1.834 c 0.035 -0.976 -0.365 -1.465 -1.203 -1.465 c -1.094 0 -2.204 0.751 -3.334 2.253 c -1.13 1.502 -1.713 2.94 -1.748 4.315 c -0.021 0 -0.021 0.236 0 0.706 a 12.322 12.322 0 0 0 4.645 -2.985 c 1.056 -1.157 1.603 -2.1 1.64 -2.824 Z M 34.651 2.714 c -0.036 0.906 -0.492 1.775 -1.369 2.607 c -0.985 0.941 -2.153 1.412 -3.503 1.412 c -2.08 0 -3.084 -0.905 -3.011 -2.715 c 0.035 -0.94 0.592 -1.846 1.669 -2.715 C 29.513 0.435 30.708 0 32.023 0 c 0.766 0 1.405 0.3 1.917 0.896 c 0.51 0.598 0.747 1.204 0.711 1.818 Z"
                    fill="#1A2E3A"/>
            </svg>
            {/*search svg*/}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            {/*Desktop Menu*/}
            {/*left Component = table hover menu*/}
            <div className="hidden lg:flex justify-between w-4/5">
                <div>
                    <ul className="flex font-bold text-sm cursor-pointer">
                        <li className="px-5 h-10 flex items-center"
                            onMouseEnter={showMenuProd}
                            onMouseLeave={showMenuProd}
                        >Product
                            <svg className={hoveredMenuProd ? "w-2 h-1.5 ml-1 transform rotate-180" : "w-2 h-1.5 ml-1"}>
                                <path d="M3.5 3.757L6.328.928l.708.708L3.5 5.17-.036 1.636.672.928z" fill="#1A2E3A"/>
                            </svg>
                            {/*Product menu*/}
                            <div
                                className={hoveredMenuProd ? "absolute left-32 top-12 text-black w-4/6 h-auto bg-white border rounded cursor-pointer z-10 p-7" : "hidden "}>
                                <div
                                    className="flex flex-row justify-between h-full divide-x-2 divide-gray-200 divide-solid font-normal ">
                                    <div className="flex flex-col justify-between items-start px-2.5 text-left mr-6">
                                        <h2 className="text-gray-500 mb-1.5 pl-3 tracking-widest">FEATURES</h2>
                                        <a href="https://vimeo.com/features/video-player">
                                            <div className="h-7 w-48 flex pl-3 items-center">Video Player</div>
                                        </a>
                                        <a href="https://vimeo.com/create">
                                            <div className="h-7 w-48 flex pl-3 items-center">Create</div>
                                        </a>
                                        <a href="https://vimeo.com/features/livestreaming">
                                            <div className="h-7 w-48 flex pl-3 items-center">Live Streaming</div>
                                        </a>
                                        <a href="https://vimeo.com/features/screen-recorder">
                                            <div className="h-7 w-48 pl-3 flex items-center">Screen Recorder</div>
                                        </a>
                                        <a href="https://vimeo.com/features/video-privacy">
                                            <div className="h-7 w-48 pl-3 flex items-center">Privacy</div>
                                        </a>
                                        <a href="https://vimeo.com/features/video-collaboration">
                                            <div className="h-7 w-48 pl-3 flex items-center"> Collaboration</div>
                                        </a>
                                        <a href="https://vimeo.com/features/video-marketing">
                                            <div
                                                className="h-7 w-48 pl-3 flex items-center">Distribution &amp; Marketing
                                            </div>
                                        </a>
                                        <a href="https://vimeo.com/features/video-monetization">
                                            <div className="h-7 w-48 pl-3 flex items-center">Monetization</div>
                                        </a>
                                        <a href="https://vimeo.com/features/video-analytics">
                                            <div className="h-7 w-48 pl-3 flex items-center">Analytics</div>
                                        </a>
                                        <a href="https://vimeo.com/features/online-video-hosting">
                                            <div className="h-7 w-48 pl-3 flex items-center">Hosting &amp; Management
                                            </div>
                                        </a>
                                        <a href="https://vimeo.com/stock">
                                            <div className="h-7 w-48 pl-3 flex items-center">Stock</div>
                                        </a>
                                        <a href="https://vimeo.com/for-hire">
                                            <div className="h-7 w-48 pl-3 flex items-center">For Hire</div>
                                        </a>

                                        <a className="pt-3" href="https://vimeo.com/upgrade">
                                            <div
                                                className="h-7 w-48 flex items-center justify-center bg-gray-100 font-bold text-gray-600">Compare
                                                Plans
                                            </div>
                                        </a>
                                    </div>
                                    <div className="flex flex-col w-full pl-2.5">
                                        <h3 className="text-left pl-10 text-gray-500 tracking-widest">HIGHLIGHTS</h3>
                                        <div className="flex flex-row flex-wrap pl-6 mt-2 ">
                                            <a className="h-44 w-64 p-4 mb-3" href="https://vimeo.com/create">
                                                <h3 className="text-left font-bold text-lg mb-1.5">Create</h3>
                                                <p className="text-left text-gray-400 leading-relaxed">Make social
                                                    videos in an instant: use custom
                                                    templates to tell the right story for your business.
                                                </p>
                                            </a>
                                            <a className="h-44 w-64 p-3 mb-3"
                                               href="https://vimeo.com/features/screen-recorder">
                                                <h3 className="text-left font-bold text-lg mb-1.5">Screen Recorder</h3>
                                                <p className="text-left text-gray-400 leading-relaxed">Record and
                                                    instantly share video
                                                    messages from your browser.</p>
                                            </a>
                                            <a className="h-44 w-64 p-3  mb-3"
                                               href="https://vimeo.com/features/livestreaming">
                                                <h3 className="text-left font-bold text-lg mb-1.5">Live Streaming</h3>
                                                <p className="text-left text-gray-400 leading-relaxed">Broadcast your
                                                    events with
                                                    reliable,
                                                    high-quality live streaming.
                                                </p>
                                            </a>
                                            <a className="h-44 w-64 p-3 mb-3" href="https://vimeo.com/enterprise">
                                                <h3 className="text-left font-bold text-lg mb-1.5">Enterprise</h3>
                                                <p className="text-left text-gray-400 leading-relaxed">Get your team
                                                    aligned with all the tools you need on one secure, reliable video
                                                    platform.</p>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li className="px-5 h-10 flex items-center"
                            onMouseEnter={showMenuSol}
                            onMouseLeave={showMenuSol}
                        >Solutions
                            <svg className={hoveredMenuSol ? "w-2 h-1.5 ml-1 transform rotate-180" : "w-2 h-1.5 ml-1"}>
                                <path d="M3.5 3.757L6.328.928l.708.708L3.5 5.17-.036 1.636.672.928z" fill="#1A2E3A"/>
                            </svg>
                            {/*Solutions menu*/}
                            <div
                                className={hoveredMenuSol ? "absolute left-52 top-12 text-black w-60 bg-white border rounded cursor-pointer z-10" : "hidden "}>
                                <div
                                    className="flex flex-col justify-between  divide-y-2 divide-gray-100 divide-solid font-normal">
                                    <div className="h-10 w-full pl-2 justify-start flex items-center ">Creative
                                        Professionals
                                    </div>
                                    <div className="h-10 w-full pl-2 justify-start flex items-center ">Enterprise</div>
                                    <div className="h-10 w-full pl-2 justify-start flex items-center">Communications
                                    </div>
                                    <div className="h-10 w-full pl-2 justify-start flex items-center">Marketing</div>
                                    <div className="h-10 w-full pl-2 justify-start flex items-center">Education</div>
                                    <div className="h-10 w-full pl-2 justify-start flex items-center">Fitness</div>
                                    <div className="h-10 w-full pl-2 justify-start flex items-center">Faith</div>
                                </div>
                            </div>
                        </li>

                        <li className="px-5 h-10 flex items-center"
                            onMouseEnter={showMenuInps}
                            onMouseLeave={showMenuInps}
                        >Inspiration
                            <svg className={hoveredMenuInsp ? "w-2 h-1.5 ml-1 transform rotate-180" : "w-2 h-1.5 ml-1"}>
                                <path d="M3.5 3.757L6.328.928l.708.708L3.5 5.17-.036 1.636.672.928z" fill="#1A2E3A"/>
                            </svg>
                            {/*Inspiration menu*/}
                            <div
                                className={hoveredMenuInsp ? "absolute left-80 top-12 text-black w-60 bg-white border rounded cursor-pointer z-10" : "hidden "}>
                                <div
                                    className="flex flex-col justify-between  divide-y-2 divide-gray-200 divide-solid font-normal">
                                    <div className="h-10 w-full pl-2 justify-start flex items-center ">Watch</div>
                                    <div className="h-10 w-full pl-2 justify-start flex items-center">Staff Picks</div>
                                    <div className="h-10 w-full pl-2 justify-start flex items-center">Video School</div>
                                    <div className="h-10 w-full pl-2 justify-start flex items-center">Vimeo Blog</div>

                                </div>
                            </div>

                        </li>
                        <li className="px-5 h-10 flex items-center">Pricing</li>
                    </ul>


                </div>


                {/*right Component - search login join*/}

                <div className="flex justify-between items-center text-sm font-bold mr-2">
                    <div className="flex justify-between items-center w-60 divide-x-2 divide-gray-200 divide-solid">
                        <div className="flex justify-between items-center">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                            <button className="pl-2 h-10 pr-3.5 text-sm font-bold">Search</button>
                        </div>


                        <div className="flex justify-between items-center hover:border-black w-40 ">
                            <button className="px-2 w-16 h-10 ml-2 border border-gray-200 font-bold">Log in</button>
                            <button className="px-2 w-16 h-10 font-bold  rounded">Join</button>
                        </div>
                    </div>

                </div>

            </div>

            {/*new video button +  menu*/}
            <div className="hidden md:block bg-menu text-white w-32 h-10 rounded cursor-pointer"
                 onMouseEnter={showMenuNew}
                 onMouseLeave={showMenuNew}>
                <div className="flex flex-row justify-center h-full items-center">
                    <h1 className="mx-2">New video </h1>
                    <svg className="w-6 h-6">
                        <path
                            d="M12 15.5a1 1 0 0 1-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 0 1-.67.26z"
                            fill="#ffffff"/>
                    </svg>
                </div>
                {/*actual hover menu */}
                <div
                    className={hoveredMenuNew ? "absolute top-15 right-5 text-black w-48 bg-white border rounded" : "hidden "}>
                    <div className="flex flex-col justify-between  divide-y-2 divide-gray-200 divide-solid">
                        <div className="h-12 w-full justify-start flex items-center cursor-pointer">
                            <svg className="h-6 w-6 mx-2" viewBox="0 0 20 20">
                                <path
                                    d="M18 8.48a7.16 7.16 0 00-1.84-4.76A5.81 5.81 0 006.92 5a5.24 5.24 0 00-4.69 3.85A4.91 4.91 0 000 13a5.13 5.13 0 005 5h10a5.1 5.1 0 005-4.94 5.89 5.89 0 00-2-4.58zM15 16h-4v-3.59l1.29 1.29 1.41-1.41-3.7-3.7-3.71 3.7L7.7 13.7 9 12.41V16H5a3.16 3.16 0 01-3-3 2.91 2.91 0 011.52-2.58l.4-.2.08-.44A3.38 3.38 0 017.59 7h.7l.24-.66A3.69 3.69 0 0112 4a3.73 3.73 0 012.72 1.12A5.45 5.45 0 0116 9v.54l.45.3A3.79 3.79 0 0118 13.06 3.09 3.09 0 0115 16z"
                                    fill="#1a2e3b"/>
                            </svg>
                            Upload
                        </div>
                        <div className="h-12 w-full justify-start flex items-center">
                            <svg className="h-6 w-6 mx-2" viewBox="0 0 20 20">
                                <path
                                    d="M3.2 16.8l3.8-1 10-10c.2-.2.2-.5 0-.7L14.9 3c-.2-.2-.5-.2-.7 0l-2.1 2.1 2.8 2.8L13.8 9 11 6.2 4.2 13l-1 3.8zm9.9-14.9c.8-.8 2-.8 2.8 0L18.1 4c.8.8.8 2 0 2.8L7.8 17.2l-5.6 1.5c-.5.1-.9-.2-.7-.7l1.4-5.7L13.1 1.9z"
                                    fill="#1A2E3B"/>
                            </svg>
                            Create a video
                        </div>
                        <div className="h-12 w-full justify-start flex items-center">
                            <svg className="h-6 w-6 mx-2" viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                    <use fill="#000" filter="url(#record-screen_svg__filter-2)"/>
                                    <circle stroke="#1A2E3B" strokeWidth="2" cx="12" cy="12" r="9"/>
                                    <rect fill="#1A2E3B" x="8" y="8" width="8" height="8" rx="4"/>
                                </g>
                            </svg>
                            Record screen
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar;

