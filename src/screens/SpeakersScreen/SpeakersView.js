import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { ListItem, Card } from "react-native-elements";
import Modal from "react-native-modal";
import config from "../../config";
import { Button } from "react-native-elements";

class SpeakersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conference: { speakers: [] },
      speaker: {},
      modal: false
    };
  }

  componentDidMount() {
    const { getInfo } = this.props;
    getInfo();
    this.setState({ speaker: {}, modal: false });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({
        conference: {
          speakers: [
            {
              name: "Mr. Mirvais Niaz",
              bio:
                "Dedicated, decisive, and compassionate police Officer with over nine years of progressive experience in police force of Pakistan.   \nSpecialties: Prevention and detection of suicide bombings.  \nSecuring premises against potential threats especially IEDs.   \nIntelligence gathering and its in timely dispersal.",
              twitter: "esse",
              github: "occaecat",
              subtitle:
                "Director Of Administration at Federal Investigation Agency",
              avatar: "../../../assets/0.jpeg"
            },
            {
              name: "Mr. Chaudhry Rauf",
              bio: "",
              twitter: "esse",
              github: "occaecat",
              subtitle: "Additional Director Operations CCW",
              avatar: ""
            },
            {
              name: "Mr. Salman",
              bio: "",
              twitter: "esse",
              github: "occaecat",
              subtitle: "In charge CCW Islamabad",
              avatar: ""
            },
            {
              name: "Mr. Malik Tariq",
              bio: "",
              twitter: "esse",
              github: "occaecat",
              subtitle: "Director Law FIA HQ",
              avatar: ""
            },
            {
              name: "Mr. Haji Azam",
              bio: "",
              twitter: "esse",
              github: "occaecat",
              subtitle: "Additional Director General (Rtd)",
              avatar: ""
            },
            {
              name: "Mr. Shaukat Ali",
              bio: "",
              twitter: "esse",
              github: "occaecat",
              subtitle: "Ex. Director Law (Rtd)",
              avatar: ""
            },

            {
              name: "Mr. Mehmood Alam Mahsood",
              bio: "",
              twitter: "esse",
              github: "occaecat",
              subtitle: "Additional Director General Law",
              avatar: ""
            },
            {
              name: "Mr. Mehmood Alam Mahsood",
              bio: "",
              twitter: "esse",
              github: "occaecat",
              subtitle: "Additional Director General Law",
              avatar: ""
            },
            {
              name: "Mr. Bashrat A Shahzad",
              bio: "",
              twitter: "esse",
              github: "occaecat",
              subtitle: "ADG FIA HQs",
              avatar: ""
            },
            {
              name: "Mr. Salman",
              bio: "",
              twitter: "esse",
              github: "occaecat",
              subtitle: "In charge CCW Islamabad",
              avatar: ""
            }
          ]
        },
        error: nextProps.error,
        completed: nextProps.completed,
        modal: false
      });
      // conference: nextProps.conference,
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#387a39", justifyContent:"center", alignItems:'center' }}>
        <Text>{"Modules will be uploaded here..."}</Text>
      </View>
    );
  }
}

SpeakersView.propTypes = {
  getInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  conference: PropTypes.object.isRequired
};

export default SpeakersView;


// Comment code for the speakers

  // <View style={{ flex: 1, backgroundColor: "#387a39" }}>
  //       {this.state.conference.speakers.map((l, i) => (
  //         <View
  //           style={{
  //             backgroundColor: "#FFE77AFF",

  //             borderWidth: 0.5,
  //             borderRadius: 8,
  //             borderColor: "#FFE77AFF",
  //             borderBottomWidth: 0,
  //             shadowColor: "#000",
  //             shadowOffset: { width: 0, height: 2 },
  //             shadowOpacity: 0.8,
  //             shadowRadius: 2,
  //             elevation: 1,
  //             marginRight: 8,
  //             marginLeft: 8,
  //             marginTop: 4,
  //             marginBottom: 4
  //           }}
  //         >
  //           <ListItem
  //             key={i}
  //             // avatar={{ uri: "../../../assets/0.jpeg" }}
  //             avatar={
  //               <Image
  //                 source={require("../../../assets/0.jpeg")}
  //                 style={{ height: 30, width: 30 }}
  //               />
  //             }
  //             title={l.name}
  //             titleStyle={{ color: "#2C5F2DFF" }}
  //             subtitle={l.subtitle}
  //             subtitleStyle={{ color: "#2C5F2DFF" }}
  //             onPress={() => this.setState({ speaker: l, modal: true })}
  //             containerStyle={{ borderBottomColor: "transparent" }}
  //           />
  //         </View>
  //       ))}
  //       {
  //         <Modal
  //           isVisible={this.state.modal}
  //           onSwipe={() => this.setState({ modal: false })}
  //           onBackdropPress={() => this.setState({ modal: false })}
  //           style={{ opacity: 0.8 }}
  //         >
  //           <Card
  //             title={(this.state.speaker.name || "").toUpperCase()}
  //             titleStyle={{ color: "#FFE77AFF" }}
  //             // image={{ uri: this.state.speaker.avatar }}
  //             image={require("../../../assets/0.jpeg")}
  //             containerStyle={{
  //               backgroundColor: "#2C5F2DFF",

  //               borderColor: "#2C5F2DFF",

  //               borderWidth: 0.5,
  //               borderRadius: 8,

  //               borderBottomWidth: 0,
  //               shadowColor: "#2C5F2DFF",
  //               shadowOffset: { width: 0, height: 2 },
  //               shadowOpacity: 0.8,
  //               shadowRadius: 2,
  //               elevation: 1,
  //               marginRight: 8,
  //               marginLeft: 8,
  //               marginTop: 4
  //             }}
  //           >
  //             <View>
  //               <Text style={{ fontWeight: "700", color: "#FFE77AFF" }}>
  //                 {this.state.speaker.subtitle}
  //               </Text>
  //               <Text style={{ textAlign: "justify", color: "#FFE77AFF" }}>
  //                 {this.state.speaker.bio}
  //               </Text>

  //               {/* <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
      //               <Icon.Button name="twitter" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
      //                 <Text>@{this.state.speaker.twitter}</Text>
      //               </Icon.Button>
      //               <Icon.Button name="github" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
      //                 <Text>@{this.state.speaker.github}</Text>
      //               </Icon.Button>
      //             </View> */}
      // //             <Button
      //             title="CLOSE"
      //             titleStyle={{ color: "#2C5F2DFF" }}
      //             buttonStyle={{
      //               backgroundColor: config.PRIMARY_BG_COLOR,
      //               marginTop: 10,
      //               backgroundColor: "#FFE77AFF",
      //               marginTop: 15,

      //               borderWidth: 0.5,
      //               borderRadius: 8,

      //               borderBottomWidth: 0,
      //               borderColor: "#2C5F2DFF",
      //               shadowColor: "#2C5F2DFF",
      //               shadowOffset: { width: 0, height: 2 },
      //               shadowOpacity: 0.8,
      //               shadowRadius: 2,
      //               elevation: 1,
      //               marginRight: 8,
      //               marginLeft: 8,
      //               marginTop: 4,
      //               marginBottom: 4
      //             }}
      //             onPress={() => this.setState({ modal: false })}
      //           />
      //         </View>
      //       </Card>
      //     </Modal>
      //   }
      // </View>
 