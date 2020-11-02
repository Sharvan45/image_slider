import React, { Component } from "react";
import coast from "./images/alpha_amalfi_coast.jpg";
import windmill from "./images/alpha_amsterdam_windmills.jpg";
import cany from "./images/alpha_grandcanyon_dusk.jpg";
import saint from "./images/alpha_montsaintmichel_cathedral.jpg";
import tunnel from "./images/alpha_yosemite_tunnelview.jpg";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarouselProvider
          naturalSlideWidth={250}
          naturalSlideHeight={150}
          totalSlides={5}
          isIntrinsicHeight={true}
          touchEnabled={true}
        >
          <Slider>
            <Slide index={0}><img src={coast} height={400} width={500} alt={"coast"} /></Slide>
            <Slide index={0}><img src={windmill} height={400} width={500} alt={"windmill"} /></Slide>
            <Slide index={0}><img src={cany} height={400} width={500} alt={"cannon"}/></Slide>
            <Slide index={0}><img src={saint}height={400} width={500}  alt={"saint"}/></Slide>
            <Slide index={0}><img src={tunnel}height={400} width={500}  alt={"tunnel"}/></Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    );
  }
}

export default App;
