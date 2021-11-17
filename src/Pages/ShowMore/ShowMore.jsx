import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { mainContext } from "../../contexts/MainContext";
import '././ShowMore.css'

const ShowMore = () => {
  const { getDetails, phoneDetails } = useContext(mainContext);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    getDetails(params.id);
  }, []);
  console.log(phoneDetails);
  return (
    <div className='mainShowMore'>
      {phoneDetails ? (
        <div className="detail-page">
          <div className="detail-image">
            <img style={{width: '300px', height: 'auto'}} src={phoneDetails.image} alt="phone" />
          </div>
          <div>
            <h2>{phoneDetails.name}</h2>
            <p>{phoneDetails.details}</p>
            <Button variant="outlined" color="secondary">
              Добавить в корзину                                         
            </Button>
            <div>
              <h4>Описание:</h4>
              <ul className="character">
                <li>
                  <strong>Цена:</strong>
                  <span> {phoneDetails.price} USD</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ShowMore;
