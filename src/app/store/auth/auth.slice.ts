/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth } from "@/firebase/firebase.config";
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
import { addGoogleUser, addUser } from "@/firebase/actions/user";
import { generateJoseToken } from "@/app/lib/jose.auth";

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

export const googleSignIn = createAsyncThunk(
  "auth/googleSignIn",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      console.log({provider})
      const result = await signInWithPopup(auth, provider);
      console.log({result})
      const token = await result.user.getIdToken();
      if (token) {
        addGoogleUser(result.user);
        const resp = await axios.post(`/api/auth/token`, {
          id: result.user.uid,
        });
        const customToken = resp.data.token;
        document.cookie = `token=${customToken}; path=/; max-age=${
          30 * 24 * 60 * 60
        }`;
        return result.user;
      }
      return result.user;
    } catch (err) {
      return rejectWithValue({
        message: "Something went wrong, PLease try again later",
      });
    }
  }
);

export const appleSignIn = createAsyncThunk("auth/appleSignIn", async () => {
  const provider = new OAuthProvider("apple.com");
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    throw new Error((error as AxiosError).message || "Apple sign-in failed");
  }
});

export const loginWithGmail = createAsyncThunk(
  "auth/loginWithGmail",
  async (email: string, { rejectWithValue }) => {
    try {
      await axios.post(`/api/auth/email`, {
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
      const response = await axios.post(`/api/auth/email`, {
        email,
        action: "verifyOtp",
        otpCode,
      });
      if (response.status === 200) {
        const docResponse = await addUser({ email, name: "" });
        if (!docResponse)
          rejectWithValue({
            error: "User not added in firestore db",
            status: 401,
          });
        else {
          const token = await generateJoseToken({ id: docResponse });
          if (token) {
            document.cookie = `token=${token}; path=/; max-age=${
              30 * 24 * 60 * 60
            }`;
            return token;
          } else
            return rejectWithValue({
              error: "Token not generated",
              status: 400,
            });
        }
      }
      return rejectWithValue({
        error: "Something went wrong, please try again later",
      });
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
    try {
      const result = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );
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
  try {
    await signOut(auth);
    const response = await axios.post(`/api/auth/email`, {
      token: "token",
      action: "logout",
    });
    return response.data;
  } catch (err) {
    console.log({ logout_err: err });
  }
});

interface User {
  id?: string;
  name: string;
  email: string;
  photo?: string;
}

export interface AuthState {
  loading: boolean;
  error: object | null;
  user: null | undefined | object;
  email: string | undefined;
  verified: boolean;
  verificationId: ConfirmationResult | undefined;
  token: string | undefined;
  userCookie: User | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null,
  email: "",
  verified: false,
  verificationId: undefined,
  token: undefined,
  userCookie: null,
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
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
    setUserDetails: (state, action) => {
      state.userCookie = action.payload;
    },
    setVerifiedFalse: (state) => {
      state.verified = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(googleSignIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(googleSignIn.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.verified = true;
    });
    builder.addCase(googleSignIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
    });

    builder.addCase(verifyOtp.fulfilled, (state, action) => {
      state.verified = true;
      state.token = action.payload;
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

    builder.addCase(loginWithGmail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginWithGmail.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(loginWithGmail.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const {
  setLoading,
  setEmail,
  clearEmail,
  clearError,
  clearToken,
  setToken,
  setUserDetails,
  setVerifiedFalse,
} = authSlice.actions;
export default authSlice.reducer;
