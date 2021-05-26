import React from "react";


let Footer = () => {
    return (
        <div className="bg-footerBg flex flex-col justify-between pt-5 pb-11 text-white p-2.5 min-h-250 lg:min-h-620">
            {/*vimeo logo*/}
            <svg className="h-8 w-28 mb-2.5 lg:hidden">
                <path className="hover:fill-current text-lightBlueLogo "
                    d="M89.05 23.658a12.087 12.087 0 01-.055-.685c-.186-3.152.955-6.049 3.426-8.688 2.65-2.932 5.982-4.398 9.998-4.398 2.576 0 4.528.863 5.855 2.585 1.253 1.577 1.823 3.61 1.713 6.102-.149 3.373-1.4 6.287-3.757 8.742-2.357 2.456-5.286 3.684-8.784 3.684-2.909 0-5.119-.935-6.629-2.805a7.828 7.828 0 01-.879-1.385c-.395.244-.81.489-1.245.733-3.904 2.237-7.864 3.354-11.878 3.354-2.983 0-5.12-.991-6.409-2.972a7.42 7.42 0 01-.268-.426l-.118.104c-2.468 2.128-4.935 3.191-7.401 3.191-2.396 0-3.555-1.32-3.481-3.962.035-1.175.266-2.586.689-4.237.423-1.65.654-2.935.691-3.852.037-1.394-.387-2.092-1.275-2.092-.96 0-2.105 1.139-3.436 3.414-1.404 2.387-2.163 4.7-2.273 6.938-.074 1.58.08 2.792.465 3.635-2.57.074-4.37-.349-5.397-1.266-.92-.808-1.342-2.147-1.267-4.02.035-1.175.216-2.35.542-3.524.325-1.175.505-2.221.543-3.14.074-1.358-.425-2.037-1.494-2.037-.923 0-1.92 1.047-2.988 3.14-1.069 2.091-1.66 4.276-1.77 6.552-.074 2.057.059 3.487.396 4.295-2.528.074-4.323-.457-5.386-1.593-.485-.524-.825-1.197-1.02-2.02-.206.195-.419.388-.636.578-2.469 2.128-4.936 3.191-7.403 3.191-1.142 0-2.017-.367-2.624-1.1-.607-.734-.893-1.687-.856-2.862.036-1.21.413-3.081 1.132-5.613.718-2.531 1.078-3.889 1.078-4.073 0-.952-.333-1.43-.994-1.43-.209 0-.777.343-1.705 1.026-.7 2.085-2.226 4.636-4.577 7.652-3.345 4.335-6.175 6.503-8.49 6.503-1.434 0-2.648-1.32-3.639-3.96l-1.986-7.26c-.736-2.64-1.525-3.961-2.37-3.961-.184 0-.828.386-1.93 1.155L0 15.384a311.918 311.918 0 003.59-3.193c1.62-1.395 2.835-2.128 3.646-2.202 1.914-.184 3.093 1.121 3.535 3.915.478 3.014.809 4.888.995 5.622.552 2.5 1.159 3.75 1.823 3.75.514 0 1.288-.811 2.32-2.433 1.03-1.622 1.581-2.857 1.656-3.705.147-1.4-.405-2.101-1.657-2.101-.589 0-1.196.135-1.82.402 1.208-3.95 3.519-5.867 6.928-5.758 2.277.067 3.47 1.4 3.578 3.998.549-.496 1.098-.991 1.646-1.488 1.584-1.395 2.762-2.128 3.538-2.202 1.214-.11 2.106.246 2.678 1.07.57.823.781 1.892.636 3.209-.48 2.232-.996 5.065-1.548 8.502-.037 1.574.534 2.36 1.713 2.36.514 0 1.435-.543 2.762-1.63l.048-.04c.085-.767.221-1.678.41-2.733.303-1.703.472-3.029.508-3.981.072-.658-.094-.988-.497-.988-.222 0-.848.371-1.88 1.113l-1.325-1.487c.184-.145 1.343-1.21 3.48-3.193 1.547-1.43 2.596-2.164 3.148-2.201.958-.074 1.732.32 2.32 1.183.59.863.885 1.863.885 3.001 0 .367-.037.716-.11 1.046a10.136 10.136 0 011.934-2.203c1.694-1.468 3.591-2.295 5.69-2.478 1.805-.147 3.093.275 3.868 1.266.625.808.918 1.965.883 3.47.258-.22.534-.459.83-.716.846-.991 1.674-1.78 2.485-2.368 1.362-.99 2.781-1.541 4.253-1.652 1.768-.147 3.038.273 3.812 1.262.662.804.957 1.956.885 3.455-.038 1.024-.286 2.515-.746 4.472-.462 1.956-.691 3.08-.691 3.372-.037.77.037 1.3.221 1.592.184.293.625.438 1.325.438.315 0 .78-.203 1.398-.608a9.968 9.968 0 01-.072-1.443c.035-2.972 1.362-5.797 3.978-8.478 2.872-2.936 6.26-4.405 10.164-4.405 3.61 0 5.524 1.466 5.746 4.395.147 1.867-.885 3.79-3.094 5.767-2.358 2.162-5.324 3.534-8.895 4.12.662.915 1.656 1.373 2.983 1.373 2.651 0 5.543-.671 8.675-2.017.139-.058.276-.117.412-.176zm14.694-5.292c.037-.993-.102-1.904-.415-2.73-.313-.828-.765-1.243-1.353-1.243-1.879 0-3.426 1.012-4.64 3.035-1.033 1.656-1.585 3.421-1.658 5.296-.037.92.13 1.73.498 2.428.403.81.975 1.213 1.712 1.213 1.657 0 3.076-.973 4.254-2.923.995-1.62 1.528-3.31 1.602-5.076zm-21.294-1.85c.035-.985-.368-1.48-1.214-1.48-1.105 0-2.225.759-3.365 2.274-1.14 1.516-1.729 2.968-1.764 4.355-.021 0-.021.238 0 .713a12.435 12.435 0 004.688-3.013c1.066-1.168 1.618-2.119 1.655-2.85zM34.97 2.739c-.038.914-.498 1.791-1.382 2.631-.995.95-2.174 1.424-3.536 1.424-2.099 0-3.112-.912-3.039-2.739.036-.95.598-1.863 1.684-2.74C29.784.439 30.99 0 32.317 0c.773 0 1.417.303 1.934.905.515.603.754 1.214.718 1.834z"
                    fill="#FFF"/>
            </svg>

            {/*desktop menu*/}
            <div className="hidden lg:flex w-full justify-start mt-3">
                <svg className="h-8 w-28 mb-2.5 ml-14 mr-36 ">
                    <path className="hover:fill-current text-lightBlueLogo"
                        d="M89.05 23.658a12.087 12.087 0 01-.055-.685c-.186-3.152.955-6.049 3.426-8.688 2.65-2.932 5.982-4.398 9.998-4.398 2.576 0 4.528.863 5.855 2.585 1.253 1.577 1.823 3.61 1.713 6.102-.149 3.373-1.4 6.287-3.757 8.742-2.357 2.456-5.286 3.684-8.784 3.684-2.909 0-5.119-.935-6.629-2.805a7.828 7.828 0 01-.879-1.385c-.395.244-.81.489-1.245.733-3.904 2.237-7.864 3.354-11.878 3.354-2.983 0-5.12-.991-6.409-2.972a7.42 7.42 0 01-.268-.426l-.118.104c-2.468 2.128-4.935 3.191-7.401 3.191-2.396 0-3.555-1.32-3.481-3.962.035-1.175.266-2.586.689-4.237.423-1.65.654-2.935.691-3.852.037-1.394-.387-2.092-1.275-2.092-.96 0-2.105 1.139-3.436 3.414-1.404 2.387-2.163 4.7-2.273 6.938-.074 1.58.08 2.792.465 3.635-2.57.074-4.37-.349-5.397-1.266-.92-.808-1.342-2.147-1.267-4.02.035-1.175.216-2.35.542-3.524.325-1.175.505-2.221.543-3.14.074-1.358-.425-2.037-1.494-2.037-.923 0-1.92 1.047-2.988 3.14-1.069 2.091-1.66 4.276-1.77 6.552-.074 2.057.059 3.487.396 4.295-2.528.074-4.323-.457-5.386-1.593-.485-.524-.825-1.197-1.02-2.02-.206.195-.419.388-.636.578-2.469 2.128-4.936 3.191-7.403 3.191-1.142 0-2.017-.367-2.624-1.1-.607-.734-.893-1.687-.856-2.862.036-1.21.413-3.081 1.132-5.613.718-2.531 1.078-3.889 1.078-4.073 0-.952-.333-1.43-.994-1.43-.209 0-.777.343-1.705 1.026-.7 2.085-2.226 4.636-4.577 7.652-3.345 4.335-6.175 6.503-8.49 6.503-1.434 0-2.648-1.32-3.639-3.96l-1.986-7.26c-.736-2.64-1.525-3.961-2.37-3.961-.184 0-.828.386-1.93 1.155L0 15.384a311.918 311.918 0 003.59-3.193c1.62-1.395 2.835-2.128 3.646-2.202 1.914-.184 3.093 1.121 3.535 3.915.478 3.014.809 4.888.995 5.622.552 2.5 1.159 3.75 1.823 3.75.514 0 1.288-.811 2.32-2.433 1.03-1.622 1.581-2.857 1.656-3.705.147-1.4-.405-2.101-1.657-2.101-.589 0-1.196.135-1.82.402 1.208-3.95 3.519-5.867 6.928-5.758 2.277.067 3.47 1.4 3.578 3.998.549-.496 1.098-.991 1.646-1.488 1.584-1.395 2.762-2.128 3.538-2.202 1.214-.11 2.106.246 2.678 1.07.57.823.781 1.892.636 3.209-.48 2.232-.996 5.065-1.548 8.502-.037 1.574.534 2.36 1.713 2.36.514 0 1.435-.543 2.762-1.63l.048-.04c.085-.767.221-1.678.41-2.733.303-1.703.472-3.029.508-3.981.072-.658-.094-.988-.497-.988-.222 0-.848.371-1.88 1.113l-1.325-1.487c.184-.145 1.343-1.21 3.48-3.193 1.547-1.43 2.596-2.164 3.148-2.201.958-.074 1.732.32 2.32 1.183.59.863.885 1.863.885 3.001 0 .367-.037.716-.11 1.046a10.136 10.136 0 011.934-2.203c1.694-1.468 3.591-2.295 5.69-2.478 1.805-.147 3.093.275 3.868 1.266.625.808.918 1.965.883 3.47.258-.22.534-.459.83-.716.846-.991 1.674-1.78 2.485-2.368 1.362-.99 2.781-1.541 4.253-1.652 1.768-.147 3.038.273 3.812 1.262.662.804.957 1.956.885 3.455-.038 1.024-.286 2.515-.746 4.472-.462 1.956-.691 3.08-.691 3.372-.037.77.037 1.3.221 1.592.184.293.625.438 1.325.438.315 0 .78-.203 1.398-.608a9.968 9.968 0 01-.072-1.443c.035-2.972 1.362-5.797 3.978-8.478 2.872-2.936 6.26-4.405 10.164-4.405 3.61 0 5.524 1.466 5.746 4.395.147 1.867-.885 3.79-3.094 5.767-2.358 2.162-5.324 3.534-8.895 4.12.662.915 1.656 1.373 2.983 1.373 2.651 0 5.543-.671 8.675-2.017.139-.058.276-.117.412-.176zm14.694-5.292c.037-.993-.102-1.904-.415-2.73-.313-.828-.765-1.243-1.353-1.243-1.879 0-3.426 1.012-4.64 3.035-1.033 1.656-1.585 3.421-1.658 5.296-.037.92.13 1.73.498 2.428.403.81.975 1.213 1.712 1.213 1.657 0 3.076-.973 4.254-2.923.995-1.62 1.528-3.31 1.602-5.076zm-21.294-1.85c.035-.985-.368-1.48-1.214-1.48-1.105 0-2.225.759-3.365 2.274-1.14 1.516-1.729 2.968-1.764 4.355-.021 0-.021.238 0 .713a12.435 12.435 0 004.688-3.013c1.066-1.168 1.618-2.119 1.655-2.85zM34.97 2.739c-.038.914-.498 1.791-1.382 2.631-.995.95-2.174 1.424-3.536 1.424-2.099 0-3.112-.912-3.039-2.739.036-.95.598-1.863 1.684-2.74C29.784.439 30.99 0 32.317 0c.773 0 1.417.303 1.934.905.515.603.754 1.214.718 1.834z"
                        fill="#FFF"/>
                </svg>
                    <div className="flex flex-col items-start text-sm mr-5 ">
                        <div className="mb-3 text-sm text-gray-400 ">Product</div>
                        <span className="w-44 mb-2 text-left "><a  aria-label="Footer link" href="https://vimeo.com/features/video-player">Video Player</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/create">Create</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="ttps://vimeo.com/features/livestreaming">Live Streaming</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/features/screen-recorder">Screen Recorder</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/features/video-privacy">Privacy</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/features/video-collaboration">Collaboration</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/features/video-marketing">Distribution & Marketing</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/features/video-monetization">Monetization</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/features/video-analytics">Analytics</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/features/online-video-hosting">Hosting & Management</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/stock">Stock</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/for-hire">For Hire</a></span>
                    </div>

                    <div className="flex flex-col items-start text-sm mr-5  " >
                        <div className="mb-3 text-sm text-gray-400">Resources</div>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/help">Help Center</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/blog">Blog</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/blog/category/video-school">Video School</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/ott/resources">OTT Resources</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://developer.vimeo.com">Developers</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/students">Students</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/partners">Become a Partner</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/help/guidelines">Guidelines</a></span>
                    </div>


                    <div className="flex flex-col items-start text-sm mr-5 " >
                        <div className="mb-3 text-sm text-gray-400">Apps</div>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://apps.apple.com/app/apple-store/id1356686763?pt=417731&amp;ct=lohp&amp;mt=8">Vimeo for macOS</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://itunes.apple.com/app/vimeo/id425194759?mt=8">Vimeo for iOS</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://play.google.com/store/apps/details?id=com.vimeo.android.videoapp&amp;referrer=utm_source%3Dfooter%26utm_medium%3Dlohp">Vimeo for Android</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://apps.apple.com/us/app/vimeo-create/id1491791513">Vimeo Create for iOS</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://play.google.com/store/apps/details?id=com.vimeocreate.videoeditor.moviemaker">Vimeo Create for Android</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://magisto.com">Magisto</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://apps.shopify.com/videofy_make_product_videos">Vimeo for Shopify</a></span>
                    </div>


                    <div className="flex flex-col items-start text-sm" >
                        <div className="mb-3 text-sm text-gray-400">Vimeo</div>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/upgrade">Pricing</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/upload">Upload</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/channels/staffpicks">Staff Picks</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/ondemand">On Demand</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/ott">Vimeo OTT</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/site_map">Site map</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/about">About</a></span>
                        <span className="w-44 mb-2 text-left"><a aria-label="Footer link" href="https://vimeo.com/jobs">Jobs</a></span>
                    </div>

            </div>


            <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center lg:px-14  ">
                <div className="text-left mb-2 xl:mb-0 lg:w-1/2 lg:flex justify-end">
                    <span>Language: </span>
                    <select className="text-black bg-white">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="de-DE">Deutsch</option>
                        <option value="fr-FR">Français</option>
                        <option value="ja-JP">日本語</option>
                        <option value="pt-BR">Português</option>
                        <option value="ko-KR">한국어</option>
                    </select>
                </div>


                <div>
                    <div className="flex text-sm mr-5 leading-loose ">

                        <div>
                            <ul className="flex flex-wrap">
                                <li className="mr-2">
                                    <a href="https://vimeo.com/" title="Home">
                                        © 2021 Vimeo, Inc. </a> All rights reserved.
                                </li>
                                <li className="mr-2">
                                    <a href="https://vimeo.com/terms" title="Terms &amp; Conditions">
                                        Terms </a>
                                </li>
                                <li className="before:line mr-2">
                                    <a href="https://vimeo.com/privacy" title="Privacy Policy">
                                        Privacy </a>
                                </li>
                                <li className="before:line mr-2">
                                    <a href="https://vimeo.com/privacy/california-privacy"
                                       title="Privacy">
                                        CA Privacy </a>
                                </li>
                                <li className="before:line mr-2">
                                    <a className="" href="https://vimeo.com/dmca"
                                       title="Copyright">
                                        Copyright</a>

                                </li>
                                <li className="before:line mr-2">
                                    <a className="iris_link iris_link--opaque" href="https://vimeo.com/cookie_policy"
                                       title="Learn more about how Vimeo uses cookies">
                                        Cookies </a>
                                </li>
                            </ul>
                        </div>
            </div>


                </div>
            </div>
        </div>
    );
}

export default Footer;
