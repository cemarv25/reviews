import { useState, MouseEvent, useEffect } from 'react';
import { Card, Grid, Col, Row, Typography, Button } from 'antd';
import { Restaurant } from '../types/restaurant';

const { Title } = Typography;
const { useBreakpoint } = Grid;

function format(string: string) {
  const stringArr = string.replace('_', ' ').split(' ');

  let result: string[] = [];
  stringArr.forEach((item) => {
    result.push(item.charAt(0).toLocaleUpperCase() + item.slice(1));
  });
  return result.join(' ');
}

interface CarouselProps {
  property: string;
  items: any[];
  type: 'restaurant' | 'dish';
}

export default function Carousel({ property, items, type }: CarouselProps) {
  const screens = useBreakpoint();
  const [currItems, setCurrItems] = useState<Array<Restaurant>>();

  const getItemsBetween = (item1: any, item2: any) => {
    const idx1 = items.indexOf(item1);
    const idx2 = items.indexOf(item2);

    if (idx1 > idx2) {
      return items.slice(idx1, items.length).concat(items.slice(0, idx2 + 1));
    }

    return items.slice(idx1, idx2 + 1);
  };

  const handleArrowClick = (direction: string) => {
    setCurrItems((prevItems) => {
      if (direction === 'right') {
        if (prevItems!.length === 1) {
          return [items[(items.indexOf(prevItems![0]) + 1) % items.length]];
        }

        const firstItemIdx = (items.indexOf(prevItems![0]) + 1) % items.length;
        const secondItemIdx =
          (items.indexOf(prevItems![prevItems!.length - 1]) + 1) % items.length;
        return getItemsBetween(items[firstItemIdx], items[secondItemIdx]);
      }

      if (prevItems!.length === 1) {
        return [items[items.indexOf(prevItems![0]) - 1]];
      }

      return getItemsBetween(
        items[(items.indexOf(prevItems![0]) - 1) % items.length],
        items[
          (items.indexOf(prevItems![prevItems!.length - 1]) - 1) % items.length
        ]
      );
    });
  };

  useEffect(() => {
    let itemsQty: number;
    if (screens.lg) {
      itemsQty = 3;
    } else if (screens.md) {
      itemsQty = 2;
    } else {
      itemsQty = 1;
    }

    setCurrItems(items.slice(0, itemsQty));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screens]);

  return (
    <>
      <Row>
        <Col offset={screens.md ? 3 : 1}>
          <Title level={4}>{format(property)}</Title>
        </Col>
      </Row>
      <Row justify="center" align="middle" style={{ gap: '1rem' }}>
        <Button onClick={() => handleArrowClick('left')}>
          <Typography>{'<'}</Typography>
        </Button>
        {currItems &&
          currItems.map((item, idx) => (
            <Col key={idx} xs={14} md={9} lg={6}>
              <Card id={item.id} hoverable title={item.name}>
                <p>Grade: {item.grade}</p>
                <p>Location: {item.description}</p>
              </Card>
            </Col>
          ))}
        <Button onClick={() => handleArrowClick('right')}>
          <Typography>{'>'}</Typography>
        </Button>
      </Row>
    </>
  );
}
