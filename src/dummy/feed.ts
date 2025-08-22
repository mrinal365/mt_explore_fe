import { BEACH_IMAGES_URL } from "@/constants/routes";

export const POST_LIST = [
  {
    "type": "BLOG",
    "author": {
      "name": "Mrinal Tewary",
      "is_pro": true,
      "location": "Manglutan, Andaman",
      "profile_picture": "url_to_profile_pic_1"
    },
    "timestamp": "22:08 17 Jan 24",
    "text": "Some of the unique views from the unexplored Manglutan",
    "media": [
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[0],
        "caption": "A view of the sea and islands"
      }
    ],
    "engagement": {
      "likes": 925,
      "comments": 25
    }
  },
  {
    "type": "BLOG",
    "author": {
      "name": "Mrinal Tewary",
      "is_pro": true,
      "location": "Manglutan, Andaman",
      "profile_picture": "url_to_profile_pic_2"
    },
    "timestamp": "22:08 17 Jan 24",
    "text": "Some of the unique views from the unexplored Manglutan",
    "media": [
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[1],
        "caption": "A view of the sea and islands"
      },
      {
        "type": "image",
        "url": "url_to_image_2b",
        "caption": "A different perspective of the same view"
      }
    ],
    "engagement": {
      "likes": 925,
      "comments": 25
    }
  },
  {
    "type": "BLOG",
    "author": {
      "name": "Riya Sharma",
      "is_pro": false,
      "location": "Havelock Island",
      "profile_picture": "url_to_profile_pic_3"
    },
    "timestamp": "07:30 20 Jan 24",
    "text": "Sunrise at Radhanagar Beach is magical 🌅",
    "media": [
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[2],
        "caption": "Golden sunrise over the beach"
      }
    ],
    "engagement": {
      "likes": 510,
      "comments": 40
    }
  },
  {
    "type": "BLOG",
    "author": {
      "name": "Ankit Verma",
      "is_pro": true,
      "location": "Neil Island",
      "profile_picture": "url_to_profile_pic_4"
    },
    "timestamp": "18:45 22 Jan 24",
    "text": "Chilling by the natural rock formations of Neil",
    "media": [
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[3],
        "caption": "Natural bridge rock formation"
      },
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[4],
        "caption": "View of turquoise waters nearby"
      }
    ],
    "engagement": {
      "likes": 870,
      "comments": 33
    }
  },
  {
    "type": "BLOG",
    "author": {
      "name": "Sneha Rao",
      "is_pro": false,
      "location": "Port Blair",
      "profile_picture": "url_to_profile_pic_5"
    },
    "timestamp": "15:12 25 Jan 24",
    "text": "Exploring the historic Cellular Jail",
    "media": [
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[5],
        "caption": "Inside view of Cellular Jail"
      }
    ],
    "engagement": {
      "likes": 1100,
      "comments": 60
    }
  },
  {
    "type": "BLOG",
    "author": {
      "name": "Kunal Singh",
      "is_pro": true,
      "location": "Baratang Island",
      "profile_picture": "url_to_profile_pic_6"
    },
    "timestamp": "09:00 27 Jan 24",
    "text": "The limestone caves at Baratang are a hidden wonder",
    "media": [
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[6],
        "caption": "Inside limestone cave formations"
      }
    ],
    "engagement": {
      "likes": 750,
      "comments": 29
    }
  },
  {
    "type": "BLOG",
    "author": {
      "name": "Ayesha Khan",
      "is_pro": false,
      "location": "Ross Island",
      "profile_picture": "url_to_profile_pic_7"
    },
    "timestamp": "16:45 30 Jan 24",
    "text": "Nature taking over the ruins at Ross Island 🌿",
    "media": [
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[7],
        "caption": "Old British ruins covered in roots"
      }
    ],
    "engagement": {
      "likes": 620,
      "comments": 22
    }
  },
  {
    "type": "BLOG",
    "author": {
      "name": "Raj Mehta",
      "is_pro": true,
      "location": "Little Andaman",
      "profile_picture": "url_to_profile_pic_8"
    },
    "timestamp": "11:10 01 Feb 24",
    "text": "The roaring beauty of White Surf Waterfall",
    "media": [
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[8],
        "caption": "White Surf Waterfall in full flow"
      }
    ],
    "engagement": {
      "likes": 980,
      "comments": 44
    }
  },
  {
    "type": "BLOG",
    "author": {
      "name": "Pooja Nair",
      "is_pro": false,
      "location": "North Bay Island",
      "profile_picture": "url_to_profile_pic_9"
    },
    "timestamp": "14:55 03 Feb 24",
    "text": "Snorkeling adventures in North Bay 🐠",
    "media": [
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[9],
        "caption": "Colorful coral reef"
      },
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[10],
        "caption": "Clownfish swimming near corals"
      }
    ],
    "engagement": {
      "likes": 1340,
      "comments": 72
    }
  },
  {
    "type": "BLOG",
    "author": {
      "name": "Aman Gupta",
      "is_pro": true,
      "location": "Cinque Island",
      "profile_picture": "url_to_profile_pic_10"
    },
    "timestamp": "10:05 05 Feb 24",
    "text": "Untouched paradise at Cinque Island 🌊",
    "media": [
      {
        "type": "image",
        "url": BEACH_IMAGES_URL[11],
        "caption": "Pristine beach with crystal-clear waters"
      }
    ],
    "engagement": {
      "likes": 890,
      "comments": 37
    }
  }
]


export const COMMUNITY_LIST = [
  {
    "title": "Beach Roamers - Manglutan",
    "description": "A community for beach lovers and nature seekers exploring Manglutan.",
    "image": BEACH_IMAGES_URL[0]
  },
  {
    "title": "Scuba Divers - Havelock",
    "description": "Join fellow diving enthusiasts to explore coral reefs and marine life at Havelock.",
    "image": BEACH_IMAGES_URL[1]
  },
  {
    "title": "Bird Watchers - Chidiya Tapu",
    "description": "For bird lovers who want to spot exotic species at the famous Chidiya Tapu.",
    "image": BEACH_IMAGES_URL[2]
  },
  {
    "title": "Trek Explorers - Baratang",
    "description": "A group for trekkers venturing into limestone caves and mangroves in Baratang.",
    "image": BEACH_IMAGES_URL[3]
  },
  {
    "title": "History Seekers - Cellular Jail",
    "description": "Connect with history enthusiasts exploring the stories of Cellular Jail.",
    "image": BEACH_IMAGES_URL[4]
  },
  // {
  //   "title": "Island Hoppers - Neil Island",
  //   "description": "Discover the hidden beaches, natural bridges, and island beauty together.",
  //   "image": BEACH_IMAGES_URL[5]
  // },
  // {
  //   "title": "Adventure Lovers - Little Andaman",
  //   "description": "From waterfalls to surfing, this is the hub for adventure seekers.",
  //   "image": BEACH_IMAGES_URL[6]
  // },
  // {
  //   "title": "Nature Guardians - Ross Island",
  //   "description": "A group for those who admire how nature has reclaimed Ross Island ruins.",
  //   "image": BEACH_IMAGES_URL[7]
  // },
  // {
  //   "title": "Snorkeling Buddies - North Bay",
  //   "description": "Community for snorkeling lovers exploring the colorful corals of North Bay.",
  //   "image": BEACH_IMAGES_URL[8]
  // },
  // {
  //   "title": "Hidden Gems - Cinque Island",
  //   "description": "Discover untouched paradise spots and lesser-known gems of Cinque.",
  //   "image": BEACH_IMAGES_URL[9]
  // }
]