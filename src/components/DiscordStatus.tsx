import { useLanyardWS } from "use-lanyard";
// import type { Types } from 'use-lanyard';
import { useEffect, useState } from "react";
import { getUrl } from "../util/getUrl.ts";
// AVATAR URL <img src={`https://cdn.discordapp.com/avatars/${presence?.discord_user.id}/${presence.discord_user.avatar}.gif`} className="rounded-full h-8 w-8"/>

const DiscordStatus = () => {
	const discordID = '190235333768511489';
	const presence = useLanyardWS(discordID)
	const isCoding = (presence?.activities.at(1)?.application_id === "1221061703505281114" || presence?.activities.at(1)?.application_id === "782685898163617802" || presence?.activities.at(1)?.application_id === "1226141797558779914" || presence?.activities.at(1)?.application_id === "1107202385799041054" || presence?.activities.at(1)?.application_id === "1219918880005165137");
	const isNeovim = presence?.activities.at(1)?.application_id === "1219918880005165137";
	const startTime = (presence?.activities.at(1)?.timestamps) ? presence?.activities.at(1)?.timestamps?.start : presence?.activities.at(1)?.created_at
	const [timeSince, setTimeSince] = useState('00:00:00');

	useEffect(() => {
		if (!startTime) return;
		const updateElapsedTime = () => {
			const currentTime = Date.now();
			const elapsedTime = currentTime - startTime;
			const totalSeconds = Math.floor(elapsedTime / 1000) % 60;
			const totalMinutes = Math.floor(elapsedTime / 60000) % 60;
			const totalHours = Math.floor(elapsedTime / 3600000);
			setTimeSince(`${String(totalHours).padStart(2, '0')}:${String(totalMinutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`);
		}
		updateElapsedTime();
		const intervalId = setInterval(updateElapsedTime, 1000);
		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	}, [startTime]);

	useEffect(() => {
		if (presence) {
			console.log('Received update:', presence)
		}
	}, [presence]);


	return (
		<section>
			{presence?.activities.at(1) &&
				<div className="rounded-4xl z-20 font-starborn h-fit flex"
					style={{
						background: 'rgba(255, 255, 255, 0.00)',
						backdropFilter: 'blur(4px)',
						boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
					}}>
					<img src={isCoding ? getUrl(presence.activities.at(1)?.assets?.large_image) : (presence?.activities.at(1)?.application_id === "1178492879627366472" ? "https://static.wikia.nocookie.net/logopedia/images/4/41/Geometry_Dash_Icon.svg" : ((presence?.activities.at(1)?.application_id === "356875221078245376") ? "https://upload.wikimedia.org/wikipedia/commons/5/55/Overwatch_circle_logo.svg" : (presence?.activities.at(1)?.application_id === "1161796385562177627" ? "https://games.mxdwn.com/wp-content/uploads/2021/07/ggst-logo.jpg" : `https://cdn.discordapp.com/app-assets/${presence?.activities.at(1)?.application_id}/${presence?.activities.at(1)?.assets?.large_image}.png`)))}
						className="w-24 rounded-4xl mr-5" alt="status" />
					<div className="flex-col m-auto p-2">
						<p className="text-xs md:text-sm">current status: {presence?.discord_status} - {(isCoding && !isNeovim) ? "(Coding)" : (isNeovim) ? "(Neovim)" : presence?.activities.at(1)?.name}</p>
						<p className="text-xs md:text-sm">{presence?.activities.at(1)?.details} for {timeSince} </p>
						<p className="text-xs md:text-sm">{presence?.activities.at(1)?.state}</p>
					</div>
				</div>}
		</section>
	)
}
export default DiscordStatus
