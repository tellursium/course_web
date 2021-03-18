import React from 'react';
import "./styles/Home.css"
import TextBlock from "../elements/TextBlock";

function Home() {
    let headerWelcome = "About Node.js"
    let textWelcome = "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep."

    let headerSupport = ""
    let textSupport = "This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.\n" +
        "\n"

    let header = ""
    let text = "Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user.\n" +
        "\n"
    return (
        <div className="home">
            {TextBlock(headerWelcome, textWelcome)}
            {TextBlock(headerSupport, textSupport)}
            {TextBlock(header, text)}
        </div>
    );
}

export default Home;
