import { useEffect, useState } from "react";

export const useMediaQuery = () => {
  const [widthSize, setWidthSize] = useState("normal");
  const onChangeWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      setWidthSize("medium");
    } else if (windowWidth <= 500) {
      setWidthSize("small");
    } else if (windowWidth <= 360) {
      setWidthSize("reallySmall");
    } else if (windowWidth <= 300) {
      setWidthSize("extremelySmall");
    } else if (windowWidth <= 200) {
      setWidthSize("microscopic");
    } else {
      setWidthSize("normal");
    }
  };

  useEffect(() => {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, onChangeWidth);
    });

    return () => {
      ["load", "resize"].forEach((e) =>
        window.removeEventListener(e, onChangeWidth)
      );
    };
  });

  return widthSize;
};
