import './Greetings.css'

export default function Greetings({lang, children}) {
let saludo;
//Actualizar la variable greeting en funcion de la variable lang
//Por ejemplo si lang es == a de, la variable greeting deberia tomar por valor Hallo, etc.
if (lang == 'de') {
saludo = 'Hallo ';
} else if (lang == 'fr') {
    saludo = 'Bonjour '
} else if (lang == 'es') {
    saludo = 'Hola '
} else if (lang == 'en') {
    saludo = 'Hello '
}

 return (
    <div className="boxGreetings">
        <p>{saludo}{children}</p>
    </div>
 )
}




// export default function Idcard(props) {
//   return (
//     <>
//       <div className="boxIdcard">
//         <img src={props.picture} alt="Imagen persona" />
//         <div className="description">
//           <p>
//             <span style={{ fontWeight: 'bold' }}>First Name:</span>
//             {props.firstName}
//           </p>
//           <p>
//             <span style={{ fontWeight: 'bold' }}>Last Name:</span>
//             {props.lastName}
//           </p>
//           <p>
//             <span style={{ fontWeight: 'bold' }}>Gender:</span> {props.gender}
//           </p>
//           <p>
//             <span style={{ fontWeight: 'bold' }}>Height:</span> {props.height}
//           </p>
//           <p>
//             <span style={{ fontWeight: 'bold' }}>Birth: </span> {fullDate}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
