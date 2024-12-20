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

export const getHomeShowByTypeData = createAsyncThunk(
  "show/getHomeShowByTypeData",
  async (type: string, { rejectWithValue }) => {
    try {
      const shows = await getShowByType(type);
      return { shows, type };
    } catch (err) {
      console.log(err);
      return rejectWithValue({ error: err });
    }
  }
);

interface InitialState {
  loading: boolean;
  Moviesloading: boolean;
  LiveEventloading: boolean;
  Premiereloading: boolean;
  error: null | string;
  shows: ShowResponse[];
  show: ShowResponse | null;
  homeMovies: ShowResponse[];
  homeLiveEvent: ShowResponse[];
  homePremiere: ShowResponse[];
}

const initialState: InitialState = {
  loading: false,
  Moviesloading: false,
  LiveEventloading: false,
  Premiereloading: false,
  error: null,
  shows: [],
  show: null,
  homeMovies: [],
  homeLiveEvent: [],
  homePremiere: [],
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

    builder.addCase(getHomeShowByTypeData.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.Moviesloading = true;
      state.LiveEventloading = true;
      state.Premiereloading = true;
    });
    builder.addCase(getHomeShowByTypeData.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.type === "movie") {
        state.homeMovies = action.payload.shows as unknown as ShowResponse[];
        state.Moviesloading = false;
      } else if (action.payload.type === "live-event") {
        state.homeLiveEvent = action.payload.shows as unknown as ShowResponse[];
        state.LiveEventloading = false;
      } else if (action.payload.type === "premiere") {
        state.homePremiere = action.payload.shows as unknown as ShowResponse[];
        state.Premiereloading = false;
      }
    });
    builder.addCase(getHomeShowByTypeData.rejected, (state, action) => {
      state.loading = false;
      state.Moviesloading = false;
      state.LiveEventloading = false;
      state.Premiereloading = false;
      state.error = action.error.message as string;
    });
  },
});

export const { clearError, clearShows, clearShow } = showSlice.actions;
export default showSlice.reducer;
