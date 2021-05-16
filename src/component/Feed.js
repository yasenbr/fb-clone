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
      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu_hh6GWh8mb6MnyqTCLclBLZ8O1ABxmQBUNmeoAXOw=s32-c-mo"
        message="Dummy info for styling"
        timestamp="This is a time stamp"
        username="Yasen Ben Rhayem"
        image="https://images.unsplash.com/photo-1621173865296-baaf7dc3afcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu_hh6GWh8mb6MnyqTCLclBLZ8O1ABxmQBUNmeoAXOw=s32-c-mo"
        message="Dummy info for styling"
        timestamp="This is a time stamp"
        username="Yasen Ben Rhayem"
      />
      <Post />
    </div>
  );
}

export default Feed;
