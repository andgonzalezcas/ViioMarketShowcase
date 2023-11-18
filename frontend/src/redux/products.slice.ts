import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store'
import { productProps } from '../interface/common.interface';

interface initialStateProps {
  list: productProps[]
}

const initialState: initialStateProps = {
  list: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<productProps[]>) => {
      state.list = action.payload
    },
  }
})

export const { setProductList } = productsSlice.actions

export const selectList = (state: RootState) => state.productList.list

export default productsSlice.reducer