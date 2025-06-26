// Hardcoded best beginner videos for each topic
const beginnerVideos = [
  {
    topic: "HTML",
    videos: [
      {
        title: "HTML Full Course for Beginners | Complete All-in-One Tutorial",
        url: "https://www.youtube.com/watch?v=mJgBOIoGihA",
        videoId: "mJgBOIoGihA",
      },
      {
        title: "HTML Tutorial for Beginners: HTML Crash Course",
        url: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
        videoId: "qz0aGYrrlhU",
      },
    ],
  },
  {
    topic: "CSS",
    videos: [
      {
        title: "CSS Full Course for Beginners | Complete All-in-One Tutorial",
        url: "https://www.youtube.com/watch?v=n4R2E7O-Ngo",
        videoId: "n4R2E7O-Ngo",
      },
      {
        title: "CSS Tutorial – Full Course for Beginners",
        url: "https://www.youtube.com/watch?v=OXGznpKZ_sA",
        videoId: "OXGznpKZ_sA",
      },
    ],
  },
  {
    topic: "JavaScript",
    videos: [
      {
        title: "Learn JavaScript - Full Course for Beginners",
        url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        videoId: "PkZNo7MFNFg",
      },
      // {
      //   title: "JavaScript Tutorial Full Course - Beginner to Pro",
      //   url: "https://www.youtube.com/watch?v=EerdGm-ehJQ",
      //   videoId: "EerdGm-ehJQ",
      // },
    ],
  },
    {
    topic: "GitHub",
    videos: [
      {
        title: "Git and GitHub for Beginners - Crash Course",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        videoId: "RGOj5yH7evk",
      },
      // Add another beginner GitHub video if desired
    ],
  },
  {
    topic: "Node.js",
    videos: [
      {
        title:
          "Node.js Full Course for Beginners | Complete All-in-One Tutorial",
        url: "https://www.youtube.com/watch?v=f2EqECiTBL8",
        videoId: "f2EqECiTBL8",
      },
      {
        title: "Node.js Tutorial for Beginners: Learn Node in 1 Hour",
        url: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
        videoId: "TlB_eWDSMt4",
      },
    ],
  },
  {
    topic: "Express.js",
    videos: [
      {
        title: "Express JS Tutorial For Beginners",
        url: "https://www.youtube.com/playlist?list=PLp50dWW_m40Vruw9uKGNqySCNFLXK5YiO",
        videoId: null, // Playlist, not a single video
      },
      {
        title: "Express.js & Node.js Course for Beginners - Full Tutorial",
        url: "https://www.youtube.com/watch?v=G8uL0lFFoN0",
        videoId: "G8uL0lFFoN0",
      },
    ],
  },
  {
    topic: "React",
    videos: [
      {
        title:
          "React JS Full Course for Beginners | Complete All-in-One Tutorial",
        url: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        videoId: "Ke90Tje7VS0",
      },
      {
        title: "React JS Crash Course for Beginners",
        url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
        videoId: "w7ejDZ8SWv8",
      },
    ],
  },
  {
    topic: "MongoDB",
    videos: [
      {
        title: "MongoDB Tutorial For Beginners | Full Course",
        url: "https://www.youtube.com/watch?v=Www6cTUymCY",
        videoId: "Www6cTUymCY",
      },
      {
        title: "MongoDB Tutorial for Beginners - Full Course",
        url: "https://www.youtube.com/watch?v=z4YKd8n1cKU",
        videoId: "z4YKd8n1cKU",
      },
    ],
  },
];

