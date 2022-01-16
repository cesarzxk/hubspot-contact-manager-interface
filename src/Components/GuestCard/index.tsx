import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

import { useGlobal } from '../../context/globalContext'
import Label from './Label'
import styles from './styles.module.scss'


export default function GuestCard(){
    const {createNewContact, setWarningVisible, setStatusError, setLabels} = useGlobal()

    const[name, setName] = useState<string>()
    const[email, setEmail] = useState<string>()
    const[phone, setPhone] = useState<string>()
    const[weight, setWeight] = useState<string>()
    const[birthday, setBirthday] = useState<string>()

    const[formatedData, setFormatedData] = useState<string>()

    function formatData(){
        const data = birthday.split('/')
        setFormatedData(`${data[2]}-${data[1]}-${data[0]}`)
    }

    function handleSubmit(event){
        event.preventDefault()
        
        let Erros = []

        name ?? Erros.push('name')
        phone ?? Erros.push('phone')
        birthday? formatData() : Erros.push('birthday')
        weight ?? Erros.push('weight')
        email ?? Erros.push('email')

        if (Erros.length == 0) {
            console.log(0)
        createNewContact(
            {
            name:name, 
            birthday:formatedData,
            phone:phone,
            weight:parseInt(weight, 10),
            email:email,

        })}else{
            setLabels(Erros)
            setStatusError(412)
            setWarningVisible(true)
            setTimeout(function(){
                setWarningVisible(false)
            }, 4000);

        }
    }

    return(
        <div>
            <Form className={styles.container} onSubmit={(event)=>handleSubmit(event)}>
            <h2>Novo Contato</h2>

                <Label 
                placehoder={'Nome'} 
                setValue={setName} 
                title={'Nome'} 
                type={'name'} 
                value={name}/>

                <Label 
                placehoder={'nome@exemplo.com'} 
                setValue={setEmail} 
                title={'Email'} 
                type={'email'} 
                value={email}/>


                <Label 
                placehoder={'Numero de telefone.'} 
                setValue={setPhone} 
                title={'Telefone'} 
                type={'phone'} 
                value={phone}
                mask={'(99) 99999-9999'}
                />


                <Label 
                placehoder={'Peso em Kg.'} 
                setValue={setWeight} 
                title={'Peso'} 
                type={'text'} 
                value={weight}
                mask={'999'}
                />

                <Label 
                placehoder={'(ex 12/08/1994).'} 
                setValue={setBirthday} 
                title={'Data de nascimento'} 
                type={'text'} 
                value={birthday}
                mask={'99/99/9999'}
                
                />

                <br/>

                <Button variant="primary" type="submit" style={{backgroundColor:'#2194c1'}}>
                    Enviar
                </Button>
            </Form>
        </div>
    )
}
