import Button from "../button";
import Watch from "./watch";
import style from "./timer.module.scss";
import { tempoParaSegundos } from "../../common/utils/date";
import { iTarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado:iTarefa | undefined,
    finalizarTarefa : () => void;
}

export default function Timer({selecionado,finalizarTarefa}:Props){
    const [ tempo , setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo) {
         setTempo(tempoParaSegundos(selecionado.tempo));
        }
      }, [selecionado])

      function regressiva(contador : number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador-1);
            }
            finalizarTarefa();
        }, 1000);
      }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um evento e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch tempo ={tempo}/>  
            </div>
            <Button onClick={() => regressiva(tempo)} >
                Start
            </Button>
        </div>    
    )


}