// Hardcoded best intermediate videos for each topic (all links are available)
const intermediateVideos = [
  {
    topic: "HTML",
    videos: [
      {
        title: "HTML5 Tutorial for Beginners: Complete HTML5 Course",
        url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
        videoId: "UB1O30fR-EE",
        description: "A full HTML5 course with intermediate concepts.",
      },
    ],
  },
  {
    topic: "CSS",
    videos: [
      {
        title: "CSS Grid Tutorial",
        url: "https://www.youtube.com/watch?v=rg7Fvvl3taU",
        videoId: "rg7Fvvl3taU",
        description: "Learn CSS Grid in depth.",
      },
      {
        title: "Flexbox CSS In Depth",
        url: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
        videoId: "JJSoEo8JSnc",
        description: "Master Flexbox for responsive layouts.",
      },
    ],
  },
  {
    topic: "JavaScript",
    videos: [
      {
        title: "JavaScript ES6 Tutorial",
        url: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
        videoId: "NCwa_xi0Uuc",
        description: "Learn modern JavaScript features (ES6+).",
      },
      {
        title: "JavaScript Higher Order Functions & Arrays",
        url: "https://www.youtube.com/watch?v=rRgD1yVwIvE",
        videoId: "rRgD1yVwIvE",
        description: "Intermediate JavaScript concepts.",
      },
    ],
  },
    {
    topic: "GitHub",
    videos: [
      {
        title: "Intermediate Git and GitHub",
        url: "https://www.youtube.com/watch?v=qsTthZi23VE", // Example video
        videoId: "qsTthZi23VE",
        description: "Branching, merging, and collaboration with GitHub.",
      },
    ],
  },
  {
    topic: "Node.js",
    videos: [
      {
        title: "Node.js Crash Course",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        videoId: "fBNz5xF-Kx4",
        description: "Intermediate Node.js concepts and building REST APIs.",
      },
    ],
  },
  {
    topic: "Express.js",
    videos: [
      {
        title: "Express.js Crash Course",
        url: "https://www.youtube.com/watch?v=L72fhGm1tfE",
        videoId: "L72fhGm1tfE",
        description: "Intermediate Express.js concepts.",
      },
    ],
  },
  {
    topic: "MongoDB",
    videos: [
      {
        title: "MongoDB Tutorial for Beginners (Intermediate)",
        url: "https://www.youtube.com/watch?v=ofme2o29ngU",
        videoId: "ofme2o29ngU",
        description: "Intermediate MongoDB concepts and CRUD operations.",
      },
    ],
  },
  {
    topic: "React",
    videos: [
      {
        title: "React State Management – Intermediate JavaScript Course",
        url: "https://www.youtube.com/watch?v=35lXWvCuM8o",
        videoId: "35lXWvCuM8o",
        description: "Understand state management in React applications.",
      },
    ],
  },
];

// Hardcoded best advanced videos for each topic
const advancedVideos = [
  {
    topic: "HTML & CSS",
    videos: [
      {
        title: "Responsive Web Design Advanced CSS and HTML5",
        url: "https://www.youtube.com/watch?v=srvUrASNj0s",
        videoId: "srvUrASNj0s",
        description: "Advanced responsive design techniques.",
      },
    ],
  },
  {
    topic: "JavaScript",
    videos: [
      {
        title: "JavaScript Design Patterns",
        url: "https://www.youtube.com/watch?v=tv-_1er1mWI",
        videoId: "tv-_1er1mWI",
        description: "Advanced JavaScript design patterns.",
      },
      {
        title: "Asynchronous JavaScript Deep Dive",
        url: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        videoId: "PoRJizFvM7s",
        description: "Promises, async/await, and advanced async patterns.",
      },
    ],
  },
    {
    topic: "GitHub",
    videos: [
      {
        title: "Advanced Git: Rebase, Cherry-pick, Reflog",
        url: "https://www.youtube.com/watch?v=tW_F72WT2XU", // Example video
        videoId: "tW_F72WT2XU",
        description: "Master advanced Git commands and GitHub workflows.",
      },
    ],
  },
  {
    topic: "Node.js",
    videos: [
      {
        title: "Node.js Streams and Buffer",
        url: "https://www.youtube.com/watch?v=U3aXWizDbQ4",
        videoId: "U3aXWizDbQ4",
        description: "Advanced Node.js concepts: streams and buffers.",
      },
    ],
  },
  {
    topic: "Express.js",
    videos: [
      {
        title: "Express.js Authentication & Authorization",
        url: "https://www.youtube.com/watch?v=2jqok-WgelI",
        videoId: "2jqok-WgelI",
        description: "JWT authentication and authorization in Express.js.",
      },
    ],
  },
  {
    topic: "React",
    videos: [
      {
        title: "React Performance Optimization",
        url: "https://www.youtube.com/watch?v=CUxH_rWSI1k",
        videoId: "CUxH_rWSI1k",
        description: "Advanced React performance techniques.",
      },
      {
        title: "React Testing with Jest and React Testing Library",
        url: "https://www.youtube.com/watch?v=ML5egqL3YFE",
        videoId: "ML5egqL3YFE",
        description: "Testing React apps with modern tools.",
      },
    ],
  },
  {
    topic: "MongoDB",
    videos: [
      {
        title: "MongoDB Aggregation Framework",
        url: "https://www.youtube.com/watch?v=Zp6Jp80Qz3g",
        videoId: "Zp6Jp80Qz3g",
        description: "Advanced data processing with MongoDB aggregation.",
      },
    ],
  },
];

