import { ITarefa } from "../../types/ITarefa";
import Item from "./item";
import style from './Lista.module.scss'

function Lista({ tarefas }: { tarefas: Array<ITarefa>}){

    return(
        <aside className={style.listaTarefas}>
          <h2>Estudo do Dia</h2>  
          <ul>
            {tarefas.map((item, index) => (
              <Item
                key={index}
                {...item}
              />
            ))}
          </ul>
        </aside>
    )
}

export default Lista;