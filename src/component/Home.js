import React from "react";
import myflight from "../assets/airplane.png";
import Flight from "./Flight";
import About from "./About";

function Home() {
  return (
    <div>
      <section>
        <div class="bg1">
          <div class="road"></div>
          <img src={myflight} alt="flight" class="flight" />
        </div>
      </section>
      <Flight />
      <About />
    </div>
  );
}

export default Home;
