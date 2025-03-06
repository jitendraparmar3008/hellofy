import {
  RetailerEcomIcon,
  FastMoveGoodsIcon,
  BfsiIcon,
  EdtechIcon,
  ManufacturingIcon,
  HealthcareIcon,
  MarketingIcon,
  TravelIcon,
  SchoolIcon,
  TradingIcon,
  OttIcon,
  GoventitiesIcon,
  RestaurantsIcon,
  TransportationIcon,
  RealestateIcon,
  ShipinglinesIcon,
} from "@/constant/icons";

interface ServiceDataProps {
  title: string;
  icon?: string | JSX.Element;
}
const serviceData: ServiceDataProps[] = [
  {
    title: "Retail & E-commerce",
    icon: <RetailerEcomIcon />,
  },
  {
    title: "Fast Moving Consumer Goods",
    icon: <FastMoveGoodsIcon />,
  },
  {
    title: "BFSI",
    icon: <BfsiIcon />,
  },
  {
    title: "Edtech ",
    icon: <EdtechIcon />,
  },
  {
    title: "Manufacturing",
    icon: <ManufacturingIcon />,
  },
  {
    title: "Healthcare and Hospitals",
    icon: <HealthcareIcon />,
  },
  {
    title: "Marketing & Sales",
    icon: <MarketingIcon />,
  },
  {
    title: "Travel",
    icon: <TravelIcon />,
  },
  {
    title: "School and University",
    icon: <SchoolIcon />,
  },
  {
    title: "Trading Company",
    icon: <TradingIcon />,
  },
  {
    title: "Entertainment/ OTT platforms",
    icon: <OttIcon />,
  },
  {
    title: "Government Entities ",
    icon: <GoventitiesIcon />,
  },
  {
    title: "Restaurants and Hotels ",
    icon: <RealestateIcon />,
  },
  {
    title: "Transportation & warehouse",
    icon: <TransportationIcon />,
  },
  {
    title: "Real Estate",
    icon: <RealestateIcon />,
  },
  {
    title: "Shiping Lines/CHA/CFS",
    icon: <ShipinglinesIcon />,
  },
];
export default serviceData;
