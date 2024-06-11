// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');

// add a new chat
newChatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err));
});

// update username
newNameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // update name via chatroom
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  // reset the form
  newNameForm.reset();
  // show then hide the update message
  updateMssg.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => (updateMssg.innerText = ''), 3000);
});

// Class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('techies', 'Chantel');

// get chats and render
chatroom.getChat((data) => {
  chatUI.render(data);
});
