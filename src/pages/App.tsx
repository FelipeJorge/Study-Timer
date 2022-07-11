import React ,{useState} from 'react';
import Form from '../components/form';
import List from '../components/list';
import Timer from '../components/timer';
import { iTarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState <iTarefa[] | []> ([]);
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas}/>
      <Timer/>
    </div>
  );
}

export default App;
