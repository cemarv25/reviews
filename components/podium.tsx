import type { Restaurant } from "../types/restaurant";

interface PodiumProps {
  topRestaurants: Array<Restaurant>;
}

export default function Podium({ topRestaurants }: PodiumProps) {
  return (
    <div className="flex h-[33vh] w-full flex-row flex-wrap items-center justify-evenly bg-gray-200">
      <div className="flex flex-shrink basis-full flex-col justify-center py-4 px-4 sm:basis-1/3">
        <h2 className="text-center font-bold">Top Restaurants</h2>
        <ol className="grid grid-cols-1 justify-center justify-items-center text-center sm:grid-cols-3 sm:grid-rows-2">
          <li className="max-w-fit list-decimal sm:col-start-2">
            {topRestaurants[0].name}
          </li>
          <li className="max-w-fit list-decimal sm:col-start-1">
            {topRestaurants[1].name}
          </li>
          <li className="max-w-fit list-decimal sm:col-start-3">
            {topRestaurants[2].name}
          </li>
        </ol>
      </div>
      <div className="h-px w-full bg-gray-400 sm:h-full sm:w-px" />
      <div className="flex flex-shrink basis-full flex-col justify-center py-4 px-4 sm:basis-1/3">
        <h2 className="text-center font-bold">Top Dishes</h2>
        <ol className="grid grid-cols-1 justify-center justify-items-center text-center sm:grid-cols-3 sm:grid-rows-2">
          <li className="max-w-fit list-decimal sm:col-start-2">
            {topRestaurants[0].name}
          </li>
          <li className="max-w-fit list-decimal sm:col-start-1">
            {topRestaurants[1].name}
          </li>
          <li className="max-w-fit list-decimal sm:col-start-3">
            {topRestaurants[2].name}
          </li>
        </ol>
      </div>
    </div>
  );
}
