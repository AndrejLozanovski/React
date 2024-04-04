import { ArtistItemInterface } from "./ArtistItemInterface";
import artists from "../../db";
import "./ArtistItem.css";
import { NavLink } from "react-router-dom";

export const ArtistItem = () => {
  const renderArtist = () => {
    return artists.map((artist: ArtistItemInterface) => (
      <NavLink key={artist.id} to={`/artist/${artist.id}`}>
        <div className="artist-item">
          <img src={require(`../../images/covers/${artist.cover}.jpg`)} alt={artist.name} />
          <p>{artist.name}</p>
        </div>
      </NavLink>
    ));
  };

  return <>{renderArtist()}</>;
};
