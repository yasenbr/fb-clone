import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "../css/Feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post />
    </div>
  );
}

export default Feed;
