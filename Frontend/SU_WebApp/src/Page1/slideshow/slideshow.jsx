import React from "react";
import '../slideshow/sli.css'
import sea from '../img/sea.jpg'
import sea2 from '../img/sea2.jpg'
import sea3 from '../img/sea3.jpg'
import sea4 from '../img/sea4.jpg'

function Slieder(){
return(<>

<div class="containermain">
        <div class="wrapper">
            <img src={sea3}/>
            <img src={sea2}/>
            <img src={sea}/>
            <img src={sea4}/>
        </div>
</div>

</>)
}

export default Slieder