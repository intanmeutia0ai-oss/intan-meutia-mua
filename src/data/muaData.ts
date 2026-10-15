export interface PortfolioItem {
  id: string;
  title: string;
  category: 'bridal' | 'adat' | 'wisuda' | 'editorial';
  categoryLabel: string;
  client: string;
  venue: string;
  date: string;
  description: string;
  lookDetails: {
    complexion: string;
    eyes: string;
    lips: string;
    highlights: string;
  };
  palette: string[];
  gradientTheme: string;
  accentColor: string;
  testimonialQuote?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  badge?: string;
  duration: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  event: string;
  date: string;
  venue: string;
  content: string;
  rating: number;
  lookType: string;
  avatarBg: string;
  initials: string;
}

export const MUA_PROFILE = {
  name: "Intan Meutia",
  credential: "S.Sn, C.MUA",
  title: "Professional Makeup Artist & Bridal Stylist",
  tagline: "Elegansi Abadi, Sentuhan Alami & Flawless",
  bio: "Spesialis tata rias pengantin adat nusantara dan modern bridal sejak 2017. Mengedepankan teknik complexion 'Seamless Flawless Skin' yang menonjolkan keunikan karakter wajah Anda secara anggun tanpa kesan dempul atau mengubah garis wajah alami.",
  experienceYears: 8,
  happyBrides: 850,
  clientSatisfaction: "4.98",
  location: "Banda Aceh dan sekitarnya",
  destinationAvailable: "Tersedia untuk Destinasi Seluruh Indonesia & Mancanegara",
  whatsappNumber: "6282183095451",
  whatsappDisplay: "+62 821-83095451",
  instagram: "@intnmeutia",
  email: "intanmeutia1442@gmail.com",
  certifications: [
    "Diploma in Professional Bridal Artistry — Puspita Martha International Beauty Academy",
    "Masterclass HD & Airbrush Bridal Techniques — Seoul & Singapore Beauty Summit",
    "Sertifikasi Ahli Rias Pengantin Adat Pakem — Tiara Kusuma Jawa Barat & DKI Jakarta",
    "Advanced Color Theory & High-Definition Complexion Master — Jakarta"
  ],
  luxuryBrands: [
    "Dior Backstage",
    "Chanel Beauty",
    "Charlotte Tilbury",
    "Tom Ford",
    "Laura Mercier",
    "NARS Cosmetics",
    "Estée Lauder Double Wear",
    "MAC Pro",
    "Shu Uemura",
    "Cle de Peau Beaute"
  ],
  hygieneCommitments: [
    {
      title: "Sterilisasi UV & Medis",
      desc: "Semua kuas, pinset, dan aplikator melalui proses pencucian antiseptik dan sterilisasi UV kabinet sebelum setiap klien."
    },
    {
      title: "Aplikator Sekali Pakai (Disposable)",
      desc: "Maskara wand, lip wand, spon bedak, dan cotton bud khusus sekali pakai untuk menjamin higienitas 100% mata dan bibir."
    },
    {
      title: "Stainless Steel Palette",
      desc: "Semua produk cair dan krim diambil menggunakan spatula stainless steel steril tanpa kontak langsung dengan kemasan."
    },
    {
      title: "Kulit Sensitif & Halal Friendly",
      desc: "Formula yang digunakan non-komedogenik, dermatologically-tested, ramah wudhu, dan aman untuk kulit sensitif atau berjerawat."
    }
  ]
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "aceh-mahkota-meutia",
    title: "Kemegahan Mahkota Pengantin Adat Aceh",
    category: "adat",
    categoryLabel: "Adat Nusantara",
    client: "Cut Meutia & Teuku Rizky",
    venue: "Hermes Palace Hotel, Banda Aceh",
    date: "Oktober 2026",
    description: "Riasan sakral adat Aceh bermahkota keemasan megah (Mahkota Aceh) berpadu dengan busana maroon velvet mewah bertabur kristal. Menampilkan kompleksi glass skin sempurna, riasan mata cut-crease berdimensi lembut, dan bibir rosy coral satin memikat.",
    lookDetails: {
      complexion: "Dewy Matte HD Foundation tahan 16 jam, poreless finish",
      eyes: "Soft cut-crease smokey brown, fluttery 3D lashes & grey-blue softlens",
      lips: "Rosy coral ombre satin dengan peptide hydrating gloss",
      highlights: "Luminous champagne pearl pada cheekbones dan tulang hidung"
    },
    palette: ["#E7C5B1", "#C47B62", "#8E4B3E", "#2B1A16"],
    gradientTheme: "from-[#F9EAE1] via-[#EBD0C3] to-[#D5A795]",
    accentColor: "#934B38",
    testimonialQuote: "Mba Intan bikin aku pangling luar biasa! Siger Sundanya terpasang kokoh tapi ga pusing, dan makeup-nya ga luntur sedikitpun dari akad jam 7 pagi sampai resepsi selesai malam hari."
  },
  {
    id: "modern-romance-amanda",
    title: "Modern Romantic Glass-Skin Bridal",
    category: "bridal",
    categoryLabel: "Bridal Modern",
    client: "Amanda & Nathan",
    venue: "Plataran Dharmawangsa, Jakarta Selatan",
    date: "Agustus 2026",
    description: "Tampilan pengantin internasional bernuansa romantic minimalist. Menampilkan pantulan cahaya kulit yang sehat, alis feathering natural, dan aksen bibir nude peach mewah.",
    lookDetails: {
      complexion: "Airbrushed ultra-light serum foundation with golden undertone",
      eyes: "Warm taupe shimmer with fine brown gel liner smudge",
      lips: "Velvet nude peach with hints of coral pink",
      highlights: "Liquid gold-veil illuminator blending effortlessly into skin"
    },
    palette: ["#F6ECE4", "#DDBCA0", "#A86D58", "#38251D"],
    gradientTheme: "from-[#FBF3ED] via-[#EBD9CD] to-[#D6B8A5]",
    accentColor: "#A86D58",
    testimonialQuote: "Rasanya ringan banget di muka kayak ga pakai makeup tebal, tapi pas difoto bener-bener glowing sempurna. Semua bridesmaid dan tamu memuji."
  },
  {
    id: "solo-putri-dinda",
    title: "Agung Paes Solo Putri Klasik",
    category: "adat",
    categoryLabel: "Adat Nusantara",
    client: "Dinda & Raden",
    venue: "Sasana Kriya, Taman Mini Indonesia Indah",
    date: "Juli 2026",
    description: "Tata rias tradisional Jawa Solo Putri berpakem luhur dengan lukisan cengkorongan paes yang presisi simetris, berpadu dengan kompleksi wajah yang cerah lembut dan anggun berwibawa.",
    lookDetails: {
      complexion: "Golden satin finish, waterproof, sweat-resistant sealer",
      eyes: "Alis menjangan simetris bertulang halus, gradasi cokelat tembaga",
      lips: "Classic royal crimson red bergradasi hangat",
      highlights: "Soft golden sheen terfokus pada titik tumpu wajah"
    },
    palette: ["#E8D3B9", "#B88344", "#7E2320", "#1C110F"],
    gradientTheme: "from-[#F4E9D8] via-[#E2CBAC] to-[#C99E6C]",
    accentColor: "#7E2320",
    testimonialQuote: "Tangan Mba Intan luar biasa teliti saat menggambar paes. Alis menjangan sangat presisi dan riasannya tahan air mata haru saat sungkeman."
  },
  {
    id: "minang-suntiang-rania",
    title: "Kemegahan Suntiang Minang Glamour",
    category: "adat",
    categoryLabel: "Adat Nusantara",
    client: "Rania & Farhan",
    venue: "The Ritz-Carlton Jakarta, Mega Kuningan",
    date: "Juni 2026",
    description: "Riasan megah adat Minang dengan suntiang emas bertingkat sembilan. Complexion anti-crack yang tahan sorotan lampu panggung dan kehangatan gaun songket berat.",
    lookDetails: {
      complexion: "High coverage matte velvety finish, sebum control formula",
      eyes: "Smokey winged eyeliner dengan bronze shimmer and deep contour",
      lips: "Warm brick terracotta nude dengan outline presisi",
      highlights: "Champagne highlight tahan kilap berlebih"
    },
    palette: ["#EAD8C7", "#D49B4D", "#8C3C2A", "#261510"],
    gradientTheme: "from-[#F5E6D3] via-[#E5C9A6] to-[#C7965E]",
    accentColor: "#8C3C2A",
    testimonialQuote: "Pakai suntiang seberat itu aman dan nyaman banget di kepala. Makeup tetap rapi tanpa creasing di bawah mata meski acara berlangsung panjang."
  },
  {
    id: "wisuda-spesialis-jessica",
    title: "High-Definition Wisuda & Formal Glam",
    category: "wisuda",
    categoryLabel: "Wisuda & Pesta",
    client: "dr. Jessica Tan, Sp.A",
    venue: "Balairung Universitas Indonesia, Depok",
    date: "Mei 2026",
    description: "Riasan wisuda elegan berdaya tahan 14 jam untuk prosesi outdoor & indoor. Tahan panas, tidak cakey di bawah terik matahari, dan photogenic di depan kamera ijazah.",
    lookDetails: {
      complexion: "Transferproof sweatproof matte finish, natural pores look",
      eyes: "Feminine rose gold shimmer dengan lash extension effect",
      lips: "Fresh soft petal pink matte yang awet dipakai makan",
      highlights: "Subtle healthy inner glow"
    },
    palette: ["#F9ECEB", "#E3ADB0", "#AC636B", "#381E23"],
    gradientTheme: "from-[#FBECEB] via-[#EBC8C7] to-[#D59FA3]",
    accentColor: "#AC636B",
    testimonialQuote: "Wisuda di gedung tanpa AC yang penuh sesak tetep aman terkendali! Makeup ga retak, ga luntur, foto studio bareng keluarga hasilnya luar biasa bagus."
  },
  {
    id: "editorial-nusantara-cahaya",
    title: "Editorial Cahaya Nusantara",
    category: "editorial",
    categoryLabel: "Editorial & Photoshoot",
    client: "Harper's Bazaar Indonesia Feature",
    venue: "Studio Papilion Kemang, Jakarta",
    date: "April 2026",
    description: "Konsep editorial fashion berfokus pada pantulan tekstur kulit kaca (glass skin), aksen garis mata grafis halus, dan sentuhan warna rempah tropis nusantara.",
    lookDetails: {
      complexion: "Ultra-hydrated glass skin finish with micro-fine mist",
      eyes: "Editorial brushed-up fluffy soap brows & metallic copper wash",
      lips: "Clear nourishing gloss over tinted cinnamon stain",
      highlights: "Wet-look high-intensity cheekbone illuminator"
    },
    palette: ["#F3E9DF", "#C69677", "#6E452C", "#1D130E"],
    gradientTheme: "from-[#F8EFE6] via-[#E7D0BC] to-[#C8A07E]",
    accentColor: "#6E452C"
  },
  {
    id: "intimate-akad-nadia",
    title: "Intimate Akad Pure Innocence",
    category: "bridal",
    categoryLabel: "Bridal Modern",
    client: "Nadia & Ilham",
    venue: "Masjid Agung Sunda Kelapa, Menteng",
    date: "Maret 2026",
    description: "Sentuhan riasan sakral bernuansa lembut untuk akad nikah intimate. Mengutamakan kesan sejuk, anggun, wudhu-friendly prep, serta hijab styling lipit sutra rapi.",
    lookDetails: {
      complexion: "Luminous mineral veil foundation, breathable pores",
      eyes: "Soft nude pink lid with thin baby-wing lashline tightlining",
      lips: "Moisturizing nude mauve stain",
      highlights: "Gentle morning sun glow on bridge of nose and brow bone"
    },
    palette: ["#F8EFE9", "#DFC1B0", "#9C6B5A", "#2E1B15"],
    gradientTheme: "from-[#FAF1EB] via-[#EBD2C5] to-[#D4AEA0]",
    accentColor: "#9C6B5A",
    testimonialQuote: "Ibu mertua sampai terharu waktu liat aku masuk ke masjid. Riasannya sangat syahdu, tidak berlebihan tapi memancarkan aura pengantin sesungguhnya."
  },
  {
    id: "prewedding-cinematic-bella",
    title: "Cinematic Sunset Prewedding Look",
    category: "editorial",
    categoryLabel: "Editorial & Photoshoot",
    client: "Bella & Jonathan",
    venue: "Taman Budaya Sentul & Pine Forest",
    date: "Februari 2026",
    description: "Makeup outdoor tahan angin dan kelembaban alam terbuka dengan rona sunset warm bronze yang membaur indah dengan pencahayaan golden hour fotografi.",
    lookDetails: {
      complexion: "Water-resistant radiant finish with longwear silicone primer",
      eyes: "Golden amber shimmer with smudgeproof chocolate brown liner",
      lips: "Warm apricot peach satin with plumping gloss",
      highlights: "Golden hour reflection enhancer on collarbones and shoulders"
    },
    palette: ["#FCEFE2", "#E8B88A", "#9F5B2D", "#29160B"],
    gradientTheme: "from-[#FDF3EA] via-[#F2D0B0] to-[#DC9D67]",
    accentColor: "#9F5B2D"
  }
];

