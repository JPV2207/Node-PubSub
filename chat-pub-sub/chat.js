// Import Node.js's built-in EventEmitter class from the 'events' module
// EventEmitter allows us to create objects that can emit (send) and listen to (receive) events
const EventEmitter = require("events");

// Create a new instance of EventEmitter that will act as our chat system
// Think of this as the central hub for all chat messages
const chat = new EventEmitter();

// Function for clients to publish (send) messages
function publish(client, msg) {
  // Log which client is sending the message
  console.log(`[${client}] published: ${msg}`);

  // Emit a 'message' event to all subscribers with the actual message
  // This is like shouting in a room - all listeners will hear it
  chat.emit("message", msg);
}

// Function for clients to subscribe to (receive) messages
function subscribe(client) {
  // Add a listener for the 'message' event
  // When any message is emitted, this callback function will run
  chat.on("message", (msg) => {
    // Log which client received the message and what it was
    console.log(`[${client}] received: ${msg}`);
  });
}

// Function to simulate a client's behavior
function client(name) {
  // Log that this client has connected
  console.log(`Client ${name} connected.`);

  // Subscribe this client to receive messages
  subscribe(name);

  // Simulate publishing a message after a random delay (0-5 seconds)
  // This shows the client is active in the chat
  setTimeout(() => {
    publish(name, `Hello from ${name}!`);
  }, Math.random() * 5000);

  // Simulate client disconnection after a longer random delay (5-15 seconds)
  setTimeout(() => {
    // Log that the client is leaving
    console.log(`Client ${name} disconnected.`);

    // Remove all listeners for the 'message' event
    // WARNING: This removes ALL message listeners, not just this client's!
    // In a real app, we'd want to remove only this client's listener
    chat.removeAllListeners("message");
  }, Math.random() * 10000 + 5000);
}

// Create and activate three clients to simulate a chat room
client("Alice"); // First client
client("Bob"); // Second client
client("Charlie"); // Third client
