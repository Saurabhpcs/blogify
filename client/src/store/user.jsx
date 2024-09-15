import { createContext, useContext, useEffect, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;
    console.log("Token Value ", token);
    console.log("isLoggedIn Value ", isLoggedIn);

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/user/data", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if(response.ok)
            {
                const data = await response.json();
                console.log("Our data ",data);
                setUser(data.userData);
                setIsLoading(false); 
                console.log("What we want ",data.userData);
            }
            else{
                console.error("Error fetching data");
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, []);

    return(
        <UserContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, authorizationToken, isLoading}}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => {
    const userContextValue = useContext(UserContext);
    if(!userContextValue){
        throw new Error("useAuth used outside Provider");
    }

    return userContextValue;
}