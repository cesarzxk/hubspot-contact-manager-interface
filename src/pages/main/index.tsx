import { useEffect, useState } from "react"
import { useRouter } from "next/router";

import FormUpdate from "../../Components/FormUpdate"
import GuestCard from "../../Components/GuestCard"
import Toolbar from "../../Components/Toolbar"
import Warning from "../../Components/Warning"
import Wavens from "../../Components/Wavens"
import styles from "./styles.module.scss" 
import { useGlobal } from "../../context/globalContext";


export default function Main(){
    const {query} = useRouter()
    const {setCode, statusError, visible, labels} = useGlobal()
    const [selected, setselected] = useState<number>(0)
    
    function handleSelect(number:number){
        setselected(number)
        console.log(handleSelect)
    }

    useEffect(() => {
        query.code && setCode(query.code as string)
    }, [query])



    return(
        <>
            <Wavens/>
            <Warning labels={labels} code={statusError} show={visible}/>
            <div className={styles.container} >
                
                {selected==0? (<GuestCard/>) : (<FormUpdate/>)}
                
                <Toolbar setSelected={handleSelect} selected={selected}/>
                
            </div>
        </>
    )
}
