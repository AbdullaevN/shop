// import React, { useContext, useEffect } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// import { clientContext } from '../contexts/ClientContext';

// const CartPage = () => {
//     const { cart, getCart, changeCountPhone } = useContext(clientContext)
//     useEffect(() => {
//         getCart()
//     }, [])
//     console.log(cart)
//     return (
//         <div>
//             <h2>Корзина</h2>
//             <div>
//                 {
//                     cart ? (
//                         cart.phones.length > 0 ? (
//                             <TableContainer >
//                                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                                     <TableHead>
//                                         <TableRow>
//                                             <TableCell>Название</TableCell>
//                                             <TableCell align="right">Фото</TableCell>
//                                             <TableCell align="right">Количество</TableCell>
//                                             <TableCell align="right">Сумма</TableCell>

//                                         </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                         {cart.phones.map((item) => (
//                                             <TableRow
//                                                 key={item.phone.id}
//                                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                             >
//                                                 <TableCell component="th" scope="row">
//                                                     {item.phone.name}
//                                                 </TableCell>
//                                                 <TableCell align="right">
//                                                     <img width="50" src={item.phone.image} alt="" />
//                                                 </TableCell>
//                                                 <TableCell align="right">
//                                                     <input type="number" value={item.count} onChange={(e) => changeCountPhone(e.target.value, item.phone.id)} />
//                                                 </TableCell>
//                                                 <TableCell align="right">
//                                                     <input type="number" value={item.subPrice} />
//                                                 </TableCell>

//                                             </TableRow>

//                                         ))}
//                                         <TableRow>
//                                             <TableCell colSpan={3} align="right">Total</TableCell>
//                                             <TableCell colSpan={1} align="right">{cart.totalPrice} сом
//                                             </TableCell>
//                                         </TableRow>
//                                     </TableBody>
//                                 </Table>
//                             </TableContainer>

//                         ) : (
//                             <h2>Корзина пуста</h2>
//                         )

//                     ) : (
//                         <h2>Loading...</h2>
//                     )
//                 }


//             </div>
//         </div>
//     );
// };

// export default CartPage;