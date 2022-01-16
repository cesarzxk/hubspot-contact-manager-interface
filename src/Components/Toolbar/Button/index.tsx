import {ReactChild} from 'react'
import {Button} from 'react-bootstrap'
import styles from './styles.module.scss'


type ToolbarButtonType={
    onpress:()=>void,
    children:ReactChild,
    disabled:boolean
}


export default function Toolbutton({onpress, children, disabled}:ToolbarButtonType){

    const style = {
        backgroundColor:'#ddd', 
        borderColor:'#fff',
        borderRadius:'10px',
        flex:1
    }

    return(
        <Button disabled={disabled}  style={style} onClick={onpress}>
            {children}
        </Button>

    )
}
