import { Outlet } from "react-router-dom";
import Headerr from "./compount/header/Header";
import Header from "./compount/header/Header";
import Footer from "./compount/Footer"


export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    )
}
