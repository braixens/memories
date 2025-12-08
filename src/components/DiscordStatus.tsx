import {useLanyardWS} from "use-lanyard";
// import type { Types } from 'use-lanyard';
import {useEffect} from "react";
import {getUrl} from "../util/getUrl.ts";
// AVATAR URL <img src={`https://cdn.discordapp.com/avatars/${presence?.discord_user.id}/${presence.discord_user.avatar}.gif`} className="rounded-full h-8 w-8"/>

const DiscordStatus = () => {
    const discordID = '190235333768511489';
    const presence = useLanyardWS(discordID)

    useEffect(() => {
        if (presence) {
            console.log('Received update:', presence)
        }
    }, [presence]);


    return (
        <div className="rounded-4xl z-20 font-starborn h-fit flex"
             style={{
                 background: 'rgba(255, 255, 255, 0.00)',
                 backdropFilter: 'blur(4px)',
                 boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
        }}>
            {presence?.activities.at(1) && <div className="flex">
                <img src={(presence?.activities.at(1)?.application_id === "1221061703505281114") ? getUrl(presence.activities.at(1)?.assets?.large_image) : (presence?.activities.at(1)?.application_id === "1178492879627366472" ? "https://static.wikia.nocookie.net/logopedia/images/4/41/Geometry_Dash_Icon.svg": `https://cdn.discordapp.com/app-assets/${presence?.activities.at(1)?.application_id}/${presence?.activities.at(1)?.assets?.large_image}.png`)}
                      className="w-24 rounded-4xl mr-5" alt="status"/>
                <div className="flex-col m-auto p-2">
                    <p className="text-xs md:text-sm">current status: {presence?.discord_status}</p>
                    <p className="text-xs md:text-sm">{presence?.activities.at(1)?.details}</p>
                    <p className="text-xs md:text-sm">{presence?.activities.at(1)?.state}</p>
                </div>
            </div>}
        </div>

    )
}
export default DiscordStatus
