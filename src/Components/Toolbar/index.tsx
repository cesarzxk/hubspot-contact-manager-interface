import {useState} from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'
import styles from './styles.module.scss'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {FiEdit3, FiLogIn} from 'react-icons/fi'
import Toolbutton from './Button'
import Link from 'next/link'



export default function Toolbar({selected, setSelected}){
    const style = {
        backgroundColor:'#ddd', 
        borderColor:'#fff',
        borderRadius:'10px',
        flex:1
    }
    const clickHandle = () => {
        document.location.href = 'https://app.hubspot.com/oauth/authorize?client_id=6499a143-10c7-432c-8218-5e6a6a8b4fe6&redirect_uri=http://localhost:3000/&scope=crm.objects.contacts.read%20crm.objects.contacts.write%20crm.schemas.contacts.read%20crm.schemas.contacts.write';
      }
    

    return(
        <ButtonGroup className={styles.container}>
            
            <Toolbutton disabled={selected==0} onpress={()=>{setSelected(0)}}>
                <AiOutlineUserAdd className={styles.icon}/>
            </Toolbutton>

            <Toolbutton disabled={selected==1} onpress={()=>{setSelected(1)}}>
                <FiEdit3 className={styles.icon}/>
            </Toolbutton>

       
                <Toolbutton disabled={false} onpress={clickHandle}>
                    <FiLogIn className={styles.icon}/>
                    <text>Login</text>
                </Toolbutton>
            
        </ButtonGroup>
        
    )
}
