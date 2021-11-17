// import React, { useContext, useEffect, useState } from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import AddedCard from "../AddedCard/AddedCard";
// import { useNavigate } from "react-router";
// import { mainContext } from "../../contexts/MainContext";

// const FilterBar = () => {
//   const { getPhones, phones, currentPosts } = useContext(mainContext);
//   const navigate = useNavigate();
//   const [brandValue, setBrandValue] = useState("");

//   let object = new URLSearchParams(window.location.search);
//   function filterPhones(key, value) {
//     object.set(key, value);
//     let newUrl = `${window.location.pathname}?${object.toString()}`;
//     navigate(newUrl);
//     getPhones();
//     setBrandValue(value);
//   }

//   useEffect(() => {
//     setBrandValue(object.get("brand"));
//   }, [object]);

//   useEffect(() => {
//     getPhones();
//   }, []);
//   return (
//     <>
//       <div className="main-page">
//         <div className="sidebar">
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Brand</FormLabel>
//             <RadioGroup
//               aria-label="gender"
//               value={brandValue}
//               name="radio-buttons-group"
//               onChange={(e) => filterPhones("brand", e.target.value)}
//             >
//               <FormControlLabel
//                 value="Xiaomi"
//                 control={<Radio />}
//                 label="Xiaomi"
//               />
//               <FormControlLabel
//                 value="Samsung"
//                 control={<Radio />}
//                 label="Samsung"
//               />
//               <FormControlLabel
//                 value="apple"
//                 control={<Radio />}
//                 label="apple"
//               />
//               <FormControlLabel
//                 value="Meizu"
//                 control={<Radio />}
//                 label="Meizu"
//               />
//               <FormControlLabel value="OPPO" control={<Radio />} label="OPPO" />
//               <FormControlLabel value="VIVO" control={<Radio />} label="VIVO" />
//               <FormControlLabel value="LG" control={<Radio />} label="LG" />
//               <FormControlLabel
//                 value="HONOR"
//                 control={<Radio />}
//                 label="HONOR"
//               />
//               <FormControlLabel value="ASUS" control={<Radio />} label="ASUS" />
//               <FormControlLabel
//                 value="Huawei"
//                 control={<Radio />}
//                 label="Huawei"
//               />
//             </RadioGroup>
//           </FormControl>
//         </div>
//         {phones ? (
//           <div className="phones">
//             {currentPosts.map((phone) => (
//               <AddedCard phone={phone} key={phone.id} />
//             ))}
//           </div>
//         ) : (
//           <h2>Loading</h2>
//         )}
//       </div>
//     </>
//   );
// };

// export default FilterBar;
