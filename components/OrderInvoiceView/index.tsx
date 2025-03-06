import { OrderYellow, TickMark } from "@/constant/icons";
import Image from "next/image";
import OrderInfoandForm from "./OrderInfoandForm";

const OorderInvoiceView = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(../images/order/order_bg_vector.svg)",
          backgroundSize: "100% 100%",
        }}
        className="xl:h-[894px] 2xl:h-[978px] 3xl:h-[1332px] flex xl:items-center 3xl:items-end md:pb-[115px]  bg-no-repeat relative max-[600px]:!bg-1024 h-auto max-[1024px]:!bg-cover min-[1910px]:!bg-cover"
      >
        <div className="flex flex-col xl:flex-row items-start md:items-center xl:items-start px-10 md:px-5 xl:px-[102px] py-11 md:pt-14 xl:py-0">
          <Image
            src="../images/order/order_mobile_view.svg"
            alt="hero_left"
            width={1067}
            height={865}
            className="h-full max-h-[200px] md:max-h-[350px] 3xl:max-h-[865px] 2xl:max-h-[550px] w-full 2xl:max-w-[1067px]"
          />
          <div>
            <div className="w-full 3xl:w-[755px] 3xl:-ml-24 pt-1 xl:pt-0 3xl:pt-32">
              <OrderYellow className="scale-75" />
              <h2 className="text-white font-bold text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-52 3xl:leading-[60px] mt-2 2xl:mt-5">
                Get orders placed and generate invoices more quickly than ever.
              </h2>
              <ul className="flex flex-col gap-4 lg:gap-10 pt-5">
                <li className="flex items-start gap-3">
                  <TickMark className="min-w-[26px]" />
                  <span className="text-white font-normal text-sm lg:text-xl lg:leading-6">
                    Utilize the built-in order form builder and integrate with
                    your ERP or billing system. 
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TickMark className="min-w-[26px]" />
                  <span className="text-white font-normal text-sm lg:text-xl lg:leading-6">
                    Share forms with customers, dealers, distributors,
                    retailers, and sales representatives to enable order
                    placement and automatic invoice generation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TickMark className="min-w-[26px]" />
                  <span className="text-white font-normal text-sm lg:text-xl lg:leading-6">
                    Automatically send E-invoices, challans, E-way bills, and
                    payment reminders based on due dates, among other features
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Image
          src="../images/order/bot_take_order.svg"
          alt="hero_left"
          width={523}
          height={250}
          className="hidden md:block h-full max-h-[100px] lg:max-h-fit xl:max-h-[250px] w-full max-w-[250px] lg:max-w-[350px] xl:max-w-[523px] absolute bottom-0 right-0"
        />
      </div>
      <OrderInfoandForm />
    </>
  );
};

export default OorderInvoiceView;
