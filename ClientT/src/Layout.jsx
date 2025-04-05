import { Outlet } from "react-router-dom";
import TopNav from "./component/TopNav";
import Footer from "./component/Footer";


const Layout= ()=>{
    return(
        <>
        <TopNav/>
        <div id="data">
        <Outlet/>

        </div>
        <Footer/>
        </>
    )
}

export default Layout;