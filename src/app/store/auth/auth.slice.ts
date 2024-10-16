import { auth } from "@/firebase/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  OAuthProvider,
  signInWithPhoneNumber,
  ApplicationVerifier,
  PhoneAuthProvider,
  signInWithCredential,
  ConfirmationResult,
} from "firebase/auth";
import axios, { AxiosError } from "axios";

interface VerifyOtpProp {
  email: string;
  otpCode: string;
}

interface PhoneProp {
  phoneNumber: string;
  recaptchaVerifier: ApplicationVerifier;
}

interface verifyPhoneOtp {
  verificationId: string;
  verificationCode: string;
}

export const googleSignIn = createAsyncThunk("auth/googleSignIn", async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
});

export const appleSignIn = createAsyncThunk("auth/appleSignIn", async () => {
  const provider = new OAuthProvider("apple.com");
  console.log({ provider });
  try {
    const result = await signInWithPopup(auth, provider);
    console.log({ result });
    return result.user;
  } catch (error) {
    console.log({ error });
    throw new Error((error as AxiosError).message || "Apple sign-in failed");
  }
});

export const loginWithGmail = createAsyncThunk(
  "auth/loginWithGmail",
  async (email: string, { rejectWithValue }) => {
    try {
      await axios.post("http://localhost:3000/api/auth/email", {
        email,
        action: "sentOtp",
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data || "An error occurred");
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ email, otpCode }: VerifyOtpProp, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/email",
        {
          email,
          action: "verifyOtp",
          otpCode,
        }
      );

      return response.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data || "An error occurred");
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const phoneSignIn = createAsyncThunk(
  "auth/phoneSignIn",
  async ({ phoneNumber, recaptchaVerifier }: PhoneProp) => {
    console.log({ phoneNumber, recaptchaVerifier });
    try {
      const result = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );
      console.log({ result });
      return result;
    } catch (err) {
      console.log(err);
    }
  }
);

export const verifyCodePhoneOtp = createAsyncThunk(
  "auth/verifyCodePhoneOtp",
  async ({ verificationId, verificationCode }: verifyPhoneOtp) => {
    try {
      const credentials = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      const result = await signInWithCredential(auth, credentials);
      return result.user;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
  const response = await axios.post("http://localhost:3000/api/auth/email", {
    token: "token",
    action: "logout",
  });
  return response.data;
});

export interface AuthState {
  loading: boolean;
  error: object | null;
  user: object | null | undefined;
  email: string | undefined;
  verified: boolean;
  verificationId: ConfirmationResult | undefined;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null,
  email: "",
  verified: false,
  verificationId: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    clearEmail: (state) => {
      state.email = "";
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(googleSignIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(googleSignIn.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(googleSignIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
    });

    builder.addCase(verifyOtp.fulfilled, (state) => {
      state.verified = true;
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.verified = false;
      state.error = action.error;
    });

    builder.addCase(phoneSignIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(phoneSignIn.fulfilled, (state, action) => {
      state.loading = false;
      state.verificationId = action.payload;
    });
    builder.addCase(phoneSignIn.rejected, (state, action) => {
      state.error = action.error;
    });

    builder.addCase(verifyCodePhoneOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(verifyCodePhoneOtp.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(verifyCodePhoneOtp.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const { setLoading, setEmail, clearEmail, clearError } =
  authSlice.actions;
export default authSlice.reducer;
