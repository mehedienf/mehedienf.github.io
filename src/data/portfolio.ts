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
      title: "E-Commerce Platform",
      logo: "",
      icon: "bi-bag-check-fill",
      iconGradient:
        "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.25))",
      description:
        "A full-stack e-commerce solution with Next.js, featuring user authentication, payment processing, and a dynamic product catalog.",
      view: "#",
      github: "https://github.com/mehedienf",
      details: "#",
    },
    {
      title: "Task Management App",
      logo: "",
      icon: "bi-check2-square",
      iconGradient:
        "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.25))",
      description:
        "A productivity suite built with React and Firebase, allowing users to organize tasks, set deadlines, and track progress seamlessly.",
      view: "#",
      github: "https://github.com/mehedienf",
      details: "#",
    },
    {
      title: "Portfolio Website",
      logo: "",
      icon: "bi-layers-fill",
      iconGradient:
        "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.25))",
      description:
        "A sleek portfolio designed with modern Next.js App Router, glassmorphism UI, interactive sticky navigation, and animations.",
      view: "#",
      github: "https://github.com/mehedienf",
      details: "#",
    },
  ],
  experiences: [
    {
      role: "Full Stack Software Developer",
      company: "Current Company / Tech Agency",
      location: "Dhaka, Bangladesh · Hybrid",
      period: "2024 — Present",
      isCurrent: true,
      description:
        "Building and scaling robust full-stack web applications with Next.js, React, and Node.js. Designing clean RESTful APIs and optimizing database workflows.",
      achievements: [
        "Spearheading modern frontend architecture with responsive UI/UX and micro-interactions.",
        "Implementing secure authentication, state management, and optimized server-side rendering.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "PostgreSQL",
      ],
    },
    {
      role: "Frontend Web Developer",
      company: "Previous Tech Studio / Software House",
      location: "Remote / On-site",
      period: "2022 — 2024",
      isCurrent: false,
      description:
        "Developed modern, responsive web applications and interactive client interfaces. Collaborated closely with design teams to translate complex wireframes into high-performance web products.",
      achievements: [
        "Built high-converting user interfaces and optimized web performance across all device viewports.",
        "Refactored codebase for modularity, reducing bundle sizes and increasing load speeds.",
      ],
      technologies: [
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "REST APIs",
        "Git",
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
      title: "Campus Ambassador",
      organization: "bdapps | Patuakhali Science and Technology University",
      role: "Ambassador",
      period: "2026 — Present",
      description:
        "Serving as the campus representative for bdapps at Patuakhali Science and Technology University (PSTU). Promoting the national app development ecosystem among university students.",
      highlights: [
        "Representing bdapps in the university campus",
        "Encouraging and assisting students to develop and publish apps on the bdapps platform",
      ],
      icon: "bi-megaphone",
    },
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
