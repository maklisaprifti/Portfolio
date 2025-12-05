document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active"); // slide down menu
    hamburger.classList.toggle("active"); // animate hamburger to X
  });

  const projects = [
    {
      image: "../images/Skribble.png",
      name: "Skribble",
      description:
        "Collaborated on the front-end team to develop an app encouraging children to journal their emotions regularly. Designed UI components for mobile apps and web.",
      duration: "Aug.2024 - Dec. 2024",
      platform: "GitHub, VSCode, neo4j, Expo Go",
      tools: "React Native, JavaScript, TypeScript, HTML",
      link: "https://github.com/capstone-projects-2024-fall/aldwairi-projects-skribble",
    },
    {
      image: "../images/Mindful.png",
      name: "Mindful Media",
      description:
        " Led a team of three in designing a social media app promoting healthy habits via diet and exercise. Applied full UX design processes: ideation, user personas, wireframing, prototyping, and testing.",
      duration: "Aug.2024 - Dec. 2024",
      platform: "Figma, Miro, Google Survey",
      tools: "Figma",
      link: "https://maklisaprifti.wixsite.com/ux-project",
    },
    {
      image: "../images/SkillShareHub.png",
      name: "SkillShareHub",
      description:
        "Led a team of three to design and implement a relational database system. Created an ER diagram with 5+ entities and 4+ binary relationships using SQL Developer, including a many-to- many relationships between students and courses.",
      duration: "Aug.2024 - Dec. 2024",
      platform: "SQLDeveloper, ERDPlus ",
      tools: "SQL, Relational Diagram, Entity Relational Diagram",
      link: "https://github.com/tuk26019/SkillShareHub-Operational-Database-",
    },
    {
      image: "../images/Land.png",
      name: "Land of Adventure",
      description:
        "Developed a website supporting user sign-up/login and data input for travel destinations, activities, ratings, costs, visit dates, and images. Managed backend database with MySQL, ensuring data integrity and accessibility.",
      duration: "Jan. 2024 - May 2024",
      platform: "GitHub, VSCode, MySQL",
      tools: "SQL, React, JavaScript, HTML, CSS",
      link: "https://github.com/tuk26019/Land_of_Adventure",
    },
    {
      image: "../images/Explore.png",
      name: "Explore More",
      description:
        "A travel and culture platform showcasing destinations, local experiences, and culinary highlights to inspire exploration and cultural connection. Provides practical tips and insights for planning memorable adventures.",
      duration: "Oct 2025 - 3 days",
      platform: "GitHub, VSCode",
      tools: "JavaScript, HTML, CSS",
      link: "https://github.com/tuk26019/Explore_More",
    },
    {
      image: "../images/Cosmic.png",
      name: "Cosmic Highlight",
      description:
        "Built a space-themed website using WordPress, customizing the layout, design, and content structure to showcase unique space missions and discoveries. Focused on clean visuals, organized categories, and user-friendly navigation.",
      duration: "Nov 2025 - 3 days",
      platform: "Wordpress, Figma",
      tools: "Wordpress, Figma",
      link: "https://drive.google.com/drive/folders/1bdlqMgRhCjlQhA_qxKwCehigrE132t_5?usp=sharing",
    },
    {
      image: "../images/Unleashed.png",
      name: "Unleashed Media",
      description:
        "Redesigned and modernized a website using HTML, CSS, and JavaScript on CodePen, enhancing usability, responsiveness, and overall user experience.",
      duration: "Nov 2025 - 1 day",
      platform: "Codepen",
      tools: "JavaScript, HTML, CSS",
      link: "https://drive.google.com/drive/folders/1DOYHM1ZfTxBPQpFG8gxn5tJ894khrtUM?usp=sharing",
    },
    {
      image: "../images/Database.png",
      name: "Database Project",
      description:
        "Worked on database projects using Google Sheets, including organizing movie types and managing data for ‘Project Cupcake,’ gaining experience in data organization, sorting, and basic analysis.",
      duration: "Nov 2025 - 1 day",
      platform: "Google Sheets",
      tools: "Google Sheets",
      link: "https://drive.google.com/drive/folders/1wmp3ZzELIY6ytyro59ehT2aqSurT5lvS?usp=sharing",
    },
    {
      image: "../images/JavaScript.png",
      name: "JavaScript Projects",
      description:
        "Developed interactive JavaScript projects including a tip calculator and a ‘Click the Target’ game, gaining hands-on experience with DOM manipulation, event handling, and basic programming logic.",
      duration: "Oct 2025 - 1 day",
      platform: "BSD",
      tools: "JavaScript, HTML, CSS",
      link: "https://drive.google.com/drive/folders/1v1eYB14BZRvYIXMC2Uq7bDv4neqLjFeQ?usp=sharing",
    },
    {
      image: "../images/HTML.png",
      name: "HTML/CSS Project",
      description:
        "Created a simple website using HTML and CSS with initial guidance from AI, then customized and personalized it to enhance design, layout, and user experience",
      duration: "Oct 2025 - 1 day",
      platform: "CodePen",
      tools: "HTML, CSS",
      link: "https://drive.google.com/drive/folders/1JL0AZYUp1sgZHWN1UZa_oDkW-PEzSzbW?usp=sharing",
    },
    {
      image: "../images/Python.png",
      name: "Magic 8 Ball",
      description:
        "Built a simple Python Magic 8-Ball program that provides random answers to user questions, demonstrating basic programming concepts like conditionals, user input, and randomization",
      duration: "Nov 2025 - 1 day",
      platform: "BSD",
      tools: "Python",
      link: "https://drive.google.com/drive/folders/13bXg1KjgcHa26saxVTq27U-kfnOu4PWl?usp=sharing",
    },
    {
      image: "../images/AI.png",
      name: "AI Project",
      description:
        "Developed a simple jumping game using HTML and created a Python lesson plan with the guidance of AI, combining hands-on coding experience with structured learning for programming skills.",
      duration: "Oct 2025 - 1 day",
      platform: "BSD",
      tools: "JavaScript, HTML, CSS",
      link: "https://drive.google.com/drive/folders/1tZrrTtUkougY17dwxgCDkgPmDias7rkb?usp=sharing",
    },
    {
      image: "../images/RCM.png",
      name: "RCM Guide",
      description:
        "Created a Revenue Cycle Management (RCM) study guide to simplify key concepts, processes, and best practices, helping users understand billing, claims, and financial workflows in healthcare.",
      duration: "Nov 2025 - 1 day",
      platform: "Google Doc",
      tools: "Google Doc",
      link: "https://docs.google.com/document/d/1iNShDglO1bl68g-tFl3bH9iziy1kzcPUCu_LJ8NWHCE/edit?usp=sharing",
    },
    {
      image: "../images/GIS.png",
      name: "GIS",
      description:
        "Completed a GIS project focused on creating and editing maps while learning to use ArcGIS. Gained hands-on experience in mapping techniques, spatial data management, and basic geographic analysis",
      duration: "Nov 2025 - 1 day",
      platform: "ArcGis",
      tools: "ArcGis",
      link: "https://drive.google.com/drive/folders/14c5pHzYxSmaJvCbNAYR-E5SCVUnNMZCB?usp=sharing",
    },
  ];

  const container = document.getElementById("project-container");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    // Convert tools string to pill spans
    const toolsPills = project.tools
      .split(", ")
      .map((tool) => `<span>${tool}</span>`)
      .join("");

    card.innerHTML = `
    <img src="${project.image}" alt="${project.name}" class="project-image">
    <div class="project-content">
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <div class="project-info"><strong>Duration:</strong> ${project.duration}</div>
      <div class="project-info"><strong>Platform:</strong> ${project.platform}</div>
      <div class="tools">${toolsPills}</div>
      <div class="project-link"><a href="${project.link}" target="_blank">View Project</a></div>
    </div>
  `;
    container.appendChild(card);
  });
});

