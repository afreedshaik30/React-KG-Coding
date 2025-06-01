import React, { useState } from "react";
import "../style/HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  function handleRoomIdGenerate() {
    /*
       Math.random() generates a random number. 0 to 1(exclusive)
      .toString(36) converts randomId to a base 36 [0-9, a to z] string with the length 12.
      Here Math.random().toString(36)                  // 0.p1bq9k76hd  length= 12
           Math.random().toString(36).substring(2, 8); // p1bq9 length=6
           
    */
    const randomId = Math.random().toString(36).substring(2, 8);
    const timeStamp = Date.now().toString().slice(-4);
    setRoomId(randomId + timeStamp);
    // console.log(randomId + " " + timeStamp);
  }
  function handleOneOnOneCall() {
    if (!roomId) {
      alert("Kindly generate the room ID before proceeding.");
      return;
    }
    console.log("Room ID exists, proceeding with 1-1 Call...");
    navigate(`room/${roomId}?type=one-to-one`);
  }

  function handleGroupCall() {
    if (!roomId) {
      alert("Kindly generate the room ID before proceeding.");
    }
    console.log("Room ID exists, proceeding with Group Call...");
    navigate(`room/${roomId}?type=group-call`);
  }

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to Video Calling App</h1>
        <p className="homepage-subtitle">
          Start a video call with a randomly generated Room ID
        </p>
        <div className="room-id-container">
          <input
            type="text"
            className="room-id-input"
            placeholder="Generated Room ID"
            value={roomId}
            readOnly
          />
          <button className="generate-button" onClick={handleRoomIdGenerate}>
            Generate
          </button>
        </div>

        <div className="call-buttons">
          <button
            className="call-button"
            onClick={handleOneOnOneCall}
            disabled={!roomId}
          >
            One-To-One Call
          </button>
          <button
            className="call-button"
            onClick={handleGroupCall}
            disabled={!roomId}
          >
            Group Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
