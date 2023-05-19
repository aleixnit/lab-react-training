import './App.css';
import Idcard from './components/Idcard';
import Random from './components/Random';
import Greetings from './components/Greetings';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <h1>ID Card</h1>
      <Idcard
        lastName="Doe"
        firstName=" John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Idcard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Français</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <h1>Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h1>CreditCard</h1>
    </div>
  );
}

export default App;
