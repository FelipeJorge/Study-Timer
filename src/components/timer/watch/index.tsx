import React from "react";
import style from './watch.module.scss';

export default function Watch (){
    return (
        <React.Fragment>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </React.Fragment>
    )
}