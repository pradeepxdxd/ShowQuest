import { Apple } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { appleSignIn } from "@/app/store/auth/auth.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";

export const AppleLoginButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const handleAppleAuth = () => {
    dispatch(appleSignIn())
  }
  return (
    <>
      <Button
        startIcon={<Apple sx={{color:'black'}} />}
        sx={{ width: "300px" }}
        variant="outlined"
        fullWidth
        onClick={handleAppleAuth}
        disabled
      >
        <Typography textTransform={"lowercase"}>
          Continue with Apple
        </Typography>
      </Button>
    </>
  );
};
