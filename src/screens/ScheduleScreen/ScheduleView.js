import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import Modal from "react-native-modal";
import config from "../../config";
import { Button, Card } from "react-native-elements";

class ScheduleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conference: {
        events: [
          {
            title: "Monday - 13-01-2020 \n\n Day 1",
            data: [
              {
                name: "History and Organizational Structure of FIA",
                time: "9:00 am - 11:00 am",
                place: " by Mirvais Niaz, Director Administration FIA",
                color: "#33E4F0"
              },
              {
                name: "Tea Break",
                time: "11:00 am - 11:30 am",
                place: " ",
                color: "#00FF00"
              },
              {
                name: "FIA Circle Management",
                time: "11:30 am - 01:30 pm",
                place: " by Mr. Tahir Tanveer, Assistant Director FIA",
                color: "#33E4F0"
              },
              {
                name: "Lunch Break",
                time: "01:30 pm - 02:00 pm",
                place: " ",
                color: "#00FF00"
              },
              {
                name: "Briefing on Cyber Crime",
                time: "02:00 pm - 04:00 pm",
                place: " by Mr. Imran Haider, Deputy Director NR3C",
                color: "#33E4F0"
              }
            ]
          },
          {
            title: "Tuesday - 14-01-2020 \n\n Day 2",
            data: [
              {
                name: "Cyber Crime Laws",
                time: "9:00 am - 11:00 am",
                place: " by Mr. Imran Haider, Director Director NR3C",
                color: "#33E4F0"
              },
              {
                name: "Tea Break",
                time: "11:00 am - 11:30 am",
                place: " ",
                color: "#00FF00"
              },
              {
                name: "Briefing on CR.PC, PPC & FIA Act",
                time: "11:30 am - 01:00 pm",
                place: " by Mr. Naveed Ijaz, Deputy Director Law FIA HQ",
                color: "#33E4F0"
              },
              {
                name: "Lunch Break",
                time: "01:00 pm - 02:00 pm",
                place: " ",
                color: "#00FF00"
              },
              {
                name: "Special Laws",
                time: "02:00 pm - 04:00 pm",
                place: " by Mr. Malik Tariq, Additional Director Law",
                color: "#33E4F0"
              }
            ]
          },
          {
            title: "Wednesday - 15-01-2020 \n\n Day 3",
            data: [
              {
                name:
                  "Constitution of Pakistan (Human Rights and Islamic Articles)",
                time: "9:00 am - 11:00 am",
                place: " by Shoukat Ali Khan, Ex. Director Law FIA",
                color: "#33E4F0"
              },
              {
                name: "Tea Break",
                time: "11:00 am - 11:30 am",
                place: " ",
                color: "#00FF00"
              },
              {
                name: "Police Rules 1934",
                time: "11:30 am - 01:0 pm",
                place: " by Shoukat Ali Khan, Ex. Director Law FIA",
                color: "#33E4F0"
              },
              {
                name: "Lunch Break",
                time: "01:30 pm - 02:00 pm",
                place: " ",
                color: "#00FF00"
              },
              {
                name: "Ethics and Manners",
                time: "02:00 pm - 04:00 pm",
                place: " by Mr. Mehmood Alam Masood , ADG FIA HQ",
                color: "#33E4F0"
              }
            ]
          },
          {
            title: "Thursday - 16-01-2020 \n\n Day 4",
            data: [
              {
                name: "Criminal Investigation Skills and Case Management",
                time: "9:00 am - 11:00 am",
                place: " by Bisharat A Shehzad, ADG FIA HQ",
                color: "#33E4F0"
              },
              {
                name: "Tea Break",
                time: "11:00 am - 11:30 am",
                place: " ",
                color: "#00FF00"
              },
              {
                name: "Criminal Investigation Skills and Case Management",
                time: "11:30 am - 01:30 pm",
                place: " by Bisharat A Shehzad, ADG FIA HQ",
                color: "#33E4F0"
              },
              {
                name: "Lunch Break",
                time: "01:00 pm - 02:00 pm",
                place: " ",
                color: "#00FF00"
              },
              {
                name: "Agency practical work",
                time: "02:00 pm - 04:00 pm",
                place: " by Mr. Riaz Ahmad Junjoya, Deputy Director FIA",
                color: "#33E4F0"
              }
            ]
          },
          {
            title: "Friday - 17-01-2020 \n\n Day 5",
            data: [
              {
                name: "Visit to FIA HQ",
                time: "9:00 am - 11:00 am",
                place: " ",
                color: "#33E4F0"
              },
              {
                name: "Lunch Break",
                time: "01:30 pm - 02:00 pm",
                place: " ",
                color: "#00FF00"
              }
            ]
          }
        ]
      },
      event: {},
      modal: false,
      events: []
    };
  }

  componentDidMount() {
    const { getInfo } = this.props;
    getInfo();
    this.setState({ event: {}, modal: false, events: [] });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({
        conference: nextProps.conference,
        error: nextProps.error,
        completed: nextProps.completed,
        modal: false,
        events: (nextProps.conference || []).events
      });
    }
  }

  render() {
    return (
      <View style={{ marginBottom: 32 }}>
        <SearchBar
          icon={{ type: "feather", name: "search" }}
          clearIcon={{ type: "feather", name: "x" }}
          onChangeText={search => {
            if (search === "") {
              this.setState({ events: this.props.conference.events });
            } else {
              this.setState({
                events: this.props.conference.events.filter(item => {
                  return (
                    JSON.stringify(item.data)
                      .toLowerCase()
                      .indexOf(search.toLowerCase()) > -1
                  );
                })
              });
            }
          }}
          placeholder="Search ..."
          cancelButtonTitle="Cancel"
        />
        <SectionList
          renderItem={({ item, index, section }) => (
            <ListItem
              containerStyle={{
                borderLeftColor: item.color,
                borderLeftWidth: 6,
                backgroundColor: "#fefefe"
              }}
              key={index}
              title={item.name}
              subtitle={item.time + " " + item.place}
              onPress={() => this.setState({ event: item, modal: true })}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <ListItem
              title={title}
              containerStyle={{ backgroundColor: config.SCHEDULE_HEADER_COLOR }}
              titleStyle={{ color: config.PRIMARY_BG_COLOR, fontWeight: "800" }}
              chevronColor={config.SCHEDULE_HEADER_COLOR}
              stickySectionHeadersEnabled={true}
            />
          )}
          sections={this.state.events || []}
          keyExtractor={(item, index) => item + index}
        />

        {
          <Modal
            isVisible={this.state.modal}
            onSwipe={() => this.setState({ modal: false })}
            onBackdropPress={() => this.setState({ modal: false })}
          >
            <Card title={(this.state.event.name || "").toUpperCase()}>
              <View>
                <Text style={{ fontWeight: "700" }}>
                  {this.state.event.time} {this.state.event.place}
                </Text>
                <Text style={{ textAlign: "justify", marginTop: 10 }}>
                  {this.state.event.description}
                </Text>
                {this.state.event.speaker ? (
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ fontWeight: "700" }}>Speaker: </Text>
                    <Text>{this.state.event.speaker}</Text>
                  </View>
                ) : null}
                <Button
                  title="CLOSE"
                  buttonStyle={{
                    backgroundColor: config.PRIMARY_BG_COLOR,
                    marginTop: 15
                  }}
                  onPress={() => this.setState({ modal: false })}
                />
              </View>
            </Card>
          </Modal>
        }
      </View>
    );
  }
}

ScheduleView.propTypes = {
  getInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  conference: PropTypes.object.isRequired
};

export default ScheduleView;
