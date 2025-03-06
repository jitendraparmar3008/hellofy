import FeatureCard from "../Common/FeatureCard";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="about" className="max-w-[1421px] mx-auto pt-4 lg:pt-[88px]">
      <h2 className="text-2xl px-3 lg:text-4xl 2xl:text-[46px] 2xl:leading-[65px] text-dark font-medium text-center mb-11">
        Features designed to{" "}
        <span className="text-primary ml-1.5">delight</span> both your customers
        and your team.
      </h2>
      <div className="flex flex-col gap-3.5 md:gap-5 lg:gap-3.5 mb-20 md:mb-[88px] px-4 md:px-0">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            subTitle={feature.subTitle}
            description={feature.description}
            image={feature.image}
            icon={feature.icon}
            buttonName={feature.buttonName}
            link={feature.link}
            reverseorder={index % 2 !== 0}
            bgColor={feature.bgColor}
            width={feature.width}
            height={feature.height}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
