import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useHistory } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";

const FilterBar = () => {
  const { getProducts,resetCurrentPage } = useContext(mainContext);
  const history = useHistory();
  const [brandValue, setBrandValue] = useState("");

  let object = new URLSearchParams(window.location.search);
  function filterProduct(key, value) {
    resetCurrentPage()
    object.set(key, value);
    history.push(`${window.location.pathname}?${object.toString()}`);
    getProducts();
    setBrandValue(value);
  }

  useEffect(() => {
    setBrandValue(object.get("brand"));
  }, [object]);

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
              <FormControlLabel
                value="GUCCI"
                control={<Radio />}
                label="GUCCI"
              />
              <FormControlLabel
                value="Swarovski"
                control={<Radio />}
                label="Swarovski"
              />
              <FormControlLabel
                value="Cartier"
                control={<Radio />}
                label="Cartier"
              />
              <FormControlLabel
                value="Boucheron"
                control={<Radio />}
                label="Boucheron"
              />
              <FormControlLabel
                value="Van Cleef Arpels"
                control={<Radio />}
                label="Van Cleef Arpels"
              />
              <FormControlLabel
                value="Bucelatti"
                control={<Radio />}
                label="Bucelatti"
              />
              <FormControlLabel
                value="DAMIANI"
                control={<Radio />}
                label="DAMIANI"
              />
              <FormControlLabel
                value="Tiffani Co"
                control={<Radio />}
                label="Tiffani  Co"
              />
              <FormControlLabel
                value="BULGARI"
                control={<Radio />}
                label="BULGARI"
              />
              <FormControlLabel
                value="Chopard"
                control={<Radio />}
                label="Chopard"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
