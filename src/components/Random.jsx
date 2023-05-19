import Chance from 'chance';

export default function Random(props) {
 let resultado = (Chance().integer({ min: props.min, max: props.max }));
 let flecha = '>';

  return (
    <>
      <div className="boxGreetings">
        <p>Random value beetween {props.min} and {props.max} ={flecha} {resultado} </p>
      </div>
    </>
  );
}

// {props.rango} {result}