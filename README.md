## Project Overview
GiftChat is a web-based chat application that allows users to join various chatrooms and communicate in real-time. It features user-friendly interfaces for sending messages and updating usernames, as well as a responsive design.

## Features
- **Multiple Chatrooms**: Users can choose from different chatrooms: General, Gaming, Music, and Techies.
- **Real-time Messaging**: Messages appear in real-time for all users in a chatroom.
- **Username Update**: Users can update their display names, which are saved in local storage.
- **Responsive Design**: The app is designed to work on various screen sizes.

## Technologies Used
- **HTML5**: For structuring the web page.
- **CSS3 & Bootstrap**: For styling and responsive design.
- **JavaScript**: For client-side scripting.
- **Firebase Firestore**: For storing and retrieving chat messages in real-time.
- **Date-fns**: For formatting timestamps.

## Installation and Setup

### Prerequisites
- A web browser
- Internet connection

### Steps
1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/giftchat.git
    cd giftchat
    ```
2. **Open `index.html` in your browser**:
    Simply open the `index.html` file in a web browser to start using the app.

## File Structure
- `index.html`: Main HTML file that includes the structure and links to stylesheets and scripts.
- `style.css`: Custom styles for the app.
- `scripts/`
  - `chat.js`: Contains the `Chatroom` class for managing chat operations.
  - `ui.js`: Contains the `ChatUI` class for rendering chat messages to the DOM.
  - `app.js`: Main JavaScript file that initializes the chatroom and sets up event listeners.

## Firebase Configuration
The Firebase configuration is included in the script tags within `index.html`:
```javascript
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
```
Replace the placeholder values with your actual Firebase project credentials.

## Usage

### Sending a Message
1. Enter your message in the "Your message" input field.
2. Click the "send" button or press Enter.

### Changing Username
1. Enter your new username in the "Update name" input field.
2. Click the "update" button.

### Switching Chatrooms
1. Click on any of the chatroom buttons (e.g., `#general`, `#gaming`, `#music`, `#techies`) to switch to that chatroom.

## Classes Overview

### Chatroom Class
- **Constructor**: Initializes with the selected room and username.
- **Methods**:
  - `addChat(message)`: Adds a new chat message to Firestore.
  - `getChat(callback)`: Sets up a real-time listener for new chat messages.
  - `updateName(username)`: Updates the username and saves it to local storage.
  - `updateRoom(room)`: Updates the current chatroom and sets up a new listener.

### ChatUI Class
- **Constructor**: Takes a reference to the chat list element.
- **Methods**:
  - `clear()`: Clears the chat list.
  - `render(data)`: Renders a new chat message to the DOM.

## Contribution
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

---

Happy chatting with GiftChat! For any questions or feedback, please reach out to [ulokangozi@gmail.com].
