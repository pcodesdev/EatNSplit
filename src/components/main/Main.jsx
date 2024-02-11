import { useState } from "react";
import Button from "../Button";
import FormAddFriends from "../FormAddFriends";
import FormSplitBill from "../FormSplitBill";
import FriendsList from "../FriendsList";
import "./../index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Main() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  function toggleButton() { 
    setShowAddFriend(show => !show);
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false)
}

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriends onAddNewFriend = {handleAddFriend} />}
        <Button toggleButton={toggleButton}>{ showAddFriend ?  "Close" :"Add Friend" }</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default Main;
// TODO:selecting a friend
