import { Header, MainNav, SearchMovies } from "../../components";
import Container from "@mui/material/Container";

const Search = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <SearchMovies />
        </Container>
      </main>
      <footer className="main-nav-container">
        <MainNav />
      </footer>
    </>
  );
};

export default Search;
