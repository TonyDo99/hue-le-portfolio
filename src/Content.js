// import images
import Hero_person from "./assets/images/avatar.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons
import flexibility from "./assets/icons/flexibility.png";
import adaptation from "./assets/icons/adaptation.png";
import teamwork from "./assets/icons/teamwork.png";
import work from "./assets/icons/work.png";
import certificate from "./assets/icons/certificate.png";
import iso from "./assets/icons/iso.png";

// import logo
import icoc from "./assets/logos/icoc.png";
import novaliches from "./assets/logos/novaliches.png";
import hufi from "./assets/logos/hufi.jpeg";
import english from "./assets/logos/english.avif";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdWorkHistory } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";

// import images exp icoc
import icoc_evident_1 from "./assets/images/icoc/img_1.jpg";
import icoc_evident_2 from "./assets/images/icoc/img_2.jpg";
import icoc_evident_3 from "./assets/images/icoc/img_3.jpg";
import icoc_evident_4 from "./assets/images/icoc/img_4.jpg";
import icoc_evident_5 from "./assets/images/icoc/img_5.jpg";

// import images exp novaliches
import novaliches_evident_1 from "./assets/images/novaliches/img_1.jpg";
import novaliches_evident_2 from "./assets/images/novaliches/img_2.jpg";
import novaliches_evident_3 from "./assets/images/novaliches/img_3.jpg";
import novaliches_evident_4 from "./assets/images/novaliches/img_4.jpg";
import novaliches_evident_5 from "./assets/images/novaliches/img_5.jpg";
import novaliches_evident_6 from "./assets/images/novaliches/img_6.jpg";

// import images exp haccp
import haccp_evident_1 from "./assets/images/haccp/image_1.jpg";
import haccp_evident_2 from "./assets/images/haccp/image_2.jpg";

