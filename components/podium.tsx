import type { Restaurant } from "../types/restaurant";

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

  // const renderDivider = () => {
  //   if (screens.lg) {
  //     return (
  //       <Col>
  //         <Divider style={{ height: '100%' }} type={'vertical'} />
  //       </Col>
  //     );
  //   } else {
  //     return <Divider />;
  //   }
  // };

  return (
    <div className="flex flex-row items-center justify-center bg-gray-200 lg:items-stretch">
      <div className="flex basis-full flex-col sm:basis-1/2 lg:basis-5/12">
        <div className="flex flex-col">
          <h2 className="text-center">Top Restaurants</h2>
        </div>
        <div className="flex flex-col">
          <ol className="m-0 grid h-full w-full grid-cols-3 grid-rows-2 py-20 px-8">
            {renderRestaurants()}
          </ol>
        </div>
      </div>
      {/* {renderDivider()} */}
      <div className="flex basis-full flex-col sm:basis-1/2 lg:basis-5/12">
        <div className="flex flex-col">
          <h2 className="text-center">Top Dishes</h2>
        </div>
        <div className="flex flex-col">
          <ol className="m-0 grid h-full w-full grid-cols-3 grid-rows-2 py-20 px-8">
            {renderRestaurants()}
          </ol>
        </div>
      </div>
    </div>
  );
}
