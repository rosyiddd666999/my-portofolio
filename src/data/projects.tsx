import image1 from "@/assets/images/presentation_1.jpg";
import image2 from "@/assets/images/presentation_2.jpg";
import image3 from "@/assets/images/presentation_3.jpg";
import image4 from "@/assets/images/presentation_4.jpg";
import imageDetail1a from "@/assets/images/presentation_1a_detail.jpg";
import imageDetail1b from "@/assets/images/presentation_1b_detail.jpg";
import imageDetail1c from "@/assets/images/presentation_1c_detail.jpg";
import imageDetail2a from "@/assets/images/presentation_2a_detail.jpg";
import imageDetail2b from "@/assets/images/presentation_2b_detail.jpg";
import imageDetail2c from "@/assets/images/presentation_2c_detail.jpg";
import imageDetail3a from "@/assets/images/presentation_3a_detail.jpg";
import imageDetail3b from "@/assets/images/presentation_3b_detail.jpg";
import imageDetail3c from "@/assets/images/presentation_3c_detail.jpg";
import imageDetail4a from "@/assets/images/presentation_4a_detail.jpg";
import imageDetail4b from "@/assets/images/presentation_4b_detail.jpg";
import imageDetail4c from "@/assets/images/presentation_4c_detail.jpg";

const projects = [
  {
    id: 1,
    href: "/project/1",
    name: "Financial Management App",
    image: image1,
    imageDetail1: imageDetail1a,
    imageDetail2: imageDetail1b,
    imageDetail3: imageDetail1c,
    framework: "Flutter & Firebase",
    language: "Dart",
    method: "Prototype",
    description:
      "Building a Financial Management application with a Clean Code approach, leveraging BLoC state management for business logic control, and implementing dependency injection for modularity and scalability. This application is developed using Flutter as the front-end framework, providing a responsive and visually appealing user interface, and Firebase as the backend for real-time and integrated data management. The project also utilizes various Flutter packages to accelerate development, ensuring the application meets financial management needs efficiently and delivers a user-friendly experience.",
  },
  {
    href: "/project/2",
    id: 2,
    name: "Spotify Clone",
    image: image2,
    imageDetail1: imageDetail2a,
    imageDetail2: imageDetail2b,
    imageDetail3: imageDetail2c,
    framework: "Flutter & Firebase",
    language: "Dart",
    method: "Prototype",
    description:
      "Building a Spotify Clone application with a Clean Code approach, leveraging BLoC state management for business logic control, and implementing dependency injection for modularity and scalability. This application is developed using Flutter as the front-end framework, providing a responsive and visually appealing user interface, and Firebase as the backend for real-time and integrated data management. The project also utilizes various Flutter packages to accelerate development, ensuring the application meets financial management needs efficiently and delivers a user-friendly experience.",
  },
  {
    id: 3,
    href: "/project/3",
    name: "Movie & TV Series App",
    image: image3,
    imageDetail1: imageDetail3a,
    imageDetail2: imageDetail3b,
    imageDetail3: imageDetail3c,
    framework: "Flutter",
    language: "Dart",
    method: "Prototype",
    description:
      "Building a Movie & TV Series application with a Clean Code approach, leveraging BLoC state management for business logic control, and implementing dependency injection for modularity and scalability. This application is developed using Flutter as the front-end framework, providing a responsive and visually appealing user interface, and TMDB API as the backend for real-time and integrated data management. The project also utilizes various Flutter packages to accelerate development, ensuring the application meets financial management needs efficiently and delivers a user-friendly experience.",
  },
  {
    id: 4,
    name: "E-Learnig Design",
    href: "/project/4",
    image: image4,
    imageDetail1: imageDetail4a,
    imageDetail2: imageDetail4b,
    imageDetail3: imageDetail4c,
  },
];

export default projects;
