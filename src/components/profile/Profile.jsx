import React from "react";
import PropTypes from "prop-types";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div class={css.profile}>
    <div class={css.description}>
      <img src={avatar} alt="Аватар пользователя" class={css.avatar} />
      <p class={css.name}>{name}</p>
      <p class={css.tag}>@{tag}</p>
      <p class={css.location}>{location}</p>
    </div>

    <ul class={css.stats}>
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;
