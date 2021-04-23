import { Platform } from "react-native";

let HOST = "";
if (__DEV__){
    HOST = "http://192.168.0.101:3001";
} else {
    HOST = "";
}

export function getData(){
    return fetch(HOST+"/api/data").then(r=>r.json());
}