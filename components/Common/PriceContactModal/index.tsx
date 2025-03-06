import Link from "next/link";
import CommonModal from "@/components/UI/CommonModal";
import Image from "next/image";
interface props {
  showPricingModal: boolean;
  handleClosePricingModal: () => void;
}

const PriceContactModal: React.FC<props> = ({
  showPricingModal,
  handleClosePricingModal,
}) => {
  return (
    <CommonModal
      isOpen={showPricingModal}
      onClose={handleClosePricingModal}
      className="p-10 w-[614px]"
    >
      <div className="flex items-center justify-center">
        <Image
          src="/images/ContactSupportIcon.svg"
          alt="ContactSupportIcon"
          height={94}
          width={106}
          className="animate-bounce"
        />
      </div>
      <p className="text-dark mt-5 text-center">
        Feel free to contact us with any questions or for more details about the
        plan. We’re here to assist and provide the information you need to make
        an informed decision.
      </p>
      <Link
        href="/contact"
        className="mt-5 block text-center w-full text-white rounded-xl transition duration-300 bg-primary text-lg py-4 px-8"
      >
        Contact Us
      </Link>
    </CommonModal>
  );
};

export default PriceContactModal;
