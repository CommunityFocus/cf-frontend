import { io } from 'socket.io-client';

const URL = process.env.VITE_NODE_ENV==='production' ? process.env.BACKEND_URL||'' : 'http://localhost:4000';
const roomName = window.location.href.split("/")[3] || "default";

export const socket = io(URL,{
    query: {
        roomName: roomName
    }

});