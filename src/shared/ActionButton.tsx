import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="py-3 text-sm font-medium transition duration-500 ease-linear rounded-md px-7 md:px-9 md:py-4 md:font-semibold bg-callAction text-text1 hover:bg-text1 hover:text-surface1"
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
