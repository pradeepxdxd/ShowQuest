import { Apple } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

export const AppleLoginButton: React.FC = () => {
  return (
    <>
      <Button
        startIcon={<Apple sx={{color:'black'}} />}
        sx={{ width: "300px" }}
        variant="outlined"
        fullWidth
      >
        <Typography textTransform={"lowercase"}>
          Continue with Apple
        </Typography>
      </Button>
    </>
  );
};
