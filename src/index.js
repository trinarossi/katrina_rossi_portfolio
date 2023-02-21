import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main";
// import { Provider } from "react-redux";
// import store from "./store";
/* Import and destructure main from src/component/index.js
and anything else you may need here */

//you might need something else here but not for the router.
//Other libraries and wrapping tags

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
 // <Provider store={store}>
    <BrowserRouter>
        <Main />
    </BrowserRouter>
 // </Provider>
);