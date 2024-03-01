import './App.css';
import Image from './assets/app-background.png';
import IntoScreen from './pages/Introscreen';


function App() {
   const style = {
    backgroundImage:  `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
     height: '100vh',
    fontFamily: "Nunito",
  };
  return (
    <div className="App" style={style}>
      <IntoScreen prop1='hi' prop2={23} />
    </div>
  );
}

export default App;