// --- TAMIL FULLSTACK DATA (NEW) ---
const tamilBeginnerVideos = [
  {
    topic: "HTML (Tamil)",
    videos: [
      { title: "HTML Full Course in Tamil", url: "https://youtu.be/FYErehuSuuw?si=3499uJTbH8c4FFer", videoId: "FYErehuSuuw" },
    ],
  },
  {
    topic: "CSS (Tamil)",
    videos: [
      { title: "CSS Full Course in Tamil", url: "https://youtu.be/vfs1wBDoqBY?si=dlPD4WBgbfQrl1di", videoId: "vfs1wBDoqBY" },
    ],
  },
  {
    topic: "JavaScript (Tamil)",
    videos: [
      { title: "JavaScript Full Course in Tamil", url: "https://youtu.be/poo0BXryffI?si=tDIgIqfDu_Wnju2Q", videoId: "poo0BXryffI" },
    ],
  },
  {
    topic: "React (Tamil)",
    videos: [
      { title: "React JS Full Course in Tamil", url: "https://youtu.be/Uv7cKlZFXU8?si=ESCYOscfpJnuKBAt", videoId: "Uv7cKlZFXU8" },
    ],
  },
  {
    topic: "Node.js (Tamil)",
    videos: [
      { title: "Node JS Full Course in Tamil", url: "https://youtu.be/SdyzXQoQO18?si=zDCaKNpMqeX17fG5", videoId: "SdyzXQoQO18" },
    ],
  },
  {
    topic: "MongoDB (Tamil)",
    videos: [
      { title: "MongoDB Full Course in Tamil", url: "https://youtu.be/CKaywM2qXpo?si=Tlvh5_kRcmzc9yne", videoId: "CKaywM2qXpo" },
    ],
  },
];

const tamilIntermediateVideos = [
  {
    topic: "HTML",
    videos: [
      {
        title: "HTML5 Tutorial for Beginners: Complete HTML5 Course",
        url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
        videoId: "UB1O30fR-EE",
        description: "A full HTML5 course with intermediate concepts.",
      },
    ],
  },
  {
    topic: "CSS",
    videos: [
      {
        title: "CSS Grid Tutorial",
        url: "https://www.youtube.com/watch?v=rg7Fvvl3taU",
        videoId: "rg7Fvvl3taU",
        description: "Learn CSS Grid in depth.",
      },
      {
        title: "Flexbox CSS In Depth",
        url: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
        videoId: "JJSoEo8JSnc",
        description: "Master Flexbox for responsive layouts.",
      },
    ],
  },
  {
    topic: "JavaScript",
    videos: [
      {
        title: "JavaScript ES6 Tutorial",
        url: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
        videoId: "NCwa_xi0Uuc",
        description: "Learn modern JavaScript features (ES6+).",
      },
      {
        title: "JavaScript Higher Order Functions & Arrays",
        url: "https://www.youtube.com/watch?v=rRgD1yVwIvE",
        videoId: "rRgD1yVwIvE",
        description: "Intermediate JavaScript concepts.",
      },
    ],
  },
    {
    topic: "GitHub",
    videos: [
      {
        title: "Intermediate Git and GitHub",
        url: "https://www.youtube.com/watch?v=qsTthZi23VE", // Example video
        videoId: "qsTthZi23VE",
        description: "Branching, merging, and collaboration with GitHub.",
      },
    ],
  },
  {
    topic: "Node.js",
    videos: [
      {
        title: "Node.js Crash Course",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        videoId: "fBNz5xF-Kx4",
        description: "Intermediate Node.js concepts and building REST APIs.",
      },
    ],
  },
  {
    topic: "Express.js",
    videos: [
      {
        title: "Express.js Crash Course",
        url: "https://www.youtube.com/watch?v=L72fhGm1tfE",
        videoId: "L72fhGm1tfE",
        description: "Intermediate Express.js concepts.",
      },
    ],
  },
  {
    topic: "MongoDB",
    videos: [
      {
        title: "MongoDB Tutorial for Beginners (Intermediate)",
        url: "https://www.youtube.com/watch?v=ofme2o29ngU",
        videoId: "ofme2o29ngU",
        description: "Intermediate MongoDB concepts and CRUD operations.",
      },
    ],
  },
  {
    topic: "React",
    videos: [
      {
        title: "React State Management – Intermediate JavaScript Course",
        url: "https://www.youtube.com/watch?v=35lXWvCuM8o",
        videoId: "35lXWvCuM8o",
        description: "Understand state management in React applications.",
      },
    ],
  },
];

