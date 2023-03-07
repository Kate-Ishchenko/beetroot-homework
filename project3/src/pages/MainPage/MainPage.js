import { Header, MainNav, Trending } from "../../components";
import Container from "@mui/material/Container";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Trending />
        </Container>
      </main>
      <footer className="main-nav-container">
        <MainNav />
      </footer>
    </>
  );
};

export default MainPage;
