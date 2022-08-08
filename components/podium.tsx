import { Grid, Col, Divider, Row, Typography } from 'antd';
import type { Restaurant } from '../types/restaurant';
import styles from '../styles/podium.module.css';

const { Title } = Typography;
const { useBreakpoint } = Grid;

interface PodiumProps {
  topRestaurants: Array<Restaurant>;
}

export default function Podium({ topRestaurants }: PodiumProps) {
  const screens = useBreakpoint();

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

  const renderDivider = () => {
    if (screens.lg) {
      return (
        <Col>
          <Divider style={{ height: '100%' }} type={'vertical'} />
        </Col>
      );
    } else {
      return <Divider />;
    }
  };

  return (
    <Row
      justify="center"
      align={screens.lg ? 'stretch' : 'middle'}
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
      {renderDivider()}
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
