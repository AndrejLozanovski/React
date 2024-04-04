import { PlaceInterface } from "./PlaceInterface";

export const Place = (placeObj: PlaceInterface) => {
  return (
    <div className="place-card" id={placeObj.id.toString()}>
      <img src={placeObj.img} />
      <div className="content">
        <h2>{placeObj.place}</h2>
        <p>{placeObj.desc}</p>
      </div>
    </div>
  );
};