// import images exp english center
import english_evident_1 from "./assets/images/englishCenter/image_1.png";
import english_evident_2 from "./assets/images/englishCenter/image_2.png";
import english_evident_3 from "./assets/images/englishCenter/image_3.png";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#certificates",
      icon: TbCertificate,
    },
    {
      link: "#projects",
      icon: MdWorkHistory,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Quality Assurance",
    firstName: "Huế",
    LastName: "Lê",
    btnText: "Contact me",
    image: Hero_person,
    hero_content: [
      {
        count: "CAREER GOAL",
      },
      {
        count: "",
        text: "Become a Quality Assurance position that enables me to make a positive contribution to company by utilizing my skills to their fullest potential.",
      },
    ],
  },
  education: {
    certificate:
      "Bachelor of Quality Assurance & Food Safety Engineer ( HUFI )",
    gpa: 3.13,
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Flexibility",
        para: "Lorem ipsum text  dummy",
        logo: flexibility,
      },
      {
        name: "Adaptability",
        para: "Lorem ipsum text  dummy",
        logo: adaptation,
      },
      {
        name: "Teamwork",
        para: "Lorem ipsum text  dummy",
        logo: teamwork,
      },
      {
        name: "Working under pressure",
        para: "Lorem ipsum text  dummy",
        logo: work,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Certificates",
    subtitle: "WHAT I HAVE",
    service_content: [
      {
        title: "FSSC & HACCP",
        para: "Awareness & Practical knowledge of Food Safety Management Systems according to ISO 22000/FSSC 22000 Ver.5.1 & HACCP 2020",
        logo: iso,
      },
      {
        title: "FSPCA",
        para: "CERTIFICATE OF TRAINING Food Defense Awareness",
        logo: iso,
      },
      {
        title: "EUROFINS",
        para: "CERTIFICATE OF COMPLETION Overview of IA rule & Food Defense",
        logo: iso,
      },
    ],
  },
  Award: {
    title: "Awards",
    subtitle: "WHAT I GOT",
    award_content: [
      {
        para: "Scholarship encouraging study (HUFI)",
        logo: certificate,
      },
      {
        para: "Certificate of merit for outstanding contributions to Ho Chi Minh Communist Youth Union of the Faculty of Food Technology",
        logo: certificate,
      },
      {
        para: "Volunteer certificate of appreciation (KNB)",
        logo: certificate,
      },
      {
        para: "Gold medal of Quality Assurance & Food Safety major",
        logo: certificate,
      },
    ],
  },
  // Testimonials: {
  //   title: "Experiences",
  //   subtitle: "My works",
  //   testimonials_content: [
  //     {
  //       review: [
  //         "Establish HACCP plan.",
  //         "Support company's training activities.",
  //         "Write, review, edit, and update content related to Food safety standard for company websites, facebook, and similar platforms.",
  //       ],
  //       img: icoc,
  //       company:
  //         "International certificate of conformity company,ltd | 08/2022- 02/2023",
  //       role: "Intern",
  //     },
  //     {
  //       review: [
  //         "Working with small groups of students to enhance the learning process.",
  //         "Set up necessary material for classes.",
  //         "Support teaching, and give more detail to address students concern during the course.",
  //       ],
  //       img: novaliches,
  //       company:
  //         "Novaliches training consulting service company limited | 02/2022-02/2023",
  //       role: "Teaching Assistant",
  //     },
  //     {
  //       review: [
  //         "Provide students positive, and constructive feedback",
  //         "Help teacher to deliver lessons in urgent situations",
  //         "Supporting children across the curriculum",
  //         "Assisting with marking and correcting work",
  //       ],
  //       img: hufi,
  //       company: "The Century English center | 10/2020-05/2021",
  //       role: "HACCP Teaching Assistant",
  //     },
  //     {
  //       review: [
  //         "Manage classroom activities",
  //         "Support lectures, and students during the course",
  //       ],
  //       img: english,
  //       company: "The Faculty of Food Technology - HUFI | 05/2022- 09/2022",
  //       role: "HACCP Teaching Assistant",
  //     },
  //   ],
  // },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "lethihonghue2112001@gmail.com",
        icon: GrMail,
        link: "mailto:lethihonghue2112001@gmail.com",
      },
      {
        text: "Huế Lê",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/hue-le-250773225/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
  Carts: {
    icoc: [
      {
        imageUrl: icoc_evident_1,
        alt: "icoc hue le event",
      },
      {
        imageUrl: icoc_evident_2,
        alt: "icoc hue le event",
      },
      {
        imageUrl: icoc_evident_3,
        alt: "icoc hue le event",
      },
      {
        imageUrl: icoc_evident_4,
        alt: "icoc hue le event",
      },
      {
        imageUrl: icoc_evident_5,
        alt: "icoc hue le event",
      },
    ],
    novaliches: [
      {
        imageUrl: novaliches_evident_1,
        alt: "novaliches hue le event",
      },
      {
        imageUrl: novaliches_evident_2,
        alt: "novaliches hue le event",
      },
      {
        imageUrl: novaliches_evident_3,
        alt: "novaliches hue le event",
      },
      {
        imageUrl: novaliches_evident_4,
        alt: "novaliches hue le event",
      },
      {
        imageUrl: novaliches_evident_5,
        alt: "novaliches hue le event",
      },
      {
        imageUrl: novaliches_evident_6,
        alt: "novaliches hue le event",
      },
    ],
    haccp: [
      {
        imageUrl: haccp_evident_1,
        alt: "haccp hue le event",
      },
      {
        imageUrl: haccp_evident_2,
        alt: "haccp hue le event",
      },
    ],
    englishCenter: [
      {
        imageUrl: english_evident_1,
        alt: "english center hue le event",
      },
      {
        imageUrl: english_evident_2,
        alt: "english center hue le event",
      },
      {
        imageUrl: english_evident_3,
        alt: "english center hue le event",
      },
    ],
  },
  WorkTimeLine: {
    icoc: {
      company: "International certificate of conformity company,ltd",
      role: [
        "Establish HACCP plan.",
        "Support company's training activities.",
        "Write, review, edit, and update content related to Food safety standard for company websites, facebook, and similar platforms.",
      ],
      endDate: "08/2022- 02/2023",
    },
    novaliches: {
      company: "Novaliches training consulting service company limited",
      role: [
        "Working with small groups of students to enhance the learning process.",
        "Set up necessary material for classes.",
        "Support teaching, and give more detail to address students concern during the course.",
      ],
      endDate: "02/2022-02/2023",
    },
    haccp: {
      company: "The Faculty of Food Technology - HUFI",
      role: [
        "Manage classroom activities",
        "Support lectures, and students during the course",
      ],
      endDate: "05/2022- 09/2022",
    },
    englishCenter: {
      company: "The Century English center",
      role: [
        "Provide students positive, and constructive feedback",
        "Help teacher to deliver lessons in urgent situations",
        "Supporting children across the curriculum",
        "Assisting with marking and correcting work",
      ],
      endDate: "10/2020-05/2021",
    },
  },
};
