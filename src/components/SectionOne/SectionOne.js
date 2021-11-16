import React from 'react';
import "./SectionOne.css";

const SectionOne = () => {
    return (
        <div className='section1'>
            <div>
                {/* <span style={{paddingRight: '5px', paddingLeft: '45px'}}>Зима 2019</span> 
                ---- */}
                <span>New products</span>
            </div>
            
            <div style={{lineHeight: '10px'}}>
                <p>Shop Fine Jewelry</p>
                <span>For Every Day</span>
            </div>
        </div>
    );
};

export default SectionOne;