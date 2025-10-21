import seriesData from "../api/seriesData.json";
import { Seriescards } from "./seriescards";
export const Netflixseries = () => {
  return (
    <ul className="grid grid-three-cols">
      {seriesData.map((curElem) => (
       <Seriescards key={curElem.id} data={curElem}  />
      ))}
    </ul>
  );
};

export const Header = () => {
  return (
    <div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Movie</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Footer = () => {
  return <p>CopyRights @HSTECH</p>;
};
