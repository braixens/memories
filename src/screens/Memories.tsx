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
import React, {useRef} from 'react'
import {useNavigate} from "react-router";

const Memories = () => {
    const navigate = useNavigate();
    const fade = useRef<GSAPTimeline>(null);
    const shatteredClicked = () => {
        console.log("shattered clicked");
        fade.current?.play();
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }
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
    const handleMouseEnter = (shard: string) => {
        setHoverStates(prev => ({ ...prev, [shard]: true }));
    };
    const handleMouseLeave = (shard: string) => {
        setHoverStates(prev => ({ ...prev, [shard]: false }));
    };
    useGSAP(() => {
        document.fonts.ready.then(() => {
            fade.current = gsap.timeline({paused: true});
            gsap.from("#screen", {
                opacity: 0,
                duration: 3,
                ease: "power3.inOut"
            })
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

            fade.current.to("#screen", 2, {
                opacity: 0,
            })
        });
    });

    return (
        <div className="grid grid-cols-3 gap-2 h-screen w-screen" id="screen">
            <div className="flex items-center justify-center relative z-10">
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

            <div className="flex items-center justify-center relative z-10">
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

            <div className="flex items-center justify-center relative z-10">
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

            <div className="flex items-center justify-center relative z-10">
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
                <h1 className="font-cloister-black text-6xl cursor-pointer relative z-10"
                onClick={() => shatteredClicked()}>shattered...</h1>
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
export default Memories
