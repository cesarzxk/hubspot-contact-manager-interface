import {useEffect, useState} from 'react'
import {Alert} from 'react-bootstrap'
import styles from './styles.module.scss'



export default function Warning({code, labels, show = false}){
    const[level, setLevel] = useState<string>()
    const[msg, setMsg] = useState<string>()


    useEffect(() => {
        setWarningLevel()
        
    }, [show])

    const msgs = [
        "Permissão não concedida, tente novamente!",
        "Campos faltantes, por favor completar:",
        "Operação concluída com sucesso!"
        
    ]    

    function setWarningLevel(){
        switch(code){
            case 200:{
                setLevel('success')
                setMsg(msgs[2])
                break
            }
            case 500:{
                setLevel('danger')
                setMsg(msgs[0])
                break
            }
            case 412:{
                setLevel('warning')
                setMsg(msgs[1])
                break
            }

        }
    }


    return(
        <Alert className={styles.container} show={show} variant={level}>
            {
                (code!=412)? msg : msg + labels
            }
        </Alert> 
    )
}
