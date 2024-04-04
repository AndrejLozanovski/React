import { NavLink, useParams } from "react-router-dom";
import artists from "../../db";
import "./AlbumList.css";
import { AlbumInteface } from "./AlbumListInterface";

export const AlbumList = () => {
  const { id } = useParams();

  const artist = artists.find((artist) => artist.id.toString() === id);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  const renderAlbums = () => {
    return artist.albums.map((album: AlbumInteface) => (
      <div className="album">
        <NavLink
          key={album.albumId}
          className="album-link"
          to={`/artist/${artist.id}/${album.albumId}`}
        >
          <img src={require(`../../images/albums/${album.cover}.jpg`)} alt={album.title} />
        </NavLink>
      </div>
    ));
  };

  return <div className="albums-container">{renderAlbums()}</div>;
};
