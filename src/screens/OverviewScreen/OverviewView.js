import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style.js";
import config from "../../config";
import DotComponent from "../../components/DotComponent";
import RadioBtPassage from "../../components/RadioBtPassage.js";
import TextWithStyle from "../../components/TextWithStyle.js";
import ImageWithPath from "../../components/ImageWithPath.js";

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
      <ScrollView style={{ backgroundColor: "#387a39" }}>
        {/* <Image
          source={{ uri: this.props.conference.banner }}
          style={styles.banner}
        /> */}

        {/* Vision */}
        <View style={styles.cardType}>
          <Text style={styles.title}>{"VISION".toUpperCase()}</Text>

          <TextWithStyle
            text={
              "A law enforcement agency that combats Cyber Crime, provides state of the art digital forensic services, enjoys the respect in the society for its integrity, professional competence, impartial attitude and serves as a role model for provincial police forces."
            }
          />
        </View>

        {/* Mission */}
        <View style={styles.cardType}>
          <Text style={styles.title}>{"Mission".toUpperCase()}</Text>

          <TextWithStyle
            text={
              "To achieve excellence by promoting culture of merit, enforcing technology-based law, extending continuous professional training, ensuring effective internal accountability, encouraging use of technology and possessing an efficient feedback mechanism."
            }
          />
        </View>

        {/* Introduction to Cyber Crime Wing */}
        <View style={styles.cardType}>
          <Text style={styles.title}>
            {"INTRODUCTION OF CYBER CRIME WING".toUpperCase()}
          </Text>

          <TextWithStyle
            text={
              "Cyber Crime Wing (CCW) is the latest introduction to the mandate of FIA, primarily to deal with technology-based crimes in Pakistan. It is the only unit of its kind in the country and it not only addresses complaints related to Cyber Crime but also assists other LEA’s in their own cases."
            }
          />

          <TextWithStyle
            text={
              "CCW has expertise in Digital Forensics, Technical Investigation, Information System Security Audits, Penetration Testing and Trainings. The unit since its inception has been involved in capacity building of the officers of Police, Intelligence, Judiciary, Prosecution and other Govt. organizations in the field of Cyber Crimes."
            }
          />
        </View>

        {/* Cybercrime Explained */}

        <View style={styles.cardType}>
          <Text style={styles.title}>
            {"CYBERCRIME EXPLAINED".toUpperCase()}
          </Text>

          <TextWithStyle
            text={
              "Any activity commissioned via computer, digital devices and networks used in the cyber realm, and is facilitated through the internet medium. It can include the distant theft of information belonging to an individual, government or corporate sector through criminal tress-passing into unauthorized remote systems around the world. It includes stealing millions of rupees from online bank to harassing and stalking cyber users."
            }
          />
          <TextWithStyle
            text={
              "Cyber Crime also includes sending viruses on different systems, or posting defamation messages."
            }
          />
          <TextWithStyle
            text={
              "Broadly, cybercrime can be described as having cyber-dependent offences, cyber-enabled offences and, as a specific crime-type, for e.g. online child sexual exploitation and abuse."
            }
          />
          <TextWithStyle
            text={
              "Cyber-dependent crime requires an ICT* infrastructure and is often typified as the creation, dissemination and deployment of malware, ransom ware, attacks on critical national infrastructure (e.g. the cyber-takeover of a power-plant by an organized crime group) and taking a website offline by overloading it with data (a Dynamic Denial of Service-DDOS attack)."
            }
          />
          <TextWithStyle
            text={
              "Cyber-enabled crime is that which can occur in the offline world but can also be facilitated by ICT. This typically includes online frauds, purchases of drugs online and online money laundering."
            }
          />
          <TextWithStyle
            text={
              'Child Sexual Exploitation and Abuse includes abuse on the clear internet, dark net forums and, increasingly, the exploitation of self-created imagery via extortion - known as "sextortion".'
            }
          />
        </View>

        <View style={styles.cardType}>
          <Text style={styles.title}>{"MANDATE".toUpperCase()}</Text>

          <TextWithStyle
            text={
              "The Federal Investigation Agency (FIA) through its Cyber Crime Wing (CCW) is the leading federal agency for investigating cybercrimes. The threat is serious—and growing. Cyber intrusions are becoming more commonplace, more dangerous, and more sophisticated. Our nation’s critical infrastructure, including both private and public sector networks are targeted by adversaries. Citizens are targeted by fraudsters and identity thieves, and children are targeted by online predators."
            }
          />
          <TextWithStyle
            text={
              "To deal with these threats, the FIA’s Cyber Crime Wing is mandated with the powers to investigate and to curb cybercrimes, through its Prevention of Electronic Act. More particularly, the Agency’s Cyber Crime Wing has the mandate for: "
            }
          />

          {/* Sub Headings for radio */}
          <RadioBtPassage text={"Prevention of Electronic/Cyber Crimes."} />
          <RadioBtPassage text={"Investigation/Prosecution of Cyber Crimes."} />
          <RadioBtPassage
            text={"Forensic analysis of Cyber Crimes for FIA and other LEA’s."}
          />
          <RadioBtPassage
            text={
              "National and International Cooperation in the field of Cyber Crimes."
            }
          />
          <RadioBtPassage
            text={
              "Capacity building of the officers of Police, Intelligence, Judiciary, Prosecution and other Govt. organizations in the field of Cyber Crimes."
            }
          />
          <RadioBtPassage
            text={
              "Research and development for the prevention and investigation of Cyber related crimes."
            }
          />
          <RadioBtPassage
            text={
              "Raising awareness of latest Cyber threats through public awareness campaigns."
            }
          />
        </View>

        <View style={styles.cardType}>
          <Text style={styles.title}>{"LEGAL FRAMEWORK".toUpperCase()}</Text>

          <TextWithStyle
            text={
              "This part provides an analysis of the legal framework for dealing with cybercrime."
            }
          />
          <TextWithStyle
            text={
              "Initially, offences related to cybercrime were dealt under Electronic Transaction Ordinance 2002 (ETO 2002), stating to “recognize and facilitate documents, records, information, communications and transactions in electronic form, and to provide for the accreditation of certification service providers. This ordinance prescribed offences such as violation of privacy and the damage to information system. However, it had its limitations in penalizing offences related specifically to cybercrime."
            }
          />
          <TextWithStyle
            text={
              "After observing some limitation of the ETO, a few detailed laws with respect to cybercrime were introduced, including Prevention of Electronic Crimes Ordinance 2007 (PECO 2007). PECO specified provisions related to cybercrime and the misuse of technology, but it was repealed shortly afterwards in 2009."
            }
          />
          <TextWithStyle
            text={
              "ETO 2002 was used as the main Ordinance for dealing with offences related to cybercrime until Prevention of Electronic Crimes Act (PECA) was adopted by the senate in August 2016. Currently PECA is the most relevant legislation to cybercrime and cyber security in Pakistan. The laws and SOP that make up the legal framework of CCW are as under."
            }
          />

          <RadioBtPassage text={"Prevention of Electronic Crimes Act, 2016."} />
          <RadioBtPassage
            text={"Prevention of Electronic Crime Investigation Rules 2018."}
          />
          <RadioBtPassage
            text={"Pakistan Penal Code, 1860 (Act XLV of 1860)."}
          />
          <RadioBtPassage
            text={"Code of Criminal Procedure, 1898 (Act V of 1898)."}
          />
          <RadioBtPassage text={"Police Rules."} />
          <RadioBtPassage text={"Evidence Act 1984 (P.O No. X of 1984)."} />
          <RadioBtPassage text={"FIA Act 1974 (VIII 0f 1975)"} />
          <RadioBtPassage
            text={"Investigation and Fair Trial Act 2013 (1 of 2013)"}
          />
          <RadioBtPassage text={"Standing Order No. 01/2018"} />
        </View>

        {/* ORGANOGRAM OF CYBER CRIME WING (CCW) */}
        <View style={styles.cardType}>
          <Text style={styles.title}>
            {"ORGANOGRAM OF CYBER CRIME WING (CCW)".toUpperCase()}
          </Text>

          <TextWithStyle
            text={
              "The Cyber Crime Wing (FIA) has its headquarters in Islamabad. The Cybercrime Wing is headed and supervised by an Additional Director General who is assisted by Directors, Additional Directors and Deputy Directors to be appointed by the Director General for respective zones"
            }
          />

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
              marginBottom: 8
            }}
          >
            <Image
              source={require("../../../assets/first1.png")}
              style={{
                width: 330,
                height: 330,
                borderRadius: 4,
                resizeMode: "contain"
              }}
            />
          </View>
        </View>

        <View style={styles.cardType}>
          <Text style={styles.title}>
            {"ORGANIZATIONAL STRUCTURE OF CCW".toUpperCase()}
          </Text>

          <TextWithStyle
            text={
              "Cybercrime wing of FIA is distributed into 6 zones and 15 Cyber Crime Reporting Centers (CCRC). Zones are administrative units with a specific number of CCRC’s falling under its domain; each zone is under the supervision of an Additional Director Zone. Furthermore a specific number of districts fall under the jurisdiction of the CCRC’s, the exact distribution of districts under the CCRC’s has been attached as Annexure B."
            }
          />

          <TextWithStyle
            text={
              "Zonal distribution makes for effective administration towards the goals of the organization, within CCW different teams are made up of individuals with the relevant qualification and experience. The main sections of the CCW involved with matters under its mandate are Investigation, Forensic, and Data & Network Security sections with their own defined roles and responsibilities."
            }
          />

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
              marginBottom: 8
            }}
          >
            <Image
              source={require("../../../assets/ccwfia.png")}
              style={{
                width: 330,
                height: 330,
                borderRadius: 4,
                resizeMode: "contain"
              }}
            />
          </View>
        </View>

        <View style={styles.cardType}>
          <Text style={styles.title}>
            {"ORGANIZATIONAL STRUCTURE OF CYBERCRIME ZONE".toUpperCase()}
          </Text>

          <TextWithStyle
            text={
              "The Cyber Crime Zone includes a number of Cybercrime reporting centers; the CCRC’s and the forensic laboratories in the zone are supervised by an Additional Director Zone who is assisted by a Deputy Director, Assistant Director and other office support staff. The additional director zone works under the direct supervision of the Director Operations."
            }
          />

          <TextWithStyle
            text={
              "The Additional Director Zone ensures that the goals of the organization in the respective CCRC’s are being met in the most efficient manner; similarly the Director Operations ensures conformity of goals within the 6 zones of the Cyber Crime Wing."
            }
          />

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
              marginBottom: 8
            }}
          >
            <Image
              source={require("../../../assets/DirectorOperation.png")}
              style={{
                width: 330,
                height: 330,
                borderRadius: 4,
                resizeMode: "contain"
              }}
            />
          </View>
        </View>

        <View style={styles.cardType}>
          <Text style={styles.title}>
            {"ORGANIZATIONAL STRUCTURE OF CYBERCRIME REPORTING CENTER".toUpperCase()}
          </Text>

          <TextWithStyle
            text={
              "The CCRC is supervised by the circle In-charge; the circle In-charge is assisted by a team of Investigators, Cyber Crime Analysts, Law officers and other office support staff. Roles and responsibilities for every section have been well defined which greatly helps in effective discharge of duties, streamlines communication and reduces confusion. Each CCRC deals with matters under the Act with specified territorial limits, the territorial jurisdiction of CCRC’s are attached as Annexure-B."
            }
          />

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
              marginBottom: 8
            }}
          >
            <Image
              source={require("../../../assets/circlueIncharge.png")}
              style={{
                width: 330,
                height: 330,
                borderRadius: 4,
                resizeMode: "contain"
              }}
            />
          </View>
        </View>

        <View style={styles.cardType}>
          <Text
            style={[
              styles.mainTitle,
              {
                marginBottom: 16
              }
            ]}
          >
            {"EXPERTISE OF CYBER CRIME WING".toUpperCase()}
          </Text>
          <Text style={styles.title}>{"Computer Forensics".toUpperCase()}</Text>

          <TextWithStyle
            text={
              "In today’s ever-changing criminal world, the use of computers for fraud and the pursuit of other crimes has increased to dramatic proportions. CCW-FIA is a specialized department to deal with the computer crime. Computer crime is not only about fraud – online or otherwise – it also encompasses areas such as pornography, child sex abuse and the sale of black market goods online. The wide range of data content present in hard drives is potential evidence if seized from a crime scene. The process of forensic acquisition, analysis and reporting of computer storage devices is Computer Forensic. CCW has state of the art computer forensic facility, and possess leading forensic experts to deal with all computer related crimes."
            }
          />

          <Text
            style={[
              styles.title,
              {
                marginTop: 8
              }
            ]}
          >
            {"Mobile Forensics".toUpperCase()}
          </Text>

          <TextWithStyle
            text={
              "The increased utility of mobile devices such as smart phones has leveraged the criminals to communicate and use digital application, resultantly storing tremendous amount of data on the device. Criminals use smart phones for a number of activities such as committing fraud over e-mail, harassment through text messages, trafficking of child pornography, communications related to narcotics, etc. The data stored on smart phones is extremely useful to forensic analysts through the course of an investigation. The forensic acquisition, analysis and presentation of data content stored on mobile devices is known as mobile forensics. CCW since inception has dealt with numerous mobile forensic cases, and also facilitates other government installations on such technical assistance."
            }
          />

          <Text
            style={[
              styles.title,
              {
                marginTop: 8
              }
            ]}
          >
            {"Video Forensics".toUpperCase()}
          </Text>

          <TextWithStyle
            text={
              "Video recordings can provide a real-time, eyewitness account of a crime so investigators can watch or hear what transpired. For instance, a surveillance video captures a bank robbery in progress, or a hidden camera records. For most crimes, however, high quality video recordings are often not available. This is where forensic video expertise can help. Forensic experts have many techniques to enhance recordings that can bring out details and provide a clearer picture of what occurred. CCW experts have engaged in numerous video forensic investigations and have successfully identified criminals and terrorist through this forensic method."
            }
          />

          <Text
            style={[
              styles.title,
              {
                marginTop: 8
              }
            ]}
          >
            {"Network Forensics".toUpperCase()}
          </Text>

          <TextWithStyle
            text={
              "Network forensics is the capture, storage, and analysis of network events. Regardless of the name, the idea is the same: record every packet of network traffic (all emails, all database queries, all Web browsing–absolutely all traffic of all kinds traversing an organization’s network) to a single searchable repository so the traffic can be examined in detail. It also includes the forensic examination of network devices such as router, VOIP gateways, IDS/IDP etc. The network device configuration and related data present in these devices is important in cybercrime cases. CCW has a specialized team to investigate and process network forensic cases. They have successfully analyzed numerous network forensic investigations in the past."
            }
          />
        </View>

        {/* Training & Capacity Building */}
        <View style={styles.cardType}>
          <Text
            style={[
              styles.mainTitle,
              {
                marginBottom: 16
              }
            ]}
          >
            {"TRAINING & CAPACITY BUILDING".toUpperCase()}
          </Text>
          <Text style={styles.title}>{"Technical Training".toUpperCase()}</Text>

          <TextWithStyle
            text={
              "Development of human resource leverages the organizations to perform efficiently. Trainings, seminars and workshops are instant source of information that gives an edge to professionals to understand and excel in their respective fields. CCW over years has trained around thousands of individuals of academia, law enforcement agencies, judiciary, police academy, and intelligence agencies etc. Trainings disseminated in relation to digital forensic comprehension of interpreting forensic reports, evidence extraction methods, laws application to judicial community. 12, 458 individuals from all walks of Citizens ranging from a 6th grade kid to decorated officers have been trained by CCW to serve the purpose cyber-crime mitigation."
            }
          />

        <RadioBtPassage text={"Technical facilitation extended through digital forensic analysis, cyber tracking, digital crime investigation to local law enforcement agencies in cases such as murder, robbery, extortion and many more."} />
        <RadioBtPassage text={"Technical trainings on cyber-crime, digital forensics, information security to law enforcement agencies like IB, ISI, NAB, ANF, Local Police."} />
        <RadioBtPassage text={"Conducted awareness workshops and seminars at various academic institutes and organizations."} />
        <RadioBtPassage text={"Trainings imparted on digital forensic comprehension for interpreting forensic reports, evidence extraction methods, laws application to judicial community."} />
        <RadioBtPassage text={"Technical facilitation extended through digital forensic analysis, cyber tracking, digital crime investigation to local law enforcement agencies in cases such as murder, robbery, extortion and many more."} />
      </View>

            {/* Current Areas of Focus */}

            {/* Training & Capacity Building */}
        <View style={styles.cardType}>
          <Text
            style={[
              styles.mainTitle,
              {
                marginBottom: 16
              }
            ]}
          >
            {"Current Areas of Focus".toUpperCase()}
          </Text>

          <TextWithStyle
            text={
              "Given the changing dynamics of Cyber Crime around the globe, FIA’s CCW is focusing on ways to counter some of the pressing challenges. Keeping in view the above, here are some of the major areas that the Agency is currently focusing on –"
            }
          />

          <Text style={styles.title}>{"International Cooperation".toUpperCase()}</Text>

          <TextWithStyle
            text={
              "Cybercrime is an evolving form of transnational crime. The complex nature of the crime as one that takes place in the border-less realm of cyberspace is compounded by the increasing involvement of organized crime groups. Perpetrators of cybercrime and their victims can be located in different regions, and its effects can ripple through societies around the world, highlighting the need to mount an urgent, dynamic and international response. It is imperative to form strong liaisons and cooperation treaties with international government agencies and organizations to better enable CCW in fighting Cybercrime."
            }
          />


          <Text style={styles.title}>{"Community Outreach".toUpperCase()}</Text>

          <TextWithStyle
            text={
              "As technology advances and more people rely on the internet to store sensitive information such as personal private information and banking or credit card information, criminals increasingly attempt to steal that information. Cybercrime is becoming more of a threat to people across the world. Raising awareness about how information is being protected and the tactics criminals use to steal that information continues to grow in importance. Hence it is one of the focus areas of CCW to educate the public about cyber threats."
            }
          />

          <Text style={styles.title}>{"Building Forensic Capacity".toUpperCase()}</Text>

          <TextWithStyle
            text={
              "Cybercrimes are highly technical in nature and hence so is the evidence involved. CCW is highly focused on further improving and upgrading the mechanisms and equipment involved in extracting evidence from devices used in crimes to keep up with the ever-evolving threats and technologies. There is also a focus on Research and Development in digital forensics that studies cyber crimes in detail to understand its technical nature, and to come up with defensive measures to preemptively secure government’s digital infrastructure against cyber-attacks of similar nature."
            }
          />

          <Text style={styles.title}>{"Digitization of Internal Processes".toUpperCase()}</Text>

          <TextWithStyle
            text={
              "To expedite, secure and streamline the internal processes, the Cyber Crime wing is focused on improving its internal operations through the integration of technology. This digital transformation will enable the CCW to operate more efficiently and transparently, and to offer more responsive and timely services to its citizens. Moreover, it will ensure a fast and secure channel for sharing of information among authorized personnel involved with a case."
            }
          />
          </View>

          <View style={styles.cardType}>
          <Text
            style={[
              styles.mainTitle,
              {
                marginBottom: 16
              }
            ]}
          >
            {"ACHIEVEMENTS".toUpperCase()}
          </Text>


          <RadioBtPassage text={"A huge crackdown on illegal grey traffickers of VOIP setups in 2013 & 2014, whereby 111 successful raids were carried out, averting a loss of 2946 million Rs per month to Govt. Estimate cost of seized equipment in these cases exceed 5,000 million Rupees."} />
          <RadioBtPassage text={"Handled complaints related to online defamation, harassment, threats and blackmailing via social networking sites such as Facebook, Twitter etc."} />
          <RadioBtPassage text={"CCW has successfully registered and investigated crimes related to internet frauds & scams, such as Lottery Fraud, Job Scams, Car Fraud, Click Fraud, Internet Marketing Scams etc."} />
          <RadioBtPassage text={"Rendered technical facilitation of audio and video forensic analysis in cyber terrorism cases."} />
          <RadioBtPassage text={"Responded to financial sectors grievances, relating to ATM skimmers, banking frauds, money exchange embezzlements, credit card frauds and e-banking frauds etc."} />
          
          <Text style={styles.title}>{"Research & Developments".toUpperCase()}</Text>
          <RadioBtPassage text={"Developed LEAD \"Live Evidence Acquisition Dongle\" a forensic tool to extract live evidence."} />
          <RadioBtPassage text={"Developed a tool to help track and identify the location of e-mails originating from unknown sources."} />
          <RadioBtPassage text={"Developed in-house software application for forensic request management."} />
          <RadioBtPassage text={"Developed in-house software application for complaints management and tracking."} />
          <RadioBtPassage text={"Contributed a 5 year counter cyber terrorism strategy with NACTA."} />
          <RadioBtPassage text={"Furnished a report on problems faced by law enforcement agencies to trace down the sub-standard mobile phones with same IMEI number."} />
          <RadioBtPassage text={"Research paper published in Journal of American Science, 2010 on \"Data Mining Methodology in Perspective of Manufacturing Databases\"."} />
        
      </View>

      <View style={styles.cardType}>
          <Text
            style={[
              styles.mainTitle,
              {
                marginBottom: 16
              }
            ]}
          >
            {"CYBER CRIME PREVENTION TIPS".toUpperCase()}
          </Text>
      
          <Text style={styles.title}>{"Secure Your Smart Phones/Tablets".toUpperCase()}</Text>
          <RadioBtPassage text={"Always secure your smartphone with a strong password."} />
          <RadioBtPassage text={"Ensure that your device locks itself automatically."} />
          <RadioBtPassage text={"Install security software."} />
          <RadioBtPassage text={"Only download apps from approved sources."} />
          <RadioBtPassage text={"Check your apps permissions."} />
          <RadioBtPassage text={"Don’t miss operating system updates."} />
          <RadioBtPassage text={"Be wary of any links you receive via email or text message."} />
          <RadioBtPassage text={"Turn off automatic Wi-Fi connection."} />
          <RadioBtPassage text={"When browsing or shopping on your phone (or computer), always look for \"https\" in the URL-Box instead of   \"http\"."} />
          
          <Text style={styles.title}>{"Secure Your Online Banking".toUpperCase()}</Text>
          <RadioBtPassage text={"Never use same PIN CODE for multiple bank accounts."} />
          <RadioBtPassage text={"Never use unprotected PCs at cyber cafes for internet banking."} />
          <RadioBtPassage text={"Never keep your pin code and cards together."} />
          <RadioBtPassage text={"Never leave the PC unattended when using internet banking in a public place."} />
          <RadioBtPassage text={"Register for Mobile SMS, Email Transaction Alerts."} />
          <RadioBtPassage text={"Never reply to emails asking for your password or pin code."} />
          <RadioBtPassage text={"Visit banks website by typing the URL in the address bar."} />
          <RadioBtPassage text={"Log off and close your browser when you are done using internet banking."} />
          <RadioBtPassage text={"When using ATM always conceal keypad before entering pin code."} />
          <RadioBtPassage text={"Before using ATM, make sure that there is no extra device installed in the surroundings."} />
          
          
          <Text style={styles.title}>{"Secure Your Wi-Fi/ISP".toUpperCase()}</Text>
          <RadioBtPassage text={"Change Default Administrator Passwords and Usernames of the Wi-Fi Router."} />
          <RadioBtPassage text={"Use complex password and change Password after regular intervals."} />
          <RadioBtPassage text={"Position the Router or Access Point Safely."} />
          <RadioBtPassage text={"Turn off the Network / Wi-Fi routers if it is not in use."} />

          <Text style={styles.title}>{"Secure Your Browsing".toUpperCase()}</Text>
          <RadioBtPassage text={"What you put online will always remain there."} />
          <RadioBtPassage text={"Never trust any free online content."} />
          <RadioBtPassage text={"Don’t provide personal information online to get something free."} />
          <RadioBtPassage text={"Don’t click on links inside e-mails or messages from unknown sources."} />
          
          <Text style={styles.title}>{"Report Cyber Crime".toUpperCase()}</Text>
          <RadioBtPassage text={"Cybercrime wing is always ready to help, please do not hesitate in reporting any cyber-crime that you have fallen victim to. "} />
          <RadioBtPassage text={"You can visit our website (nr3c.gov.pk)  and register your complaint or you can email us on helpdesk@nr3c.gov.pk or send written application with your complete credentials (Name, Address, CNIC, and Contact No.) and details of your complaint to the Director NR3C-FIA, National Police Foundation Building, 2nd Floor, Mauve Area, G-10/4, Islamabad."} />
          <RadioBtPassage text={"Cyber Rescue Help line 9911 is round the clock 24/7 Cyber Crime information service to provide assistance and guidance regarding cyber related issues and complaint registration."} />

          
      </View>

      <View style={styles.cardType}>
          <Text
            style={[
              styles.mainTitle,
              {
                marginBottom: 8
              }
            ]}
          >
            {"COMPLAINT MANAGEMENT & TRACKING SYSTEM (CMTS)".toUpperCase()}
          </Text>
          
          <TextWithStyle
            text={
              "CCW has introduced a CMTS and the purpose of the system is as follows."
            }
          />



          <RadioBtPassage text={"The purpose of the system is to automate the process of complaints, management and tracking."} />
          <RadioBtPassage text={"To keep a centralized repository of data with relative information."} />
          <RadioBtPassage text={"To enhance the capabilities of analysis and tracking of complaints at all levels."} />
          <RadioBtPassage text={"To reduce overall time to process complaints, verifications, enquiries and cases."} />
          <RadioBtPassage text={"CMTS is a web based portal with search facilities on the basis of multiple parameters such as complainant name, mobile number, CNIC, tracking number and official document number"} />
          
          
          <Text style={[styles.title,{marginBottom:16}]}>{"Complaint Management & Tracking System (CMTS) Process Flow".toUpperCase()}</Text>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
              marginBottom: 8
            }}
          >
            <Image
              source={require("../../../assets/complaintManagement.png")}
              style={{
                width: 330,
                height: 330,
                borderRadius: 4,
                resizeMode: "contain"
              }}
            />
          </View>

          </View>

          <View style={styles.cardType}>
          <Text
            style={[
              styles.mainTitle,
              {
                marginBottom: 8
              }
            ]}
          >
            {"SOURCE OF COMPLAINTS".toUpperCase()}
          </Text>

          <Text style={[styles.title]}>{"Government Sector"}</Text>

          <RadioBtPassage text={"President office"} />
          <RadioBtPassage text={"PM office"} />
          <RadioBtPassage text={"Apex courts"} />
          <RadioBtPassage text={"Ministries"} />
          <RadioBtPassage text={"Other Govt Departments"} />

          <Text style={[styles.title]}>{"Private sector"}</Text>
          <RadioBtPassage text={"Banks"} />
          <RadioBtPassage text={"Universities"} />
          <RadioBtPassage text={"Organizations"} />
          <RadioBtPassage text={"Companies"} />
          <RadioBtPassage text={"Others"} />


          <Text style={[styles.title]}>{"General Public"}</Text>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
              marginBottom: 8
            }}
          >
            <Image
              source={require("../../../assets/GeneralPublic.png")}
              style={{
                width: 330,
                height: 330,
                borderRadius: 4,
                resizeMode: "contain"
              }}
            />
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