export const SERVICE_PACKAGES: PackageItem[] = [
  {
    id: "korean-glow-graduation",
    name: "Korean Glow Graduation",
    subtitle: "Rias wisuda dan sidang dengan konsep natural, segar, dan tahan seharian",
    price: "Rp 250.000",
    badge: "Wisuda & Sidang",
    duration: "1–2 jam layanan",
    features: [
      "1x Makeup wisuda/sidang konsep Korean Glow",
      "Hairdo simpel atau hijab styling rapi",
      "Bulu mata natural dan softlens sesuai kebutuhan",
      "Aksesori rambut sederhana (jika diperlukan)",
      "Konsultasi makeup sebelum acara",
      "Mini touch-up kit untuk dibawa sendiri"
    ],
    recommendedFor: "Cocok untuk wisuda universitas, sekolah, sidang sarjana, atau acara formal di Banda Aceh dan sekitarnya."
  },
  {
    id: "intimate-akad",
    name: "Intimate Akad",
    subtitle: "Rias pengantin untuk satu sesi akad nikah",
    price: "Rp 1.500.000",
    badge: "01 · Basic Package",
    duration: "3–4 jam layanan",
    features: [
      "1× Makeup pengantin akad",
      "Hairdo atau hijab styling",
      "Bulu mata dan softlens sesuai kebutuhan",
      "Aksesori rambut sederhana",
      "Konsultasi makeup sebelum acara",
      "Touch-up ringan sebelum sesi foto"
    ],
    recommendedFor: "Cocok untuk akad di rumah, masjid, atau acara intimate."
  },
  {
    id: "intimate-akad-holy-matrimony",
    name: "Intimate Akad & Holy Matrimony",
    subtitle: "Rias elegan dengan persiapan yang lebih lengkap",
    price: "Rp 2.500.000",
    badge: "02 · Signature Package",
    duration: "4–5 jam layanan",
    features: [
      "1× Makeup pengantin akad",
      "Hairdo atau hijab styling elegan",
      "Softlens dan bulu mata premium",
      "Aksesori rambut sesuai konsep",
      "Konsultasi makeup dan shade matching",
      "Touch-up selama sesi acara",
      "Emergency touch-up kit sederhana"
    ],
    recommendedFor: "Cocok untuk akad dengan konsep elegan dan dokumentasi profesional."
  },
  {
    id: "royal-bridal-signature",
    name: "Royal Bridal Signature",
    subtitle: "Paket akad dan resepsi dengan layanan premium",
    price: "Rp 5.500.000",
    badge: "Pilihan Pengantin Favorit",
    duration: "Standby hingga 8 jam",
    features: [
      "1× Rias pengantin akad",
      "1× Ganti rias untuk resepsi",
      "Hairdo atau hijab styling pengantin",
      "Aksesori pengantin sesuai konsep",
      "Softlens dan bulu mata premium",
      "Konsultasi makeup sebelum acara",
      "1× Rias ibu pengantin",
      "Emergency touch-up kit"
    ],
    recommendedFor: "Cocok untuk pernikahan dengan rangkaian akad dan resepsi.",
    isPopular: true
  },
  {
    id: "royal-adat-aceh-nusantara",
    name: "Royal Adat Aceh & Nusantara",
    subtitle: "Paket rias tradisional untuk momen istimewa",
    price: "Rp 8.500.000",
    badge: "04 · Traditional Luxury",
    duration: "Standby hingga 8 jam bersama tim rias",
    features: [
      "Rias pengantin akad dan resepsi",
      "Makeup dengan konsep adat Aceh atau Nusantara",
      "Styling sunting dan aksesori adat sesuai kesepakatan",
      "Penyesuaian makeup untuk sesi foto",
      "1× Rias ibu pengantin",
      "Touch-up selama durasi paket",
      "Konsultasi konsep rias dan aksesori",
      "Koordinasi dengan tim busana"
    ],
    recommendedFor: "Cocok untuk pengantin yang menginginkan tampilan adat yang anggun dan berkesan."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-1",
    clientName: "Adisti Wardhani & Dimas",
    event: "Pernikahan Adat Sunda Siger",
    date: "September 2026",
    venue: "InterContinental Pondok Indah",
    content: "Mba Intan bener-bener penyelamat di hari pernikahanku! Kulitku tipikal gampang berminyak dan ada bekas jerawat, tapi disulap jadi sehalus porselen tanpa rasa tebal atau dempul. Sampai malam resepsi ga ada retak sedikitpun. Keluarga dan mertua kagum banget liat aura pengantinku.",
    rating: 5,
    lookType: "Sunda Siger Modern",
    avatarBg: "bg-amber-100 text-amber-800",
    initials: "AW"
  },
  {
    id: "testi-2",
    clientName: "Nadia Safira & Nathan",
    event: "International Romantic Wedding",
    date: "Agustus 2026",
    venue: "Plataran Dharmawangsa",
    content: "Dari awal sesi trial makeup, Mba Intan orangnya super humble dan perhatian banget sama detail. Beliau merawat kulitku dengan skin prep yang enak banget aromanya. Wajah rasanya adem dan riasan mata soft glam-nya bener-bener juara kelas atas. Best MUA di Jakarta!",
    rating: 5,
    lookType: "Modern Glass Skin",
    avatarBg: "bg-rose-100 text-rose-800",
    initials: "NS"
  },
  {
    id: "testi-3",
    clientName: "dr. Clara Anindita",
    event: "Wisuda Dokter Spesialis FKUI",
    date: "Juli 2026",
    venue: "Balairung UI Depok",
    content: "Sudah langganan sama Mba Intan dari waktu wisuda dokter umum, dan sekarang wisuda spesialis tetap pilih Mba Intan. Udara panas terik outdoor sama sekali ga bikin riasannya meleleh atau berminyak. Foto studio bareng keluarga hasilnya flawless banget!",
    rating: 5,
    lookType: "HD Graduation Glam",
    avatarBg: "bg-emerald-100 text-emerald-800",
    initials: "CA"
  },
  {
    id: "testi-4",
    clientName: "Putri Handayani & Farhan",
    event: "Pernikahan Adat Minang Suntiang",
    date: "Juni 2026",
    venue: "The Ritz-Carlton Mega Kuningan",
    content: "Awalnya khawatir suntiang minang yang berat bakal bikin kepala sakit dan makeup luntur karena gerah. Tapi teknik pasak dan sanggul Mba Intan rapi banget, ringan dan seimbang. Riasan bibir terracotta dan riasan matanya luar biasa mewah!",
    rating: 5,
    lookType: "Minang Suntiang Luxury",
    avatarBg: "bg-stone-200 text-stone-800",
    initials: "PH"
  }
];

