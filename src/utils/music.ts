type Song = {
	title: string;
	artist: {
		name: string;
		url: string;
	};
	album: string;
	time: string;
	links: {
		youtube: string;
	};
};

type List = {
	genre: string;
	youtubePlaylistUrl: string;
	songs: Song[];
};

export type MusicListType = List[];

export const music: MusicListType = [
	{
		genre: `Hip Hop`,
		youtubePlaylistUrl: `https://youtube.com/playlist?list=PL5-Co_IKQCQjA7UcYFIbAXHOIEjkctppY`,
		songs: [
			{
				title: `N.Y. State of Mind`,
				artist: {
					name: `Nas`,
					url: `/artists/hip-hop/nas.jpg`,
				},
				album: `Illmatic`,
				links: {
					youtube: `https://youtu.be/hI8A14Qcv68`,
				},
				time: `4:56`,
			},
			{
				title: `Don't Sweat the Technique`,
				artist: {
					name: `Eric B. & Rakim`,
					url: `/artists/hip-hop/eric-b-and-rakim.jpg`,
				},
				album: `Don't Sweat the Technique`,
				links: {
					youtube: `https://youtu.be/6Y1Emb7Jyks`,
				},
				time: `3:20`,
			},
			{
				title: `Scenario`,
				artist: {
					name: `A Tribe Called Quest`,
					url: `/artists/hip-hop/tribe.jpg`,
				},
				album: `The Low End Theory`,
				links: {
					youtube: `https://youtu.be/Q6TLWqn82J4`,
				},
				time: `4:22`,
			},
			{
				title: `Rhymes Like Dimes`,
				artist: {
					name: `MF DOOM`,
					url: `/artists/hip-hop/mf-doom.jpg`,
				},
				album: `Operation: Doomsday`,
				links: {
					youtube: `https://youtu.be/5TlZeem3FU8`,
				},
				time: `4:19`,
			},
			{
				title: `Survival of the Fittest`,
				artist: {
					name: `Mobb Deep`,
					url: `/artists/hip-hop/mobb-deep.jpg`,
				},
				album: `The Infamous`,
				links: {
					youtube: `https://youtu.be/Dz5VzLz67WA`,
				},
				time: `3:45`,
			},
			{
				title: `Mathematics`,
				artist: {
					name: `Mos Def`,
					url: `/artists/hip-hop/mos-def.jpg`,
				},
				album: `Black On Both Sides`,
				links: {
					youtube: `https://youtu.be/8Ir-zFC9nFE`,
				},
				time: `4:07`,
			},
			{
				title: `What's Golden`,
				artist: {
					name: `Jurassic 5`,
					url: `/artists/hip-hop/jurassic-5.jpg`,
				},
				album: `Power In Numbers`,
				links: {
					youtube: `https://youtu.be/XsZKrctSDaw`,
				},
				time: `3:15`,
			},
			{
				title: `Da Mystery of Chessboxin'`,
				artist: {
					name: `Wu-Tang Clan`,
					url: `/artists/hip-hop/wu-tang.jpg`,
				},
				album: `Enter the Wu-Tang (36 Chambers)`,
				links: {
					youtube: `https://youtu.be/pJk0p-98Xzc`,
				},
				time: `4:48`,
			},
			{
				title: `Guillotine (Swordz)`,
				artist: {
					name: `Raekwon`,
					url: `/artists/hip-hop/raekwon.jpg`,
				},
				album: `Only Built 4 Cuban Linx...`,
				links: {
					youtube: `https://youtu.be/LB5iikR7aT0`,
				},
				time: `4:23`,
			},
			{
				title: `King Kunta`,
				artist: {
					name: `Kendrick Lamar`,
					url: `/artists/hip-hop/kendrick.png`,
				},
				album: `To Pimp A Butterfly`,
				links: {
					youtube: `https://youtu.be/hRK7PVJFbS8`,
				},
				time: `3:58`,
			},
		],
	},
];
