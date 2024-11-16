import { FC } from "react";

interface IPropsMiPrimerComponent{
    text: string;
    color: string;
}



export const MiPrimerComponent: FC<IPropsMiPrimerComponent> = ({text,color})=>{
    return <div style={{color:`${color}`}}><p>{text}</p></div>
    
};