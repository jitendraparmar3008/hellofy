import BookADemo from "@/components/BookADemo/BookADemo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book A Demo | Hellofy",
  description: "This is Book A Demo for Hellofy",
  // other metadata
};

const BookADemoPage = () => {
  return (
    <>
      <BookADemo />
    </>
  );
};

export default BookADemoPage;
