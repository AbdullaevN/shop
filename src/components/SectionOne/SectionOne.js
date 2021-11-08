import React from 'react';
import "./SectionOne.css";

const SectionOne = () => {
    return (
        <div className='section1'>
            <div>
                <span style={{paddingRight: '5px', paddingLeft: '45px'}}>Зима 2019</span> 
                ----
                <span>  Новинки</span>
            </div>
            
            <div style={{lineHeight: '10px'}}>
                <p style={{marginRight: '40px'}}>Инновационный</p>
                <span>Дизайн</span>
            </div>
        </div>
    );
};

export default SectionOne;