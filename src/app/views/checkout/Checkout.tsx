"use client";
import { Box, Grid } from "@mui/material";
import Beverage from "./beverage/Beverage";
import BookingSummary from "./booking-summary/BookingSummary";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setUserDetails } from "@/app/store/auth/auth.slice";
import { getUserByEmail } from "@/firebase/firebase.action";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface Props {
  userPayload: { email: string; name: string };
}

const Checkout: React.FC<Props> = ({ userPayload }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { clientSeats } = useSelector((state: RootState) => state.seat);

  useEffect(() => {
    if (clientSeats.length === 0) router.back();
    if (userPayload) {
      dispatch(setUserDetails(userPayload));
      (async () => {
        const resp: User[] = await getUserByEmail(userPayload.email);
        if (resp && resp.length > 0) {
          const { id, email, name } = resp[0];
          dispatch(setUserDetails({ id, email, name }));
        }
      })();
    }
  }, [router, clientSeats, userPayload, dispatch]);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        m={3}
      >
        <Box width={"85%"}>
          <Grid container spacing={2}>
            <Grid
              item
              md={8}
              sm={12}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Beverage />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <BookingSummary />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
