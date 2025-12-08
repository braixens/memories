import pfp from '../assets/keychan.jpg'

const Card = () => {
    return (
        <div className="absolute left-0 top-0 pt-8 pr-8 pl-8 rounded-4xl z-20 h-fit sm:w-full md:w-1/2"
             style={{
                 background: 'rgba(255, 255, 255, 0.00)',
                 backdropFilter: 'blur(4px)',
                 boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
             }}>
            <div className="header flex items-start gap-6">
                <div className="flex flex-col justify-between items-center h-full text-center">
                    <img
                    src={pfp}
                    alt="pfp"
                    className="w-40 h-40 rounded-full border-2 border-white/30 object-top object-cover md:mb-10"
                />
                    <p className="text-white/70 text-sm md:text-lg mt-2 font-cloister-black ">
                        est 2025 | Made with React + GSAP
                    </p>
                    <i className="font-starborn opacity-25 text-xs md:text-lg mt-5 md:mt-10">
                        Visitors since 12-06-2025
                    </i>
                    <img src="https://count.getloli.com/@memories?name=memories&theme=asoul&padding=3&offset=0&align=top&scale=1&pixelated=1&darkmode=auto" alt="views" className="w-2/2 h-2/2"/>
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4 font-cloister-black">
                        <h1 className="text-5xl font-bold text-white">Dime</h1>
                        <span className="px-4 py-1 rounded-full text-sm font-starborn"
                              style={{
                                  background: 'rgba(255, 255, 255, 0.3)',
                                  color: 'white'
                              }}>
                            princess
                        </span>
                    </div>
                    <div>
                        <p className="text-white text-xs md:text-sm leading-relaxed mb-2 font-starborn">
                        hi hello I'm dime :3 im passionate about software and coding and all that stuff xD <br/><br/>furry :3 (bat/puppy/dragon) [] lov rhythm games, its basically my life ^_^ <br/><br/> touhou/vocaloid/pokemon fanatic <br/> artcore/speedcore/breakcore &gt;&gt;&gt;<br/><br/>aspiring full stack dev/cybersec enthusiast
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
