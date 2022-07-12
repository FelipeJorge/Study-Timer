import Button from "../button";
import Watch from "./watch";
import style from "./timer.module.scss";
import { tempoParaSegundos } from "../../common/utils/date";
import { iTarefa } from "../../types/tarefa";
import { useState } from "react";

interface Props {
    selecionado:iTarefa | undefined
}

export default function Timer({selecionado}:Props){
    const [ tempo , setTempo] = useState<number>();
    if (selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo));
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>escolha um card e inicie o cronometro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Watch/>  
            </div>
            <Button>
                Começar!!
            </Button>
        </div>    
    )


}