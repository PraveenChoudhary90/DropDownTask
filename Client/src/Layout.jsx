import Footer from "./component/Footer";
import TopNav from "./component/TopNav";
import {Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
        <>
        <TopNav/>
        <div id="mid">
        <Outlet/>
            
        </div>
        <Footer/>
        </>
    )
}

export default Layout;