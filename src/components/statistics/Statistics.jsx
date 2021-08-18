import React from "react";
import PropTypes from "prop-types";
import css from "./Statistical.module.css";

const Statistics = ({ title, stats }) => (
  <section class={css.statistics}>
    <h2 class={css.title}>{title}</h2>

    <ul class="stat-list">
      {stats.map(({ id, label, percentage }, i) => (
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
