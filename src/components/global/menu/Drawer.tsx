import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BackgroundColor } from "../../../contexts/BackgroundColor";
import { RoutesList } from "../../../contexts/RoutesList";
import "../../../style/Drawer.css";

interface DrawerHamburgerProps {
  onClose?: () => void;
}

export const DrawerMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const BgColor = useContext(BackgroundColor);
  const _RoutesList = useContext(RoutesList);
  const [activeRoute, setActiveRoute] = useState(window.location.href);

  return (
    <div
      className="drawer-div"
      onClick={(e: any) => {
        if (isOpen && !e.target.classList.contains("drawer-element")) {
          onClose();
        }
      }}
    >
      <Button
        onClick={onOpen}
        style={{
          marginTop: ".75rem",
          marginLeft: "1rem",
          backgroundColor: "gray",
          border: "transparent",
          fontSize: "17px",
          fontFamily: "SF Mono",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Menu
        {/* <DrawerHamburger /> */}
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        {/* <DrawerHeader>
          <DrawerHamburger onClose={onClose} />
        </DrawerHeader> */}
        <DrawerContent
          backgroundColor={BgColor}
          w={`${window.innerWidth <= 500 ? "17rem" : "20rem"}`}
          maxW={`${window.innerWidth <= 500 ? "17rem" : "20rem"}`}
          paddingTop="2rem"
          borderRight="1rem solid gray"
        >
          <DrawerBody
            p="0"
            className="drawer-element"
            display="flex"
            flexDir="column"
            alignItems="center"
            // gap="2rem"
          >
            {_RoutesList.map((currRoute) => (
              <a
                href={`/${currRoute}`}
                key={currRoute}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  textAlign: "center",
                  height: "5rem",
                  lineHeight: "5rem",
                }}
                className={`${
                  activeRoute.slice(activeRoute.lastIndexOf("/") + 1) ===
                  currRoute
                    ? "active-route"
                    : ""
                }`}
              >
                {currRoute.toUpperCase()}
              </a>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const DrawerHamburger: React.FC<DrawerHamburgerProps> = ({ onClose }) => {
  console.log("im here");
  return (
    // eslint-disable-next-line
    <a className="btn--menu" onClick={onClose} style={{ zIndex: "3" }}>
      <span className="btn--menu-el"></span>
      <span className="btn--menu-el"></span>
      <span className="btn--menu-el"></span>
    </a>
  );
};
