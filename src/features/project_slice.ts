import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectData } from "../model";



interface ProjectState {
    projects: ProjectData[];
}

const initialState: ProjectState = {
    projects: []
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        // Add to project list
        addToList(state, action: PayloadAction<ProjectData>) {
            // Check if a project with the same ID already exists
            const res = state.projects.filter((data) => data.id === action.payload.id);

            if (res.length > 0) {
                state.projects.pop();

                console.log("Project with the same ID already exists");
            } else {
                state.projects.pop();
                state.projects.push(action.payload);

                console.log("No project with the same ID exists");
            }

        },

        clearList(state) {
            state.projects = []
        }
    }
})

export const { addToList, clearList } = projectSlice.actions;
export default projectSlice.reducer;
