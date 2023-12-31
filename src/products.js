const products = [
  {
    '_id': '1',
    'name': 'AstroBeam Sound System',
    'image': '/images/AstroBeam Sound 0.png',
    'description':
      'Unleash the power of immersive audio with the AstroBeam Sound System, a cutting-edge audio solution designed to redefine your listening experience. Whether you are a music enthusiast, movie buff, or gamer, the AstroBeam Sound System is engineered to deliver crystal-clear sound and rich, deep bass that transforms any space into an audio haven.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 299.99,
    'countInStock': 10,
    'rating': 4.5,
    'numReviews': 12,
  },
  {
    '_id': '2',
    'name': 'AstroHarmony Headphones',
    'image': '/images/Astroharmonyheadphones.jfif',
    'description':
      'Immerse yourself in a world of unparalleled audio with AstroHarmony Headphones. These sleek, wireless wonders deliver a symphony of sound directly to your ears, blending comfort and style effortlessly.Elevate your moments with the perfect harmony of technology and design.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 99.99,
    'countInStock': 7,
    'rating': 4.0,
    'numReviews': 8,
  },
  {
    '_id': '3',
    'name': 'Cosmic Wave Gaming Headphones',
    'image': '/images/CosmicWave Head 0.png',
    'description':
      'Immerse yourself in the heart of the action with CosmicWave Gaming Headphones. Engineered for gamers, by gamers, these headphones deliver a symphony of sound that transports you to virtual realms with stunning precision. Designed for comfort during extended gaming sessions, CosmicWave combines style with substance.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 129.99,
    'countInStock': 5,
    'rating': 4.0,
    'numReviews': 12,
  },
  {
    '_id': '4',
    'name': 'Eclipse Surge Gaming Headphones',
    'image': '/images/Eclipsesurgehead.jfif',
    'description':
      'Step into a new era of gaming with Eclipse Surge Gaming Headphones, the ultimate companion for every gaming enthusiast. These headphones are meticulously crafted to deliver an unparalleled gaming experience, immersing you in the heart of the action.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 139.99,
    'countInStock': 11,
    'rating': 5,
    'numReviews': 12,
  },
  {
    '_id': '5',
    'name': 'GalaxyGrip Audio System',
    'image': '/images/GalaxyGrip Audi 1.png',
    'description':
      'Introducing the GalaxyGrip Audio System, where cutting-edge technology meets celestial design to transform your auditory experience. Immerse yourself in a universe of unrivaled sound quality and sleek aesthetics, meticulously engineered for the modern audio enthusiast.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 349.99,
    'countInStock': 7,
    'rating': 3.5,
    'numReviews': 10,
  },
  {
    '_id': '6',
    'name': 'Infinty Echo Earphones',
    'image': '/images/infinityechoearphones.jfif',
    'description':
      'Step into a realm of unparalleled audio excellence with Infinity Echo Earphones, where cutting-edge technology harmonizes with sleek design for an audio experience that knows no bounds.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 59.99,
    'countInStock': 0,
    'rating': 4,
    'numReviews': 12,
  },
  {
    '_id': '7',
    'name': 'LunaVibe Gaming Headphones',
    'image': '/images/Lunavibegaminhead.jfif',
    'description':
      'Dive into the heart of gaming chaos with LunaVibe Gaming Headphones, your gateway to an immersive audio adventure that syncs seamlessly with the pulse of virtual worlds.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 149.99,
    'countInStock': 8,
    'rating': 4.3,
    'numReviews': 15,
  },
  {
    '_id': '8',
    'name': 'NebulaSync Headphones',
    'image': '/images/NebulaSync Head 0.png',
    'description':
      'Immerse yourself in the celestial symphony of sound with NebulaSync Headphones. Crafted for the modern audiophile, these headphones seamlessly blend cutting-edge technology with a sleek design for an unparalleled auditory experience.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 109.99,
    'countInStock': 7,
    'rating': 3.9,
    'numReviews': 10,
  },
  {
    '_id': '9',
    'name': 'OdysseySound Headphones',
    'image': '/images/OdysseySound He 0.png',
    'description':
      'Experience a journey through sound like never before with OdysseySound Headphones. Meticulously crafted to redefine your audio encounters, these headphones seamlessly blend style, comfort, and cutting-edge technology for an unmatched listening experience.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 179.99,
    'countInStock': 6,
    'rating': 4.0,
    'numReviews': 9,
  },
  {
    '_id': '10',
    'name': 'Quantum Quake Audio headsets',
    'image': '/images/quantumquakeaudio headsets.jfif',
    'description':
      'Embark on an auditory journey like never before with Quantum Quake Audio Headsets, the epitome of audio excellence that shakes the foundations of immersive sound technology.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 79.99,
    'countInStock': 18,
    'rating': 3.9,
    'numReviews': 11,
  },
  {
    '_id': '11',
    'name': 'StarSurge Gaming Headphones',
    'image': '/images/StarSurge Heads 0.png',
    'description':
      'Prepare to enter a new dimension of gaming with StarSurge Gaming Headphones, an interstellar fusion of cutting-edge audio technology and unparalleled comfort designed for cosmic gaming conque',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 209.99,
    'countInStock': 14,
    'rating': 4.1,
    'numReviews': 10,
  },
  {
    '_id': '12',
    'name': 'ZenithWave Speakers',
    'image': '/images/zenithwavespeakers.jfif',
    'description':
      'Embark on a transcendent audio journey with ZenithWave Speakers, a pinnacle of audio engineering that delivers a symphony of sound to transform your space into a sonic sanctuary.',
    'brand': 'Cosmic Grab',
    'category': 'Electronics',
    'price': 249.99,
    'countInStock': 7,
    'rating': 3.8,
    'numReviews': 11,
  },
]


export default products
