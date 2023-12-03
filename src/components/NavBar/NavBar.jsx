import { Header, Link, Nav } from './NavBar.styled';

export default function NavBar() {
    return (
      <>
        <Header>
          <Nav>
            <Link to="/">CarSharing</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/favorites">Favorites</Link>
          </Nav>
        </Header>
      </>
    );
  }