import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "./page/Beranda";
import { Masuk } from "./page/Masuk";
import { Daftar } from "./page/Daftar";
import { EditCatatan } from "./page/EditCatatan";
import { EditProfil } from "./page/EditProfil";
import { TambahCatatan } from "./page/TambahCatatan";
import { DetailCatatan } from "./page/DetailCatatan";
import { LupaPassword } from "./page/LupaPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/" element={<Beranda />} />
          <Route path="/:id_note" element={<DetailCatatan />} />
          <Route path="/edit-catatan/:id_note" element={<EditCatatan />} />
          <Route path="/edit-profil" element={<EditProfil />} />
          <Route path="/tambah-catatan" element={<TambahCatatan />} />
          <Route path="/lupa-password" element={<LupaPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
