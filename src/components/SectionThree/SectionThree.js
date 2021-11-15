import Button from "@restart/ui/esm/Button";
import React from "react";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <div className='mainBlock d-flex justify-content-evenly flex-wrap my-5'>
      <div className='blockOne text-lg-start'>
        <span>Специальное предложение</span>
        <h3 style={{fontSize: '40px', fontWeight: '300', letterSpacing: '1.5px', paddingTop:'15px', paddingBottom:'15px'}}>Wood Cloth Sofa</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia
        </p>
        <Button className='btn'>Купить за 29 900 руб.</Button>
      </div>



      <div className='blockTwo'>
          <div className='emptyBg'></div>
          <img style={{width: '550px', height: '430px'}} src='https://light-catchers.ru/wp-content/uploads/2019/06/MYUZAPML_180205_29-2.jpg'></img>
      </div>
    </div>
  );
};

export default SectionThree;
