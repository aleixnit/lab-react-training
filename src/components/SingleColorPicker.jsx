import React, { useState } from 'react';

export default function SingleColorPicker({ color, intensity, onColorChange }) {

    // const [intensity, setIntensity] = useState(255);

    let bgColor;

    if (color === 'r') {
        bgColor = `rgb(${intensity}, 0, 0)`;
    } else if (color === 'g') {
        bgColor = `rgb(0, ${intensity}, 0)`;
    } else if (color === 'b') {
        bgColor = `rgb(0, 0, ${intensity})`;
    }


  //1. tenemos que calcular el backgorundColor de la caixa

  // 2. Si la propiedad color="r", entones el color del bacgrkound rgb(rangoColor, 0, 0)

   // si la propiedad color ="g", entones el color del bacground rgb(0, RANGOCOLOR, 0)


  return (
    <div style={{display:'flex'}}>
      <div style={{ width: '50px', height: '50px', border: '2px solid black', marginRight: '5px', backgroundColor: bgColor}}>
        Color
      </div>
      <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
          <label style={{textTransform: 'uppercase'}} for="Name">{color}:</label>
          <input type="number" min={0} max={255} value={intensity} onChange={onColorChange} />
      </div>
    </div>
  );
}
