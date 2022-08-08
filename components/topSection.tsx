import Link from 'next/link';
import { Row, Col, Typography, Button } from 'antd';

const { Title } = Typography;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toLocaleUpperCase() + string.slice(1);
}

interface TopSectionProps {
  title: string;
}

export default function TopSection({ title }: TopSectionProps) {
  return (
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
  );
}
