import Button from "../button";
import Watch from "./watch";
import style from "./timer.module.scss";

export default function Timer(){
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Watch/>  
            </div>
            <Button>
                Começar!!
            </Button>
        </div>    
    )


}