import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@/assets/scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import themes from "./utils/ant-design/theme.js";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ConfigProvider theme={themes}>
                <App />
            </ConfigProvider>
        </BrowserRouter>
    </React.StrictMode>
);
