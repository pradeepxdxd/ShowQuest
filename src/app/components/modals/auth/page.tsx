import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import GoogleAuth from "@/app/features/auth/google/google";
import ContactAuth from "@/app/features/auth/contact/contact";
import EmailAuth from "@/app/features/auth/email/email";
import Link from "next/link";

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
}

const BasicModal: React.FC<BasicModalProp> = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={(event, reason) => handleClose(event, reason)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="center" position="relative">
            <Typography
              id="modal-modal-title"
              variant="body1"
              fontWeight={500}
              component="h2"
              textAlign="center"
            >
              Get Started
            </Typography>
            <IconButton
              onClick={(event) => handleClose(event, "close-button")}
              sx={{
                position: "absolute",
                bottom: -6,
                right: 0,
              }}
            >
              <Close />
            </IconButton>
          </Box>

          <Box
            mt={5}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <div style={{ margin: 15 }}>
              <GoogleAuth />
            </div>
            <div style={{ margin: 15 }}>
              <EmailAuth />
            </div>
            <div style={{ margin: 15 }}>
              <ContactAuth />
            </div>
          </Box>

          <Box
            mt={4}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            position="absolute"
            bottom={20}
            width="85%"
          >
            <Typography variant="caption" textAlign="center">
              I agree to the
              <Link href={"#"}>Terms and Conditions</Link> &{' '}
              <Link href={"#"}>Privacy Policy</Link>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
