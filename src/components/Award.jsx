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
      </div>
    </section>
  );
};

export default Award;
