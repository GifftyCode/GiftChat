// dom queries
const chatList = document.querySelector('.chat-list');

// Class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('techies', 'Chantel');

// get chats and render
chatroom.getChat((data) => {
  chatUI.render(data);
});
