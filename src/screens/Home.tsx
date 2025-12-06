import gsap from "gsap"
import { ScrollTrigger, SplitText} from "gsap/all"
import Hero from "../components/Hero.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Home = () => {
    return (
        <>
            <Hero/>
        </>
    )
}
export default Home
