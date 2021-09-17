/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "#switchtocode",
  title: "Mrinal",
  subTitle: emoji(
    "Solving Everyday problems, one commit at a time."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18orEgFCkJYa5cPP3MVNRXC2Rr96U9O49/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/getmrinal",
  linkedin: "https://www.linkedin.com/in/getmrinal/",
  medium: "https://medium.com/@getmrinal",
  stackoverflow: "https://stackoverflow.com/users/9554728/mrinal",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "???",
  subTitle: "??????? ",
  skills: [
    emoji(
      "⚡ Develop highly scalable backend with interactive UI experience"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Integration of payment services such as Paypal/ Stripe / Razorpay"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SRM Institue of Science and Technology",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor in Technology -  Computer Science Engineering",
      duration: "May 2015 - May 2019",
    },
    {
      schoolName: "St Paul Secondary School",
      logo: require("./assets/images/placeholder.gif"),
      subHeader: "All India Senior School Certificate Examination (12th)",
      duration: "May 2012 - April 2014",
    },
    {
      schoolName: "D.A.V Public School",
      logo: require("./assets/images/placeholder.gif"),
      subHeader: "All India Secondary School Examination (10th)",
      duration: "Apr 2012",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer II",
      company: "Auzmor",
      companylogo: require("./assets/images/auzmor.jpeg"),
      date: "July 2021 – Present",
      desc: "Working on Auzmor Learn Mobile App in Flutter",
      descBullets: [
        "Enabling Deeplinks on Mobile Apps [iOS and Android]",
        "Integration with Firebase Crashlytics for bug tracking",
        "Document and PDF rendering on Mobile Apps",
        "Publishing Mobile Apps to Play store and App Store",
      ]
    },
    {
      role: "Software Engineer",
      company: "Auzmor",
      companylogo: require("./assets/images/auzmor.jpeg"),
      date: "July 2019 – July 2021",
      desc: "Worked on Auzmor Learn Web App in React",
      descBullets: [
        "Integrated with the payment systems Enabling E-Commerce on our webapp",
        "Worked on different feature that helped smooth the user experience and some new features like Bulk Actions"
      ]
    },
    {
      role: "Intern-Associate Software Developer",
      company: "Chalkstreet",
      companylogo: require("./assets/images/chalk.png"),
      date: "Sep 2018 – Jun 2019",
      descBullets: [
        "Was part of the team which built a product which is being used in over a 100 colleges now.",
        "We planned to Create an Assesment Platform for College students.(https://www.quizr.in/)",
        "Worked mostly in frontend part of the product including some API's in Backend for SonarQube Integration"
      ]
    },
    {
      role: "Teaching Assistant (ML)",
      company: "Coding Ninjas",
      companylogo: require("./assets/images/cn.jpeg"),
      date: "Jun 2018 – Oct 2018",
      descBullets: [
        "Worked as a Teaching Assistant under Ankush Singhla in the Machine Learning Online Batch.",
        "Helped the students there to debug code and also helped in their projects.",
        "It was an interesting 4 months journey of Debugging codes, explaining and getting to see the different approaches(sometimes better ) of the same problem.",
        "Really helped me evolve a lot as a Problem Solver.",
      ]
    },
    {
      role: "Intern-Android Developer",
      company: "Chalkstreet",
      companylogo: require("./assets/images/rnbit.png"),
      date: "Apr 2018 – May 2019",
      desc: "Worked as an Android Developer on a project called OneWalletHub. This was my work experience. I came to know the different hurdles that come in the production of any application. Although it was a short experience but it helped me to think of a project by not just a developers perspective but also from the perspective of users.(https://onewallethub.com/)"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Other Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/rightbell.jpeg"),
      projectName: "RightBell",
      projectDesc: "A Job Application management System",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://rightbell.in/"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

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
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "How random is Math.random() ?",
      description:
        "Do you ever think how random numbers is calculated by those very machines that are coded to be predictable ?"
    },
    {
      title: "What is Computer Science Engineering ?",
      description: "Talk at SRM Codigo 2018",
      url: "https://docs.google.com/presentation/d/1es65W1PaFfUXhJBKUfdv8T-tmks8mCsjq7Uc3uymAc4/edit?usp=sharing",
    }
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "What is Computer Science Engineering ?",
      subtitle: "SRM Codigo 2018",
      slides_url: "https://docs.google.com/presentation/d/1es65W1PaFfUXhJBKUfdv8T-tmks8mCsjq7Uc3uymAc4/edit?usp=sharing",
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "dmrinal626@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
