import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss';
import { useState } from 'react';
import { ITarefa } from '../types/ITarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
