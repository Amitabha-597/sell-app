import axios from "axios";

let IP = axios.create({
    baseURL:'http://127.0.0.1:3333',
    timeout:10000
})
// 商家信息
export let Info=()=>IP.get('/api/seller');

export let goods=()=>IP.get('/api/goods')