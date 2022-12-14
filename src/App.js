import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg])

  return (
    <div className="App">
        <Header />
        <Form />
    </div>
  );
}

export default App;
