import { godot } from "@/public";

export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Approch", link: "#approch" },
  { name: "Contact", link: "#contact" },
];
export const techstack = [
  {
    id: 1,
    name: "Flutter",
    designation: "Dart",
    image: "./flutter",
  },
  {
    id: 2,
    name: "Swift UI",
    designation: "Swift",
    image: "./flutter",
  },
  {
    id: 3,
    name: "Go",
    designation: "Golang",
    image: "./flutter",
  },
  {
    id: 4,
    name: "Godot",
    designation: "Godot Script",
    image: "./flutter",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "./flutter",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "./flutter",
  },
];
export const techList = [
  "./flutter.png",
  "./kotlin.png",
  ,
  "./node.png",
  "./python.png",
];
export const techList2 = [
  "./react.png",
  "./swift.png",
  "./mongo.png",
  "./firebase.png",
];
export const tech = [
  { id: 1, img: "./flutter.png", title: "Flutter" },
  { id: 10, img: "./swift.png", title: "Swift" },
  { id: 12, img: "./go.png", title: "Go" },
  { id: 1, img: "./next.png", title: "Next.js" },
  { id: 1, img: "./react.png", title: "React" },
  { id: 2, img: "./godot.png", title: "Godot" },
  { id: 2, img: "./typescript.png", title: "TypeScript" },
  { id: 3, img: "./node.png", title: "Node.js" },
  { id: 3, img: "./python.png", title: "Python" },
  { id: 12, img: "./postgre.png", title: "PostgreSQL" },
  { id: 4, img: "./mongo.png", title: "MongoDB" },
  { id: 4, img: "./firebase.png", title: "Firebase" },
];
export const gridItems = [
  {
    id: 1,
    title: "My Tech Stack!",
    description: "Yah it is cool! 😎",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "./grid.svg",
  },
  {
    id: 2,
    title: "Global time traveler at your service! ",
    description: "Always ready 💪",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "./grid.svg",
  },
  {
    id: 3,
    title: '"It is always seems impossible until it is done"',
    description: "My Motto 😊",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "./grid.svg",
  },
  {
    id: 4,
    title: "EAT CODE SLEEP REPEAT",
    description: "I think someone set this loop to be true 😱",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Creating an e-commerce app for a client",
    description: "I'm not lazy 😒",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./flutter.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Project idea? Or howdy partner? ",
    description: "Contact me...! 🤠",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Classified App Development",
    des: "Developed a classified ads application using Flutter and libraries like Cubit for state management, Dio for RESTful API integration, and Websockets for real-time updates. The app allowed users to post, search, and manage listings while enabling real-time chat and notifications. This project enhanced my skills in building responsive user interfaces, managing application states efficiently, and handling real-time communication in mobile applications.",
    img: "./flutter.png",
    iconLists: ["./flutter.png"],
    link: "",
  },
  {
    id: 2,
    title: "2D platformer game",
    des: "Developed a 2D platformer game using Godot, inspired by classic Super Mario gameplay. The game features a character navigating through levels, avoiding obstacles, and collecting coins to complete each stage. This project strengthened my skills in game design, physics-based mechanics, and level development, providing hands-on experience in creating engaging and interactive gameplay experiences.",
    img: "./game.png",
    iconLists: ["./godot.png"],
    link: "https://youtu.be/JiJCHmVIwz8",
  },
  {
    id: 3,
    title: "Diabetes Prediction Model",
    des: "Developed a machine learning model using Python and libraries like NumPy, Pandas, StandardScaler , and scikit-learn to predict diabetesbased on input data. The model was trained on a dataset of relevantfeatures to accurately classify individuals as diabetic or non-diabetic. Thisproject served as a valuable learning experience in applying machinelearning techniques to real-world problems.",
    img: "./diabetes.png",
    iconLists: ["./python.png", "./numpy.png"],
    link: "https://colab.research.google.com/drive/1eLqVGOaOqkgEyGPNwdkXjZZ3ZQPs5hir?usp=sharing",
  },
  {
    id: 4,
    title: "Space",
    des: "An anonymous chat mobile app, book,Users can join dynamic conversations in user-createdrandom spaces, fostering a sense of connection without revealing identities",
    img: "./space.png",
    iconLists: ["./flutter.png", "./firebase.png"],
    link: "https://github.com/error3236/Space",
  },
  {
    id: 5,
    title: "EYE",
    des: "Ensuring your Emergency:an emergency system. Street tablets send video alerts to a central app upon button press. A mobile app lets users find nearby beacons and report emergencies",
    img: "./eye.png",
    iconLists: ["./flutter.png", "./firebase.png"],
    link: "https://github.com/error3236/SOS-WebApp",
  },
  {
    id: 6,
    title: "Sivasankar | Portfolio",
    des: "Developed a portfolio to showcase my skills in UI designing and Next.js",
    img: "./portfolio.png",
    iconLists: ["next.png", "./re.svg", "./tail.svg", "./ts.svg"],
    link: "https://github.com/error3236/next-portfolio",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "./cloud.svg",
    nameImg: "./cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "./app.svg",
    nameImg: "./appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "./host.svg",
    nameImg: "./hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "./s.svg",
    nameImg: "./streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "./dock.svg",
    nameImg: "./dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
];
export const approch = [
  {
    id: 1,
    order: "Phase 1",
    title: "Planning & Strategy",
    des: "We don't just code, we build empires (well, apps at least).  This phase is all about brainstorming with you to map your vision for a killer mobile or web app.  We'll lock down your target audience, define must-have features, and craft a rock-solid strategy to make your app a game-changer.",
  },
  {
    id: 2,
    order: "Phase 2",
    title: "Development & Progress Update",
    des: "This is where the magic of coding happens, and I'll keep you in the loop with regular updates on progress.  Think of it as watching your app take shape, brick by digital brick, until it's ready to dominate the app stores (or, you know, just be super awesome)",
  },
  {
    id: 3,
    order: "Phase 3",
    title: "Development & Launch",
    des: " it's time for liftoff! We'll fine-tune the final touches, polish it to a shine, and blast your app into the digital stratosphere (aka the app stores).  Get ready to celebrate as your creation reaches the world",
  },
];
export const socialMedia = [
  {
    id: 0,
    link: "https://www.instagram.com/_.__siva__._/profilecard/?igsh=ZHk0eHJqMnRyMzlp",
  },
  {
    id: 1,
    link: "https://github.com/siva-sankar-dev",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/siva-sankar-1b41091b8/",
  },
  {
    id: 3,
    link: "https://www.facebook.com/profile.php?id=100073630972173",
  },
  {
    id: 4,
    link: "https://www.youtube.com/@siva_sankar_",
  },
];
