import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:4000';
const roomName = window.location.href.split("/")[4] || "default";
console.log({roomName2:roomName});

export const socket = io(URL,{
    query: {
        roomName: roomName
    }

});