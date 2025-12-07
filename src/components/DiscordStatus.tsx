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
        <div className="p-2 rounded-4xl z-20 font-starborn h-fit flex"
             style={{
                 background: 'rgba(255, 255, 255, 0.00)',
                 backdropFilter: 'blur(4px)',
                 boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
        }}>
            {presence?.activities.at(1) && <div className="flex">
                <img src={getUrl(presence.activities.at(1)?.assets?.large_image)}
                                                   className="w-24 rounded-2xl mr-5" alt="status"/>
                <div className="flex-col m-auto">
                    <p className="text-sm">current status: {presence?.discord_status}</p>
                    <p className="text-sm">{presence?.activities.at(1)?.details}</p>
                    <p className="text-sm">{presence?.activities.at(1)?.state}</p>
                </div>
            </div>}
        </div>

    )
}
export default DiscordStatus
