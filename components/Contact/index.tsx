"use client";
import { useState } from "react";
import PhoneNumber from "../PhoneNumber";
import Dropdown from "../Common/Dropdown";
import Image from "next/image";
import { Industry } from "./Industry";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isValidPhoneNumber } from "libphonenumber-js";
export interface DropdownOption {
  label: string;
  value: string | number;
}

const MULTIPLE_SPACES = /\s{2,}/g;

const Contact = () => {
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const URL_REGEX =
    /^(https:\/\/|www\.)([\da-z.-]+)\.([a-z.]{2,6})([\\/\w .-]*)*\/?$/;
  const validatePhoneNumber = (phone: string, phoneCode: string) => {
    if (!phone.trim()) {
      return "Phone number is required";
    }
    if (phoneCode === "+91" && phone.length !== 10) {
      return "Please enter a valid phone number"; // Custom error message for invalid starting digit
    }
    const fullPhoneNumber = `${phoneCode}${phone}`;
    const isValid = isValidPhoneNumber(fullPhoneNumber);
    return isValid ? "" : "Please enter a valid phone number";
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState<string>(""); // Store the phone number
  const [phoneCode, setPhoneCode] = useState<string>("+91"); // Store the phone code
  const [formErrors, setFormErrors] = useState<Record<string, string>>({}); // For field-specific errors
  const [selectedIndustry, setSelectedIndustry] =
    useState<DropdownOption | null>(null);

  const industryOptions: DropdownOption[] = Object.entries(Industry).map(
    ([key, value]) => ({
      label: value,
      value: key,
    }),
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    description: "",
    websiteUrl: "",
    industry: "",
  });

  const validateFirstName = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "First name is required.";
    if (!/[a-zA-Z]/.test(trimmed))
      return "First name must contain at least one letter.";
    if (trimmed.length < 3 || trimmed.length > 30)
      return "First name must be between 3 and 30 characters.";
    return "";
  };

  const validateLastName = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "Last name is required.";
    if (!/[a-zA-Z]/.test(trimmed))
      return "Last name must contain at least one letter.";
    if (trimmed.length < 3 || trimmed.length > 30)
      return "Last name must be between 3 and 30 characters.";
    return "";
  };

  const validateEmail = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "Email is required.";
    return EMAIL_REGEX.test(trimmed)
      ? ""
      : "Please enter a valid email address.";
  };

  const validatePhone = (value: string) => {
    return validatePhoneNumber(value, phoneCode);
  };

  const validateWebsiteUrl = (value: string) => {
    // if (!value.trim()) return TEXTS.WEBSITE_URL_REQUIRED;
    // if (!Helper.validateUrl(value)) return TEXTS.WEBSITE_URL_INVALID;
    return value && !URL_REGEX.test(value) ? "Website URL is invalid" : "";
    // return "";
  };

  const validateDescription = (value: string) => {
    if (!value.trim()) return "Query is required";
    return "";
  };

  const handleChange = (name: string, value: string) => {
    // Update form data
    const cleanedValue = value.trimStart().replace(MULTIPLE_SPACES, " ");

    setFormData((prevState) => ({ ...prevState, [name]: cleanedValue }));

    // Initialize an error variable
    let error = "";

    // Switch case to call the appropriate validation function
    switch (name) {
      case "firstName":
        error = validateFirstName(cleanedValue);
        break;
      case "lastName":
        error = validateLastName(cleanedValue);
        break;
      case "email":
        error = validateEmail(cleanedValue);
        break;
      case "phone":
        error = validatePhone(cleanedValue);
        break;
      case "websiteUrl":
        error = validateWebsiteUrl(cleanedValue);
        break;
      case "description":
        error = validateDescription(cleanedValue);
        break;
      default:
        error = ""; // No validation needed
    }

    // Update the errors state
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    const phoneError = validatePhoneNumber(value, phoneCode);
    setFormErrors((prevErrors) => ({ ...prevErrors, phone: phoneError }));
  };

  const handlePhoneCodeChange = (value: string) => {
    setPhoneCode(value);
    // Optionally, validate or handle any side effects for phoneCode changes
  };

  // const validateFields = () => {
  //   const errors: Record<string, string> = {};
  //   if (!formData.firstName.trim())
  //     errors.firstName = "First name is required.";
  //   if (!formData.email.trim()) errors.email = "Email is required.";
  //   if (!phone.trim()) errors.phone = "Phone number is required.";
  //   const phoneError = validatePhoneNumber(phone, phoneCode);
  //   if (phoneError) errors.phone = phoneError;
  //   // if (!selectedIndustry) errors.industry = "Please select an industry.";

  //   setFormErrors(errors);
  //   return Object.keys(errors).length === 0;
  // };

  const validateFields = () => {
    const errors: Record<string, string> = {};

    errors.firstName = validateFirstName(formData.firstName.trim());
    errors.lastName = validateLastName(formData.lastName.trim());
    errors.email = validateEmail(formData.email.trim());
    errors.phone = validatePhone(phone);
    errors.websiteUrl = validateWebsiteUrl(formData.websiteUrl.trim());
    errors.description = validateDescription(formData.description.trim());

    // if (!selectedIndustry) errors.industry = TEXTS.INDUSTRY_ERROR;

    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateFields()) return;

    const payload: Record<string, any> = {
      ...formData,
      phone: `${phoneCode}${phone}`,
      industry: selectedIndustry?.value || "",
      ...(formData.websiteUrl.trim() && { websiteUrl: formData.websiteUrl }),
    };

    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://staging.api.hellofy.io/api/v1/user-service/user/visitor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      if (response) {
        setIsSubmitting(false);
      }

      if (response.ok) {
        toast.success("Message sent! We'll contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          description: "",
          websiteUrl: "",
          industry: "",
        });
        setPhone("");
        setPhoneCode("+91");
        setSelectedIndustry(null);
        setFormErrors({});
      } else {
        toast.error("Data submission failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative">
      <ToastContainer position="top-center" autoClose={8000} pauseOnHover />
      <div className="bg-mintcream bg-cover bg-center px-5 md:px-[58px] lg:px-0 bg-no-repeat absolute h-1/2 w-full">
        <Image
          src="/images/contact/contact_vector_1.svg"
          height={76}
          width={76}
          alt="contact_vector_3"
          className="absolute 2xl:block hidden left-32 top-1/2 w-[4vw]"
        />
        <Image
          src="/images/contact/contact_vector_2.svg"
          height={354}
          width={296}
          alt="contact_vector_3"
          className="absolute 2xl:block hidden w-[10vw] right-0 -bottom-[7.3rem]"
        />
      </div>
      <div className="container pt-[150px] pb-[110px]">
        <div className="relative">
          <h2 className="text-dark text-center font-bold text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-64 3xl:leading-[60px]">
            Contact Us
          </h2>
          <p className="text-dark xl:text-3xl text-center text-base xl:w-[900px] w-full mx-auto mt-3">
            We’re here for anything you need. Just drop us a quick message
            below. We’ll get back in 24 hrs.
          </p>
        </div>
        <div className="lg:w-[836px] w-full bg-white mx-auto relative shadow-dark_grey_shadow border border-gray-dark rounded-3xl p-10 lg:p-[88px] mt-[88px]">
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="firstname"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    // onChange={handleChange} // Add onChange event
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    value={formData.firstName} // Add value from state
                    placeholder="Enter your first name"
                    className=" border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-md border bg-whitesmoke px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.firstName}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="lastname"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    value={formData.lastName} // Add value from state
                    placeholder="Enter your last name"
                    className=" border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-md border bg-whitesmoke px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="Email"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => handleChange("email", e.target.value)}
                    value={formData.email} // Add value from state
                    placeholder="Enter your email address"
                    className=" border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-md border bg-whitesmoke px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <PhoneNumber
                    phone={phone}
                    phoneCode={phoneCode}
                    setPhone={handlePhoneChange}
                    setPhoneCode={handlePhoneCodeChange}
                    // onBlur={handlePhoneBlur}
                    compulsory
                    labelStyles="text-gray-700"
                    showLabel
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="WebsiteURL"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Website URL
                  </label>
                  <input
                    type="text"
                    name="websiteUrl"
                    onChange={(e) => handleChange("websiteUrl", e.target.value)}
                    value={formData.websiteUrl} // Add value from state
                    placeholder="Enter website url"
                    className=" border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-md border bg-whitesmoke px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  />
                  {formErrors.websiteUrl && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.websiteUrl}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="Industry"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Industry
                  </label>
                  <Dropdown
                    options={industryOptions}
                    selected={selectedIndustry}
                    onSelect={(option) => setSelectedIndustry(option)}
                    placeholder="Select your industry"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="whatsisyourquery"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    What is your query?
                  </label>
                  <textarea
                    name="description"
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    value={formData.description}
                    rows={5}
                    placeholder="Enter your message"
                    className=" border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-md border bg-whitesmoke px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                  {formErrors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full px-4">
                <button
                  type="submit"
                  className="shadow-submit dark:shadow-submit-dark rounded-md bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 w-full"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full py-[88px] ">
          <div className="flex flex-col md:flex-row gap-6 md:gap-48 items-center justify-center w-full ">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/images/contact/email_icon.svg"
                height={108}
                width={112}
                alt="email_icon"
              />
              <h3 className="text-dark lg:text-3xl text-2xl font-medium mt-5">
                Email
              </h3>
              <p className="text-dark lg:text-[20px] text-sm font-normal">
                hello@hellofy.io
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/images/contact/map_icon.svg"
                height={108}
                width={112}
                alt="map_icon"
              />
              <h3 className="text-dark lg:text-3xl text-2xl font-medium mt-5">
                Office
              </h3>
              <p className="text-dark lg:text-[20px] text-sm font-normal text-center">
                A- 1107, PNTC, VEJALPUR, <br />
                Jodhpur Char Rasta, <br />
                Ahmadabad City,
                <br /> Ahmedabad- 380015, Gujarat
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/images/contact/phone_icon.svg"
                height={108}
                width={112}
                alt="phone_icon"
              />
              <h3 className="text-dark lg:text-3xl text-2xl font-medium mt-5">
                Phone
              </h3>
              <p className="text-dark lg:text-[20px] text-sm font-normal">
                +91-9724323103
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          src="/images/contact/contact_vector_3.svg"
          height={354}
          width={296}
          alt="contact_vector_3"
          className="absolute w-[10vw] left-0 bottom-0"
        />
      </div>
    </section>
  );
};

export default Contact;
