import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style.js";
import config from "../../config";
import TextWithStyle from "../../components/TextWithStyle.js";

class AboutView extends Component {
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
      <ScrollView style={{ backgroundColor: "#387a39" }}>
        {/* <Image
          source={{ uri: this.props.conference.banner }}
          style={styles.banner}
        /> */}

        <View style={styles.cardType}>
          <Text style={styles.title}>{"DIRECTOR GENERAL FIA"}</Text>
          {/* <View style={styles.info}>
            <Icon.Button name="calendar" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
              <Text>{this.props.conference.date}</Text>
            </Icon.Button>
            <Icon.Button name="map-pin" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
              <Text>{(this.props.conference.location||{}).city}</Text>
            </Icon.Button>
          </View> */}
          
          <TextWithStyle text={"I heartily welcome the new Officers/Officials who have recently join FIA Cyber Crime Wing in Phase-III of the project. While I expect a high degree of dedication, efficiency and honesty from you all, I also assure you of my all our spot in training guiding you to achieve the best possible results."}/>
          
          {/* <View style={styles.author}>
            <Image
              source={{
                uri:
                  "https://avatars3.githubusercontent.com/u/17863319?s=460&v=4"
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>App Developer Info:</Text>
              <Text>Lex Martinez</Text>
              <Text style={styles.link}>me@lexmartinez.com</Text>
            </View>
          </View> */}
        </View>

        <View style={styles.cardType}>
          <Text style={styles.title}>
            {"ADDITIONAL DIRECTOR GENERAL CYBER CRIME WING FIA"}
          </Text>

        <TextWithStyle text={"FIA the focal point for all locals and foreign organizations on all matters related to cyber crimes. I am delighted to welcome the newly recruited personnel in NR3C Phase-III Project. I sincerely hope that this new blood in FIA will be source of great new ideas and will take cyber crime wing to a new height of achievement and glory.  "}/>
        </View>

        <View style={styles.cardType}>
          <Text style={styles.title}>{"DIRECTOR CYBER CRIME WING FIA"}</Text>
          <TextWithStyle text={"I am pleased to be able to welcome those who are newly recruited in cyber crime wing FIA Phase-III. This new recruitment is the great step forward in strengthening the CCW of FIA further. \n \nI expect dedication and honesty from all new officers and hope they will perform their duties with loyalty and pride."}/>
        </View>
        {/* </View> */}
      </ScrollView>
    );
  }
}

AboutView.propTypes = {
  getInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  conference: PropTypes.object.isRequired
};

export default AboutView;
