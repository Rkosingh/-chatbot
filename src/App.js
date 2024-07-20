import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Segment, Button, Icon } from "semantic-ui-react";
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [showChat, setShowChat] = useState(false);

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our website',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'Please enter your name',
      trigger: 'waiting1',
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "React", label: "React", trigger: "React" },
        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },
    {
      id: 'React',
      message: 'Thanks for telling your react issue',
      end: true,
    },
    {
      id: 'Angular',
      message: 'Thanks for telling your Angular issue',
      end: true,
    }
  ];

  return (
    <div className="container">
      <Button 
        circular 
        icon 
        color='blue' 
        onClick={() => setShowChat(!showChat)}
        className="chat-icon"
      >
        <Icon name={showChat ? 'close' : 'chat'} />
      </Button>
      {showChat && (
        <Segment floated="right">
          <ChatBot steps={steps} />
        </Segment>
      )}
    </div>
  );
}

export default App;