const tamilAdvancedVideos = [
  {
    topic: "HTML & CSS",
    videos: [
      {
        title: "Responsive Web Design Advanced CSS and HTML5",
        url: "https://www.youtube.com/watch?v=srvUrASNj0s",
        videoId: "srvUrASNj0s",
        description: "Advanced responsive design techniques.",
      },
    ],
  },
  {
    topic: "JavaScript",
    videos: [
      {
        title: "JavaScript Design Patterns",
        url: "https://www.youtube.com/watch?v=tv-_1er1mWI",
        videoId: "tv-_1er1mWI",
        description: "Advanced JavaScript design patterns.",
      },
      {
        title: "Asynchronous JavaScript Deep Dive",
        url: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        videoId: "PoRJizFvM7s",
        description: "Promises, async/await, and advanced async patterns.",
      },
    ],
  },
    {
    topic: "GitHub",
    videos: [
      {
        title: "Advanced Git: Rebase, Cherry-pick, Reflog",
        url: "https://www.youtube.com/watch?v=tW_F72WT2XU", // Example video
        videoId: "tW_F72WT2XU",
        description: "Master advanced Git commands and GitHub workflows.",
      },
    ],
  },
  {
    topic: "Node.js",
    videos: [
      {
        title: "Node.js Streams and Buffer",
        url: "https://www.youtube.com/watch?v=U3aXWizDbQ4",
        videoId: "U3aXWizDbQ4",
        description: "Advanced Node.js concepts: streams and buffers.",
      },
    ],
  },
  {
    topic: "Express.js",
    videos: [
      {
        title: "Express.js Authentication & Authorization",
        url: "https://www.youtube.com/watch?v=2jqok-WgelI",
        videoId: "2jqok-WgelI",
        description: "JWT authentication and authorization in Express.js.",
      },
    ],
  },
  {
    topic: "React",
    videos: [
      {
        title: "React Performance Optimization",
        url: "https://www.youtube.com/watch?v=CUxH_rWSI1k",
        videoId: "CUxH_rWSI1k",
        description: "Advanced React performance techniques.",
      },
      {
        title: "React Testing with Jest and React Testing Library",
        url: "https://www.youtube.com/watch?v=ML5egqL3YFE",
        videoId: "ML5egqL3YFE",
        description: "Testing React apps with modern tools.",
      },
    ],
  },
  {
    topic: "MongoDB",
    videos: [
      {
        title: "MongoDB Aggregation Framework",
        url: "https://www.youtube.com/watch?v=Zp6Jp80Qz3g",
        videoId: "Zp6Jp80Qz3g",
        description: "Advanced data processing with MongoDB aggregation.",
      },
    ],
  },
];
// --- DATA SCIENCE DATA (NEW) ---
const dataScienceBeginnerVideos = [
  {
    topic: "Python Basics",
    videos: [
      { title: "Python for Beginners - Full Course", url: "https://www.youtube.com/watch?v=kqtD5dpn9C8", videoId: "kqtD5dpn9C8" },
      { title: "Python Crash Course", url: "https://www.youtube.com/watch?v=Z1Yd7upQsXY", videoId: "Z1Yd7upQsXY" },
    ],
  },
  {
    topic: "NumPy",
    videos: [
      { title: "NumPy Tutorial (and SciPy)", url: "https://www.youtube.com/watch?v=QUT1VHiLmmI", videoId: "QUT1VHiLmmI" },
    ],
  },
];
const dataScienceIntermediateVideos = [
  {
    topic: "Pandas",
    videos: [
      { title: "Pandas in 10 minutes", url: "https://www.youtube.com/watch?v=ZyhVh-qRZPA", videoId: "ZyhVh-qRZPA" },
      { title: "Pandas Full Course", url: "https://www.youtube.com/watch?v=gtjxAH8uaP0", videoId: "gtjxAH8uaP0" },
    ],
  },
];
const dataScienceAdvancedVideos = [
  {
    topic: "Machine Learning",
    videos: [
      { title: "Machine Learning Full Course", url: "https://www.youtube.com/watch?v=JcI5Vnw0b2c", videoId: "JcI5Vnw0b2c" },
    ],
  },
];

