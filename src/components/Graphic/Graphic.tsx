import { useEffect, useState } from "react";
import "./graphic.css";

import mobileGraphic from "/illustration-sign-up-mobile.svg";
import desktopGraphic from "/illustration-sign-up-desktop.svg";

function Graphic() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const desktopWidth: number = 768;
  const [displayImg, setDisplayImg] = useState<string>("");

  useEffect(() => {
    function handleScreenResize(): void {
      setScreenWidth(window.innerWidth);
    }

    if (screenWidth >= desktopWidth) {
      setDisplayImg(desktopGraphic);
    } else {
      setDisplayImg(mobileGraphic);
    }

    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.addEventListener("resize", handleScreenResize);
    };
  }, [screenWidth]);

  return (
    <img
      src={displayImg}
      alt="Newsletter graphic"
      className="newsletter-graphic"
    />
  );
}

export default Graphic;
