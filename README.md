# Node-PubSub


A simple **Node.js EventEmitter-based chat simulation** that demonstrates the **publish/subscribe** (pub/sub) pattern for real-time messaging between clients.

---

## 📌 Features
- Simulates multiple chat clients connecting and disconnecting.
- Uses Node.js's built-in [`EventEmitter`](https://nodejs.org/api/events.html) to broadcast messages.
- Demonstrates **publish** and **subscribe** behavior.
- Lightweight and dependency-free.

---

## 📂 Project Structure
```

.
├── chat.js         # Main chat simulation code
└── package.json    # Project metadata

````

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/chat-emitter.git
cd chat-emitter
````

### 2️⃣ Install Dependencies

This project uses only built-in Node.js modules, so no external dependencies are needed.

```bash
npm install
```

### 3️⃣ Run the Chat Simulation

```bash
node chat.js
```

You should see logs showing clients connecting, sending messages, receiving messages, and disconnecting.

---

## 🛠 How It Works

* **`publish(client, msg)`** – Sends a message from one client to all subscribers.
* **`subscribe(client)`** – Listens for all incoming messages.
* **`client(name)`** – Simulates a chat client that:

  * Connects
  * Subscribes to messages
  * Sends a message after a random delay
  * Disconnects after a random delay

---

## 📖 Example Output

```text
Client Alice connected.
Client Bob connected.
Client Charlie connected.
[Alice] published: Hello from Alice!
[Bob] received: Hello from Alice!
[Charlie] received: Hello from Alice!
...
Client Bob disconnected.
```

---

## 📄 License

MIT – free to use, share, or modify.
---

## ✨ Author

Made with ❤️ by [Jay Prakash Valecha](https://github.com/JPV2207)
