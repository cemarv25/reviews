import { Col, Row, Typography } from 'antd';
import type { Restaurant } from '../types/restaurant';
import styles from '../styles/podium.module.css';

const { Title } = Typography;

interface PodiumProps {
  topRestaurants: Array<Restaurant>;
}

export default function Podium({ topRestaurants }: PodiumProps) {
  const renderRestaurants = () => {
    return topRestaurants.map((restaurant, idx) => (
      <li
        data-place={idx + 1}
        data-grade={restaurant.grade}
        key={restaurant.id}
      >
        {restaurant.name}
      </li>
    ));
  };

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[24, 0]}
      className={styles.podium}
    >
      <Col xs={24} sm={12} lg={10}>
        <Col>
          <Title level={2} style={{ textAlign: 'center' }}>
            Top Restaurants
          </Title>
        </Col>
        <Col>
          <ol className={styles.podiumList}>{renderRestaurants()}</ol>
        </Col>
      </Col>
      <Col xs={24} sm={12} lg={10}>
        <Col>
          <Title level={2} style={{ textAlign: 'center' }}>
            Top Dishes
          </Title>
        </Col>
        <Col>
          <ol className={styles.podiumList}>{renderRestaurants()}</ol>
        </Col>
      </Col>
    </Row>
  );
}
