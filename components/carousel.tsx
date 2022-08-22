import { useState, useEffect } from "react";
import { Restaurant } from "../types/restaurant";

function format(string: string) {
  const stringArr = string.replace("_", " ").split(" ");

  let result: string[] = [];
  stringArr.forEach((item) => {
    result.push(item.charAt(0).toLocaleUpperCase() + item.slice(1));
  });
  return result.join(" ");
}

interface CarouselProps {
  property: string;
  items: any[];
  type: "restaurant" | "dish";
}

export default function Carousel({ property, items, type }: CarouselProps) {
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
      if (direction === "right") {
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

  // useEffect(() => {
  //   let itemsQty: number;
  //   if (screens.lg) {
  //     itemsQty = 3;
  //   } else if (screens.md) {
  //     itemsQty = 2;
  //   } else {
  //     itemsQty = 1;
  //   }

  //   setCurrItems(items.slice(0, itemsQty));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [screens]);

  return (
    <>
      <div className="flex flex-row">
        <div className="">
          <h4>{format(property)}</h4>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <button onClick={() => handleArrowClick("left")}>
          <span>{"<"}</span>
        </button>
        {currItems &&
          currItems.map((item, idx) => (
            <div
              key={idx}
              className="flex basis-1/2 flex-col md:basis-1/3 lg:basis-1/4"
            >
              <div id={item.id} className="hover:shadow-lg">
                <h5>{item.name}</h5>
                <p>Grade: {item.grade}</p>
                <p>Location: {item.description}</p>
              </div>
            </div>
          ))}
        <div onClick={() => handleArrowClick("right")}>
          <span>{">"}</span>
        </div>
      </div>
    </>
  );
}
