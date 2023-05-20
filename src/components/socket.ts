import { io } from 'socket.io-client';

const NODE_ENV= process.env.VITE_NODE_ENV;
const BACKEND_URL= process.env.BACKEND_URL||'null';

const URL = NODE_ENV==='production' ? BACKEND_URL : 'http://localhost:4000';
const roomName = window.location.href.split("/")[3] || "default";

export const socket = io(URL,{
    query: {
        roomName: roomName
    }

});