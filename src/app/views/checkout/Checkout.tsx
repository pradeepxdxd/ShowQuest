/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Grid } from "@mui/material";
import Beverage from "./beverage/Beverage";
import BookingSummary from "./booking-summary/BookingSummary";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setUserDetails } from "@/app/store/auth/auth.slice";
import { getUserById } from "@/firebase/actions/user";

interface Props {
  userPayload: { id: string } | null;
}

const Checkout: React.FC<Props> = ({ userPayload }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { clientSeats } = useSelector((state: RootState) => state.seat);

  useEffect(() => {
    if (clientSeats.length === 0) router.back();
    if (userPayload) {
      (async function () {
        const resp: any = await getUserById(userPayload.id);
        if (resp)
          dispatch(
            setUserDetails({
              id: resp?.id,
              name: resp?.name,
              email: resp?.email,
              photo: resp?.photo,
              role : resp?.role
            })
          );
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
        my={3}
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
