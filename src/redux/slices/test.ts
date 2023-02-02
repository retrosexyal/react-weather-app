import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, store } from "../store";


export const fetchTest = createAsyncThunk(
  "city/setTest",
  async () => {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return responce as IState;
  }
);

type Data = {
  id: number;
  name: string;
};
interface IState {
  data: Data[];
}

const initialState: IState = {
  data: [],
};

const test = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTest(state, action: PayloadAction<IState>) {
      state.data = action.payload.data;
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
