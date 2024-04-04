import { Banner } from "./components/BannerComponent/Banner";
import { Details } from "./components/DetailsBlockComponent/DetailsBlock";
import { Footer } from "./components/FooterComponent/Footer";
import { PlacesContainer } from "./components/PlacesContainerComponent/PlacesContainer";
import "./css/main.scss";

function App() {
  return (
    <div className="App">
      <Banner />
      <Details
        title="Stories of Adventure"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque at, dolores alias
            laudantium repellendus, esse in voluptatem voluptatum rem consequatur atque, dicta
            mollitia inventore odio recusandae magnam vel id repellat cum tempora tempore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis quisquam nobis
            voluptate dolorem inventore iusto ut pariatur aspernatur quos!"
        image="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
      />
      <PlacesContainer />
      <Details
        title="Popular Adventures"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque at, dolores alias
            laudantium repellendus, esse in voluptatem voluptatum rem consequatur atque, dicta
            mollitia inventore odio recusandae magnam vel id repellat cum tempora tempore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis quisquam nobis
            voluptate dolorem inventore iusto ut pariatur aspernatur quos!"
        image="https://fastly.picsum.photos/id/77/1631/1102.jpg?hmac=sg0ArFCRjP1wlUg8vszg5RFfGiXZJkWEtqLLCRraeBw"
      />
      <Footer />
    </div>
  );
}

export default App;
