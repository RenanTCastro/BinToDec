import {useState} from 'react';
import Logo from './Image/Logo.png';
import BotaoResultado from './Image/BotaoResultado.png';
import BotaoTrocar from './Image/BotaoTrocar.png';


import './App.css';

function App() {
  const [trocar, setTrocar] = useState(true);
  const [numero, setNumero] = useState();
  const [resultado, setResultado] = useState();

  function ConverterBinToDec(){
    setResultado(parseInt(numero,2));
  }

  function ConverterDecToBin(){
    setResultado((numero >>> 0).toString(2));
  }

  const handleClickTrocar = ()=>{
    trocar ? setTrocar(false) : setTrocar(true);
  }

  return (
    <div className="App">
      <img src={Logo} alt ="Logo" className="imagem"/>

      <div >
        <div className="divInput">
          <label className="labelStyle">
            {trocar ? "Número binário" : "Número decimal"}
          </label>
          <input 
            className="input" 
            onChange={(e)=>{setNumero(e.target.value)}}
          />
        </div>

        <div className="divBotoes">
          <button 
            className="botao" 
            onClick={trocar ? ConverterBinToDec : ConverterDecToBin}>
            <img src={BotaoResultado} alt ="Botao resultado" className="imagemBotao"/>  
          </button> 
          <p>Converter</p>
        </div>

        <div className="divBotoes">
          <button className="botao" onClick={handleClickTrocar}>
            <img src={BotaoTrocar} alt ="Botao trocar" className="imagemBotao"/>  
          </button> 
          <p>Trocar</p>
        </div>
      </div>

      <p className="labelResultadoStyle">
        {trocar ? "Número decimal" : "Número binário"}
      </p>
      <p className="resultado">{resultado}</p>
    </div>
  );
}

export default App;
