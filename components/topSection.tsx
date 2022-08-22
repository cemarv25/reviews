import Link from "next/link";
import Carousel from "./carousel";

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
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col">
          <h3>Top {capitalizeFirstLetter(title)} by:</h3>
        </div>
        <div className="flex flex-col">
          <Link href={`/${title}`}>
            <a>See all...</a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        {properties.map((property, idx) => (
          <Carousel
            key={idx}
            property={property}
            items={items}
            type="restaurant"
          />
        ))}
      </div>
    </div>
  );
}
