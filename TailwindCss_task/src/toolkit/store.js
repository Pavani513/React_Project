import { configureStore } from "@reduxjs/toolkit";
import productSlices from "./ProductDetails";
import singlePageData from "./SinglePage";

export const store=configureStore({
    reducer:{
        productsData:productSlices,
        singleCard:singlePageData

    }
})