import { iTarefa } from "../../types/tarefa";
import Item from "./item";
import style from './List.module.scss'

interface Props {
    tarefas : iTarefa[]
    selecionaTarefa: (tarefaSelecionada: iTarefa) => void
}

function List ({tarefas, selecionaTarefa}:Props){
    return(
        <aside className={style.listaTarefas}>
            <h2> Meus Eventos </h2> 
            <ul>
                {tarefas.map(item =>(
                    <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;