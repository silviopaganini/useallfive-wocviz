const assetsFolder = 'static/images/';

export const data = {
  assetsFolder,
  types: [
    {id: 0, slug: 'architecture', color: 0x3440FB, value: 'ARCHITECTURE'},
    {id: 1, slug: 'beyond-museums', color: 0x9B4AB5, value: 'BEYOND MUSEUMS'},
    {id: 2, slug: 'fun-palace', color: 0x67B2DC, value: 'FUN PALACE'},
    {id: 3, slug: 'globalization', color: 0x9DDE61, value: 'GLOBALIZATION'},
    {id: 4, slug: 'instruction-based', color: 0xFD6CE8, value: 'INSTRUCTION-BASED ART'},
    {id: 5, slug: 'literature', color: 0xFC2B1C, value: 'LITERATURE'},
    {id: 6, slug: 'live-art', color: 0xEFCF43, value: 'LIVE ART'},
    {id: 7, slug: 'protest-against-forgetting', color: 0xFCA747, value: 'PROTEST AGAINST FORGETTING'},
    {id: 8, slug: 'rules-of-the-game', color: 0xFFFFFF * Math.random(), value: 'RULES OF THE GAME'},
    {id: 9, slug: 'science', color: 0xFFFFFF * Math.random(), value: 'SCIENCE'},
    {id: 10, slug: 'urbanism-cities', color: 0xFFFFFF * Math.random(), value: 'URBANISM/CITIES'},
  ],
  blocks: [
    {
      id: 0,
      links: [0, 1],
      slug: 'the-kitchen-show',
      title: 'The Kitchen\nShow',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image0', 'image1', 'image14'],
    },
    {
      id: 1,
      links: [0, 1],
      slug: 'hotel-carlton',
      title: 'Hotel\nCarlton',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image0', 'image13', 'image14'],
    },
    {
      id: 2,
      links: [0, 1, 2],
      slug: 'safety-curtain',
      title: 'Safety\nCurtain',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image15', 'image16'],
    },
    {
      id: 3,
      links: [3, 4, 1],
      slug: 'take-me-im-yours',
      title: 'Take Me\nI’m Yours',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image12', 'image13', 'image14'],
    },
    {
      id: 4,
      links: [4, 5, 10],
      slug: 'do-it',
      title: 'Do It',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image9', 'image10', 'image11'],
    },
    {
      id: 5,
      links: [5, 6, 9],
      slug: '11-rooms',
      title: '11 Rooms',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image6', 'image7', 'image8'],
    },
    {
      id: 6,
      links: [6],
      slug: 'indian-highway',
      title: 'Indian\nHighway',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image6', 'image7'],
    },
    {
      id: 7,
      links: [7, 8, 1],
      slug: 'fun-palace',
      title: 'Fun Palace',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image6'],
    },
    {
      id: 8,
      links: [8, 9, 0],
      slug: 'to-the-moon-via-the-beach',
      title: 'To The Moon\nVia The Beach',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image5'],
    },
    {
      id: 9,
      links: [9, 10],
      slug: 'experiment-marathon',
      title: 'Experiment\nMarathon',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image3', 'image2', 'image4'],
    },
    {
      id: 10,
      links: [10, 0],
      slug: 'poetry-will-be-made-by-all',
      title: 'Poetry Will be\nMade By All',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image3', 'image2'],
    },
    {
      id: 11,
      links: [10, 1, 4, 5, 6],
      slug: 'china-power-station',
      title: 'China Power\nStation',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image1', 'image2'],
    },
    {
      id: 12,
      links: [10, 2],
      slug: 'il-tempo-del-postino',
      title: 'Il Tempo Del\nPostino',
      body: 'Basel Switzerland, 2014',
      link: 'View Full Exhibition',
      url: 'http://google.com',
      images: ['image0', 'image1'],
    },
  ],
  assets: [
    {id: 'image0', src: 'image_00000.jpg'},
    {id: 'image1', src: 'image_00001.jpg'},
    {id: 'image2', src: 'image_00002.jpg'},
    {id: 'image3', src: 'image_00003.jpg'},
    {id: 'image4', src: 'image_00004.jpg'},
    {id: 'image5', src: 'image_00005.jpg'},
    {id: 'image6', src: 'image_00006.jpg'},
    {id: 'image7', src: 'image_00007.jpg'},
    {id: 'image8', src: 'image_00008.jpg'},
    {id: 'image9', src: 'image_00009.jpg'},
    {id: 'image10', src: 'image_00010.jpg'},
    {id: 'image11', src: 'image_00011.jpg'},
    {id: 'image12', src: 'image_00012.jpg'},
    {id: 'image13', src: 'image_00013.jpg'},
    {id: 'image14', src: 'image_00014.jpg'},
    {id: 'image15', src: 'image_00015.jpg'},
    {id: 'image16', src: 'image_00016.jpg'},
  ],
}