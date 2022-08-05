import { Descriptions } from 'antd';
import type { Restaurant } from '../types/restaurant';
import styles from '../styles/podium.module.css';

interface PodiumProps {
  topRestaurants: Array<Restaurant>;
}

export default function Podium({ topRestaurants }: PodiumProps) {
  return (
    <div className={styles.podium}>
      <ol className={styles.podiumList}>
        {topRestaurants.map((restaurant, idx) => (
          <li
            data-place={idx + 1}
            data-grade={restaurant.grade}
            key={restaurant.id}
          >
            {restaurant.name}
          </li>
        ))}
      </ol>
      <ol className={styles.podiumList}>
        {topRestaurants.map((restaurant, idx) => (
          <li
            data-place={idx + 1}
            data-grade={restaurant.grade}
            key={restaurant.id}
          >
            {restaurant.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
