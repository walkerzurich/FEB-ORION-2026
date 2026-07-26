export const campusBuildings = [
  {
    id: "outdoor",
    name: "Fasilitas FEB Undip",
    description: "Fasilitas di luar gedung utama FEB.",
    type: "outdoor",
    thumbnail: "/images/fotoGedung/Parkiran 3.jpg",
    rooms: [
      {
        id: "video-fasilitas-feb",
        name: "Video Fasilitas FEB Undip",
        panorama: "/images/panorama360/Fasilitas FEB/GERBANG UTAMA.jpeg",
        hotspots: [],
        video:
          "https://res.cloudinary.com/tfdsnfgf/video/upload/v1784996227/Fasilitas-FEB_1_ntfgyg.mp4",
      },
      {
        id: "gerbang-utama",
        name: "Gerbang Utama FEB",
        panorama: "/images/panorama360/Fasilitas FEB/GERBANG UTAMA.jpeg",
        hotspots: [
          {
            id: "to-landmark",
            position: { x: 15, y: -5, z: 25 },
            targetRoom: "landmark-feb",
            label: "Landmark FEB",
          },
          {
            id: "to-gerbang-2",
            position: { x: -25, y: -5, z: 20 },
            targetRoom: "gerbang-2",
            label: "Gerbang 2 FEB",
          },
        ],
      },
      {
        id: "gerbang-2",
        name: "Gerbang 2 FEB",
        panorama: "/images/panorama360/Fasilitas FEB/GERBANG 2.jpeg",
        hotspots: [
          {
            id: "to-gerbang-utama",
            position: { x: 25, y: -5, z: -20 },
            targetRoom: "gerbang-utama",
            label: "Gerbang Utama",
          },
        ],
      },
      {
        id: "landmark-feb",
        name: "Landmark FEB",
        panorama: "/images/panorama360/Fasilitas FEB/LANDMARK FEB.jpeg",
        hotspots: [
          {
            id: "to-gerbang-utama",
            position: { x: -15, y: -5, z: -25 },
            targetRoom: "gerbang-utama",
            label: "Gerbang Utama",
          },
          {
            id: "to-lapang-ilovefeb",
            position: { x: 20, y: -5, z: 20 },
            targetRoom: "lapang-ilovefeb",
            label: "Lapangan I Love FEB",
          },
        ],
      },
      {
        id: "lapang-ilovefeb",
        name: "Lapangan I Love FEB",
        panorama: "/images/panorama360/Fasilitas FEB/LAPANG I LOVE FEB.jpeg",
        hotspots: [
          {
            id: "to-landmark",
            position: { x: -20, y: -5, z: -20 },
            targetRoom: "landmark-feb",
            label: "Landmark FEB",
          },
          {
            id: "to-danau",
            position: { x: 15, y: -5, z: 25 },
            targetRoom: "danau-feb",
            label: "Danau FEB",
          },
        ],
      },
      {
        id: "danau-feb",
        name: "Danau FEB",
        panorama: "/images/panorama360/Fasilitas FEB/DANAU FEB.jpeg",
        hotspots: [
          {
            id: "to-lapang-ilovefeb",
            position: { x: -15, y: -5, z: -25 },
            targetRoom: "lapang-ilovefeb",
            label: "Lapangan I Love FEB",
          },
          {
            id: "to-lapangan-basket",
            position: { x: 20, y: -5, z: 30 },
            targetRoom: "lapangan-basket",
            label: "Lapangan Basket",
          },
        ],
      },
      {
        id: "lapangan-basket",
        name: "Lapangan Basket",
        panorama: "/images/panorama360/Fasilitas FEB/LAPANG BASKET.jpeg",
        hotspots: [
          {
            id: "to-danau",
            position: { x: -20, y: -5, z: -30 },
            targetRoom: "danau-feb",
            label: "Danau FEB",
          },
          {
            id: "to-pakardo",
            position: { x: 25, y: -5, z: 25 },
            targetRoom: "pakardo",
            label: "Pakardo",
          },
        ],
      },
      {
        id: "pakardo",
        name: "Pakardo",
        panorama: "/images/panorama360/Fasilitas FEB/PAKARDO.jpeg",
        hotspots: [
          {
            id: "to-lapangan-basket",
            position: { x: -25, y: -5, z: -25 },
            targetRoom: "lapangan-basket",
            label: "Lapangan Basket",
          },
          {
            id: "to-maseko",
            position: { x: 20, y: -5, z: 20 },
            targetRoom: "maseko",
            label: "Maseko",
          },
        ],
      },
      {
        id: "maseko",
        name: "Maseko",
        panorama: "/images/panorama360/Fasilitas FEB/MASEKO.jpeg",
        hotspots: [
          {
            id: "to-pakardo",
            position: { x: -20, y: -5, z: -20 },
            targetRoom: "pakardo",
            label: "Pakardo",
          },
          {
            id: "to-dome",
            position: { x: 15, y: -5, z: 25 },
            targetRoom: "dome-feb",
            label: "Dome FEB",
          },
        ],
      },
      {
        id: "dome-feb",
        name: "Dome FEB",
        panorama: "/images/panorama360/Fasilitas FEB/DOME FEB.jpeg",
        hotspots: [
          {
            id: "to-maseko",
            position: { x: -15, y: -5, z: -25 },
            targetRoom: "maseko",
            label: "Maseko",
          },
          {
            id: "to-parkir-motor",
            position: { x: 25, y: -5, z: 20 },
            targetRoom: "parkir-motor",
            label: "Parkir Motor",
          },
        ],
      },
      {
        id: "parkir-motor",
        name: "Parkir Motor",
        panorama: "/images/panorama360/Fasilitas FEB/PARKIR MOTOR.jpeg",
        hotspots: [
          {
            id: "to-dome",
            position: { x: -25, y: -5, z: -20 },
            targetRoom: "dome-feb",
            label: "Dome FEB",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-a",
    name: "Gedung A",
    description: "Gedung A FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Gedung A.jpg",
    rooms: [
      {
        id: "video-gedung-a",
        name: "Video Gedung A",
        panorama: "/images/panorama360/Gedung A/RUANG KELAS A, B, C.jpeg",
        hotspots: [],
        video:
          "https://res.cloudinary.com/tfdsnfgf/video/upload/v1784995288/Gedung-A_wtjrox.mp4",
      },
      {
        id: "ruang-kelas-a",
        name: "Ruang Kelas",
        panorama: "/images/panorama360/Gedung A/RUANG KELAS A, B, C.jpeg",
        hotspots: [
          {
            id: "to-podcast-a",
            position: { x: 25, y: -5, z: 20 },
            targetRoom: "podcast-room-a",
            label: "Podcast Room",
          },
        ],
      },
      {
        id: "podcast-room-a",
        name: "Podcast Room",
        panorama: "/images/panorama360/Gedung A/PODCAST ROOM.jpeg",
        hotspots: [
          {
            id: "to-ruang-kelas-a",
            position: { x: -25, y: -5, z: -20 },
            targetRoom: "ruang-kelas-a",
            label: "Ruang Kelas",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-b",
    name: "Gedung B",
    description: "Gedung B FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Gedung B(1).jpg",
    rooms: [
      {
        id: "video-gedung-b",
        name: "Video Gedung B",
        panorama: "/images/panorama360/Gedung B/LOBBY GEDUNG B.jpeg",
        hotspots: [],
        video:
          "https://res.cloudinary.com/tfdsnfgf/video/upload/v1784995841/Gedung-B_owdr63.mp4",
      },
      {
        id: "lobby-gedung-b",
        name: "Lobby Gedung B",
        panorama: "/images/panorama360/Gedung B/LOBBY GEDUNG B.jpeg",
        hotspots: [
          {
            id: "to-pojok-kemenkeu",
            position: { x: 30, y: -5, z: 10 },
            targetRoom: "pojok-kemenkeu-b",
            label: "Pojok Kemenkeu",
          },
          {
            id: "to-ruang-kelas-b",
            position: { x: -30, y: -5, z: 10 },
            targetRoom: "ruang-kelas-b",
            label: "Ruang Kelas",
          },
        ],
      },
      {
        id: "pojok-kemenkeu-b",
        name: "Pojok Kemenkeu",
        panorama: "/images/panorama360/Gedung B/POJOK KEMENKEU.jpeg",
        hotspots: [
          {
            id: "to-lobby-b",
            position: { x: -30, y: -5, z: -10 },
            targetRoom: "lobby-gedung-b",
            label: "Lobby Gedung B",
          },
        ],
      },
      {
        id: "ruang-kelas-b",
        name: "Ruang Kelas",
        panorama: "/images/panorama360/Gedung B/RUANG KELAS A, B, C.jpeg",
        hotspots: [
          {
            id: "to-lobby-b",
            position: { x: 30, y: -5, z: -10 },
            targetRoom: "lobby-gedung-b",
            label: "Lobby Gedung B",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-c",
    name: "Gedung C",
    description: "Gedung C FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Gedung C.jpg",
    rooms: [
      {
        id: "video-gedung-c",
        name: "Video Gedung C",
        panorama: "/images/panorama360/Gedung C/LOBBY GEDUNG C.jpeg",
        hotspots: [],
        video:
          "https://res.cloudinary.com/tfdsnfgf/video/upload/v1784995853/Gedung-C_o20f7w.mp4",
      },
      {
        id: "lobby-gedung-c",
        name: "Lobby Gedung C",
        panorama: "/images/panorama360/Gedung C/LOBBY GEDUNG C.jpeg",
        hotspots: [
          {
            id: "to-hall-c",
            position: { x: 25, y: -5, z: 20 },
            targetRoom: "hall-gedung-c",
            label: "Hall Gedung C",
          },
        ],
      },
      {
        id: "hall-gedung-c",
        name: "Hall Gedung C",
        panorama: "/images/panorama360/Gedung C/HALL GEDUNG C.jpeg",
        hotspots: [
          {
            id: "to-lobby-c",
            position: { x: -25, y: -5, z: -20 },
            targetRoom: "lobby-gedung-c",
            label: "Lobby Gedung C",
          },
          {
            id: "to-ruang-kelas-c",
            position: { x: 30, y: -5, z: 10 },
            targetRoom: "ruang-kelas-c",
            label: "Ruang Kelas",
          },
          {
            id: "to-kantin-c",
            position: { x: -30, y: -5, z: 10 },
            targetRoom: "kantin-feb-c",
            label: "Kantin FEB",
          },
        ],
      },
      {
        id: "ruang-kelas-c",
        name: "Ruang Kelas",
        panorama: "/images/panorama360/Gedung C/RUANG KELAS A, B, C.jpeg",
        hotspots: [
          {
            id: "to-hall-c",
            position: { x: -30, y: -5, z: -10 },
            targetRoom: "hall-gedung-c",
            label: "Hall Gedung C",
          },
        ],
      },
      {
        id: "kantin-feb-c",
        name: "Kantin FEB",
        panorama: "/images/panorama360/Gedung C/KANTIN FEB.jpeg",
        hotspots: [
          {
            id: "to-hall-c",
            position: { x: 30, y: -5, z: -10 },
            targetRoom: "hall-gedung-c",
            label: "Hall Gedung C",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-iup",
    name: "Gedung IUP",
    description: "Gedung IUP FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Gedung IUP(3).jpg",
    rooms: [
      {
        id: "video-gedung-iup",
        name: "Video Gedung IUP",
        panorama: "/images/panorama360/Gedung IUP/LOBBY IUP.jpeg",
        hotspots: [],
        video:
          "https://res.cloudinary.com/tfdsnfgf/video/upload/v1784995839/Gedung-IUP_ehzi1p.mp4",
      },
      {
        id: "lobby-iup",
        name: "Lobby IUP",
        panorama: "/images/panorama360/Gedung IUP/LOBBY IUP.jpeg",
        hotspots: [
          {
            id: "to-digilib-iup",
            position: { x: 25, y: -5, z: 15 },
            targetRoom: "digilib-iup",
            label: "Digilib",
          },
          {
            id: "to-bloomberg-iup",
            position: { x: -25, y: -5, z: 15 },
            targetRoom: "bloomberg-iup",
            label: "Bloomberg",
          },
        ],
      },
      {
        id: "digilib-iup",
        name: "Digilib",
        panorama: "/images/panorama360/Gedung IUP/DIGILIB.jpeg",
        hotspots: [
          {
            id: "to-lobby-iup",
            position: { x: -25, y: -5, z: -15 },
            targetRoom: "lobby-iup",
            label: "Lobby IUP",
          },
          {
            id: "to-lab-kom-iup",
            position: { x: 25, y: -5, z: 20 },
            targetRoom: "lab-kom-iup",
            label: "Lab Komputer",
          },
        ],
      },
      {
        id: "bloomberg-iup",
        name: "Bloomberg",
        panorama: "/images/panorama360/Gedung IUP/BLOOMBERG.jpeg",
        hotspots: [
          {
            id: "to-lobby-iup",
            position: { x: 25, y: -5, z: -15 },
            targetRoom: "lobby-iup",
            label: "Lobby IUP",
          },
        ],
      },
      {
        id: "lab-kom-iup",
        name: "Lab Komputer",
        panorama: "/images/panorama360/Gedung IUP/LAB.KOM .jpeg",
        hotspots: [
          {
            id: "to-digilib-iup",
            position: { x: -25, y: -5, z: -20 },
            targetRoom: "digilib-iup",
            label: "Digilib",
          },
          {
            id: "to-lab-upk-iup",
            position: { x: 20, y: -5, z: 20 },
            targetRoom: "lab-upk-iup",
            label: "Lab UPK",
          },
        ],
      },
      {
        id: "lab-upk-iup",
        name: "Lab UPK",
        panorama: "/images/panorama360/Gedung IUP/LAB UPK.jpeg",
        hotspots: [
          {
            id: "to-lab-kom-iup",
            position: { x: -20, y: -5, z: -20 },
            targetRoom: "lab-kom-iup",
            label: "Lab Komputer",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-kwu",
    name: "Gedung KWU",
    description: "Gedung Kewirausahaan FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Lab KWU(2).jpg",
    rooms: [
      {
        id: "video-gedung-kwu",
        name: "Video Gedung Lab KWU",
        panorama: "/images/panorama360/Lab. KWU/HALL KWU.jpeg",
        hotspots: [],
        video:
          "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+Lab+KWU.mp4",
      },
      {
        id: "hall-kwu",
        name: "Hall KWU",
        panorama: "/images/panorama360/Lab. KWU/HALL KWU.jpeg",
        hotspots: [
          {
            id: "to-the-inspiration-space",
            position: { x: 25, y: -5, z: 20 },
            targetRoom: "the-inspiration-space",
            label: "The Inspiration Space",
          },
          {
            id: "to-galeri-investasi",
            position: { x: -25, y: -5, z: 20 },
            targetRoom: "galeri-investasi-kwu",
            label: "Galeri Investasi",
          },
          {
            id: "to-toilet-kwu",
            position: { x: 0, y: -5, z: -30 },
            targetRoom: "toilet-kwu",
            label: "Toilet",
          },
        ],
      },
      {
        id: "the-inspiration-space",
        name: "The Inspiration Space",
        panorama: "/images/panorama360/Lab. KWU/THE INSPIRATION SPACE.jpeg",
        hotspots: [
          {
            id: "to-hall-kwu",
            position: { x: -25, y: -5, z: -20 },
            targetRoom: "hall-kwu",
            label: "Hall KWU",
          },
          {
            id: "to-inside-inspiration-space",
            position: { x: 25, y: -5, z: 20 },
            targetRoom: "inside-inspiration-space",
            label: "Inside Inspiration Space",
          },
        ],
      },
      {
        id: "inside-inspiration-space",
        name: "Inside The Inspiration Space",
        panorama: "/images/panorama360/Lab. KWU/INSIDE THE INSPIRATION SPACE.jpeg",
        hotspots: [
          {
            id: "to-the-inspiration-space",
            position: { x: -25, y: -5, z: -20 },
            targetRoom: "the-inspiration-space",
            label: "The Inspiration Space",
          },
        ],
      },
      {
        id: "galeri-investasi-kwu",
        name: "Galeri Investasi",
        panorama: "/images/panorama360/Lab. KWU/GALERI INVESTASI.jpeg",
        hotspots: [
          {
            id: "to-hall-kwu",
            position: { x: 25, y: -5, z: -20 },
            targetRoom: "hall-kwu",
            label: "Hall KWU",
          },
        ],
      },
      {
        id: "toilet-kwu",
        name: "Toilet KWU",
        panorama: "/images/panorama360/Lab. KWU/TOILET.jpeg",
        hotspots: [
          {
            id: "to-hall-kwu",
            position: { x: 0, y: -5, z: 30 },
            targetRoom: "hall-kwu",
            label: "Hall KWU",
          },
        ],
      },
    ],
  },
  {
    id: "dekanat",
    name: "Dekanat",
    description: "Gedung Dekanat FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Dekanat.jpg",
    rooms: [
      {
        id: "pintu-utama-dekanat",
        name: "Pintu Utama Dekanat",
        panorama: "/images/panorama360/Gedung Dekanat/PINTU UTAMA DEKANAT.jpeg",
        hotspots: [
          {
            id: "to-lobby-dekanat",
            position: { x: 20, y: -5, z: 25 },
            targetRoom: "lobby-dekanat",
            label: "Lobby Dekanat",
          },
        ],
      },
      {
        id: "lobby-dekanat",
        name: "Lobby Dekanat",
        panorama: "/images/panorama360/Gedung Dekanat/LOBBY DEKANAT.jpeg",
        hotspots: [
          {
            id: "to-pintu-utama",
            position: { x: -20, y: -5, z: -25 },
            targetRoom: "pintu-utama-dekanat",
            label: "Pintu Utama Dekanat",
          },
          {
            id: "to-hall-pertamina",
            position: { x: 25, y: -5, z: 20 },
            targetRoom: "hall-pertamina-dekanat",
            label: "Hall Pertamina",
          },
        ],
      },
      {
        id: "hall-pertamina-dekanat",
        name: "Hall Pertamina",
        panorama: "/images/panorama360/Gedung Dekanat/HALL PERTAMINA.jpeg",
        hotspots: [
          {
            id: "to-lobby-dekanat",
            position: { x: -25, y: -5, z: -20 },
            targetRoom: "lobby-dekanat",
            label: "Lobby Dekanat",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-pkm",
    name: "Gedung PKM",
    description: "Gedung PKM FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Gedung PKM ( Fasilitas ).jpg",
    rooms: [
      {
        id: "video-gedung-pkm",
        name: "Video Gedung PKM",
        panorama: "/images/panorama360/Gedung PKM/HALL PKM.jpeg",
        hotspots: [],
        video:
          "https://res.cloudinary.com/tfdsnfgf/video/upload/v1784995289/Gedung-PKM_fqjioh.mp4",
      },
      {
        id: "hall-pkm",
        name: "Hall PKM",
        panorama: "/images/panorama360/Gedung PKM/HALL PKM.jpeg",
        hotspots: [
          {
            id: "to-koperasi-pkm",
            position: { x: 25, y: -5, z: 20 },
            targetRoom: "koperasi-pkm",
            label: "Koperasi PKM",
          },
        ],
      },
      {
        id: "koperasi-pkm",
        name: "Koperasi PKM",
        panorama: "/images/panorama360/Gedung PKM/KOPERASI PKM.jpeg",
        hotspots: [
          {
            id: "to-hall-pkm",
            position: { x: -25, y: -5, z: -20 },
            targetRoom: "hall-pkm",
            label: "Hall PKM",
          },
        ],
      },
    ],
  },
];

export const subBuildingData = {};
