"use client";
import { AppDispatch, RootState } from "@/app/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDataOfUser } from "@/app/store/order/order.slice";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

interface Uid {
  uid: {
    id: string;
  } | null;
}

const Order: React.FC<Uid> = ({ uid }) => {
  const { error, orders } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (uid?.id) dispatch(getOrderDataOfUser(uid?.id));
  }, [uid, dispatch]);
  return (
    <>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          mt={2}
          textAlign={"center"}
          fontFamily={"cursive"}
        >
          Your Order History
        </Typography>
        {orders && orders.length > 0 ? (
          <>
            <TableContainer component={Paper} sx={{ m: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Show Name</TableCell>
                    <TableCell>Theater</TableCell>
                    <TableCell>Seat</TableCell>
                    <TableCell>Ticket Price</TableCell>
                    <TableCell>Food & Beverage</TableCell>
                    <TableCell>IGST</TableCell>
                    <TableCell>Total Paid</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders &&
                    orders.length > 0 &&
                    orders.map((order) => {
                      const dt = order?.createdAt?.toString().split(" ");
                      let tm: undefined | string[] = undefined;
                      tm = dt && dt[4]?.split(":");
                      return (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.show_name}</TableCell>
                          <TableCell>{order.theater}</TableCell>
                          <TableCell>{order.seat}</TableCell>
                          <TableCell>{order.ticket_price}</TableCell>
                          <TableCell>{order.food_beverage}</TableCell>
                          <TableCell>81</TableCell>
                          <TableCell>{order.total_paid}</TableCell>
                          {dt !== undefined && (
                            <TableCell>{`${dt[2]}/${dt[0]}/${dt[1]}/${dt[3]}`}</TableCell>
                          )}
                          {tm !== undefined && (
                            <TableCell>{`${tm[0]}:${tm[1]}:${tm[2]}`}</TableCell>
                          )}
                        </TableRow>
                      );
                    })}
                  {/* Fri Nov 01 2024 17:02:59 GMT+0530 */}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <>
            {typeof error === "string" && (
              <>
                <Box
                  height={550}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography variant="h6" fontFamily={"cursive"}>
                    {error}
                  </Typography>
                </Box>
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Order;
