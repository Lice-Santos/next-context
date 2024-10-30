"use client"
//use client para renderizar
import { createContext, useState } from "react";

export type UserProps = {
    nome: string;
    senha: string;
}

type AuthContextProps = {
    user: UserProps | null;
    login: (user:UserProps)=>void;
    logout: ()=>void;
}



const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider = ({children}:{children:React.ReactNode})=>{

    //Aqui é o local em que o nome do usuário é inserido
const [ user, setUser] = useState<UserProps>(
    {
        nome: "",
        senha: ""
    } 
)

const login =(user:UserProps) => {
    setUser(user)
}

//sair do usuario
const logout = () =>{
    setUser({nome:"", senha:""})
}

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}