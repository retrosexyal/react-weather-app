import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Data = {
  id: number;
  name: string;
};
interface IState {
  data: Data[];
  name: string,
}

const initialState: IState = {
  data: [],
  name: '',
  
};

export const fetchTest = createAsyncThunk(
  "test/setTest",
  async () => {
    const responce = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=Mogilev&units=metric&appid=3f73d696c605835e25ab5d1c0cf3d788&lang=ru"
    );
    return responce.data as IState;
  }
);



const test = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTest(state, action: PayloadAction<IState>) {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTest.fulfilled, (state, action: PayloadAction<IState>) => {
      console.log("fulfiled");
      state.data = action.payload.data;
    });
  },
});

export const { setTest } = test.actions;

export default test.reducer;


/* builder.addCase(
  fetchBooks.fulfilled,
  (state, action: PayloadAction<BooksState>) => {
    console.log(action.payload.books)
    state.books = action.payload.books;
    state.loading = false;
    state.status = Status.COMLETED;
  } */