import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style.js";
import config from "../../config";
import DotComponent from "../../components/DotComponent";

class OverviewView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conference: {}
    };
  }

  componentDidMount() {
    const { getInfo } = this.props;
    getInfo();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({
        conference: nextProps.conference,
        error: nextProps.error,
        completed: nextProps.completed
      });
    }
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#ffffff" }}>
        {/* <Image
          source={{ uri: this.props.conference.banner }}
          style={styles.banner}
        /> */}

        <View style={styles.cardType}>
          <Text style={styles.title}>{"INTRODUCTION TO CYBER CRIME"}</Text>

          <Text style={styles.description}>
            {
              "Cybercrime wing is the latest introduction to the mandate of FIA, primarily to deal with the technology-based crimes in Pakistan. It is the only unit of its kind in the country and it not only addresses complaints related to cybercrime but also assists other LEA's in their cyber cases."
            }
          </Text>

          <Text style={styles.description}>
            {
              "CCW has expertise in Digital Forensics, Technical Investigation, Information System Security Audits, Penetration Testing, and Trainings. The unit since its inception has been involved in capacity building of the officers of Police, Intelligence, Judiciary, Prosecutors and other Govt. organizations. "
            }
          </Text>
        </View>

        <View style={styles.cardType}>
          <Text style={styles.title}>{"Mandate of CCW is as under"}</Text>

          <View
            style={{ padding: 8, flexDirection: "row", alignItems: "center" }}
          >
            <DotComponent />
            <Text style={{ flex: 1, paddingLeft: 5 }}>
              {"Prevention of Electronic/Cyber Crimes"}
            </Text>
          </View>

          <View
            style={{ padding: 8, flexDirection: "row", alignItems: "center" }}
          >
            <DotComponent />
            <Text style={{ flex: 1, paddingLeft: 5 }}>
              {"Investigation/Prosecution of High Tech Cyber Crimes"}
            </Text>
          </View>

          <View
            style={{
              padding: 8,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            {/* <Text>{"\u2022"}</Text> */}
            <DotComponent />
            <Text style={{ flex: 1, paddingLeft: 5 }}>
              {
                "To provide forensic analysis of cyber crimes for FIA and other LEA's"
              }
            </Text>
          </View>

          <View
            style={{ padding: 8, flexDirection: "row", alignItems: "center" }}
          >
            <DotComponent />
            <Text style={{ flex: 1, paddingLeft: 5 }}>
              {
                "National and International cooperation in the field of cyber crimes"
              }
            </Text>
          </View>

          <View
            style={{
              padding: 8,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <DotComponent />
            <Text style={{ flex: 1, paddingLeft: 5 }}>
              {
                "Capacity building of the officers of Police, Intelligence, Judiciary,  Prosecution and other Govt. Organizations in the filed of CyberCrimes."
              }
            </Text>
          </View>

          <View
            style={{ padding: 8, flexDirection: "row", alignItems: "center" }}
          >
            <DotComponent />
            <Text style={{ flex: 1, paddingLeft: 5 }}>
              {"Advisory role in Information Security"}
            </Text>
          </View>

          <View
            style={{ padding: 8, flexDirection: "row", alignItems: "center" }}
          >
            <DotComponent />
            <Text style={{ flex: 1, paddingLeft: 5 }}>
              {"Research and Development in Cyber Security"}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

OverviewView.propTypes = {
  getInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  conference: PropTypes.object.isRequired
};

export default OverviewView;
