import React from "react";
import { iTarefa } from "../../types/tarefa";
import Button from "../button";
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'; 

class Form extends React.Component<{
   setTarefas:React.Dispatch<React.SetStateAction<iTarefa[]
  >>
}

>{
   state = {
      tarefa: "",
      tempo: "00:00"
   }
   adicionarTarefa(evento : React.FormEvent<HTMLFormElement>){
      evento.preventDefault();
      this.props.setTarefas(tarefasAntigas => 
         [
            ...tarefasAntigas,
            {
               ...this.state,
               selecionado: false,
               completado: false,
               id : uuidv4 ()
            }
         ])
      this.setState({
         tarefa: "",
         tempo: "00:00"
      })
      
   }


    render(){
        return(
         <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
            <div className={style.inputContainer}>
              <label htmlFor="tarefa">
               adicione um novo estudo
               </label>
               <input 
                  type="text"
                  name="tarefa"
                  value={this.state.tarefa}
                  onChange={evento => this.setState({...this.state, tarefa : evento.target.value})}
                  id="tarefa"
                  placeholder="O que voce vai estudar?"
                  required
                  /> 
            </div>
            <div className={style.inputContainer}>
               <label>
                  Tempo
               </label>
               <input 
                  type="time"
                  step="1"
                  name="tempo"
                  value={this.state.tempo}
                  onChange={evento => this.setState({...this.state, tempo : evento.target.value})}
                  id="tempo"
                  min="00:00:00"
                  max="01:30:00"
                  required
                />
            </div>
            <Button type="submit">
               Adicionar
            </Button>
         </form>              
        )
    }
    
}
export default Form;