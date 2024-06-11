// render chat templates to the dom
// clear the list of chats(when the room changes)

class ChatUI {
  constructor(list) {
    this.list = list;
  }
  render(data) {
    // Responsible for creating an html template for each chat doc we get bk and rendering it to the dom.
    const when = dateFns.distanceInWordsToNow(
      //A fxn in dateFns that converts dates to words and it takes 2 arg.
      data.created_at.toDate(), //first arg - date object
      { addSuffix: true } // second arg. which is optional and add 'ago' to the date
    );
    const html = `
    <li class='list-group-item'>
        <span class='username'>${data.username}</span>
        <span class='message'>${data.message}</span>
        <div class='time'>${when}</div>
    </li>
    `;
    this.list.innerHTML += html;
  }
}
