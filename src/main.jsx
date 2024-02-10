import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@/assets/scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import themes from "./utils/ant-design/theme.js";
import { ConfigProvider } from "antd";
import { createStore } from "redux";
import rootReducer from "./reducer/index.js";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ConfigProvider theme={themes}>
                    <App />
                </ConfigProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
