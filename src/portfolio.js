import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "btseee",
  title: "Hi, I'm Tsee",
  subTitle: emoji(
    "A ambtitious Junior Full Stack Software Developer 🚀 having an experience of building Web and Systems with TypeScript / Reactjs / Nodejs / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PaAVSi92cq6H5OPMBroAkYq9SI6YMwhd/view?usp=drivesdk",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/btseee",
  linkedin: "https://www.linkedin.com/in/btseku1125/",
  gmail: "bbattseren88@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/btseku1125/",
  medium: "https://medium.com/@btsee",
  stackoverflow: "ttps://stackoverflow.com/users/12130308/battseren-badral",
  instagram: "https://www.instagram.com/coder_tsee/",
  youtube: "https://www.youtube.com/channel/UCGAVfi6nvq1bFqtmC0ppycg",
  twitter: "https://twitter.com/b_tseeee",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Junior FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal"),
    emoji("⚡ And draw cool User interface design")
  ],



  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true
};

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Mongolian University of Science and Technology",
      logo: require("./assets/images/mustLogo.png"),
      subHeader: "Bachelor of Software Engineering",
      duration: "September 2016 - January 2022",
      desc: "Participated in the research of Logistics Management System (Client Mobile App) and published papers.",
      descBullets: [
        "President of Students Council",
      ]
    },
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "UI Designing",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Monlogistics Holding",
      companylogo: require("./assets/images/mlholdingLogo.png"),
      date: "July 2021 – Present",
      desc: "Built and developed internal systems",
      descBullets: [
        "Built Trucking system with Odoo",
        "Maintained TMS systems of mlt.mn mlw.mn",
        "Built mlcargo.mn",
        "Built internal tools for HR"
      ]
    },
    {
      role: "Product Manager (intern)",
      company: "Erxes",
      companylogo: require("./assets/images/erxesLogo.png"),
      date: "May 2022 – Present",
      desc: "Lead a team to build KPI plugin",
      descBullets: [
        "Leading a team to build KPI plugin on Erxes.io",
      ]
    },
    {
      role: "Consulting Software Engineer",
      company: "Artuno Consulting Service",
      companylogo: require("./assets/images/artunoLogo.jpg"),
      date: "June 2020 – Present",
      desc: "Consulted the company with a IT companies and teams",
      descBullets: [
        "Developed an Interior furniture managing system with Odoo.",
        "Built and developed Artuno.mn (static web) with React.js"
      ]
    },
    {
      role: "Software Engineer (contract)",
      company: "Xacbank",
      companylogo: require("./assets/images/xacbankLogo.png"),
      date: "December 2020 - June 2021",
      desc: "Built and developed internal systems",
      descBullets: [
        "Built and integrated E-Tender system with Finacle, ASP .NET and XML ",
      ]
    },
    {
      role: "Junior Full Stack Engineer (intern)",
      company: "Caak.mn",
      companylogo: require("./assets/images/caakLogo.png"),
      date: "April 2020 - August 2020",
      desc: "Internship",
      descBullets: [
        "Developed and built time management system for the employees",
        "Maintained and fixed few bugs caak.mn.",
        "Designed new UI for beta.caak.m"
      ]
    },
    {
      role: "UI/UX Designer (intern)",
      company: "GERU",
      companylogo: require("./assets/images/xacbankLogo.png"),
      date: "June 2019 - November 2019 ",
      desc: "Designed UI for geru.mn",
    },
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMPANIES AND PERSON THAT I HELPED",
  projects: [
    {
      image: require("./assets/images/r.enkhbat.jpg"),
      projectName: "Enhkbat",
      projectDesc: "CEO of Admon press - i'm currently maintaining it",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://enkhbat.net/"
        }
      ]
    },
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+976 - 91912840",
  email_address: "bbattseren88@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "b_tseeee",
  display: true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
