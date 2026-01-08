import github from '../assets/Github.svg'
// import discord from '../assets/discord.png'
import back from '../assets/backicon.png'
// import osu from '../assets/osu.png'
// import tele from '../assets/tele.png'
import cure1 from '../assets/pixel.gif'
import cure2 from '../assets/cure2.gif'
import cure3 from '../assets/cure3.webp'
import cure4 from '../assets/cure4.gif'
import cure5 from '../assets/cure5.webp'
// @ts-expect-error hello
const Links = ({ backClicked }) => {
    return (
        <div className="justify-between flex w-screen relative">
            <img src={cure1} alt="magic girl" className="absolute top-0 right-0 -translate-y-15/16 w-20 h-20"/>
            <img src={cure5} alt="magic girl" className="absolute top-0 right-0  -translate-x-48/16 -translate-y-15/16 w-20 h-20 -scale-x-100"/>
            <img src={cure3} alt="magic girl" className="absolute top-0 right-0 -translate-x-32/16 -translate-y-15/16 w-20 h-20"/>
            <img src={cure4} alt="magic girl" className="absolute top-0 right-0 -translate-x-16/16 -translate-y-15/16 w-20 h-20 -scale-x-100"/>
            <img src={cure2} alt="magic girl" className="absolute top-0 left-0 -translate-y-15/16 w-20 h-20"/>
            <div className="p-8 rounded-4xl flex gap-6"
                 style={{
                     background: 'rgba(255, 255, 255, 0.00)',
                     backdropFilter: 'blur(4px)',
                     boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                 }}>
                <img src={back} alt="back" className="w-12 h-12" onClick={backClicked}/>
            </div>
            <div className="p-8 rounded-4xl flex gap-6"
                 style={{
                     background: 'rgba(255, 255, 255, 0.00)',
                     backdropFilter: 'blur(4px)',
                     boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                 }}>
                <a href="https://github.com/braixens" rel="noreferrer" target="_blank">
                    <img src={github} alt="github" className="w-12 h-12"/>
                </a>
                <a href="https://discord.com/users/190235333768511489" rel="noreferrer" target="_blank">
                    <img src='https://www.svgrepo.com/show/506463/discord.svg' alt="discord" className="w-12 h-12"/>
                </a>
                <a href="https://osu.ppy.sh/users/syI" rel="noreferrer" target="_blank">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/Osu%21_Logo_2016.svg' alt="osu" className="w-12 h-12"/>
                </a>
                <a href="https://t.me/sylveon" rel="noreferrer" target="_blank">
                    <img src='https://www.svgrepo.com/show/394493/telegram.svg' alt="tele" className="w-12 h-12"/>
                </a>
            </div>
        </div>
    )
}
export default Links
