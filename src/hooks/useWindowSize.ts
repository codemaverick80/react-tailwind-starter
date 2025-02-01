import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0 | undefined,
    height: 0 | undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    /// ==== Clean up function =====
    // const cleanUp = () => {
    //   console.log("runs when a useEffect dependency changes");
    //   window.removeEventListener("resize", handleResize);
    // };
    // return cleanUp;

    ///==== Clean up function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
