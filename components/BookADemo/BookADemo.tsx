"use client";
import { useState } from "react";
import Dropdown from "../Common/Dropdown";
import PhoneNumber from "../PhoneNumber";
import { DatePicker } from "rsuite";
import Image from "next/image";
import { MeetingMode } from "./MeetingMode";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isValidPhoneNumber } from "libphonenumber-js";

export interface DropdownOption {
  label: string;
  value: string | number;
}

const BookADemo = () => {
  const meetingModeOptions: DropdownOption[] = Object.entries(MeetingMode).map(
    ([key, value]) => ({
      label: value,
      value: key,
    }),
  );

  const disablePastDates = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the start of today
    return date < today;
  };
  const MULTIPLE_SPACES = /\s{2,}/g;

  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validatePhoneNumber = (phone: string, phoneCode: string) => {
    if (!phone.trim()) return "Phone number is required.";
    if (phoneCode === "+91" && phone.length !== 10) {
      return "Please enter a valid phone number";
    }
    const fullPhoneNumber = `${phoneCode}${phone}`;
    return isValidPhoneNumber(fullPhoneNumber)
      ? ""
      : "Please enter a valid phone number.";
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState<string>(""); // Phone number state
  const [phoneCode, setPhoneCode] = useState<string>("+91"); // Phone code state
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [selectedMeetingMode, setSelectedMeetingMode] =
    useState<DropdownOption | null>(null);
  const [preferredDateUnix, setPreferredDateUnix] = useState<number | null>(
    null,
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
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

  const validateDescription = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "Description is required.";
    return "";
  };

  const validateFields = () => {
    const errors: Record<string, string> = {};

    errors.firstName = validateFirstName(formData.firstName);
    errors.lastName = validateLastName(formData.lastName);
    errors.email = validateEmail(formData.email);
    errors.phone = validatePhoneNumber(phone, phoneCode);
    errors.description = validateDescription(formData.description);
    if (!preferredDateUnix)
      errors.preferredDate = "Please select a preferred date and time.";
    if (!selectedMeetingMode)
      errors.preferredMode = "Please select a preferred meeting mode.";

    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handleChange = (name: string, value: string) => {
    // Remove leading spaces and replace multiple spaces with a single space.
    const cleanedValue = value.trimStart().replace(MULTIPLE_SPACES, " ");

    setFormData((prev) => ({ ...prev, [name]: cleanedValue }));

    let error = "";
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
      case "description":
        error = validateDescription(cleanedValue);
        break;
      default:
        error = "";
    }
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    const phoneError = validatePhoneNumber(value, phoneCode);
    setFormErrors((prevErrors) => ({ ...prevErrors, phone: phoneError }));
  };

  const handlePhoneCodeChange = (value: string) => {
    setPhoneCode(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateFields()) return;

    const payload: Record<string, any> = {
      ...formData,
      phone: `${phoneCode}${phone}`,
      preferredMode: selectedMeetingMode?.value || "",
      preferredDate: preferredDateUnix,
    };

    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://staging.api.hellofy.io/api/v1/user-service/user/visitor",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      setIsSubmitting(false);

      if (response.ok) {
        toast.success("Demo booked! We'll contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          description: "",
        });
        setPhone("");
        setPhoneCode("+91");
        setSelectedMeetingMode(null);
        setPreferredDateUnix(null);
        setFormErrors({});
      } else {
        toast.error("Data submission failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const validatePreferredDate = (value: Date | null) => {
    if (!value) return "Preferred date and time are required.";
    if (value.getTime() < new Date().getTime())
      return "Selected date cannot be in the past.";
    return ""; // No error
  };

  const handleDateChange = (value: Date | null) => {
    if (value) {
      const error = validatePreferredDate(value); // Validate the date
      setPreferredDateUnix(value.getTime()); // Set the preferred date in Unix format
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        preferredDate: error, // Update the error state
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        preferredDate: "Preferred date and time are required.", // Handle empty date case
      }));
    }
  };

  const validateMeetingMode = (value: DropdownOption | null) => {
    if (!value) return "Please select a meeting mode.";
    return ""; // No error
  };

  const handleMeetingModeChange = (option: DropdownOption | null) => {
    const error = validateMeetingMode(option); // Validate the selected meeting mode
    setSelectedMeetingMode(option); // Update the selected option
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      preferredMode: error, // Update the error state
    }));
  };

  return (
    <section id="BookADemo" className="overflow-hidden 2xl:py-44 py-32">
      <ToastContainer position="top-center" autoClose={8000} pauseOnHover />
      <div className="container">
        <div className="w-full relative">
          <h2 className="text-dark text-center font-bold text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-64 3xl:leading-[60px]">
            Book a non-binding consultation at your convenience.
          </h2>
          <p className="text-dark xl:text-3xl text-center text-base w-full mx-auto mt-3">
            Share a bit about your company and book a meeting with one of our
            Hellofy experts. They’ll walk you through our product and answer any
            questions you have.
          </p>
          <Image
            src="/images/book-a-demo/book_a_demo_vector_1.svg"
            height={108}
            width={310}
            alt="book_a_demo_vector_1"
            className="absolute 2xl:block hidden w-[18vw] -left-20"
          />
        </div>
        <div className="relative flex justify-center items-center">
          <div className="overlay-gradient-book-a-demo lg:block hidden"></div>
          <div className="lg:w-[836px] w-full bg-white mx-auto relative shadow-dark_grey_shadow border border-gray-dark rounded md:rounded-3xl p-2.5 lg:p-[88px] md:p-10 mt-[88px]">
            <div className="w-full">
              {/* <form onSubmit={handleSubmit}> */}
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
                    // onChange={handleChange} // Add onChange event
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
                    // onChange={handleChange} // Add onChange event
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
                    htmlFor="Preferred date of meeting"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Preferred date of meeting
                  </label>
                  <DatePicker
                    size="lg"
                    block
                    format="yyyy-MM-dd hh:mm a"
                    placeholder="Select preferred date of meeting"
                    onChange={handleDateChange}
                    shouldDisableDate={disablePastDates}
                    value={
                      preferredDateUnix ? new Date(preferredDateUnix) : null
                    }
                    ranges={[
                      {
                        label: "Today",
                        value: new Date(),
                      },
                    ]} // Optional predefined ranges
                  />
                  {formErrors.preferredDate && (
                    <p className="text-red-500 text-sm mt-2">
                      {formErrors.preferredDate}
                    </p>
                  )}
                  {/* <DatePicker
                      size="lg"
                      block
                      format="yyyy-mm-dd hh:mm a" // Customize the format
                      placeholder="Select preferred date of meeting"
                      ranges={[
                        {
                          label: "Today",
                          value: new Date(),
                        },
                      ]} // Optional predefined ranges
                    /> */}
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="Preferredmodeofmeeting"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Preferred mode of meeting
                  </label>
                  <Dropdown
                    options={meetingModeOptions}
                    selected={selectedMeetingMode}
                    onSelect={handleMeetingModeChange} // Use the handler for validation
                    placeholder="Select your meeting mode"
                  />
                  {formErrors.preferredMode && (
                    <p className="text-red-500 text-sm mt-2">
                      {formErrors.preferredMode}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="whydoyoupreferuseaiinbox"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Why do you prefer using Hellofy?
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
                    <p className="text-red-500 text-sm mt-2">
                      {formErrors.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full px-4">
                <button
                  type="button"
                  className="shadow-submit dark:shadow-submit-dark rounded-md bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 w-full"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <Image
            src="/images/book-a-demo/book_a_demo_vector_2.svg"
            height={136}
            width={118}
            alt="book_a_demo_vector_2"
            className="absolute 2xl:block hidden w-[10vw] right-0 -bottom-20"
          />
        </div>
      </div>
    </section>
  );
};

export default BookADemo;
