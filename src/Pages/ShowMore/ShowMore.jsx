import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { mainContext } from "../../contexts/MainContext";
import "././ShowMore.css";

const ShowMore = () => {
  const { getDetails, phoneDetails } = useContext(mainContext);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    getDetails(params.id);
  }, []);
  console.log(phoneDetails);
  //test
  return (
    <div className="mainShowMore">
      {phoneDetails ? (
        <div className="detail-page">
          <div className="detail-image">
            <img
              style={{ width: "300px", height: "auto" }}
              src={phoneDetails.image}
              alt="phone"
            />
          </div>
          <div>
            <h2>{phoneDetails.name}</h2>
            <p>{phoneDetails.details}</p>
            <Link to="/">
              <Button variant="outlined" color="secondary">
                Go Home
              </Button>
            </Link>
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
