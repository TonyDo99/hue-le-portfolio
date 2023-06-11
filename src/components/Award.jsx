import { content } from "../Content";

const Award = () => {
  const { Award } = content;
  return (
    <section id="certificates">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {Award.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Award.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {Award.award_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 450}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1
              outline-none outline-offset-0 hover:!transition-all hover:!outline hover:!outline-2 hover:!outline-[#2CAAA0] group-hover:outline-none shadow-cyan-500/50"
            >
              <img src={content.logo} alt="..." className="mx-auto" />
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Award;
