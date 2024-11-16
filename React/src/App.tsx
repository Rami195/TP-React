/* import { ComponentCounter } from "./components/componentCounter/ComponentCounter"
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect" */

import { AppProduct } from "./components/AppProduct/AppProduct"

/* import { FormComponent } from "./components/FormComponent/FormComponent"
 */
export const App = () => {


    
  return (
    <div style={{display: 'flex', flexDirection:'column', gap:'2vh'}}>
{/*     <MiPrimerComponent text={"Texto desde prop"} color='red'/>
    <ComponentCounter/>
    <ComponentUseEffect/> */}
    {/* <FormComponent/> */}
    <AppProduct/>
    </div>
  )
}
export default App