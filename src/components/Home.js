import React from "react";
import Prime from "./prime.jpg";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img alt="" className="home__image" src={Prime} />
      <div className="home__row">
        <Product
          id="1"
          title="Panasonic TX-43HX580BZ 43 Inch 4K Ultra HD Multi HDR LED LCD Smart TV with Freeview Play (2020) [Energy Class A+]"
          price="196.99"
          rating={4}
          image="https://cdn.vox-cdn.com/thumbor/_TEXY66bsgqCazXB0eZeKokc04o=/0x0:1280x853/1820x1213/filters:focal(538x325:742x529):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62794762/Samsung_TV_iTunes_Movies_and_TV_shows.1546796199.jpg"
        />
        <Product
          id="2"
          title="Alesis VI49 - 49-Key USB MIDI Keyboard Controller with 16 Pads, 12 Assignable Knobs, 36 Buttons and 5-Pin MIDI Out, Plus a Professional Software Suite with ProTools | First Included"
          price="154.00"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81MZFr2ih1L._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Waddingtons Union Jack Number 1 Playing Cards"
          price="19.99"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61KXVlcZ4rL._AC_SL1200_.jpg"
        />
        <Product
          id="4"
          title="Utopia Avenue: The Number One Sunday Times Bestseller"
          price="8.99"
          rating={5}
          image="https://m.media-amazon.com/images/I/51jQ5o5x4vL._SY346_.jpg"
        />
        <Product
          id="5"
          title="COTOP Motorcycle Gloves, Hard Knuckle Touch Screen Gloves Motorcycle Gloves Motorbike ATV Riding Full Finger Gloves for Men"
          price="16.99"
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71ibJwva1aL._AC_UX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Samsung LC34J791WTUXEN 34 inch Curved Ultra Wide LED Monitor - UWQHD 3440 x 1440, 100Hz, Freesync, HDMI, Displayport, USB-C, USB 3.0, Thunderbolt, Speakers"
          price="679.99"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/914iLnXLtRL._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
