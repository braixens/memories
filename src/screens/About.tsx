import Card from "../components/Card.tsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import bgblur from '../assets/blur.jpg'
import shadows from '../assets/Waking Shadows.mp4'
import {useEffect, useRef} from "react";
import bg from '../assets/character.png'

const About = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        audioRef.current = new Audio(shadows);
        audioRef.current.volume = 0;
    }, []);


    useGSAP(() => {
        document.fonts.ready.then(() => {
            gsap.to(".background", {
                opacity: 1,
                duration: 3,
                onComplete: () => {
                    gsap.to(".newbackground", {
                        opacity: 1,
                        duration: 5,
                        repeat: -1,
                        yoyo: true,
                        ease: "bounce.inOut",
                    });
                }
            });

            gsap.to(audioRef.current, {
                duration: 20,
                volume: 1,
            })
            audioRef.current?.play().catch((error) => {
                console.error("Error playing audio:", error);
            });
        })
    })

    return (
        <div>
            <div className="background w-screen h-screen opacity-0 absolute z-0 bg-cover bg-no-repeat " style={{
                backgroundImage: `url(${bgblur})`,
            }}>
                <Card/>
            </div>

                <div className="newbackground w-screen h-screen absolute z-10 opacity-0 bg-cover bg-no-repeat " style={{
                    backgroundImage: `url(${bg})`,
                }}></div>

        </div>
    )}
export default About
