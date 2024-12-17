import React, { useState } from "react";
import Navbar from "./src/propsExercise/Navbar";
import Card from "./src/propsExercise/Card";
function AppProps() {
  const data = [
    {
      image:
        "https://images.unsplash.com/flagged/photo-1576659529462-670a89313ea5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlbGVuYSUyMGdvbWV6fGVufDB8fDB8fHww",
      name: "Somewhere only we know",
      artist: "Gomez",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1725821031880-b8057ff92d52?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "Drake",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1725610147248-4f20f7b13999?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D",
      name: "Find Someone",
      artist: "Dua lipa",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1725610588081-27d5c5ea0603?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
      name: "Crazy",
      artist: "Katty Perry",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1725695952266-be3eadfe7c99?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Find peace",
      artist: "Zozo",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemindex) => {
        if (itemindex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };

  return (
    <div>
      <Navbar data={songData} />
      <div className="px-20 flex flex-wrap gap-12">
        {songData.map((obj, index) => {
          return (
            <Card
              data={obj}
              handleClick={handleClick}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AppProps;
