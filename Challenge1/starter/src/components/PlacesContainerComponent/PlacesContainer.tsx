import { useEffect, useState } from "react";
import { Place } from "./PlaceComponent/Place";
import axios from "axios";
import { PlaceInterface } from "./PlaceComponent/PlaceInterface";

export const PlacesContainer = () => {
  const [places, setPlaces] = useState<PlaceInterface[]>([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    axios
      .get<PlaceInterface[]>("http://localhost:5001/places", requestOptions)
      .then((res) => {
        setPlaces(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const renderPlaces = () => {
    const groupedPlaces: PlaceInterface[][] = [];

    places.forEach((place: PlaceInterface) => {
      const index = Math.floor(place.id / 6);
      if (!groupedPlaces[index]) {
        groupedPlaces[index] = [];
      }
      groupedPlaces[index].push(place);
    });

    return groupedPlaces.map((placeGroup, groupIndex) => (
      <div key={groupIndex} className="container">
        <div className="inner">
          {placeGroup.map((place: PlaceInterface, placeIndex: number) => (
            <Place key={placeIndex} {...place} />
          ))}
        </div>
      </div>
    ));
  };

  return <>{renderPlaces()}</>;
};
