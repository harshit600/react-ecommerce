import { promises } from "nodemailer/lib/xoauth2";

export const fetchAllProducts = () => {
    return new Promise(async(resolve)=>{
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        resolve({data});
    });
}
export const getCategories = () => {
    return new Promise(async(resolve)=>{
        const response = await fetch("http://localhost:8080/categories");
        const data = await response.json();
        resolve({data});
    });
}
export const addCart=(item)=>{
    return new Promise(async(resolve)=>{
        const response = await fetch("http://localhost:8080/cart",{
            'method':'POST',
            'body':JSON.stringify(item),
            'headers':{
                'content-type':'application/json'
            }
        });
        const data = await response.json();
        resolve({data});
        console.log(data)
    })
}
export const fetchCartItems=(item)=>{
    return new Promise(async(resolve)=>{
        const response=await fetch("http://localhost:8080/cart");
        const data=await response.json();
        resolve({data});
    })
}
export const getBrand=()=>{
    return new Promise(async(resolve)=>{
        const response = await fetch("http://localhost:8080/brands");
        const data = await response.json();
        resolve({data});
    })
}
export const getProductById=(id)=>{
    return new Promise(async(resolve)=>{
        const response = await fetch(`http://localhost:8080/products?id=${id}`);
        const data= await response.json();
        resolve({data:data[0]});
    })
}

export const fetchAllProductsByFilter = (options) => {
    let qryString = '';
  for(let key in options){
      qryString+= `${key}=${options[key]}&`;
  }
    return new Promise(async(resolve)=>{
        const response = await fetch(`http://localhost:8080/products?${qryString} `);
        const data = await response.json();
        resolve({data});
    });
}