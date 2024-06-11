// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    this.unsub;
  }
  async addChat(message) {
    const now = new Date();
    // format a chat object
    const chat = {
      message,
      room: this.room,
      username: this.username,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    // save the chat document
    const response = await this.chats.add(chat);
    return response;
  }

  // setting up a real-time listener to get new chats
  getChat(callback) {
    this.unsub = this.chats
      .where('room', '==', this.room)
      .orderBy('created_at')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            callback(change.doc.data());
          }
        });
      });
  }
  //  updating the username
  updateName(username) {
    this.username = username;
    localStorage.setItem('username', username);
  }
  updateRoom(room) {
    this.room = room;
    console.log('Room is updated');
    if (this.unsub) {
      this.unsub();
    }
  }
}

// const chatroom = new Chatroom('general', 'Chantel');
// chatroom.getChat((data) => {
//   console.log(data);
// });

// setTimeout(() => {
//   chatroom.updateRoom('techie');
//   chatroom.updateName('Cynthia');
//   chatroom.getChat((data) => {
//     console.log(data);
//   });
//   chatroom.addChat('We are getting there');
// }, 3000);
