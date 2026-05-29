export interface Video {
  slug: string;
  title: string;
  year: string;
  category: string;       // e.g. 'Short Film', 'Music Video', 'Commercial'
  embedUrl: string;       // YouTube or Vimeo embed URL
  description: string;    // shown on the detail page
  thumbnail: string;      // path to cover image in public/
  credits?: {
    role: string;
    name: string;
  }[];
}

export const videos: Video[] = [
  {
    slug: 'pastel–letyou',
    title: 'Pastel – Let You (Feat. Haoting) – Official Video',
    year: '2020',
    category: 'Music Video',
    embedUrl: 'https://www.youtube.com/embed/S1b5jhz_IYc?si=zwbr0Qyr4WN7Rsfz',
    thumbnail: '/images/videos/project-one.jpg',
    description: `Pastel is a 28-year-old french/Polynesian self-taught multi-instrumentalist, songwriter and producer based in London.
    His introduction to music came at just 10 years old and took shape when he got a touch on his first keyboard, guitar and bass, which he learnt to record on his grandpa’s tape machine, recording his earliest creations. Next, he began booking studio sessions to record his band demos while delving into the world of recording his own songs.
    The past four years have seen Pastel tour in Asia four times, building his audience over there. His support for FKJ and collaborations with artists like Bazzi, Bon Entendeur, Adeline and Jarreau Vandal made his name stand out in the world of neo-soul and indie pop jazz scene.
    Pastel has sustained a strong fanbase over digital platforms, amassing over 10 million streams in about a year. Most successful songs: Daylight, Bamboo, Floating and Ecstasy. The latter was in the top 100 tracks of 2019 on TikTok, with more than 5 million streams made in just one year.`,
    credits: [
      { role: 'Writter & Director', name: 'Mathilde Godard' },
      { role: 'Producer',  name: 'Yann Merandi' },
      { role: 'Music', name: 'Pastel' },
    ],
  },
  {
    slug: 'will-purdue–i-dont-think-we-should-rush-in',
    title: 'Will Purdue – I Don’t Think We Should Rush In',
    year: '2019',
    category: 'Music Video',
    embedUrl: 'https://www.youtube.com/embed/ogn1rt67Ewk?si=kE32F8jWcvBDi2N2',
    thumbnail: '/images/videos/project-two.jpg',
    description: `Will Purdue is a British Alternative Country-Rock singer-songwriter inspired by the likes of Leonard Cohen, The National, Drive-by Truckers and Damien Dempsey. His sound is characterised by his always-present acoustic guitar and his deep voice, smooth and smoky on his ballads and rocky and poignant on his upbeat songs.
    The video is conducted like a short documentary showing the life of a performance artist & drag queen Stephen Eyre alias Cassandra.`,
    credits: [
        { role: 'Direction', name: 'Will Purdue, Nathalie Ishak & Mathilde Godard' },
        { role: 'Production',  name: 'Will Purdue & Nathalie Ishak' },
        { role: 'Music', name: 'Will Purdue' }
    ],
  },
];