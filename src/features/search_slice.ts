import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectData } from "../model";



interface SearchValue {
    searchText: string;
}

const initialState: SearchValue = {
    searchText: ""
}

const searchSlice = createSlice({
    name: "searchText",
    initialState,
    reducers: {
        // Add to project list
        addSearchText(state, action: PayloadAction<string>) {
            state.searchText = action.payload

        },

        clearSearch(state) {
            state.searchText = ""
        }
    }
})

export const { addSearchText, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
