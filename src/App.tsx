import './App.css';
import IntoScreen from './pages/Introscreen';
import MuteButton from './components/MuteButton';

function App() {
  return (
    <div className="app-container">
      <MuteButton />
      <IntoScreen prop1='hi' prop2={23} />
    </div>
  );
}

export default App;
