import { createContext, useEffect, useState } from "react";

 export const ScrollContext = createContext();

// eslint-disable-next-line react/prop-types
export const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  const resetScrollPosition = () => {
    window.scrollTo(0, 0);
    setScrollPosition(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollPosition, resetScrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default 
