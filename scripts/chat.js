// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
  }
  async addChat(message) {
    const now = new Date();
    // format a chat object
    const chat = {
      message,
      room: this.room,
      usernaname: this.username,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    // save the chat document
    const response = await this.chats.add(chat);
    return response;
  }

  // setting up a real-time listener to get new chats
  getChat(callback) {
    this.chats.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          callback(change.doc.data());
        }
      });
    });
  }
}

const chatroom = new Chatroom('general', 'Chantel');
chatroom.getChat((data) => {
  console.log(data);
});
