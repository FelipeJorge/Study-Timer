import React ,{useState} from 'react';
import Form from '../components/form';
import List from '../components/list';
import Timer from '../components/timer';
import { iTarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState <iTarefa[] | []> ([]);
  const [selecionado,setSelecionado]= useState <iTarefa>();

  function selecionaTarefa(tarefaSelecionada: iTarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Timer
      selecionado={selecionado}
      />
    </div>
  );
}

export default App;
