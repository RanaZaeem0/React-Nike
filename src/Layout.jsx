import { Outlet } from "react-router-dom";
import Header from "./compount/Header";
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
