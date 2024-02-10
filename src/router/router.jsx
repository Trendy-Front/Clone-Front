import Home from "@/page/MarkUp";
import SignIn from "@/page/user/signin/Index";
import SignUp from "@/page/user/signup/Index";
import { Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
    );
};
export default Router;
