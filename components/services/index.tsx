import ServiceCard from "../Common/ServiceCard";
import ServiceData from "./serviceData";
const Services = () => {
  return (
    <section
      id="services"
      className="bg-seasalt px-4 lg:px-20 2xl:px-[150px] py-5 xl:py-[54px]"
    >
      <h2 className="text-xl text-center lg:text-2xl xl:text-[52px] xl:leading-[65px] text-dark">
        Industries we serve
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-x-5 gap-y-12 mt-[54px]">
        {ServiceData.map((service, index) => (
          <ServiceCard key={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </section>
  );
};

export default Services;
