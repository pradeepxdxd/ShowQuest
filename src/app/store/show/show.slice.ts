import { Show, ShowResponse } from "@/firebase/actions/action.types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addShow,
  deleteShow,
  getShowById,
  getShowByType,
  updateShow,
} from "@/firebase/actions/show";

export const addShowData = createAsyncThunk(
  "show/addShowData",
  async (param: Show, { rejectWithValue }) => {
    try {
      const resp = await addShow(param);
      return resp;
    } catch (err) {
      console.log(err);
      return rejectWithValue({ error: err });
    }
  }
);

export const getShowByTypeData = createAsyncThunk(
  "show/getShowByTypeData",
  async (type: string, { rejectWithValue }) => {
    try {
      const shows = await getShowByType(type);
      return shows;
    } catch (err) {
      console.log(err);
      return rejectWithValue({ error: err });
    }
  }
);

export const deleteShowData = createAsyncThunk(
  "show/deleteShowData",
  async (id: string, { rejectWithValue }) => {
    try {
      const resp = await deleteShow(id);
      if (resp) return resp;
    } catch (err) {
      console.log(err);
      return rejectWithValue({ error: err });
    }
  }
);

export const updateShowData = createAsyncThunk(
  "show/updateShowData",
  async (params: { id: string; data: Show }, { rejectWithValue }) => {
    try {
      const resp = await updateShow(params.id, params.data);
      return resp;
    } catch (err) {
      console.log(err);
      return rejectWithValue({ error: err });
    }
  }
);

export const getShowByIdData = createAsyncThunk(
  "show/getShowByIdData",
  async (id: string, { rejectWithValue }) => {
    try {
      const resp = await getShowById(id as string);
      return resp;
    } catch (err) {
      console.log(err);
      return rejectWithValue({ error: err });
    }
  }
);

interface InitialState {
  loading: boolean;
  error: null | string;
  shows: ShowResponse[];
  show: ShowResponse | null;
}

const initialState: InitialState = {
  loading: false,
  error: null,
  shows: [],
  show: null,
};

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    clearShows: (state) => {
      state.shows = [];
    },
    clearError: (state) => {
      state.error = null;
    },
    clearShow: (state) => {
      state.show = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addShowData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addShowData.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addShowData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });

    builder.addCase(getShowByTypeData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getShowByTypeData.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = action.payload as unknown as ShowResponse[];
    });
    builder.addCase(getShowByTypeData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });

    builder.addCase(deleteShowData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteShowData.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = state.shows.filter((show) => show.id !== action.payload);
    });
    builder.addCase(deleteShowData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });

    builder.addCase(updateShowData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateShowData.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = state.shows.map((show) => {
        if (show.id === action.payload?.id) {
          return action.payload as ShowResponse;
        } else return show as ShowResponse;
      });
    });
    builder.addCase(updateShowData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });

    builder.addCase(getShowByIdData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getShowByIdData.fulfilled, (state, action) => {
      state.loading = false;
      state.show = action.payload as unknown as ShowResponse;
    });
    builder.addCase(getShowByIdData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
  },
});

export const { clearError, clearShows, clearShow } = showSlice.actions;
export default showSlice.reducer;
