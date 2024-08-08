import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const Context = createContext({ isAuthorized: false });
const AppWrapper = () => {
  const [isAuthorized, setIsAuthorised] = useState(false);
  const [user, setuser] = useState({});

  return (
    <Context.Provider value={{ isAuthorized, setIsAuthorised, user, setuser }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
