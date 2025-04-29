import styles from "./styles/App.module.css";

import Display from "./Components/Display";
import BtnContainer from "./Components/BtnContainer";
import { useState } from "react";

function App() {
  const [calValue,setCalValue] = useState('');

  const onBtnClick1 = (textOnButton) => {
    if(textOnButton === 'AC'){
        setCalValue('') // resetting calValue
    }else if(textOnButton === 'CLR'){
        setCalValue(prev => prev.slice(0,-1))
    }
    else if(textOnButton === '='){
      try {
        let result = eval(calValue);
        setCalValue(result); // evaluted calValue
      } catch (error) {
        console.log("Error Occured");
      }
    }else{
      setCalValue(calValue + textOnButton) // updating the calValue
    }
  }
  // the event flows up from child (BtnEle) ➜ parent (BtnContainer) ➜ grandparent (App).
  
  /*
    You are using "event lifting" (also called "prop drilling" for callbacks):

      1.  App defines the handler: onBtnClick1

      2.  App passes it to BtnContainer as a prop - ({onBtnClick2}).

      3.  BtnContainer passes it to BtnEle ({onBtnClick3}).

      4.  BtnEle calls () => onBtnClick(ele) when a button is clicked(onClick ).
  */
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calValue}/>

        <BtnContainer onBtnClick2={onBtnClick1}/>
      </div>
    </>
  );
}

export default App;