export const FAQ_ITEMS = [
  {
    q: "Berapa bulan sebelum acara saya sebaiknya melakukan booking jadwal?",
    a: "Sangat disarankan melakukan reservasi 4 hingga 8 bulan sebelum hari H, terutama untuk tanggal-tanggal cantik dan akhir pekan musim pernikahan (Mei-Desember) karena slot tanggal hanya menerima maksimal 1–2 pengantin per hari demi menjaga kualitas dan fokus layanan."
  },
  {
    q: "Apakah Intan Meutia melayani rias di luar kota / luar pulau?",
    a: "Ya, kami melayani home service dan destination wedding di seluruh wilayah Indonesia (Bali, Yogyakarta, Surabaya, Medan, Makassar, dll) maupun luar negeri. Biaya akomodasi dan tiket transportasi ditanggung oleh pihak pengantin."
  },
  {
    q: "Apakah sudah termasuk trial makeup dan konsultasi kulit?",
    a: "Untuk Paket Royal Bridal dan Paket Adat Nusantara sudah termasuk sesi 1x Trial Makeup dan konsultasi intensif skin prep H-14 di studio. Untuk paket lain, sesi trial dapat ditambahkan sesuai kebutuhan."
  },
  {
    q: "Bagaimana dengan higienitas kuas dan produk yang dipakai?",
    a: "Higienitas adalah prioritas mutlak kami. Setiap kuas disterilisasi dengan sinar UV dan cairan antiseptik medis. Aplikator maskara dan bibir menggunakan disposable wand (sekali pakai langsung buang). Produk krim diambil dengan spatula stainless steril."
  },
  {
    q: "Bagaimana cara melakukan pembayaran dan penguncian tanggal?",
    a: "Penguncian tanggal (lock date) dilakukan dengan DP awal sebesar 30%. Sisa pelunasan dapat diselesaikan H-7 sebelum hari acara."
  }
];
