import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Message from "./components/Message/Message";
import Modal from "./components/Modal/Modal";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";

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
      <WelcomeSection />
      <Header />
      <p>Супер форум</p>
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
      <Footer />
    </>
  );
};
export default App;
