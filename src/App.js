import React, { Component } from "react"
import { Chat } from "botframework-webchat"
import "../node_modules/botframework-webchat/botchat.css"

const DIRECT_LINE = {
  secret: "OjUJ1k_ug38.cwA.19o.jpeNOYj1ZU9M4JRi3be2brPc4fm-XOX1YdU3tAivgWk",
}

const USER = {
  id: "user_id",
  name: "user_name",
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chat directLine={DIRECT_LINE} user={USER} />
      </div>
    )
  }
}

export default App
