import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Message from "./components/Message/Message";
import Modal from "./components/Modal/Modal";
import userData from "./assets/user.json";
import Profile from "./components/Profile/Profile";
import animals from "./assets/animals.webp";
import { FcBookmark } from "react-icons/fc";

const App = () => {
  const isOnline = false;
  const isLoading = false;
  const age = 15;
  const filmsData = [
    { id: "1", title: "GOT" },
    { id: 2, title: "Taxi" },
  ];
  const goodsData = [
    { id: "1", title: "Морква" },
    { id: 2, title: "Цибуля" },
  ];
  return (
    <>
      <Header />
      <p className="title">
        {" "}
        <FcBookmark className="icon" />
        Супер форум
      </p>
      {isOnline && <h2>Welcomme</h2>}
      {isLoading && <h2>Loading...</h2>}
      {age > 18 ? <h2>ти дивви який вимахав</h2> : <h2>Тобї ще кашу їсть</h2>}
      <Message author="Petro" message="продам диван!" />
      <Message author="Nata" message="Hello" />
      <Message message="Whatsup!" />
      <List title="Films" data={filmsData} />
      <List title="Goods" data={goodsData} />
      <Modal>
        <h2>Здам квартиру!</h2>
        <button>Зняти</button>
      </Modal>
      <Modal>
        <h2>Ви дїйсно хочете вийти?</h2>
        <button>Так</button>
        <button>Нї</button>
      </Modal>
      <Profile user={userData} />
      <img src={animals} />
      <Footer />
    </>
  );
};
export default App;
