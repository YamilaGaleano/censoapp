import { useEffect } from "react"
import Header from "./Header"
import MainContenedor from "./MainContenedor"
import {useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(()=>{
       (localStorage.getItem('id')===null)?navigate("/"):navigate("/Dashboard")
    },[])
    return (<>
        <Header />
        <MainContenedor/>
    </>

    )
}
export default Dashboard