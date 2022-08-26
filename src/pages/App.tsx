import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss';
import { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState(
    [{tarefa: 'React', tempo: '02:00:00' },{tarefa: 'JavaScript', tempo: '01:00:00' }]
  );

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
