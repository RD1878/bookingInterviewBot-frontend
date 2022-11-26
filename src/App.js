import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, [])

    const handleClose = () => {
      tg.close()
    }

  return (
    <div className="App">
      <button onClick={handleClose}>Закрыть</button>
    </div>
  );
}

export default App;
