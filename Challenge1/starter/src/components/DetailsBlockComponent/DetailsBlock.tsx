import { DetailsInterface } from "./DetailsBlockInterface";

export const Details: React.FC<DetailsInterface> = ({ title, text, image }) => {
  return (
    <div className="details">
      <div className="content">
        <div className="description">
          <p className="about">About</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="image">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};
