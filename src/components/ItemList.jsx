import Item from "./Item";
import axios from "axios";
import { useState, useEffect } from "react";
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

const ItemList = () => {
    // your code here

    const [items,setItems]=useState([])

    useEffect(()=>{
        axios.get(API_URI)
        .then((res)=>{
            setItems(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

    const handleDelete=async(id)=>{
        try{
            const response=await axios.delete(`${API_URI}/${id}`)
            setItems(items.filter(item=>item.id!==id))
        }catch(err){
            console.log(err.message)
        }
    }
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={handleDelete} />
            ))}
        </>
    );
};

export default ItemList;
