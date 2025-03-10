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
import quatest from "./assets/icons/quatest3.png";
import google from "./assets/icons/google-cert.png";
import office from "./assets/icons/office.png";
import languages from "./assets/icons/languages.png";

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

// import images exp cpc
import cpc_evident_1 from "./assets/images/cpc/image_1.jpg";
import cpc_evident_2 from "./assets/images/cpc/image_2.jpg";

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
        name: "Microsoft office tools",
        para: "7/10",
        logo: office,
        href: "/",
      },
      {
        name: "English - B2 Upper Intermediate",
        para: "8/10",
        logo: languages,
        href: "https://cert.efset.org/1awoZC",
      },
      {
        name: "Flexibility",
        para: "10/10",
        logo: flexibility,
        href: "/",
      },
      {
        name: "Adaptability",
        para: "10/10",
        logo: adaptation,
        href: "/",
      },
      {
        name: "Teamwork",
        para: "10/10",
        logo: teamwork,
        href: "/",
      },
      {
        name: "Working under pressure",
        para: "10/10",
        logo: work,
        href: "/",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Certificates",
    subtitle: "WHAT I HAD",
    service_content: [
      {
        title: "Google AI Essentials",
        para: "",
        logo: google,
        href: "https://www.credly.com/badges/7c9ad436-c2a1-4d09-8029-234f1c11c24b/linked_in_profile",
      },
      {
        title: "Internal Audit of QMS based on ISO 9001:2015",
        para: "",
        logo: quatest,
        href: "https://www.linkedin.com/in/hue-le-250773225/details/certifications/1718596121916/single-media-viewer/?profileId=ACoAADiIMJwBEyCB856HtBVxOI616vAojfptv8I",
      },
      {
        title: "Risk assessment based on ISO 31001:2018",
        para: "",
        logo: quatest,
        href: "https://www.linkedin.com/in/hue-le-250773225/details/certifications/1718596001192/single-media-viewer/?profileId=ACoAADiIMJwBEyCB856HtBVxOI616vAojfptv8I",
      },
      {
        title: "FSSC & HACCP",
        para: "Awareness & Practical knowledge of Food Safety Management Systems according to ISO 22000/FSSC 22000 Ver.5.1 & HACCP 2020",
        logo: iso,
        href: "/",
      },
      {
        title: "Awareness & Practical knowledge of Food Safety Management",
        para: "Awareness & Practical knowledge of Food Safety Management Systems according to ISO 22000/FSSC 22000 Ver.5.1 & HACCP 2020",
        logo: iso,
        href: "/",
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
    cpc: [
      {
        imageUrl: cpc_evident_1,
        alt: "cpc company hue le event",
      },
      {
        imageUrl: cpc_evident_2,
        alt: "cpc company hue le event",
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
    cpc: {
      company: "Continent Packaging Corporation - CPC",
      role: [
        "Improve and monitor QMS: in the company. Assist in managing and documenting change control processes to ensure all changes are properly evaluated, approved, and implemented following company policies and regulations. Handling of change controls, deviations, and CAPA in QMS systems.",
        "Audits: Support customer audits (IKEA, Li & Fung, Woolworths,...) and certification audits ( ISO 9001:2015, ISO 14001:2015, GRS) by preparing necessary documentation, participating in on-site audits, and addressing any quality- related inquiries or concerns raised by auditors.",
        "Customer Complaints: Assist in the management of customer complaints by investigating and documenting complaints, coordinating with relevant departments to address root causes, and implementing corrective and preventive actions.",
        "Implement Internal Audit, and support Supplier audit.",
        "Create and update SOP, report, etc.",
        "Train Suppliers about the standard of products.",
      ],
      endDate: "09/2023-07/2024",
    },
  },
};
