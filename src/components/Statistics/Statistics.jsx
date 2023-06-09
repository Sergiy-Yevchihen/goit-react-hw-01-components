import PropTypes from 'prop-types';
import { getRandomHexColor } from './getRandomHexColor';
import './statistics.styled.css';
const Statistics = ({ stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {stats.map(stat => (
          <li
            class="item"
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
