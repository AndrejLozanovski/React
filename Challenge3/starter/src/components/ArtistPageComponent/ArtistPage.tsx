import { useParams } from "react-router";
import artists from "../../db";
import { AlbumList } from "../AlbumListComponent/AlbumList";
import "./ArtistPage.css";

export const ArtistPage = () => {
  const { id } = useParams();

  const artist = artists.find((artist) => artist.id.toString() == id);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="artist-details">
      <img src={require(`../../images/covers/${artist.cover}.jpg`)} alt={artist.name} />
      <h2 className="artist-name">{artist.name}</h2>
      <p className="artist-bio">{artist.bio}</p>
      <AlbumList />
    </div>
  );
};
