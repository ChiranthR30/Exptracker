
import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { Finalexpenses } from './components/finalexpenses';
import { Budgetlist } from './components/budgetlist';
import {Inp} from './components/Inp';
import { GlobalProvider } from './context/gstate';

function App() {
  return (
    <GlobalProvider>
        <Header/>
        <Balance/>
        <Finalexpenses/>
        <Budgetlist/>
        <Inp/>
    </GlobalProvider>
  );
}

export default App;
