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

	{
		genre: `Pop Country`,
		youtubePlaylistUrl: `https://www.youtube.com/playlist?list=PL5-Co_IKQCQhDMn0ZNDFJMkcLfepEA2Ar`,
		songs: [
			{
				title: `American Kids`,
				artist: {
					name: `Kenny Chesney`,
					url: `/artists/country/kenny.jpg`,
				},
				album: `The Big Revival`,
				links: {
					youtube: `https://www.youtube.com/watch?v=de1aPKXBdAE`,
				},
				time: `3:22`,
			},
			{
				title: `My Church`,
				artist: {
					name: `Maren Morris`,
					url: `/artists/country/maren.jpg`,
				},
				album: `HERO`,
				links: {
					youtube: `https://www.youtube.com/watch?v=ouWQ25O-Mcg`,
				},
				time: `3:35`,
			},
			{
				title: `Dirt On My Boots`,
				artist: {
					name: `Jon Pardi`,
					url: `/artists/country/jon_pardi.jpg`,
				},
				album: `California Sunrise`,
				links: {
					youtube: `https://www.youtube.com/watch?v=gCxbgqyC2Wg`,
				},
				time: `3:31`,
			},
			{
				title: `Mama's Broken Heart`,
				artist: {
					name: `Miranda Lambert`,
					url: `/artists/country/miranda.jpg`,
				},
				album: `Four the Record`,
				links: {
					youtube: `https://www.youtube.com/watch?v=7yg05svXp98`,
				},
				time: `3:01`,
			},
			{
				title: `Your Man`,
				artist: {
					name: `Josh Turner`,
					url: `/artists/country/josh_turner.jpg`,
				},
				album: `Your Man`,
				links: {
					youtube: `https://www.youtube.com/watch?v=nADTbWQof7Y`,
				},
				time: `3:29`,
			},
			{
				title: `Free And Easy (Down The Road I Go)`,
				artist: {
					name: `Dierks Bentley`,
					url: `/artists/country/dierks.png`,
				},
				album: `Long Trip Alone`,
				links: {
					youtube: `https://www.youtube.com/watch?v=6_-V3LPS_TY`,
				},
				time: `3:23`,
			},
			{
				title: `Sunshine & Whiskey`,
				artist: {
					name: `Frankie Ballard`,
					url: `/artists/country/frankie_ballard.jpg`,
				},
				album: `Sunshine & Whiskey`,
				links: {
					youtube: `https://www.youtube.com/watch?v=RYKnP-6cDWE`,
				},
				time: `3:01`,
			},
			{
				title: `Drinkin' Problem`,
				artist: {
					name: `Midland`,
					url: `/artists/country/midland.jpg`,
				},
				album: `On the Rocks`,
				links: {
					youtube: `https://www.youtube.com/watch?v=g7f6HiQ2LuU`,
				},
				time: `4:26`,
			},
			{
				title: `Simple`,
				artist: {
					name: `Florida Georgia Line`,
					url: `/artists/country/GFL.jpg`,
				},
				album: `Can't Say I Ain't Country`,
				links: {
					youtube: `https://www.youtube.com/watch?v=TuTDc9d_9yI`,
				},
				time: `3:10`,
			},
			{
				title: `Die A Happy Man`,
				artist: {
					name: `Thomas Rhett`,
					url: `/artists/country/thomas_rhett.jpg`,
				},
				album: `Tangled Up`,
				links: {
					youtube: `https://www.youtube.com/watch?v=w2CELiObPeQ`,
				},
				time: `4:03`,
			},
		],
	},
];
