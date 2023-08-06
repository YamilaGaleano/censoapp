import {useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const logout=()=>{
        navigate("/")
        localStorage.clear();
    }
    return (
        <header className="header">
            <p>CensoApp</p>
            <a href="#" className="logout-link" onClick={logout}>Logout</a>
        </header>
    )
}

export default Header