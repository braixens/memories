import Card from "../components/Card.tsx";
import Links from "../components/Links.tsx"
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
            gsap.from(".card", {
                duration: 2,
                ease: "power2.out",
                y: 175,
                x: 175,
                opacity: 0,
                delay: 1.5,
            })
            gsap.from(".links", {
                duration: 4,
                ease: "power2.out",
                x: 0,
                y: -200,
                opacity: 0,
                delay: 4.5,
            })

        })
    })

    return (
        <div className="relative w-screen h-screen">
            <div className="links absolute bottom-0 right-0 z-50">
                <Links/>
            </div>
            <div className="background w-full h-full opacity-0 absolute z-0 bg-cover bg-no-repeat " style={{
                backgroundImage: `url(${bgblur})`,
            }}>
                <div className="card">
                    <Card/>
                </div>
            </div>
            <div className="newbackground w-full h-full absolute z-10 opacity-0 bg-cover bg-no-repeat" style={{
                backgroundImage: `url(${bg})`,
            }}></div>
        </div>
    )}
export default About
