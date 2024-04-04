import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavbarComponent/NavBar";
import { ArtistList } from "./components/ArtistsListComponent/ArtistList";
import { ArtistPage } from "./components/ArtistPageComponent/ArtistPage";
import { AlbumPage } from "./components/AlbumPageComponent/AlbumPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ArtistList />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/artist/:id/:albumId" element={<AlbumPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
