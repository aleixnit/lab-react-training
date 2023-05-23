import './Greetings.css'

export default function BoxColor(props) {
    let colorRGB = `rgb(${props.r}, ${props.g}, ${props.b})`;


    function ColorToHex(color) {
        let hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
      }
      
      function ConvertRGBtoHex(red,green,blue) {

        return "#" + ColorToHex(props.r) + ColorToHex(props.g) + ColorToHex(props.b);
      }

      const hexValue = ConvertRGBtoHex(props.r, props.g, props.b);
    //   console.log(ConvertRGBtoHex(255, 100, 200));

 return (
    <div style={{backgroundColor: colorRGB, display: 'flex', flexDirection: 'column'}} className="textBoxColor">
        <p style={{margin: '0'}}>rgb({props.r}, {props.g}, {props.b})</p>
        <p style={{margin: '0'}}>{hexValue}</p>
    </div>
 )
}
