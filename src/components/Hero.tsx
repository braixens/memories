import {useEffect, useRef} from 'react'
import background from '../assets/soloblur.jpg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import {useState} from "react";
// import theme from '../assets/Waking Shadows.mp4'
// import nessa from '../assets/character.png'
import gardens from '../assets/Reverie.mp3'
import { useNavigate } from "react-router";

const Hero = () => {

    const navigate = useNavigate();
    const tl = useRef<GSAPTimeline>(null);
    const tl2 = useRef<GSAPTimeline>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isHovered, setIsHovered] = useState(false)
    const [memHovered, setMemHovered] = useState(false)
    const [voiceHovered, setVoiceHovered] = useState(false)
    const [beautyHovered, setBeautyHovered] = useState(false)
    const [audioPlaying, setAudioPlaying] = useState(false)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        audioRef.current = new Audio(gardens);
    }, []);

    useGSAP(() => {
        document.fonts.ready.then(() => {
            tl.current = gsap.timeline({paused: true});
            tl2.current = gsap.timeline({paused: true});

            const heroSplit = new SplitText(".title", {
                type: "chars, words",
            });

            const leftSplit = new SplitText(".text-left", {
                type: "lines",
            });
            const rightSplit = new SplitText(".text-right", {
                type: "lines",
            });

            const centerSplit = new SplitText(".text-center", {
                type: "chars, words",
            });

            gsap.from("#hero", {
                opacity: 0,
                duration: 3,
                ease: "power3.inOut"
            })


            gsap.from(heroSplit.chars, {
                yPercent: 100,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.06,
                delay: 3,
                opacity: 0
            });

            tl.current.from(rightSplit.lines, {
                opacity: 0,
                yPercent: 100,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.1,
                delay: 1.8,
            });
            tl.current.from(leftSplit.lines, {
                opacity: 0,
                yPercent: 100,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.1,
                delay: 1.8
            });
            tl.current.from(centerSplit.chars, {
                opacity: 0,
                yPercent: 100,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.06,
                delay: 1.8
            });
            tl2.current.to("#hero", 2, {
                opacity: 0,
            }).to(audioRef.current, {
                volume:0,
                duration: 2,
            })
        });
    });


    const memoryClicked = () => {
        tl.current?.play();
        if (!audioPlaying && audioRef.current) {
            audioRef.current.play()
                .then(() => setAudioPlaying(true))
                .catch((error) => {
                    console.error("Error playing audio:", error);
                });

            audioRef.current.onended = () => setAudioPlaying(false);
        }
        if (clicked) {
            tl2.current?.play();
            setTimeout(() => {
                navigate("/about");
            }, 2000);

        }
        else {
            setClicked(true);
        }

    };
    const beautyClicked = () => {
        tl2.current?.play();
        setTimeout(() => {
            navigate("/memories");
        }, 2000);
    }



    return (
        <section
            id="hero"
            className="relative min-h-screen bg-cover bg-center bg-no-repeat scrollbar-hide"
            style={{
                backgroundImage: `url(${background})`,
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
            <div className="title absolute cursor-pointer">

                <h1 className="text-white lg:text-5xl text-3xl font-cloister-black"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => memoryClicked()}
                    style={{
                    textShadow: isHovered
                        ? '0 0 10px white, 0 0 20px white, 0 0 30px white'
                        : 'none',
                    transition: 'text-shadow 1s ease-out'
                }} >a new memory has formed...</h1>
            </div>
                <div className="captions">
                    <div className="relative flex justify-between w-full mt-150 text-white z-10">
                        <p className="text-left md:w-1/3 md:mr-5 md:ml-8 md:text-3xl font-cloister-black cursor-default"
                           onMouseEnter={() => setMemHovered(true)}
                           onMouseLeave={() => setMemHovered(false)}
                           style={{
                               textShadow: memHovered
                                   ? '0 0 10px white, 0 0 20px white, 0 0 30px white'
                                   : 'none',
                               transition: 'text-shadow 1s ease-out'
                           }}
                        >
                            <span>Shattered glass full of </span>
                            <span>memories, each fragment </span>
                            <span>reflecting moments of joy and </span>
                            <span>sorrow, whispering stories of </span>
                            <span>what once was.</span>
                        </p>
                        <p className="text-center sm:-mt-150 md:text-2xl font-cloister-black md:mt-45 cursor-pointer"
                           onMouseEnter={() => setBeautyHovered(true)}
                           onMouseLeave={() => setBeautyHovered(false)}
                           onClick={() => beautyClicked()}
                           style={{
                               textShadow: beautyHovered
                                   ? '0 0 10px white, 0 0 20px white, 0 0 30px white'
                                   : 'none',
                               transition: 'text-shadow 1s ease-out'
                           }} >
                            Beauty often emerges from the fragments left behind.
                        </p>
                        <p className="text-right sm:w-1/2 md:w-1/3 md:ml-5 md:mr-8 md:text-3xl font-cloister-black cursor-default"
                           onMouseEnter={() => setVoiceHovered(true)}
                           onMouseLeave={() => setVoiceHovered(false)}
                           style={{
                               textShadow: voiceHovered
                                   ? '0 0 10px white, 0 0 20px white, 0 0 30px white'
                                   : 'none',
                               transition: 'text-shadow 1s ease-out'
                           }} >
                            <span>The voices heard through </span>
                            <span>the silence, longing a new color, </span>
                            <span>formed in the palette of our existence.  </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero