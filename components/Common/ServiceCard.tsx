interface props {
  title?: string;
  icon?: string | JSX.Element;
}
const ServiceCard: React.FC<props> = ({ title, icon }) => {
  return (
    <div className="flex flex-col gap-[22px] group transition-all">
      <div className="flex items-center justify-center w-84 h-84 rounded-full bg-white mx-auto group-hover:shadow-xl transition-all group-hover:scale-110">
        {icon}
      </div>
      <h4 className="text-sm md:text-base font-normal md:leading-[18px] text-dark text-center group-hover:text-primary transition-all">
        {title}
      </h4>
    </div>
  );
};

export default ServiceCard;
