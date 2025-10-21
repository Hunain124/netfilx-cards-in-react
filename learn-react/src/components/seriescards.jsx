export const Seriescards = ({data}) => {
  const { id , img_url, name, rating , description, cast , genre , watch_url} = data;
     return (
          <li className="card-list">
            <div>
              <img src={img_url} className="card-images" alt="bads" />
            </div>
            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p className="summary-text">Summary: {description}</p>
            <p>Cast: {cast}</p>
            <p>Genre: {genre}</p>
            <a href={watch_url} target="_blank">
              <button className="btn-card">Watch Now</button>
            </a>
          </li>
        );

}