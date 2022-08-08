import { NavLink, Outlet } from "react-router-dom";
import CSS from 'components/Navigation/Navigation.module.css';

const Navigation = () => {
    return (
        <div >
            <nav className={CSS.navigation}>
                <NavLink to='/' className={CSS.navLink}>Home</NavLink>
                <NavLink to='/movies' className={CSS.navLink}>Movies</NavLink>
            </nav>
            <Outlet />
        </div>
    )
};

export default Navigation;