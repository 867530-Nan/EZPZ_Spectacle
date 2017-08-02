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
  Text,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  RegistrationOne: require('../assets/registerOne.png'),
  RegistrationTwo: require('../assets/registerTwo.png'),
  RegistrationTwoDropdown: require('../assets/registrationTwoDropdown.png'),
  datePicker: require('../assets/datePicker.png'),
  Home: require('../assets/Home.png'),
  Children: require('../assets/Children.png'),
  Activity: require('../assets/Activity.jpg'),
  About: require('../assets/about.png'),
  Itinerary: require('../assets/Itinerary.png'),
  Swimming: require('../assets/swimming2.png'),
  Bicycle: require('../assets/bicycle2.png'),
  FamilyTime: require('../assets/familyTime.png'),
  singleActivity: require('../assets/singleActivity.png'),
  stepThree: require('../assets/step3.png'),
  About: require('../assets/About.png'),
};

const styles = {
  family: {

  },
  smiles: {
    marginLeft: "650px",
    paddingTop: "25px",
    fontWeight: "300",
  }
}

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
        <Slide transition={["fade"]} bgImage={images.FamilyTime} align='center flex-start'>
          <Heading size={2} textColor="darkPurple" style={styles.smiles}>Strengthening Families Through Quality Engagement</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="orange">
          <Heading size={2} textColor="black">The Problem:</Heading>
          <Heading size={3} textColor="white">Parent - Child interaction decreased from 28 to 16 hours per month</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="purple">
          <Heading size={2} textColor="orange">The EZPZ Solution:</Heading>
          <Heading size={4} textColor="blue">One-stop Community Calendar</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.Home}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.About}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.RegistrationOne}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.RegistrationTwo}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.RegistrationTwoDropdown}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.stepThree}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.datePicker}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.Activity}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.singleActivity}></Slide>
        <Slide transition={["fade"]} bgColor="orange" bgImage={images.Itinerary}></Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={3} textColor="white">Technology/Languages</Heading>
          <Table>
            <TableRow>
              <TableHeaderItem>Front-End</TableHeaderItem>
              <TableHeaderItem>Server-Side</TableHeaderItem>
              <TableHeaderItem>Languages</TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem>React/JS</TableItem>
              <TableItem>Postgresql</TableItem>
              <TableItem>Javascript</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>HTML/CSS</TableItem>
              <TableItem>Ruby on Rails</TableItem>
              <TableItem>Ruby</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Semantic-UI</TableItem>
              <TableItem>Ruby Gems</TableItem>
              <TableItem></TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide transition={["fade"]} bgColor="orange">
          <Heading size={3} textColor="white">Challenges</Heading>
          <Table>
            <TableRow>
              <TableItem>Locating Activity Information</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>First Group Project Of This Scale</TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={3} textColor="white">Come see our Booth!!</Heading>
          <Heading size={4} textColor="white">We're giving away a Tesla</Heading>
        </Slide>


      </Deck>

    );
  }
}
