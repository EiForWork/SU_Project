import React from "react";
import './hom.css'
import Slideshow from "./slide";


import Footer from "../Footer/Footer";

function Home(){
return(
<>

<div className="title">
<h>โรงพิมพ์มหาลัยศิลปากร{'\n'}</h>
<h>วิทยาลัยเขตพระราชวังสนามจันทร์</h>
</div>

<Slideshow/>

<div className="title2">
<h>บริการ</h>
<h1>โรงพิมพ์มหาลัยศิลปากรวิทยาลัยเขตพระราชวังสนามจันทร์</h1>
</div>


<Footer/>

</>
)
}

export default Home