function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }
function goToRoom() {
    window.location="chat_room.html";
}    