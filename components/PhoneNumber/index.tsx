import PhoneInput, { CountryData } from "react-phone-input-2";
import "../PhoneNumber/phoneInput-2-style.css";
import { useEffect, useState, memo } from "react";
// import { TooltipCommon } from "../TooltipCommon";

interface PhoneNumberProps {
  phone?: string;
  phoneCode?: string;
  setPhone?: (phone: string) => void;
  setPhoneCode?: (code: string) => void;
  styles?: object;
  errorMessage?: string;
  noFixedHeight?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  compulsory?: boolean;
  disabled?: boolean;
  labelStyles?: string;
  wrapperStyles?: string;
  showLabel?: boolean;
  isTooltipText?: string;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  phone,
  phoneCode = "+91",
  setPhone,
  setPhoneCode,
  styles,
  errorMessage,
  noFixedHeight,
  onBlur,
  compulsory = false,
  labelStyles,
  wrapperStyles,
  disabled,
  showLabel = true,
  // isTooltipText,
}) => {
  const [value, setValue] = useState(`+${phoneCode}${phone || ""}`);

  const handleOnChange = (value: string, data: CountryData) => {
    const phoneNumber = value.slice(data?.dialCode?.length);
    const formattedPhoneCode = `+${data?.dialCode?.replace(/\D/g, "")}`;

    if (setPhone) setPhone(phoneNumber);
    if (setPhoneCode) setPhoneCode(formattedPhoneCode); // This will always include the '+' sign

    setValue(`+${data.dialCode.replace(/\D/g, "")}${phoneNumber}`);
  };

  useEffect(() => {
    // Ensure '+' sign is present
    const cleanPhoneCode = `+${phoneCode.replace(/\D/g, "")}`;
    setValue(`${cleanPhoneCode}${phone || ""}`);
  }, [phoneCode, phone]);

  return (
    <>
      {showLabel && (
        <label
          htmlFor="Phone Number"
          className={`mb-3 block text-sm font-medium text-dark dark:text-white ${labelStyles}`}
        >
          Phone Number
          {compulsory && (
            <span className="text-error text-sm relative  -top-0.5 text-fluorescent_red">
              {" "}
              *
            </span>
          )}
        </label>
      )}
      <div className={`${wrapperStyles}`}>
        <PhoneInput
          specialLabel=""
          enableSearch
          value={value}
          searchClass="tw-search-icon"
          onChange={handleOnChange}
          country={phoneCode.replace(/\D/g, "").toLowerCase()}
          inputStyle={styles}
          onBlur={onBlur}
          disabled={disabled}
        />
        <p
          className={`absolute text-[10px] 2xl:text-xs break-all ${
            errorMessage
              ? `text-red-500 block ${noFixedHeight ? "" : "mt-[3px] h-[14px]"}`
              : ""
          }`}
        >
          {errorMessage}
        </p>
      </div>
    </>
  );
};

export default memo(PhoneNumber);
