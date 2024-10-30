"use client"
import { AuthContext } from "@/context"
import { redirect } from "next/navigation"
import { useContext } from "react"

export default function Compras(){

    const {user} = useContext(AuthContext)
    if(user?.nome == ""){
        alert("Para fazer compras, você deve fazer o login!")
        redirect('/')
    }
    return(
        <main className="flex flex-col items-center">
            <h1 className="text-center text-4xl text-indigo-600 font-bold">Página de Compras</h1>

            <p className="text-3xl font-bold text-indigo-800 m-5">Olá {user?.nome}, faça suas compras!</p>
        </main>
    )
}