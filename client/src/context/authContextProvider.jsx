import React,{createContext, useContext,useState} from "react";


export const AuthContext = createContext();

const initialState = {
    user:null,
    loading:false,
    error:null
};

// wrap App with this component
export const AuthContextProvider =({children}) => {

    const [user,setUser] = useState(initialState.user)
    const [loading, setLoading] = useState(initialState.loading);
    const [error, setError] = useState(initialState.error);
 
    return (
        <AuthContext.Provider value={{
            user,
            loading,
            error
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// import useSampleContext hook to access global state 
export const useAuthContext =() => useContext(AuthContext) 