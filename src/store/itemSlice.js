import { createSlice } from "@reduxjs/toolkit"

import { initialState } from "./initaialValues"

export const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {
    createPost(state, action) {
      const id = state.announcments[state.announcments.length - 1].id + 1
      const date = new Date().toDateString()
      state.announcments.push({ date, ...action.payload, id })
    },
    updatePost(state, action) {
      state.announcments.map(item => {
        if (item.id == action.payload.id) {
          return state.announcments.splice(item.id - 1, 1, { ...item, ...action.payload })
        }
        return item
      })
    },
    deletePost(state, action) {
      state.announcments = state.announcments.filter((message) => message.id !== action.payload)
    },
  },
})

const { actions, reducer } = itemSlice
export const { createPost, updatePost, deletePost, getProduct } = actions
export default reducer