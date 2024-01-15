import React from "react";
import ig from '../imgs/ig.png'
import x from '../imgs/x.png'
import fb from '../imgs/fb.png'

function Sidetab(){
    return(<>
    
    <div className="sidetab">
      <div className="tab">
        <img src={ig}/>
        <img src={x}/>
        <img src={fb}/>
      </div>
    </div>
    
    </>)
}

export default Sidetab