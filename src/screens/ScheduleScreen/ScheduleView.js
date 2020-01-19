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
        events: []
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
        events: [
          {
            title: "Monday - 20-01-2020 \n\n Day 1",
            data: [
              {
                name:
                  "INTRODUCTION TO FIA, HISTORY, ORGANIZATIONAL STRUCTURE & RANKS HIERARCHY.",
                time: "9:00 am - 10:00 am",
                place: " by MR. MIR VAIS NIAZ, DIRECTOR ADMINISTRATION FIA HQS",
                color: "#000"
              },
              {
                name: "INTRODUCTION TO AHS",
                time: "10:00 am - 10:30 am",
                place: " by MR. SHUJA NAVEED, ACTING DIRECTOR, AHS",
                color: "#000"
              },
              {
                name: "INTRODUCTION TO ACW",
                time: "10:30 am - 11:00 am",
                place: " by MR. SHUJA NAVEED, DIRECTOR, ACW",
                color: "#000"
              },
              {
                name: "TEA BREAK",
                time: "11:00 am - 11:30 am",
                place: " ",
                color: "#000"
              },
              {
                name: "INTRODUCTION TO ECW",
                time: "11:30 am - 12:00 pm",
                place: " by Mr. SYED MUHAMMAD BILAL, DD ECW",
                color: "#000"
              },

              {
                name: "INTRODUCTION TO NCB INTERPOL",
                time: "12:00 pm - 12:30 pm",
                place: " by Mr. SYED FAREED ALI, ACTING DIRECTOR INTERPOL",
                color: "#000"
              },
              {
                name: "INTRODUCTION TO CTW",
                time: "12:30 pm - 01:00 pm",
                place: " by MR. BABAR BAKHAT QURESHI, DIRECTOR CTW",
                color: "#000"
              },

              {
                name: "INTRODUCTION TO IMMIGRATION",
                time: "01:00 pm - 01:30 pm",
                place: " by MR. NASIR MEHMOOD SATTI, DIRECTOR IMMIGRATION",
                color: "#000"
              },
              {
                name: "Lunch Break",
                time: "01:30 pm - 02:00 pm",
                place: " ",
                color: "#000"
              },
              {
                name: "INTRODUCTION TO CYBERCRIME WING",
                time: "02:00 pm - 04:00 pm",
                place:
                  " by Mr. CH. ABDUL RAUF, ADDL. DIR CCW MR. SALMAN KHAN, INCHARGE CCRC-ISLD",
                color: "#000"
              }
            ]
          },
          {
            title: "Tuesday - 21-01-2020 \n\n Day 2",
            data: [
              {
                name: "FIA ACT & PECA ACT 2016",
                time: "9:00 am - 11:00 am",
                place: " by Mr. Malik Tariq, Director Law FIA HQ.",
                color: "#000"
              },
              {
                name: "Tea Break",
                time: "11:00 am - 11:30 am",
                place: " ",
                color: "#000"
              },
              {
                name: "PPC, CRPC & Evidence Act",
                time: "11:30 am - 01:30 pm",
                place:
                  " by Mr. Haji Azam, Additional Director General FIA (RTD).",
                color: "#000"
              },
              {
                name: "Lunch Break",
                time: "01:30 pm - 02:00 pm",
                place: " ",
                color: "#000"
              },
              {
                name: "Special Laws",
                time: "02:00 pm - 04:00 pm",
                place: " by Mr. Malik Tariq, Additional Director Law FIA HQ.",
                color: "#000"
              }
            ]
          },
          {
            title: "Wednesday - 22-01-2020 \n\n Day 3",
            data: [
              {
                name: "Constitution & Human Rights",
                time: "9:00 am - 11:00 am",
                place: " by Mr. Shaukat Ali, Ex. Director Law (Rtd)",
                color: "#000"
              },
              {
                name: "Tea Break",
                time: "11:00 am - 11:30 am",
                place: " ",
                color: "#000"
              },
              {
                name: "Ethics, Values & Discipline",
                time: "11:30 am - 01:30 pm",
                place:
                  " by Mr. Mehmood Alam Mahsood, Additional Director General Law",
                color: "#000"
              },
              {
                name: "Lunch Break",
                time: "01:30 pm - 02:00 pm",
                place: " ",
                color: "#000"
              },
              {
                name: "Ethics, Values & Discipline (Contd)",
                time: "02:00 pm - 04:00 pm",
                place:
                  " by Mr. Mehmood Alam Mahsood, Additional Director General Law",
                color: "#000"
              }
            ]
          },
          {
            title: "Thursday - 23-01-2020 \n\n Day 4",
            data: [
              {
                name: "Criminal Investigation (Procedures/SOPs)",
                time: "9:00 am - 11:00 am",
                place: " by Mr. Bashrat A Shahzad, ADG FIA HQs",
                color: "#000"
              },
              {
                name: "Tea Break",
                time: "11:00 am - 11:30 am",
                place: " ",
                color: "#000"
              },
              {
                name: "Investigation Skills",
                time: "11:30 am - 01:30 pm",
                place: " by Mr. Bashrat A Shahzad, ADG FIA HQs",
                color: "#000"
              },
              {
                name: "Lunch Break",
                time: "01:30 pm - 02:00 pm",
                place: " ",
                color: "#000"
              },
              {
                name: "Case Studies related to CCW",
                time: "02:00 pm - 04:00 pm",
                place: " by Mr. Salman In charge CCW Islamabad",
                color: "#000"
              }
            ]
          },
          {
            title: "Friday - 24-01-2020 \n\n Day 5",
            data: [
              {
                name: "D-Briefing (Question and Answers)",
                time: "9:00 am - 11:00 am",
                place: " ",
                color: "#000"
              },
              {
                name: "Lunch Break",
                time: "11:00 am - 11:30 am",
                place: " ",
                color: "#000"
              },
              {
                name: "Director General Address",
                time: "11:30 am - 12:30 pm",
                place: " ",
                color: "#000"
              }
            ]
          }
        ]
      });
      // events: (nextProps.conference || []).events
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: "#387a39" }}>
        {/* <SearchBar
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
        /> */}
        <SectionList
          style={{ paddingBottom: 8 }}
          renderItem={({ item, index, section }) => (
            <ListItem
              containerStyle={{
                // borderLeftColor: item.color,
                // borderLeftWidth: 6,
                backgroundColor: "#FFE77AFF",
                // backgroundColor: "rgb(52,52,52,0.8)",
                borderWidth: 0.5,
                borderRadius: 8,

                borderColor: "#FFE77AFF",
                borderBottomWidth: 0,
                shadowColor: "#FFE77AFF",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1,
                marginRight: 8,
                marginLeft: 8,
                marginTop: 4,
                marginBottom: 4
              }}
              key={index}
              title={(item.name || "").toUpperCase()}
              titleStyle={{ color: "#2C5F2DFF", fontWeight: "bold" }}
              subtitle={(item.time + " " + item.place || "").toUpperCase()}
              subtitleStyle={{ color: "#2C5F2DFF" }}
              onPress={() => this.setState({ event: item, modal: true })}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <ListItem
              title={title}
              containerStyle={{
                // backgroundColor: config.SCHEDULE_HEADER_COLOR,
                // backgroundColor: "#fff",

                borderWidth: 0.5,
                borderRadius: 8,
                borderColor: "#2C5F2DFF",
                borderBottomWidth: 0,

                shadowColor: "#2C5F2DFF",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1,
                marginRight: 8,
                marginLeft: 8,
                marginTop: 4,
                marginBottom: 4
              }}
              titleStyle={{
                color: "#FFE77AFF",
                // , color: config.PRIMARY_BG_COLOR
                fontWeight: "800",
                fontWeight: "bold"  
              }}
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
            style={{ opacity: 0.8 }}
          >
            <Card
              title={(this.state.event.name || "").toUpperCase()}
              containerStyle={{
                backgroundColor: "#2C5F2DFF",

                borderColor: "#2C5F2DFF",

                borderWidth: 0.5,
                borderRadius: 8,

                borderBottomWidth: 0,
                shadowColor: "#2C5F2DFF",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1,
                marginRight: 8,
                marginLeft: 8,
                marginTop: 4,
                marginBottom: 4
              }}
              titleStyle={{ color: "#FFE77AFF" }}
            >
              <View>
                <Text style={{ fontWeight: "700", color: "#FFE77AFF" }}>
                  {this.state.event.time} {this.state.event.place}
                </Text>
                <Text
                  style={{
                    textAlign: "justify",
                    marginTop: 10,
                    color: "#FFE77AFF"
                  }}
                >
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
                  titleStyle={{ color: "#2C5F2DFF" }}
                  buttonStyle={{
                    // backgroundColor: config.PRIMARY_BG_COLOR,
                    backgroundColor: "#FFE77AFF",
                    marginTop: 15,

                    borderWidth: 0.5,
                    borderRadius: 8,

                    borderBottomWidth: 0,
                    borderColor: "#2C5F2DFF",
                    shadowColor: "#2C5F2DFF",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 1,
                    marginRight: 8,
                    marginLeft: 8,
                    marginTop: 4,
                    marginBottom: 4
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
