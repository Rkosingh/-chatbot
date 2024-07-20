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
      message: 'Hello, Welcome to our booking site for kids\' extracurricular activities!',
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
      message: "Hi {previousValue}, please select the activity you are interested in.",
      trigger: "activities",
    },
    {
      id: "activities",
      options: [
        { value: "Swimming", label: "Swimming", trigger: "Swimming" },
        { value: "Dancing", label: "Dancing", trigger: "Dancing" },
        { value: "Art", label: "Art", trigger: "Art" },
      ],
    },
    {
      id: 'Swimming',
      message: 'Great! You selected Swimming. Please visit our swimming classes section to book a session.',
      trigger: 'Support'
    },
    {
      id: 'Dancing',
      message: 'Great! You selected Dancing. Please visit our dancing classes section to book a session.',
      trigger: 'Support'
    },
    {
      id: 'Art',
      message: 'Great! You selected Art. Please visit our art classes section to book a session.',
      trigger: 'Support'
    },
    {
      id: 'Support',
      message: 'For further information, contact our support team at support@kidgage.com.',
      end: true
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
