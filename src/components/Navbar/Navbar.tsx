import { HiBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import Link from "./Link";
import gh from "../../assets/gh.svg";
import { useState } from "react";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../Hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMdScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-surface2 drop-shadow xl";
  const flexStandard = "flex justify-between items-center";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexStandard} fixed top-0 z-30 w-full py-2`}
      >
        <div className={`${flexStandard} mx-auto w-5/6`}>
          <div className={`${flexStandard}  w-full gap-16 `}>
            {/* Left side logo */}
            <img alt="logo" src={gh} className="w-15 h-15" />
            {/* Right side */}
            {isAboveMdScreens ? (
              <div className={`${flexStandard} w-full`}>
                {/* Links */}
                <div className={`${flexStandard} gap-16 px-24`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* Call to action */}
                <ActionButton setSelectedPage={setSelectedPage}>
                  Contact
                </ActionButton>
              </div>
            ) : (
              <button
                className="p-2 rounded-full bg-callAction"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <HiBars3 className="w-6 h-6 text-text1" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      {!isAboveMdScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-text3 drop-shadow-xl">
          {/* Close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <HiX className="w-6 h-6 text-surface1" />
            </button>
          </div>
          {/* Menu items */}
          <div className="flex flex-col gap-10 text-2xl pl-28 ">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
