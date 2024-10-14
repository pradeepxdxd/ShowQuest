import { auth } from "@/firebase/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const googleSignIn = createAsyncThunk("auth/googleSignIn", async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

interface AuthState {
  loading: boolean;
  error: object | null;
  user: object | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(googleSignIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(googleSignIn.fulfilled, (state, action) => {
      console.log(action.payload)
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
  },
});

export const { setLoading } = authSlice.actions;
export default authSlice.reducer;
