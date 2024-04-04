import { useParams } from "react-router";
import artists from "../../db";
import "./AlbumPage.css";

export const AlbumPage = () => {
  const { id, albumId } = useParams();

  const artist = artists.find((artist) => artist.id.toString() === id);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  const album = artist.albums.find((album) => album.albumId === albumId);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className="album-details">
      <img src={require(`../../images/albums/${album.cover}.jpg`)} alt={album.title} />
      <p>
        <strong>Title:</strong> {album.title}
      </p>
      <p>
        <strong>Year:</strong> {album.year}
      </p>
      <p>
        <strong>Price:</strong> {album.price}$
      </p>
    </div>
  );
};
