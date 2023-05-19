import './Greetings.css'

export default function BoxColor(props) {

    let colorRGB = `rgb(${props.r}, ${props.g}, ${props.b})`;

 return (
    <div style={{backgroundColor: colorRGB}} className="textBoxColor">
        <p>rgb({props.r}, {props.g}, {props.b})</p>
    </div>
 )
}
