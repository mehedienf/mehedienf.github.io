export const portfolioData = {
  hero: {
    name: "Mehadi Anam Nerjhor",
    role: "Full Stack Software Developer",
    tagline:
      "Building elegant software with clean code. Driven by curiosity, dedicated to solving real-world problems through modern tech stack.",
    image: "/images/my/me.jpg",
    resumeLink: "#",
    greeting: "Hello, I am",
  },
  about: {
    description:
      "I am a passionate developer with a love for creating beautiful and functional web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies and learning new skills.",
    skillsCategories: [
      {
        title: "Programming Languages",
        icon: "bi-braces",
        description: "Core languages for software development and algorithms.",
        skills: [
          {
            name: "C / C++",
            level: "Proficient",
            icon: "bi-terminal",
          },
          { name: "Java", level: "Proficient", icon: "bi-filetype-java" },
          { name: "C#", level: "Proficient", icon: "bi-file-earmark-code" },
          { name: "Dart", level: "Proficient", icon: "bi-code-square" },
          {
            name: "JavaScript (ES6+)",
            level: "Advanced",
            icon: "bi-filetype-js",
          },
          { name: "TypeScript", level: "Advanced", icon: "bi-code-slash" },
          { name: "Python", level: "Proficient", icon: "bi-filetype-py" },
        ],
      },
      {
        title: "Frontend Development",
        icon: "bi-window-stack",
        description: "Modern, responsive, and interactive user interfaces.",
        skills: [
          { name: "Flutter", level: "Advanced", icon: "bi-phone" },
          { name: "React.js", level: "Advanced", icon: "bi-window" },
          { name: "Next.js", level: "Advanced", icon: "bi-triangle" },
          { name: "HTML5 & CSS3", level: "Expert", icon: "bi-filetype-html" },
          { name: "Tailwind CSS", level: "Advanced", icon: "bi-wind" },
          { name: "Bootstrap CSS", level: "Advanced", icon: "bi-bootstrap" },
          { name: "UI/UX Design", level: "Advanced", icon: "bi-palette" },
        ],
      },
      {
        title: "Backend & APIs",
        icon: "bi-server",
        description:
          "Server-side logic, API endpoints, and database workflows.",
        skills: [
          {
            name: ".NET / ASP.NET Core",
            level: "Proficient",
            icon: "bi-layers-half",
          },
          { name: "Node.js", level: "Proficient", icon: "bi-hdd-network" },
          {
            name: "Next.js API Routes",
            level: "Advanced",
            icon: "bi-lightning-charge",
          },
          {
            name: "RESTful APIs",
            level: "Advanced",
            icon: "bi-arrow-left-right",
          },
          {
            name: "PostgreSQL / MongoDB",
            level: "Proficient",
            icon: "bi-database-check",
          },
          {
            name: "Firebase",
            level: "Proficient",
            icon: "bi-fire",
          },
        ],
      },
      {
        title: "Tools & Ecosystem",
        icon: "bi-tools",
        description: "Version control, developer tools, and deployment.",
        skills: [
          { name: "Git & GitHub", level: "Advanced", icon: "bi-git" },
          { name: "Postman", level: "Proficient", icon: "bi-send-check" },
          { name: "Docker", level: "Intermediate", icon: "bi-box-seam" },
          { name: "VS Code", level: "Expert", icon: "bi-terminal" },
          {
            name: "Cloud Hosting",
            level: "Proficient",
            icon: "bi-cloud-check",
          },
        ],
      },
    ],
  },
  projects: [
    {
      title: "RobopilotBD e-Commerce Website",
      logo: "/images/projects/robopilotbd/rpbd-icon.png",
      icon: "bi-robot",
      iconGradient:
        "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.25))",
      images: [
        "/images/projects/robopilotbd/rpbd-1.png",
        "/images/projects/robopilotbd/rpbd-2.png",
        "/images/projects/robopilotbd/rpbd-3.png",
        "/images/projects/robopilotbd/rpbd-4.png",
        "/images/projects/robopilotbd/rpbd-5.png",
        "/images/projects/robopilotbd/rpbd-6.png",
        "/images/projects/robopilotbd/rpbd-7.png",
        "/images/projects/robopilotbd/rpbd-8.png",
        "/images/projects/robopilotbd/rpbd-9.png",
      ],
      description:
        "A comprehensive Bangladesh-focused e-commerce storefront for robotics, electronics, and DIY kits, built with a scalable hybrid architecture.",
      myWork: [
        "Architected a hybrid deployment spanning Google Cloud Run (SSR & API) and Firebase Hosting (Static Admin).",
        "Developed an SEO-optimized Next.js storefront and a robust Express.js REST API backend using TypeScript.",
        "Engineered a dedicated Next.js admin dashboard featuring rich-text editing for inventory and order management.",
        "Implemented secure authentication and database operations using Firebase Auth, Firestore, and Cloud Storage.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Express.js",
        "Firebase",
        "Google Cloud",
      ],
      features: [
        "SEO-friendly dynamic storefront for browsing robotics and electronics components.",
        "Secure user authentication, persistent cart management, and streamlined checkout.",
        "Comprehensive staff admin dashboard for real-time inventory and order fulfillment.",
        "Distributed architecture utilizing a scalable REST API backed by a NoSQL database.",
      ],
      view: "https://robopilotbd-client.web.app", // Or the actual production domain
      github: "",
      details: "#",
    },
    {
      title: "Prantik - Disaster, Agriculture & Safety App",
      logo: "/images/projects/prantik/prantik-icon.png",
      icon: "bi-shield-shaded", // You can also use "bi-shield-plus" or "bi-umbrella-fill"
      iconGradient:
        "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(234, 88, 12, 0.25))", // A green-orange gradient reflecting agriculture and emergency themes
      images: [
        "/images/projects/prantik-1.svg",
        "/images/projects/prantik-2.svg",
      ],
      description:
        "A comprehensive multi-purpose application for Bangladesh combining disaster management, agricultural assistance, emergency services, and dedicated women's safety features.",
      myWork: [
        "Developed a versatile cross-platform Flutter application seamlessly integrating disaster tracking, agricultural insights, and rapid emergency response systems.",
        "Implemented real-time SOS broadcasting with specialized protocols for women's safety, featuring offline SMS fallbacks and Firebase Cloud Messaging (FCM).",
        "Engineered native Android integrations via Kotlin for home screen SOS widgets, direct emergency calling (e.g., 999), and automatic GPS/Internet activation.",
        "Integrated dynamic hybrid maps (Google Maps & OpenStreetMap) to provide real-time route navigation to nearby shelters, police stations, and active emergencies.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Kotlin",
        "Firebase",
        "Google Maps API",
        "Provider",
        "Cloud Messaging",
      ],
      features: [
        "Dedicated women's safety SOS protocols and real-time emergency broadcasting with live location tracking.",
        "Comprehensive agricultural assistance and weather forecasting modules tailored for rural demographics.",
        "Interactive navigation to nearby government shelters, fire services, and police stations during disasters.",
        "Smart Android home screen widget with multi-tap SOS triggers (1-tap dial, 3-tap broadcast) to prevent mis-touches.",
      ],
      view: "", // Add Play Store link or actual domain if available
      github: "", // Add GitHub repo link if it's public
      details: "#",
    },
    {
      title: "Portfolio Website",
      logo: "",
      icon: "bi-layers-fill",
      iconGradient:
        "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.25))",
      images: [
        "/images/projects/portfolio-1.svg",
        "/images/projects/portfolio-2.svg",
      ],
      description:
        "A sleek portfolio designed with modern Next.js App Router, glassmorphism UI, interactive sticky navigation, and animations.",
      myWork: [
        "Conceptualized and developed unique glassmorphism visual identity with custom CSS.",
        "Engineered reading-focus line scrollspy for responsive vertical and mobile sticky navbars.",
        "Built interactive floating modal dialogs with multi-screenshot image carousels.",
        "Configured static export pipeline optimized for high-speed cPanel deployment.",
      ],
      technologies: [
        "Next.js 16",
        "TypeScript",
        "CSS3 / PostCSS",
        "Webpack",
        "Static Export",
      ],
      features: [
        "Custom vertical & horizontal sticky sidebar navigation with real-time scrollspy.",
        "Frosted glassmorphism aesthetic with high contrast and smooth responsiveness.",
        "Interactive expandable sections for academic qualifications and activities.",
        "Floating project detail modal with detailed tech stack and feature breakdown.",
      ],
      view: "#",
      github: "https://github.com/mehedienf",
      details: "#",
    },
  ],
  experiences: [
    {
      role: "Campus Ambassador",
      company: "bdapps",
      logo: "/images/companies/bdapps.svg",
      location: "Patuakhali Science and Technology University",
      period: "2026 — Present",
      isCurrent: true,
      description:
        "Serving as the campus representative for bdapps at Patuakhali Science and Technology University (PSTU). Promoting the national app development ecosystem among university students.",
      achievements: [
        "Representing bdapps in the university campus and organizing tech awareness campaigns.",
        "Encouraging and assisting students to develop and publish apps on the bdapps platform.",
      ],
      technologies: [
        "Community Leadership",
        "Mentoring",
        "Public Speaking",
        "App Ecosystem",
      ],
    },

    {
      role: "Founder & Software Engineer",
      company: "OlivoSoft",
      logo: "/images/companies/olivosoft.svg",
      location: "Bangladesh · Remote",
      period: "2026 — Present",
      isCurrent: true,
      description:
        "Founded a software development startup dedicated to creating scalable, robust, and modern digital solutions. Specializing in custom web and mobile applications.",
      achievements: [
        "Leading the development of end-to-end software products, from system architecture to deployment.",
        "Managing client projects and ensuring high-quality delivery using modern tech stacks like Next.js, React, and Flutter.",
      ],
      technologies: [
        "Software Engineering",
        "Next.js",
        "React",
        "Flutter",
        "Node.js",
        "System Architecture",
      ],
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Patuakhali Science and Technology University",
      location: "Patuakhali, Barishal, Bangladesh",
      period: "Ongoing",
      grade: "3rd Year (Running)",
      description:
        "Focused on Software Engineering, Data Structures & Algorithms, Object-Oriented Programming, Database Systems, and Cloud Computing.",
      highlights: [
        "Major in Software Systems & Full Stack Development",
        "Active coursework in Advanced Algorithms & System Design",
      ],
    },
    {
      degree: "National Android Development Bootcamp",
      institution: "bdapps — National Appstore of Bangladesh",
      location: "Dhaka, Bangladesh",
      period: "2026 · 3 Months",
      grade: "Completed",
      description:
        "Hands-on 3-month intensive bootcamp on Android application architecture, modern UI design, RESTful API integration, background services, and bdapps developer platform integration.",
      highlights: [
        "Native Android App Architecture & Modern Mobile UI/UX",
        "API Integration, Local Storage & Mobile Application Deployment",
      ],
    },
    {
      degree: "Professional Java Development (EDGE Course)",
      institution: "EDGE Project — Bangladesh Computer Council (BCC)",
      location: "Patuakhali, Barishal, Bangladesh",
      period: "2023 · 6 Months",
      grade: "Completed",
      description:
        "An intensive 6-month specialized program covering Advanced Java, Object-Oriented Software Design, Enterprise Architecture, Spring Boot, REST APIs, and Database Management.",
      highlights: [
        "Advanced OOP, Multithreading & Software Design Patterns",
        "Enterprise Application Development & Backend Architecture",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka Commerce College",
      location: "Dhaka, Bangladesh",
      period: "2019 — 2021",
      grade: "GPA: 4.92 / 5.00",
      description:
        "Science background with specialized focus on Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT).",
      highlights: [],
    },
  ],
  activities: [
    {
      title: "Competitive Programming & Problem Solving",
      organization: "University Programming Club & Online Judges",
      role: "Active Problem Solver",
      period: "2022 — Present",
      description:
        "Regularly practicing algorithmic problem-solving and participating in competitive programming contests across various platforms.",
      highlights: [
        "Solved 300+ algorithmic problems across Codeforces, LeetCode, and Beecrowd",
        "Participated in intra-university programming contests and national hackathons",
      ],
      icon: "bi-trophy",
    },
    {
      title: "Tech Community & Workshop Organizing",
      organization: "Computer Science & Developer Community",
      role: "Organizer & Contributor",
      period: "2023 — Present",
      description:
        "Actively organizing and contributing to student technical workshops, coding bootcamps, and developer meetups to foster peer-learning and collaboration.",
      highlights: [
        "Assisted in conducting introductory sessions on Git, GitHub, and Full Stack Web development",
        "Volunteered in university tech fests and programming bootcamps",
      ],
      icon: "bi-people",
    },
  ],
  contact: {
    email: "enammehedi06@gmail.com",
    github: "https://github.com/mehedienf",
    linkedin: "https://linkedin.com/in/mehedienf",
    whatsapp: "#",
    facebook: "https://www.facebook.com/mehedi.enf",
  },
};
