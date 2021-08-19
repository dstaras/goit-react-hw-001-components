import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Status = styled.span(
  (props) => `
  width: 20px;
  height: 20px;
  border-radius: 50%;
   background-color: ${props.isOnline ? "green" : "red"};
  margin-top: 20px;
  margin-left: 20px;
`
);
const List = styled.li`
  display: flex;
  background-color: ivory;
  border: 1px solid #84dcc4;
  margin-bottom: 10px;
`;
const Avatar = styled.img`
  margin-left: 30px;
`;

const Name = styled.p`
  margin-top: 20px;
  margin-left: 30px;
  font-weight: 600;
`;

const FriendListItem = ({ name, avatar, isOnline }) => (
  <List>
    <Status isOnline={isOnline}></Status>
    <Avatar src={avatar} alt={name} width="48" />
    <Name>{name}</Name>
  </List>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

FriendListItem.defaultProps = {
  isOnline: false,
};

export default FriendListItem;
