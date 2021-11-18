import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddedCard from "../AddedCard/AddedCard";
import { useHistory } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";

const FilterBar = () => {
  const { getProducts, products, currentPosts } = useContext(mainContext);
  const history = useHistory();
  const [brandValue, setBrandValue] = useState("");

  let object = new URLSearchParams(window.location.search);
  function filterProduct(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    history.push(newUrl);
    getProducts();
    setBrandValue(value);
  }

  useEffect(() => {
    setBrandValue(object.get("brand"));
  }, [object]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="main-page">
        <div className="sidebar">
          <FormControl component="fieldset" className="radio">
            <FormLabel component="legend">Brand</FormLabel>
            <RadioGroup
              style={{ display: "flex", flexDirection: "row" }}
              aria-label="brand"
              value={brandValue}
              name="radio-buttons-group"
              onChange={(e) => filterProduct("brand", e.target.value)}
            >
              <FormControlLabel value="lu" control={<Radio />} label="lu" />
              <FormControlLabel
                value="Samsung"
                control={<Radio />}
                label="Samsung"
              />
              <FormControlLabel
                value="apple"
                control={<Radio />}
                label="apple"
              />
              <FormControlLabel
                value="Meizu"
                control={<Radio />}
                label="Meizu"
              />
              <FormControlLabel value="OPPO" control={<Radio />} label="OPPO" />
              <FormControlLabel value="VIVO" control={<Radio />} label="VIVO" />
              <FormControlLabel value="LG" control={<Radio />} label="LG" />
              <FormControlLabel
                value="HONOR"
                control={<Radio />}
                label="HONOR"
              />
              <FormControlLabel value="ASUS" control={<Radio />} label="ASUS" />
              <FormControlLabel
                value="Huawei"
                control={<Radio />}
                label="Huawei"
              />
            </RadioGroup>
          </FormControl>
        </div>
        {/* {products ? (
          <div className="products">
            {currentPosts.map((phone) => (
              <AddedCard phone={phone} key={phone.id} />
            ))}
          </div>
        ) : (
          <h2>Loading</h2>
        )} */}
      </div>
    </>
  );
};

export default FilterBar;
