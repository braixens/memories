import github from '../assets/Github.svg'
import discord from '../assets/Discord.svg'
import back from '../assets/backicon.png'
const Links = () => {
    return (
        <div className="justify-between flex w-screen">
            <div className="p-8 rounded-4xl flex gap-6"
                 style={{
                     background: 'rgba(255, 255, 255, 0.00)',
                     backdropFilter: 'blur(4px)',
                     boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                 }}><a href="https://lostmemori.es">
                <img src={back} alt="back" className="w-12 h-12"/>
            </a></div>
            <div className="p-8 rounded-4xl flex gap-6"
                 style={{
                     background: 'rgba(255, 255, 255, 0.00)',
                     backdropFilter: 'blur(4px)',
                     boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                 }}>
                <a href="https://github.com/braixens">
                    <img src={github} alt="github" className="w-12 h-12"/>
                </a>
                <a href="https://discord.com/users/190235333768511489">
                    <img src={discord} alt="discord" className="w-12 h-12"/>
                </a>
            </div>
        </div>
    )
}
export default Links
