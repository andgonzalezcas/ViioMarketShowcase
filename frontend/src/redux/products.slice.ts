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
    // getProductItemById: (state, action: PayloadAction<number>) => {
    //   const productId = action.payload;
    //   const product = state.list.find((p) => p.id === productId);

    //   if (product) {
    //     return product;
    //   } else {
    //     return { id: -1, title: 'Product not found', description: '', price: 0, discountPercentage: 0, rating: 0, stock: 0, brand: '', category: '', thumbnail: '', images: [] };
    //   }
    // }
  }
})

export const { setProductList } = productsSlice.actions

export const selectList = (state: RootState) => state.productList.list

export default productsSlice.reducer