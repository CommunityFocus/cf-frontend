import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.VITE_NODE_ENV==='production' ? import.meta.env.VITE_BACKEND_URL : 'http://localhost:4000';
const roomName = window.location.href.split("/")[3] || "default";
console.log({roomName2:roomName});

export const socket = io(URL,{
    query: {
        roomName: roomName
    }

});