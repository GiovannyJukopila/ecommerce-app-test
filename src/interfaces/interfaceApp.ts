import React from "react";

export interface ProductFetch {
    products: ProductItem[],
    isLoading: boolean,
    isError: boolean,
}
export interface ProductItem {
    id: number;
    category: string;
    title: string;
    image: string;
    description: string;
    price: number;
}

export interface CartItem {
    id: number;
    title: string;
    image: string;
    price: number;
    amount: number;
}
export interface CartActionReducer {
    payload: any;
    type: 'ADD' | 'REMOVE' | 'REMOVE-ALL' |'CLEAR';
}
export interface CartContextType {
    cartItems: CartItem[],
    dispatch: React.Dispatch<CartActionReducer>
}

export interface Customer {
    name: string;
    lastName: string;
    email: string;
    address: string;
}

export interface Order{
    customer: Customer,
    order_details: CartItem[]
}