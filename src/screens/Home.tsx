import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import shard1 from '../assets/shards/shard1.png'
import shard2 from '../assets/shards/shard2.png'
import shard3 from '../assets/shards/shard3.png'
import shard4 from '../assets/shards/shard4.png'
import shard5 from '../assets/shards/shard7.png'
import shard6 from '../assets/shards/shard6.png'
import shard7 from '../assets/shards/shard5.png'
import shard8 from '../assets/shards/shard8.png'
import glass from '../assets/shards/small.png'
import React, { useRef } from 'react'
// import {useNavigate} from "react-router";
import {useState} from "react";
import {SplitText} from "gsap/all";


const Home = () => {
    const [shatteredHovered, setShatteredHovered] = useState(false)
    const tlshatter = useRef<GSAPTimeline>(null);
    // const navigate = useNavigate();
    const fade = useRef<GSAPTimeline>(null);
    const timelines = useRef<{ [key: string]: GSAPTimeline }>({});
    const splits = useRef<{ [key: string]: SplitText }>({});
    /* const shatteredClicked = () => {
        fade.current?.play();
        setTimeout(() => {
            navigate("/about");
        }, 2000);
    } */
    const [isLoaded, setIsLoaded] = useState(false);
    const [hoverStates, setHoverStates] = React.useState({
        shard1: false,
        shard2: false,
        shard3: false,
        shard4: false,
        shard5: false,
        shard6: false,
        shard7: false,
        shard8: false,
        glass: false,
    });
    const shards = [
        ".shard1",
        ".shard2",
        ".shard3",
        ".shard4",
        ".shard5",
        ".shard6",
        ".shard7",
        ".shard8",
        ".glass"
    ];
    const mapping: {
        shard1: string;
        shard2: string;
        shard3: string;
        shard4: string;
        shard5: string;
        shard6: string;
        shard7: string;
        shard8: string;
        [key: string]: string;
    } = {
        shard1: '.memories',
        shard2: '.fragments',
        shard3: '.falling',
        shard4: '.broken',
        shard5: '.envision',
        shard6: '.indefinite',
        shard7: '.glisten',
        shard8: '.future',
    };
    useGSAP(() => {
        document.fonts.ready.then(() => {
            tlshatter.current = gsap.timeline({paused: true});
            const memorySplit = new SplitText(".shatter", {
                type: "chars, words",
            });
          gsap.from("#screen", {
                opacity: 0,
                duration: 3,
                ease: "power3.inOut"
            })
            gsap.from(memorySplit.chars, {
                yPercent: 100,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.06,
                delay: 3,
                opacity: 0,
                onComplete: () => setIsLoaded(true),
            })
            



            shards.forEach((selector) => {
                const xDistance = (Math.random() - 0.5) * 50;
                const yDistance = (Math.random() - 0.5) * 50;
                const duration = Math.random() * 6 + 3;
                const delay = Math.random() * 2;
                const rotationAngle = (Math.random() - 0.5) * 30;

                gsap.to(selector, {
                    x: xDistance,
                    y: yDistance,
                    duration: duration,
                    delay: delay,
                    repeat: -1,
                    rotation: rotationAngle,
                    yoyo: true,
                    ease: "power3.inOut",
                });
            });

            Object.keys(mapping).forEach((shard: string) => {
                splits.current[shard] = new SplitText(mapping[shard], {
                    type: "chars words",});

                timelines.current[shard] = gsap.timeline({ paused: true });

                timelines.current[shard]
                    .from(splits.current[shard].chars, {
                        yPercent: "10",
                        duration: 1.8,
                        ease: "expo.out",
                        stagger: 0.06,
                        opacity: 0,
                        delay: 1.8
                    })
            });

            tlshatter.current.to(memorySplit.chars, {
                yPercent: "10",
                duration: .8,
                ease: "expo.in",
                stagger: 0.06,
                opacity: 0,
            });

            fade.current = gsap.timeline({paused: true});
            fade.current.to("#screen", {
                opacity: 0,
                duration: 2,
            })
        });
    });
    const handleMouseEnter = (shard: string) => {
        setHoverStates(prev => ({ ...prev, [shard]: true }));
        if (isLoaded){
            tlshatter.current?.play();
            timelines.current[shard]?.play();
        }

    };
    const handleMouseLeave = (shard: string) => {
        setHoverStates(prev => ({ ...prev, [shard]: false }));
        if (isLoaded) {
            tlshatter.current?.reverse();
            timelines.current[shard]?.reverse();
        }

    };

    return (
        <div className="grid grid-cols-3 gap-2 h-screen w-screen" id="screen">
            <div className="flex items-center justify-center relative z-200">
                <img
                    src={shard1}
                    alt="Shard 1"
                    className="object-contain w-full h-[33vh] shard1"
                    style={{
                        filter: hoverStates.shard1
                            ? 'drop-shadow(0 0 10px blue) drop-shadow(0 0 20px white)'
                            : 'none',
                        transition: 'filter 1.2s ease-in-out',
                    }}
                    onMouseEnter={() => handleMouseEnter('shard1')}
                    onMouseLeave={() => handleMouseLeave('shard1')}
                />
            </div>

            <div className="flex items-center justify-center relative z-200">
                <img
                    src={shard2}
                    alt="Shard 2"
                    className="object-contain w-full h-[33vh] shard2"
                    style={{
                        filter: hoverStates.shard2
                            ? 'drop-shadow(0 0 10px blue) drop-shadow(0 0 20px white)'
                            : 'none',
                        transition: 'filter 1.2s ease-in-out',
                    }}
                    onMouseEnter={() => handleMouseEnter('shard2')}
                    onMouseLeave={() => handleMouseLeave('shard2')}
                />
            </div>

            <div className="flex items-center justify-center relative z-200">
                <img
                    src={shard3}
                    alt="Shard 3"
                    className="object-contain w-full h-[33vh] shard3"
                    style={{
                        filter: hoverStates.shard3
                            ? 'drop-shadow(0 0 10px blue) drop-shadow(0 0 20px white)'
                            : 'none',
                        transition: 'filter 1.2s ease-in-out',
                    }}
                    onMouseEnter={() => handleMouseEnter('shard3')}
                    onMouseLeave={() => handleMouseLeave('shard3')}
                />
            </div>

            <div className="flex items-center justify-center relative z-200">
                <img
                    src={shard4}
                    alt="Shard 4"
                    className="object-contain w-full h-[33vh] shard4"
                    style={{
                        filter: hoverStates.shard4
                            ? 'drop-shadow(0 0 10px blue) drop-shadow(0 0 20px white)'
                            : 'none',
                        transition: 'filter 1.2s ease-in-out',
                    }}
                    onMouseEnter={() => handleMouseEnter('shard4')}
                    onMouseLeave={() => handleMouseLeave('shard4')}
                />
            </div>
            <div className="flex items-center justify-center relative col-span-1 row-span-1">
                <img
                    src={glass}
                    alt="glass"
                    className="object-contain min-w-dvw min-h-dvh glass absolute overflow-visible z-0 opacity-25"
                />
                <div className="middle font-cloister-black text-3xl md:text-6xl cursor-pointer relative w-screen">
                    <h1 className="shatter z-100 absolute w-full text-center"
                       // onClick={() => shatteredClicked()}
                       onMouseEnter={() => {
                           setShatteredHovered(true);

                       }}
                       onMouseLeave={() => setShatteredHovered(false)}
                       style={{
                           textShadow: shatteredHovered
                               ? '0 0 10px white, 0 0 20px white, 0 0 30px white'
                               : 'none',
                           transition: 'text-shadow 1s ease-out'
                       }}>shattered...</h1>
                    <h1 className="memories z-90 absolute w-full"
                        style={{
                            textShadow: '0 0 10px white, 0 0 20px white, 0 0 30px white',
                            transition: 'text-shadow 1s ease-out'
                        }}>memories...</h1>
                    <h1 className="fragments z-80 absolute w-full text-center"
                        style={{
                            textShadow: '0 0 10px white, 0 0 20px white, 0 0 30px white',
                            transition: 'text-shadow 1s ease-out'
                        }}>fragments...</h1>
                    <h1 className="falling z-70 absolute text-center w-full"
                        style={{
                            textShadow: '0 0 10px white, 0 0 20px white, 0 0 30px white',
                            transition: 'text-shadow 1s ease-out'
                        }}>falling...</h1>
                    <h1 className="broken z-60 absolute w-full text-center"
                        style={{
                            textShadow: '0 0 10px white, 0 0 20px white, 0 0 30px white',
                            transition: 'text-shadow 1s ease-out'
                        }}>broken glass..</h1>
                    <h1 className="envision z-50 absolute w-full text-center"
                        style={{
                            textShadow: '0 0 10px white, 0 0 20px white, 0 0 30px white',
                            transition: 'text-shadow 1s ease-out'
                        }}>envisioned...</h1>
                    <h1 className="indefinite z-40 absolute w-full text-center"
                        style={{
                            textShadow: '0 0 10px white, 0 0 20px white, 0 0 30px white',
                            transition: 'text-shadow 1s ease-out'
                        }}>indefinitely...</h1>
                    <h1 className="glisten z-30  absolute w-full text-center"
                        style={{
                            textShadow: '0 0 10px white, 0 0 20px white, 0 0 30px white',
                            transition: 'text-shadow 1s ease-out'
                        }}>glistening...</h1>
                    <h1 className="future z-20 absolute"
                        style={{
                            textShadow: '0 0 10px white, 0 0 20px white, 0 0 30px white',
                            transition: 'text-shadow 1s ease-out'
                        }}>the future beholds...</h1>
                </div>
            </div>

            <div className="flex items-center justify-center relative z-10">
                <img
                    src={shard5}
                    alt="Shard 5"
                    className="object-contain w-full h-[33vh] shard5"
                    style={{
                        filter: hoverStates.shard5
                            ? 'drop-shadow(0 0 10px blue) drop-shadow(0 0 20px white)'
                            : 'none',
                        transition: 'filter 1.2s ease-in-out',
                    }}
                    onMouseEnter={() => handleMouseEnter('shard5')}
                    onMouseLeave={() => handleMouseLeave('shard5')}
                />
            </div>

            <div className="flex items-center justify-center relative z-10">
                <img
                    src={shard6}
                    alt="Shard 6"
                    className="object-contain w-full h-[33vh] shard6"
                    style={{
                        filter: hoverStates.shard6
                            ? 'drop-shadow(0 0 10px blue) drop-shadow(0 0 20px white)'
                            : 'none',
                        transition: 'filter 1.2s ease-in-out',
                    }}
                    onMouseEnter={() => handleMouseEnter('shard6')}
                    onMouseLeave={() => handleMouseLeave('shard6')}
                />
            </div>

            <div className="flex items-center justify-center relative z-10">
                <img
                    src={shard7}
                    alt="Shard 7"
                    className="object-contain w-full h-[33vh] shard7"
                    style={{
                        filter: hoverStates.shard7
                            ? 'drop-shadow(0 0 10px blue) drop-shadow(0 0 20px white)'
                            : 'none',
                        transition: 'filter 1.2s ease-in-out',
                    }}
                    onMouseEnter={() => handleMouseEnter('shard7')}
                    onMouseLeave={() => handleMouseLeave('shard7')}
                />
            </div>

            <div className="flex items-center justify-center relative z-10">
                <img
                    src={shard8}
                    alt="Shard 8"
                    className="object-contain w-full h-[33vh] shard8"
                    style={{
                        filter: hoverStates.shard8
                            ? 'drop-shadow(0 0 10px blue) drop-shadow(0 0 20px white)'
                            : 'none',
                        transition: 'filter 1.2s ease-in-out',
                    }}
                    onMouseEnter={() => handleMouseEnter('shard8')}
                    onMouseLeave={() => handleMouseLeave('shard8')}
                />
            </div>
        </div>
    )
}
export default Home
