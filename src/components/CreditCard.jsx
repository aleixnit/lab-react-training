import './CreditCard.css'

import VisaCard from '../assets/images/visa.png'
import MasterCard from '../assets/images/MasterCard.png'

export default function CreditCard(props) {

 return (
    <div style={{backgroundColor: props.bgColor, color: props.color, margin: '0 auto'}} className= "container">
        <img src={props.type == 'Visa' ? VisaCard : MasterCard} alt="imagen" />
        <p className="numberCard">{props.number}</p>
        <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', marginLeft: '20px'}}>
            <div style={{display: 'flex', gap: '20px'}}>
                <p>{props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
        <p style={{marginTop: '0px'}}>{props.owner}</p>
        </div>
    </div>
 )
}
