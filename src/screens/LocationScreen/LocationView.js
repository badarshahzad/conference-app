import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { MapView } from "expo";
import config from "../../config";

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
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff"
        }}
      >
        <Text>Here we will add the Map..</Text>
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
