import React from "react";
import Navbar from "../navbar/Navbar";
import Join from "../join/Join";
import Footer from "../footer/Footer";
import ContentCard from "../content-card/content-card";
import Grid from "../grid/Grid";


let Layout = ({activeTheme}) => {

    const cardsContent = [
        {
            title: "Just add Live.",
            img: "https://i.vimeocdn.com/custom_asset/1204",
            alt: "Live streaming analytics interface with example metrics",
            reverse: false,
            desc: {
                title1: "Capture any moment with reliable, professional live streaming",
                title2: "Connect your entire team on one secure, enterprise-level video platform.",
                link1: "Go live",
                link2: "Get Enterprise",
                link1C:"https://vimeo.com/features/livestreaming",
                link2C:"https://vimeo.com/enterprise",

            }

        },
        {
            title: "Your video starts here.",
            img: "https://i.vimeocdn.com/custom_asset/951.png",
            alt: "Interface of video maker text editing capabilities",
            reverse: true,
            desc: {
                title1: "Create standout social videos for your business instantly.",
                title2: "Record video messages of your screen, your face, or both.",
                title3: "Upload your latest cut in the highest quality possible.",
                link1: "Try Vimeo Create",
                link2: "Try Vimeo Record",
                link3: "Start uploading",
                link1C:"https://vimeo.com/create/templates",
                link2C:"https://vimeo.com/features/screen-recorder",
                link3C:"https://vimeo.com/upload",

            }
        },
        {
            title: "Publish anywhere, grow everywhere.",
            img: "https://i.vimeocdn.com/custom_asset/959.png",
            alt: "Mobile video analytics interface of The North Face Faceboook post example",
            reverse: false,
            desc: {
                title1: "Publish videos to any channel, customize the player and add powerful marketing tools to bump up engagement..",
                title2: "See how your videos are performing with advanced analytics.",
                link1: "Grow your audience",
                link2: "Track engagement",
                link1C:"https://vimeo.com/create/templates",
                link2C:"https://vimeo.com/features/video-analytics",


            }
        },
        {
            title: "Simple, creative collaboration.",
            img: "https://i.vimeocdn.com/custom_asset/953",
            alt: "Video review tool interface example of comments time coded on video",
            reverse: true,
            desc: {
                title1: "Streamline feedback with time-coded comments, and assemble your team on your terms.",
                title2: "Share securely with comprehensive privacy options.",
                link1: "Start collaborating",
                link2: "See privacy option",
                link1C:"https://vimeo.com/features/video-collaboration",
                link2C:"https://vimeo.com/features/video-privacy",

            }
        },
    ];

    const gridImages = [
        {
            imgB: "https://f.vimeocdn.com/images_v6/lohp/video1_thumbnail.png",
            imgS: "https://f.vimeocdn.com/images_v6/lohp/video1_avatar.png",
            link: "https://vimeo.com/259411563",
            name: "The North face"
        },
        {
            imgB: "https://f.vimeocdn.com/images_v6/lohp/video2_thumbnail.png",
            imgS: "https://f.vimeocdn.com/images_v6/lohp/video2_avatar.png",
            link: "https://vimeo.com/259411563",
            name: "The North face"
        },
        {
            imgB: "https://f.vimeocdn.com/images_v6/lohp/video3_thumbnail.png",
            imgS: "https://f.vimeocdn.com/images_v6/lohp/video3_avatar.png",
            link: "https://vimeo.com/259411563",
            name: "The North face"
        },
        {
            imgB: "https://f.vimeocdn.com/images_v6/lohp/video4_thumbnail.png",
            imgS: "https://f.vimeocdn.com/images_v6/lohp/video4_avatar.png",
            link: "https://vimeo.com/259411563",
            name: "The North face"
        },
        {
            imgB: "https://f.vimeocdn.com/images_v6/lohp/video5_thumbnail.png",
            imgS: "https://f.vimeocdn.com/images_v6/lohp/video5_avatar.png",
            link: "https://vimeo.com/259411563",
            name: "The North face"
        },
        {
            imgB: "https://f.vimeocdn.com/images_v6/lohp/video6_thumbnail.png",
            imgS: "https://f.vimeocdn.com/images_v6/lohp/video6_avatar.png",
            link: "https://vimeo.com/259411563",
            name: "The North face"
        },

    ]


    return (
        <div className={`h-screen flex flex-col justify-between bg-gradient-to-t from-white to-${activeTheme} `}>
            <Navbar bgcolor={activeTheme}/>
            <Join bgcolor={activeTheme}/>


            {cardsContent.map((item, index) => {
                return (
                    <ContentCard
                        {...item}
                        key={index}
                        mobileHidden={index > 0}
                    />
                )
            })}

            <div className="hidden md:flex flex-col items-center my-12">
                <h2 className="text-4xl font-bold my-7 xl:text-6xl xl:font-normal">Try Vimeo free for 30 days.</h2>
                <button className="w-40 h-10 bg-lightBlueLogo rounded text-white">Get started</button>
            </div>

            <div className="hidden md:flex flex-wrap my-16">
                {gridImages.map((item, index) => {
                    return (
                        <Grid {...item}
                              key={index}
                        />
                    )
                })
                }
            </div>

            <Footer/>
        </div>
    );
}

export default Layout;

// `
//                 <div class="flex flex-col justify-start ">
//                     <p>Capture any moment with reliable, professional live streaming. </p>
//                     <a href="http://web.archive.org/web/20210208005513mp_/https://vimeo.com/features/livestreaming">Go live
//                     <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19"><g fill="#1A2E3A" fill-rule="evenodd">
//                     <path fill-rule="nonzero" d="M12.566 8.51v1.061l-.53-.53.53-.53zm-3.56-2.45L10.065 5l4.066 4.066-4.066 4.066-1.06-1.06 3.004-3.006L9.005 6.06z"/>
//                     <path d="M5 8.35h8v1.5H5z"/></g></svg></a>
//                     <p>Connect your entire team on one secure, enterprise-level video platform</p>
//                     <a href="bla">Go live</a>
//             </div>`
