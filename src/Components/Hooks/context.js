import React, { useContext, useEffect, useState } from "react";

const AppContent = React.createContext();
const AppProvider = ({ children }) => {
  const [pageLoader, setPageLoader] = useState(true);

  useEffect(() => {
    const timelimit = setInterval(() => setPageLoader(false), 4000);
    return () => clearInterval(timelimit);
  }, []);
  return (
    <AppContent.Provider value={{ pageLoader, setPageLoader }}>
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContent = () => {
  return useContext(AppContent);
};

export { AppProvider };
