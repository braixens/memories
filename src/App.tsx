import gsap from "gsap"
import { ScrollTrigger, SplitText} from "gsap/all"
import {Route, Routes} from "react-router";
import Home from "./screens/Home.tsx";
import Memories from "./screens/Memories.tsx";
import IParticles from "./components/IParticles.tsx";
import About from "./screens/About.tsx";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div>
            <IParticles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/memories" element={<Memories />} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </div>
    );
};

export default App