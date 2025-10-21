import { Netflixseries, Header, Footer } from "./components/Netflixseries";
export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List Of Netfilix Series</h1>
      <Netflixseries />
    </section>
  );
};
