import React, { HTMLProps, ReactPropTypes, SVGProps, useState } from "react";
import { v4 as uuid4 } from "uuid";
import { titleCase } from "~/utils";

const Settings = ({ menuColor, ...props }: HTMLProps<HTMLDivElement> & { menuColor?: string }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuId] = useState(uuid4());

  const categories = [
    "education",
    "recreational",
    "social",
    "DIY",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  const toggleMenu = () => {
    setMenuVisible((s) => !s);
  };

  const menuClasses =
    (menuVisible ? "w-44 h-80 pt-8 px-3" : "w-0 h-0 p-0") +
    " bg-purple-500 transition-width-height overflow-hidden" +
    " rounded-xl";

  return (
    <div {...props} className="absolute right-5 top-5">
      <div className="relative">
        <button
          onClick={toggleMenu}
          aria-label="open settings window"
          className="absolute top-0.5 right-0.5"
          aria-controls={menuId}
        >
          <SettingsIcon className="w-10 md:w-12 transition-width duration-500 lg:w-14 text-white" />
        </button>
        <div
          style={{
            backgroundColor: menuColor || "#a9a9a9",
          }}
          id={menuId}
          className={menuClasses}
        ></div>
      </div>
    </div>
  );
};

const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="-2.4 -2.4 28.80 28.80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(0)"
    stroke="currentColor"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="0.72"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.5699 18.5001V14.6001"
        stroke="currentColor"
        strokeWidth="0.72"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.5699 7.45V5.5"
        stroke="currentColor"
        strokeWidth="0.72"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.57 12.65C17.0059 12.65 18.17 11.4859 18.17 10.05C18.17 8.61401 17.0059 7.44995 15.57 7.44995C14.134 7.44995 12.97 8.61401 12.97 10.05C12.97 11.4859 14.134 12.65 15.57 12.65Z"
        stroke="currentColor"
        strokeWidth="0.72"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8.43005 18.5V16.55"
        stroke="currentColor"
        strokeWidth="0.72"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8.43005 9.4V5.5"
        stroke="currentColor"
        strokeWidth="0.72"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8.42996 16.5501C9.8659 16.5501 11.03 15.386 11.03 13.9501C11.03 12.5142 9.8659 11.3501 8.42996 11.3501C6.99402 11.3501 5.82996 12.5142 5.82996 13.9501C5.82996 15.386 6.99402 16.5501 8.42996 16.5501Z"
        stroke="currentColor"
        strokeWidth="0.72"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export default function Page({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & HTMLProps<HTMLDivElement>) {
  className =
    "min-h-screen py-20 relative bg-purple-300 w-full overflow-x-hidden flex flex-col items-center " +
    (className || "");
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
