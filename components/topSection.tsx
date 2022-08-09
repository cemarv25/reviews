import Link from 'next/link';
import { Row, Col, Typography, Button } from 'antd';
import Carousel from './carousel';

const { Title } = Typography;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toLocaleUpperCase() + string.slice(1);
}

interface TopSectionProps {
  properties: Array<string>;
  title: string;
  items: Array<any>;
}

export default function TopSection({
  properties,
  title,
  items,
}: TopSectionProps) {
  return (
    <Col>
      <Row justify="center" align="middle">
        <Col>
          <Title level={3}>Top {capitalizeFirstLetter(title)} by:</Title>
        </Col>
        <Col>
          <Button type="link">
            <Link href={`/${title}`}>
              <a>See all...</a>
            </Link>
          </Button>
        </Col>
      </Row>
      <Col offset={0}>
        {properties.map((property, idx) => (
          <Carousel
            key={idx}
            property={property}
            items={items}
            type="restaurant"
          />
        ))}
      </Col>
    </Col>
  );
}
