import {useState} from 'react'
import {Form} from 'react-bootstrap'
import styles from './styles.module.scss'
import {mask as remask} from 'remask'


export default function Label({title, value, setValue, placehoder, type, mask = undefined}){

    return(
        <Form.Group className={styles.group}>
            <Form.Text className={styles.labelTitle}>{title}</Form.Text>
            <Form.Control value={value} 
            onChange={text=>{mask?setValue(remask(text.target.value,[mask])):setValue(text.target.value)}} 
            type={type} placeholder={placehoder}/>
        </Form.Group>
    )
}
