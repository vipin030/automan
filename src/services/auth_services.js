import {config} from '../config';
import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;

const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:8000`)
  : `192.168.1.178:8000`;
console.log("Api ",api)
export const userService = {
    get,
    post,
    put,
    deleteDetail
};

const instance = axios.create({
  proxy: {
    host: 'localgost',
    port: 8000,
  },
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:8000/"
  },
});

function get(apiEndpoint){
    return instance.get('http://'+api+'/api/'+apiEndpoint).then((response)=>{
       return response;
    }).catch((err)=>{
       console.log(err);
    })
}

function post(apiEndpoint, payload){
    console.log(payload)
    console.log("Api:12 ",'http://'+api+'/api/'+apiEndpoint)
    return axios.post('http://'+api+'/api/'+apiEndpoint, payload).then((response)=>{
        console.log('http://'+api+'/'+apiEndpoint);
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function put(apiEndpoint, payload){
    return axios.put(config.apiUrl+apiEndpoint, payload).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function deleteDetail(apiEndpoint){
    return axios.delete(config.apiUrl+apiEndpoint).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}


// export { userService }
