import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Conversation Center",
        description:
          "Collaborate seamlessly with your team to manage conversations.",
        path: "/features/inbox",
        newTab: false,
      },
      {
        id: 22,
        title: "Contact Management",
        description:
          "Efficiently organize and manage customer contacts in one place.",
        path: "/features/contact",
        newTab: false,
      },
      {
        id: 23,
        title: "Form Builder",
        description:
          "Easily create custom forms for lead generation and customer interaction.",
        path: "/features/form-builder",
        newTab: false,
      },
      {
        id: 24,
        title: "Smart Template Builder",
        description: "Streamline communication with message templates.",
        path: "/features/template-management",
        newTab: false,
      },
      {
        id: 25,
        title: "Broadcast Center",
        description: "Engage your audience and track performance.",
        path: "/features/broadcast-management",
        newTab: false,
      },
      {
        id: 26,
        title: "ChatFlow",
        description: "Boost revenue with smart WhatsApp chatbots.",
        path: "/features/chatbot",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Contact",
  //   path: "/contact",
  //   newTab: false,
  // },
  {
    id: 4,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },

  // {
  //   id: 5,
  //   title: "Book A Demo",
  //   path: "/book-a-demo",
  //   newTab: false,
  // },
  // {
  //   id: 3,
  //   title: "Book A Demo",
  //   path: "/book-a-demo",
  //   newTab: false,
  // },
  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
