import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { giocatori } from "../giocatori/Giocatori";

export default function Card(){

    const [ offerente, setOfferente] = useState("")
    const [ prezzo, setPrezzo ] = useState(0)

    const giocatore = useRef(null)

    const _handleplayers = (offerente) => {
        setOfferente(offerente)
        setPrezzo( old => old +1)
    }

    const _handlebutton = ()=>{
        if(giocatore.current.value === null || giocatore.current.value.length < 1 ){
            alert("Devi inserire prima un giocatore!")
        }else{
            setOfferente("")
            setPrezzo(0)
            giocatore.current.value=""
        }
        
    }

    return (
        <div className="w-2/3  bg-white border-2  border-gray-200 grid py-3 px-10 rounded-lg">
            <div className="w-full flex">
                <div className="grid w-1/2">
                    <h1 className="text-3xl font-serif font-bold" >Giocatore in asta ⬇️</h1>
                    <input type="text" className="w-full text-2xl my-5 p-2 rounded-md border-2 border-blue-600 " placeholder="Inserisci il giocatore in asta" ref={giocatore}  />
                </div>
                <div className="grid w-1/4 ml-2">
                    <h1 className="text-3xl font-serif font-bold" >Offerente ⬇️</h1>
                    <label className="w-full my-5 p-2 text-2xl  rounded-md border-2 border-blue-600 ">{offerente === "" ? "Nessuno" : offerente}</label>
                </div>
                <div className="grid w-1/4 ml-2">
                    <h1 className="text-3xl font-serif font-bold" >Prezzo ⬇️</h1>
                    <label className="w-full my-5 p-2 text-2xl  rounded-md border-2 border-blue-600 ">{prezzo} crediti</label>
                </div>
            </div>

            <div className="w-full mt-2 flex justify-between">
                {giocatori.map((element, i)=>{
                    console.log(i);
                    return (
                        <button key={i} className={`text-center px-6 py-2 rounded ${element.colore} border-2 `} onClick={()=>_handleplayers(element.nome)}>
                            {element.nome}
                        </button>
                    )
                })}
            </div>

            <button className="my-10 py-2 px-4 text-2xl  font-serif border-2 border-blue-600 rounded-md font-bold  " onClick={_handlebutton} >
                Vendi
            </button>
        </div>
    )
}