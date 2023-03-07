import { Header, MainNav, MoviesList } from "../../components";
import Container from "@mui/material/Container";

const Movies = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <MoviesList />
        </Container>
      </main>
      <footer className="main-nav-container">
        <MainNav />
      </footer>
    </>
  );
};

export default Movies;
