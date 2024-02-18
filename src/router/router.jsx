import Index from "@/page";
import Home from "@/page/MarkUp";
import SignIn from "@/page/user/signin/Index";
import SignUp from "@/page/user/signup/Index";
import { Routes, Route } from "react-router-dom";
import { nameNavigation } from "@/utils/navigation";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>

            <Route path="/user" element={<Index navigation={nameNavigation} />}>
                <Route path="home" element={<SignIn />}></Route>
            </Route>
        </Routes>
    );
};
export default Router;
