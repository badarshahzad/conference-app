import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import { MapView } from "expo";
import config from "../../config";
import DotCircle from "../../components/DotCircle";
import DotComponent from "../../components/DotComponent";

class LocationView extends Component {
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

  setMarkerRef = ref => {
    this.marker = ref;
    if (this.marker) {
      this.marker.showCallout();
    }
  };

  render() {
    const location = this.props.conference.location || {};
    return (
      <View
        style={{
          flex: 1,

          backgroundColor: "#387a39"
        }}
      >
        {/* <Text style={{ color: "#FFE77AFF" }}>Here we will add the Map..</Text>
         */}
        <View
          style={{
            backgroundColor: "#FFE77AFF",

            borderWidth: 0.5,
            borderRadius: 8,

            borderColor: "#FFE77AFF",
            borderBottomWidth: 0,
            shadowColor: "#FFE77AFF",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            padding: 8,
            margin: 8,
            flex: 0.8,
            marginBottom: 0,
            paddingBottom: 0,

            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0
          }}
        >
          <Image
            source={require("../../../assets/location.png")}
            style={{
              height: "100%",
              width: "100%",
              borderWidth: 0.5,
              borderRadius: 8
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#FFE77AFF",

            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderWidth: 0.5,
            borderRadius: 8,

            borderColor: "#FFE77AFF",
            borderBottomWidth: 0,
            shadowColor: "#FFE77AFF",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            padding: 8,
            marginTop: 0,
            paddingTop: 0,
            margin: 8,
            elevation: 1
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: 4
            }}
          >
            <DotCircle />
            <Text style={{ color: "#2C5F2DFF" }}>
              2 Ashfaq Ahmed Rd, H-8/2 H 8/2 H-8, Islamabad, Islamabad Capital
              Territory 44000, Pakistan
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

LocationView.propTypes = {
  getInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  conference: PropTypes.object.isRequired
};

export default LocationView;
