import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import store from "./app/store.js";
import i18n from '../src/components/Language/i18n';
const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App changeLanguage={changeLanguage}/>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
  
);
