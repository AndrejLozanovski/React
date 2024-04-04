import { ArtistItem } from "../ArtistItemComponent/ArtistItem";
import "./ArtistList.css";

export const ArtistList = () => {
  return (
    <div className="artist-container">
      <h1>Browse the artists</h1>
      <ArtistItem />
    </div>
  );
};
