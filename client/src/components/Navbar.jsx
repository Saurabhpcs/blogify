import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/user";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleProtectedRoute = (e, route) => {
        if (!isLoggedIn) {
            e.preventDefault(); 
            navigate('/login'); 
        }
    };

    return (
        <>
            <div className="container">
                <div className="logo-brand">
                    <a href="/"> Blogify</a>
                </div>

                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>

                        <li>
                            <NavLink 
                                to="/prompt" 
                                onClick={(e) => handleProtectedRoute(e, "/prompt")}
                            >
                                Prompt
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/drafts" 
                                onClick={(e) => handleProtectedRoute(e, "/drafts")}
                            >
                                Drafts
                            </NavLink>
                        </li>

                        {isLoggedIn ? (
                            <li><NavLink to="/logout">Logout</NavLink></li>
                        ) : (
                            <>
                                <li><NavLink to="/register">Register</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    );
};
