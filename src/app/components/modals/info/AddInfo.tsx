import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, TextField } from "@mui/material";
import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUserDetails } from "@/app/store/auth/auth.slice";
import { updateUser } from "@/firebase/firebase.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 430,
  bgcolor: "background.paper",
  borderRadius: "5px",
  p: 4,
  height: "555px",
};

interface BasicModalProp {
  open: boolean;
  handleClose: (
    event: React.MouseEvent<HTMLButtonElement> | object,
    reason: string
  ) => void;
  handlePayment: (name: string, email: string) => void;
  loading: (param: boolean) => void;
}

const AddInfo: React.FC<BasicModalProp> = ({
  open,
  handleClose,
  handlePayment,
  loading,
}) => {
  const { userCookie } = useSelector((state: RootState) => state.auth);
  const [formData, setFormData] = React.useState<{
    name: string;
    email: string;
  }>({
    name: userCookie?.name || "",
    email: userCookie?.email || "",
  });

  const dispatch = useDispatch<AppDispatch>();

  const proceedToPay = (
    event: React.MouseEvent<HTMLButtonElement> | object
  ) => {
    if (
      (formData?.name || userCookie?.name) &&
      (formData?.email || userCookie?.email)
    ) {
      if (userCookie?.id) {
        handlePayment(
          formData?.name || userCookie?.name || "",
          formData?.email || userCookie?.email || ""
        );
        updateUser(userCookie?.id, {
          name: formData?.name || userCookie?.name,
          email: formData?.email || userCookie?.email,
        });
        dispatch(
          setUserDetails({
            name: formData?.name || userCookie?.name || "",
            email: formData?.email || userCookie?.email || "",
          })
        );
        handleClose(event, "close");
        loading(true);
      } else toast.warn("UnAuthorized User");
    } else toast.info("Please provide additional information");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ArrowBackIosIcon
            sx={{ fontWeight: "lighter", cursor: "pointer" }}
            onClick={(e) => handleClose(e, "close")}
          />
          <Box
            mt={5}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box alignSelf={"flex-start"}>
              <Typography variant="h6" textAlign={"left"} fontWeight={"bold"}>
                Add some information before proceed to pay!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box mt={3}>
                <TextField
                  id="outlined-error"
                  label="Name"
                  defaultValue="Hello World"
                  fullWidth
                  type="text"
                  sx={{ my: 1 }}
                  value={formData.name || userCookie?.name}
                  disabled={userCookie && userCookie.name ? true : false}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <TextField
                  id="outlined-error"
                  label="Email"
                  defaultValue="Hello World"
                  fullWidth
                  type="email"
                  sx={{ my: 1 }}
                  value={formData?.email || userCookie?.email}
                  disabled={userCookie && userCookie.email ? true : false}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "80%",
                  position: "absolute",
                  bottom: "20px",
                  bgcolor: "rgb(248, 68, 100)",
                }}
                onClick={proceedToPay}
              >
                proceed to pay
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddInfo;
