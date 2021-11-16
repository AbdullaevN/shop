import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { mainContext } from "../contexts/MainContext";
import Table from "@mui/material/Table";

const CartPage = () => {
  const { getCart, cart, changeCountPhone } = React.useContext(mainContext);
  React.useEffect(() => {
    getCart();
  }, []);

  //   console.log(cart);
  return (
    <>
      <div>CrtPage</div>
      {cart ? (
        cart.phones.lenght > 0 ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Mobile</TableCell>
                  <TableCell align="center" width="50">
                    image
                  </TableCell>
                  <TableCell align="center" width="50">
                    Count
                  </TableCell>
                  <TableCell align="right">Summa</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.phones.map((item) => (
                  <TableRow
                    key={item.phone.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.phone.name}
                    </TableCell>
                    <TableCell align="right">
                      <img width="50" src={item.phone.image} />
                    </TableCell>
                    <TableCell align="right">
                      <input
                        width="50"
                        type="number"
                        value={item.count}
                        onChange={(e) =>
                          changeCountPhone(e.target.value, item.phone.id)
                        }
                      />
                    </TableCell>
                    <TableCell align="right">{item.subPrice} som</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3} align="right">
                    <strong>Total</strong>
                  </TableCell>
                  <TableCell colSpan={2} align="right">
                    {cart.totalPrice} som
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <h2>empty</h2>
        )
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default CartPage;
