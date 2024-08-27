import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project00 from "../assets/projects/yello.jpeg";





export const EXPERIENCES = [
  {
    year: "March 2024",
    role: "Softwate Engineer",
    image : project00,
    company: "Yello Gardens",
    description: `I am working on creating bespoke solutions to resolve problems presented by clients, using a variety of programming languages and not limited to the technologies listed below.`,
    technologies: ["PHP", "LARAVEL", "HTML", "JAVASCRIPT", "API", "CSS", "mySQL", "SQL"],
  },
];

export const PROJECTS = [
  {
    "title": "Chatting Website",
    "image": project1,
    "description": "It is an Website that helps businesses to have direct communication with their client-base. I focus more on having the database of the client, and making use of an API to track and store the data exchanged via communication.",
    "technologies": ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "Flask","Restful API", ]
  },

  {
    "title": "TO-DO LIST Website",
    "image": project2,
    "description": "The website empowers you to document your daily activities in real-time. By consistently logging your tasks, you can apply performance analysis to identify areas for improvement and enhance your overall productivity",
    "technologies": ["React JS", "HTML", "CSS", "SQlite"]
  },
  
  {
    "title": "Weather Website",
    "image": project3,
    "description": "It is functional, but still under development. The website is inspired by my fear of lightning and thunderstorms. I am developing it using an API to send me an SMS a day before a stormy rain.",
    "technologies": ["HTML", "CSS", "JavaScript", "Restful API", "FLASK", "Python"]
},
{
  "title": "Portfolio Website",
  "image": project4,
  "description": "I've decided to work on my own portfolio (The one you are currently browsing) and will continuously make updates while it's deployed. Don't be surprised if you see changes every time you check it out. For now, feel free to check out my LinkedIn.",
  "technologies": ["HTML", "CSS", "JavaScript", "React JS"]
}
];

export const CONTACT = {
  address: "Gauteng, Johannesburg",
  phoneNo: "+27 79 277 8680",
  email: "arthurmatea1@gmail.com",
};
