import styles from "./Netflix.module.css"

export const Seriescards = ({ data }) => {
  const { id, img_url, name, rating, description, cast, genre, watch_url } = data;
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  const btnClass = rating >= 8.5 ? styles.super_hit_btn : styles.average_btn;
  return (
    <li className={styles["card-list"]}>
      <div>
        <img src={img_url} className={styles["card-images"]} alt="bads" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: <span className={`${styles.rating} ${ratingClass}`} >{rating}</span></h3>
      <p className={styles["summary-text"]}>Summary: {description}</p>
      <p>Cast: {cast.join(", ")}</p>
      <p>Genre: {genre.join(", ")}</p>
      <a href={watch_url} target="_blank">
        <button className={`${styles["btn-card"]} ${btnClass}`}>Watch Now</button>
      </a>
    </li>
  );

}