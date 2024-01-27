import Home from "@/page/MarkUp";
import SignIn from "@/page/user/signin/Index";
import { Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            {/* <Route path="/signup" element={<Home />}></Route> */}
        </Routes>
    );
};
export default Router;
