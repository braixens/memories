import Card from "../components/Card.tsx";
import Links from "../components/Links.tsx"
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import bgblur from '../assets/blur.jpg'
import shadows from '../assets/Waking Shadows.mp4'
import {useEffect, useRef} from "react";
import bg from '../assets/character.png'
import {useNavigate} from "react-router";
import DiscordStatus from "../components/DiscordStatus.tsx";

const About = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const fade = useRef<GSAPTimeline>(null)
    const navigate = useNavigate();
    const fadeClicked = () => {
        fade.current?.play();
    }

    useEffect(() => {
        audioRef.current = new Audio(shadows);
        audioRef.current.volume = 0;
    }, []);

    useGSAP(() => {
        fade.current = gsap.timeline({paused: true, onComplete: function () {navigate("/")}})
        document.fonts.ready.then(() => {
            gsap.to(".newbackground", {
                scaleY:'1.03'
            });
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
                duration: 1,
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
            gsap.from(".status", {
                duration: 4,
                ease: "power2.out",
                x: -200,
                y: 0,
                opacity: 0,
                delay: 4.5,
            })
            fade.current?.to("#screen", {
                duration: 2,
                ease: "power3.inOut",
                opacity: 0,
            }).to(audioRef.current, {
                duration: 2,
                volume: 0,
                ease: "power3.inOut",
            })

        })
    })

    return (
        <div id="screen">
            <div className="relative w-screen h-screen">
                <div className="status absolute bottom-50 md:bottom-0 md:right-2/5 right-0 z-50 md:w-1/3 sm:w-full">
                    <DiscordStatus/>
                </div>
                <div className="links absolute bottom-0 left-0 z-50 md:w-10/10 flex">
                    <Links backClicked={() => fadeClicked()}/>
                </div>
                <div className="background w-full h-full opacity-0 absolute z-0 bg-cover bg-no-repeat " style={{
                    backgroundImage: `url(${bgblur})`,
                }}>
                    <div className="card">
                        <Card/>
                    </div>
                </div>
                <div className="newbackground w-full h-screen absolute z-10 opacity-0 bg-cover bg-no-repeat" style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: "-10px 10px",
                }}></div>
            </div>
        </div>
    )}
export default About
