import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "./poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./poppins/Poppins-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./poppins/Poppins-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});
