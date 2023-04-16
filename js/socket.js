let ADDRESS = undefined;
if (window.location.host.includes("localhost")) {
    ADDRESS = "ws://localhost:5556";
}

const socket = io(ADDRESS);

socket.on('connect', () => {
    console.log("SYSM: Connected to socket server");
    socket.emit('AUTH', USER_HANDLE);
});