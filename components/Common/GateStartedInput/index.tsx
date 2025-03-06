import Button from "@/components/UI/Button";
import InputBox from "@/components/UI/InputBox";
import React from "react";

const GateStartedInput = () => {
  return (
    <div className="mt-10 md:w-[654px] w-full mx-auto relative">
      <InputBox
        className="w-full text-sm md:h-[72px] h-[56px] !rounded-xl pr-36 max-[600px]:pr-28"
        size="large"
        pleceholder="Please enter your email"
      />
      <Button
        className="absolute md:right-3 md:top-3 top-1 right-1 !rounded-lg hover:bg-opacity-90 max-[600px]:px-2"
        name="Get Started"
        backgroundColor="bg-primary"
      />
    </div>
  );
};

export default GateStartedInput;
