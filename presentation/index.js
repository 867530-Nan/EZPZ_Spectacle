// Import React
import React from "react";


// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  Registration: require('../assets/registration.png'),
  Home: require('../assets/Home.png'),
  Children: require('../assets/Children.png'),
  Activity: require('../assets/Activity.png'),
  About: require('../assets/About.png'),
  Itinerary: require('../assets/Itinerary.png'),
  Swimming: require('../assets/swimming2.png'),
  Bicycle: require('../assets/bicycle2.png'),
  Engage: require('../assets/engage.jpg'),
  singleActivity: require('../assets/singleActivity'),
  stepThree: require('../assets/step3.png'),
  About: require('../assets/About.png'),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  black: "#1F2022",
  blue: "#03A9FC",
  quartenary: "#CECECE",
  orange: "#FF5300",
  darkPurple: "#6D07AC",
  purple: "#AD0C54",
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgImage={images.Swimming}>
          <Heading size={2} fit caps lineHeight={1} textColor="black">
            &nbsp;E&nbsp;Z&nbsp;|&nbsp;P&nbsp;Z&nbsp;
          </Heading>
          <Text margin="10px 0 0" textColor="black" size={1} fit bold>
            Empowering Parenting :: Eliminating Planning
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.Engage}>
          <Heading size={3} textColor="darkPurple">Strengthening Familes through Quality Engagement</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="orange">
          <Heading size={2} textColor="black">The Problem:</Heading>
          <Heading size={3} textColor="white">Parent - Child interaction decreased from 28 to 16 hours per month</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.About}></Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="purple">
          <Heading size={2} textColor="orange">The EZPZ Solution:</Heading>
          <Heading size={4} textColor="blue">One-stop Community Calendar</Heading>
          <List>
            <ListItem>Community Rec Centers</ListItem>
            <ListItem>City &amp; County Fesitvals</ListItem>
            <ListItem>Museums</ListItem>
            <ListItem>Farmers Markets</ListItem>
            <ListItem>Community Events</ListItem>
            <ListItem>Everywhere Inbetween</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.Home}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.Registration}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.Children}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.stepThree}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.Activity}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.singleActivity}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.Itinerary}></Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={3} textColor="white">Come see our Booth!! <br />We're giving away a Tesla</Heading>
        </Slide>

       
      </Deck>

    );
  }
}