// --- TAMIL DATA SCIENCE DATA (NEW) ---
const dataScienceTamilBeginnerVideos = [
  {
    topic: "Python (Tamil)",
    videos: [
      { title: "Python Full Course in Tamil", url: "https://www.youtube.com/watch?v=m67-bOpOoPU", videoId: "m67-bOpOoPU" },
    ],
  },
  {
    topic: "NumPy (Tamil)",
    videos: [
      { title: "NumPy in Tamil", url: "https://youtu.be/wYLzXozu_iQ?si=r5jrgK2OvznEkvCX", videoId: "wYLzXozu_iQ" },
    ],
  },
];

const dataScienceTamilIntermediateVideos = [
    {
        topic: "Python (Tamil)",
        videos: [
            { title: "Python Intermediate Course in Tamil", url: "https://youtu.be/cGbytJvqyI8?si=Cp3lhs0h1xVJTO49", videoId: "cGbytJvqyI8" },
        ],
    },
    {
    topic: "Pandas (Tamil)",
    videos: [
      { title: "Pandas Full Course in Tamil", url: "https://youtu.be/389bW28m1I8?si=9Tqg5TR-YGEfI_9_", videoId: "389bW28m1I8" },
    ],
  },
];

const dataScienceTamilAdvancedVideos = [
  {
    topic: "Data Science (English)",
    videos: [
      { title: "Data Science Full Course in English", url: "https://youtu.be/ua-CiDNNj30?si=P5lRl8Mb8Tff3pOk", videoId: "ua-CiDNNj30" },
    ],
  },
];

// Main export structure
export const mainTopicsData = {
  "Fullstack": {
    key: "Fullstack",
    label: "Fullstack Web Dev",
    icon: "💻",
    description: "Master front-end and back-end development.",
    levels: {
      beginner: { value: "beginner", label: "Beginner", videos: beginnerVideos },
      intermediate: { value: "intermediate", label: "Intermediate", videos: intermediateVideos },
      advanced: { value: "advanced", label: "Advanced", videos: advancedVideos },
    },
  },
  "Fullstack (Tamil)": {
    key: "Fullstack (Tamil)",
    label: "Fullstack Web Dev (Tamil)",
    icon: "💻",
    description: "Master front-end and back-end development in Tamil.",
    levels: {
      beginner: { value: "beginner", label: "Beginner", videos: tamilBeginnerVideos },
      // For now, let's assume intermediate and advanced are empty or can be filled later
      intermediate: { value: "intermediate", label: "Intermediate", videos: tamilIntermediateVideos},
        advanced: { value: "advanced", label: "Advanced", videos: tamilAdvancedVideos },

    },
  },
  "Data Science": {
    key: "Data Science",
    label: "Data Science",
    icon: "📊",
    description: "Dive into data analysis, machine learning, and more.",
    levels: {
      beginner: { value: "beginner", label: "Beginner", videos: dataScienceBeginnerVideos },
      intermediate: { value: "intermediate", label: "Intermediate", videos: dataScienceIntermediateVideos },
      advanced: { value: "advanced", label: "Advanced", videos: dataScienceAdvancedVideos },
    },
  },
  "Data Science (Tamil)": {
    key: "Data Science (Tamil)",
    label: "Data Science (Tamil)",
    icon: "📊",
    description: "Dive into data analysis and machine learning in Tamil.",
    levels: {
      beginner: { value: "beginner", label: "Beginner", videos: dataScienceTamilBeginnerVideos },
      intermediate: { value: "intermediate", label: "Intermediate", videos: dataScienceTamilIntermediateVideos },
      advanced: { value: "advanced", label: "Advanced", videos: dataScienceTamilAdvancedVideos },
    },
  },
    "AI & ML": {
        key: "AI & ML",
        label: "AI & Machine Learning",
        icon: "🤖",
        description: "Explore artificial intelligence and machine learning.",
        levels: {
        beginner: { value: "beginner", label: "Beginner", videos: [] }, // Placeholder for now
        intermediate: { value: "intermediate", label: "Intermediate", videos: [] }, // Placeholder for now
        advanced: { value: "advanced", label: "Advanced", videos: [] }, // Placeholder for now
        },
    },  
};