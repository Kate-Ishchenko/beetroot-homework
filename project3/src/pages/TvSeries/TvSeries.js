import { Header, MainNav, TvSeriesList } from "../../components";
import Container from "@mui/material/Container";

const TvSeries = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <TvSeriesList />
        </Container>
      </main>
      <footer className="main-nav-container">
        <MainNav />
      </footer>
    </>
  );
};

export default TvSeries;
