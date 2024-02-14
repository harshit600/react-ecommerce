import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import { fetchAllProducts,fetchAllProductsByFilter,getCategories,addCart ,getBrand,getProductById,fetchCartItems} from '../products/ProductApi'
const initialState = {
  products: [],
  categories:[],
  brands:[] ,
  items:[],
  selectedProduct:null
}


// First, create the thunk
export const fetchProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
      const response = await fetchAllProducts()
      return response.data
    }
  )
  export const fetchCategories = createAsyncThunk(
    'products/fetchCategories',
    async () => {
      const response = await getCategories()
      return response.data
    }
  )
  export const fetchBrand = createAsyncThunk(
    'products/fetchBrand',
    async () => {
      const response = await getBrand()
      return response.data
    }
  )
  export const fetchproductid = createAsyncThunk(
    'products/fetchproductid',
    async (id) => {
      const response = await getProductById(id)
      return response.data
    }
  )
  export const addToCart = createAsyncThunk(
    'cart/addCart',
    async (product) => {
      const response = await addCart(product)
      return response.data
    }
    
  )
  export const fetchCartItem = createAsyncThunk(
    'products/fetchCartItem',
    async (product) => {
      const response = await fetchCartItems(product)
      return response.data
    }
  )
  export const fetchProductsByFilter = createAsyncThunk(
    'products/fetchAllProductsFilter',
    async (option) => {
      const response = await fetchAllProductsByFilter(option)
      return response.data
    }
  )

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.products = action.payload;
    })
    .addCase(fetchProductsByFilter.fulfilled, (state, action) => {
      // Add user to the state array
      state.products = action.payload;
    })
    .addCase(addToCart.fulfilled, (state, action) => {
      state.items = action.payload;
    })
    .addCase(fetchCategories.fulfilled, (state,action) => {
      state.categories = action.payload;
    })
    .addCase(fetchproductid.fulfilled, (state,action) => {
      state.selectedProduct = action.payload;
    })
    .addCase(fetchBrand.fulfilled, (state,action) => {
      state.brands = action.payload;
    })
    .addCase(fetchCartItem.fulfilled, (state,action) => {
      state.items = action.payload;
    })
  },
})

// Action creators are generated for each case reducer function
// export const { fetchProducts } = productSlice.actions
export const selectAllProduct = state=>state.product.products;
export const selectCategories = state=>state.product.categories;
export const selectbrand = state=>state.product.brands;
export const selectProduct = state=>state.product.selectedProduct;
export const selectItem=state=>state.product.items;



export default productSlice.reducer