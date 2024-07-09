import { IconButton } from "@mui/material";
import whatsappIcon from '../images/whatsapp-icon.svg'

export default function WhatsappButton(){
    const url = 'https://api.whatsapp.com/send?phone=573028603069&text=Buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20mandar%20a%20realizar%20un%20trabajo.%20%F0%9F%98%81'
    return (
        <IconButton onClick={()=>window.open(url)} id="whatsapp-icon">
            <img  src={whatsappIcon} alt="icono de Whatsapp" />
        </IconButton>
    )
}