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
    <div className="flex flex-col px-[5vw] py-8">
      <div className="relative flex flex-row items-center justify-center text-center">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">
            Top {capitalizeFirstLetter(title)} by:
          </h3>
        </div>
        <div className="absolute bottom-1/2 right-8 translate-y-1/2 text-xs">
          <Link href={`/${title}`}>
            <a>See all...</a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col px-[10vw]">
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
