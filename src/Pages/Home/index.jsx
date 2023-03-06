import React from 'react'
import sass from "../Home/index.module.scss"
import Showcase from "../../img/showcase.mp4"
function Home() {
  return (
    <div className={sass.home}>
    <div className={sass.showcase}>
    <video src={Showcase} autoPlay muted></video>
      <div className={sass.texts}>
        <h4>SPRING/SUMMER 2003</h4>
        <h2>BW YOUR OWN BOSS</h2>
        <div className={sass.buttons}>
          <button>SHOP THE COLLECTION  <i class="fa-solid fa-arrow-right"></i></button>
          <button>FIND OUT MORE <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
      <div className={sass.section_1}>
        <div className={sass.left}>
          <img src="https://images.hugoboss.com/is/image/hugobossdm/230131_B_MW_new_arrivals_816x886?%24large%24&fmt=webp&align=0,-1&fit=crop,1&ts=1676394533346&qlt=80&wid=339&hei=375" alt="" />
          <div className={sass.text}>
            <h4>JUST IN</h4>
            <h3>JUST ARRIVALS</h3>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={sass.right}>
          <img src="https://images.hugoboss.com/is/image/boss/hbeu50483888_280_100?%24large%24&op_sharpen=1&resMode=sharp2&wid=274" alt="" />
          <div className='content'>
            <h4>RELAXED FIT WATER REPPELLENT REKKINH <br /> STYLE JACKET</h4>
            <p>$349.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home