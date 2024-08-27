import { configureStore } from '@reduxjs/toolkit'
import project_slice from './project_slice'
import search_slice from './search_slice'
// ...
const store = configureStore({
  reducer: {
    projectReducer: project_slice,
    searchReducer:search_slice
  
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store