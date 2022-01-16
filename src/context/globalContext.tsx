import React, { useContext, useEffect, useState } from 'react';
import { createContext, ReactNode } from "react";
import { apiAuthentication, apiContacts, apiSchemas } from '../services/api';

type contactType ={
    name?:string;
    phone?:string;
    birthday?:string;
    weight?:number;
    email:string;

}

type globalContextData ={
    setCode:(code:string)=>void;
    createNewContact:(contact:contactType)=>void;
    statusError:number;
    visible:boolean;
    updateContact:(contact:contactType)=>void;
    setStatusError:(number:number)=>void;
    setWarningVisible:(visible:boolean)=>void;
    labels:string[];
    setLabels:(labels:string[])=>void;

    
}

export const GlobalContext = createContext({} as globalContextData);

type globalProviderProps = {
    children: ReactNode;
}


export function GlobalProvider({children}:globalProviderProps){
    const [apikey, setApikey] = useState<string|undefined>()

    const [token, setToken] = useState<string|undefined>()
    const [code, setCode] = useState<string|undefined>()
    const [visible, setWarningVisible] = useState<boolean>(false)
    const [statusError, setStatusError] = useState<number>(0)
    const [labels, setLabels] = useState<string[]>([])
    

    useEffect(()=>{
        code&& getToken()
    },[code])


    async function getSchemaId(){
        if(localStorage.getItem('schema') == null){
             const {data} = await apiSchemas.get('')
             localStorage.setItem('schema', data)
             
        }else{
            const schema = localStorage.getItem('schema')
            await apiSchemas.get('?schema='+ schema)
        }
    
    }


    async function getToken(){
        console.log(code)
        const {data} = await apiAuthentication.get('?code='+code);
        const {access_token} = data;
        setToken(access_token)
        console.log(1)
        access_token && getSchemaId()
    }
    

    async function createNewContact(dados:contactType){
        try{
        const {data} = await apiContacts.post('', dados
            ,{
            headers:{
                token:'Bearer '+token,
                apikey:apikey
            }})
        }catch(e){
            console.log(e)
        }
    }

    async function updateContact(dados:contactType){
        try{
        const {data} = await apiContacts.put('', dados
            ,{
            headers:{
                token:'Bearer '+token,
                apikey:apikey
            }})
        }catch(e){
            console.log(e)
        }
    }


    

return(
    <GlobalContext.Provider value={{
        setCode,
        createNewContact,
        statusError,
        visible,
        updateContact,
        setStatusError,
        setWarningVisible,
        labels,
        setLabels

    }}>
        {children}
    </GlobalContext.Provider>
    )
}


export const useGlobal = () => useContext(GlobalContext)