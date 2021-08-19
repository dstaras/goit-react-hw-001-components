import React from "react";
import PropTypes from "prop-types";
import css from "./FriendList.module.css";
import FriendListItem from "./friendListItem/FriendListItem";

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map((friend) => (
      <FriendListItem {...friend} key={friend.id} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
