// import content

import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { content } from "../Content";
const Hero = () => {
  const { hero, education } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[45%] right-[-8%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex flex-col w-80 gap-y-4">
            <p className="font-semibold">{education.certificate}</p>
            <p className="font-semibold">
              GPA: <span className="font-normal">{education.gpa}</span>
            </p>
          </div>
          <br />
          <div className="flex justify-end">
            <a className="btn flex items-center" href="#contact">
              <HiOutlineArrowNarrowDown className="mr-2 animate-bounce" />
              {hero.btnText}
            </a>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-3
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h4>{content.count}</h4>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
