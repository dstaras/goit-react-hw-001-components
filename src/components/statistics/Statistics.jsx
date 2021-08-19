import React from "react";
import PropTypes from "prop-types";
import css from "./Statistical.module.css";
import StatisticsItem from "./statisticsItem/StatisticsItem";

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className="stat-list">
      {stats.map((stat) => (
        <StatisticsItem {...stat} key={stat.id} />
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
