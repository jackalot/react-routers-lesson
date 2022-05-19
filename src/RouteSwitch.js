import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Apple from "./Apple";
const RouteSwitch = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}/>
            <Route path="/profile" element={<Profile></Profile>}/>
            <Route path="/apple" element={<Apple></Apple>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;