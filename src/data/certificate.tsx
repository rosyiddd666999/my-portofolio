import image1 from "@/assets/images/certificate_1.jpg";
import image2 from "@/assets/images/certificate_2.jpg";
import image3 from "@/assets/images/certificate_3.jpg";
import image1a from "@/assets/images/certificate_1a.jpg";
import image2a from "@/assets/images/certificate_2a.jpg";
import image2b from "@/assets/images/certificate_2b.jpg";
import image3a from "@/assets/images/certificate_3a.jpg";

const certificates = [
  {
    id: 1,
    name: "Narenda Wicaksono",
    company: "Dicoding Indonesia",
    role: "Chief Executive Officer",
    quote:
      "This certificate proves Abdul Rosyid's dedication and success in understanding the basic concepts of Artificial Intelligence, including data, Machine Learning, and Deep Learning. A solid first step towards a career in AI!",
    image: image1,
    subImage1: image1a,
    subImage2: null,
    href: "/certificate/1",
  },
  {
    id: 2,
    name: "Narenda Wicaksono",
    company: "Dicoding Indonesia",
    role: "Chief Executive Officer",
    quote:
      "This certificate is proof of Abdul Rosyid's commitment to mastering application development using Flutter. With the ability to create Flutter applications from scratch to deployment, this is a strong first step to a career in Flutter Development according to industry standards!",
    image: image2,
    subImage1: image2a,
    subImage2: image2b,
    href: "/certificate/2",
  },
  {
    id: 3,
    name: "Narenda Wicaksono",
    company: "Dicoding Indonesia",
    role: "Chief Executive Officer",
    quote:
      "This certificate demonstrates Abdul Rosyid's success in learning the basics of programming with Dart, starting from fundamental concepts to Object-Oriented paradigms and functional programming. This competency is a strong foundation for developing Dart-based applications.",
    image: image3,
    subImage1: image3a,
    subImage2: null,
    href: "/certificate/3",
  },
];

export default certificates;
