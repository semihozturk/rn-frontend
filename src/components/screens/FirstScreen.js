import React, { useState, useEffect , useRef} from "react";

import { SafeAreaView, View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';

import User from "../icons/user.svg";
import Notification from "../icons/notification.svg";
import More from "../icons/more.svg";
import Pay from "../icons/pay.svg";
import Send from "../icons/send.svg";
import TopUp from "../icons/topup.svg";
import Netflix from "../icons/netflix.svg";
import Dribble from "../icons/dribble.svg";
import Paypal from "../icons/paypal.svg";
import Time from "../icons/time.svg";
import Home from "../icons/home.svg";
import Ratio from "../icons/ratio.svg";

import Input from "../../components/input";

import LinearGradient from 'react-native-linear-gradient';
import GlobalFont from 'react-native-global-font'

const MyInput = React.forwardRef((props,ref) => {

  const [fontSize, setFontSize] = useState(12);
  const [textInputValue, setTextInputValue] = React.useState('');


  React.useImperativeHandle(ref,() => ({
    incFont: () => {
      setFontSize(fontSize => fontSize+2);
    },
    decFont: () => {
      setFontSize(fontSize => fontSize-2);
    }
  }))
  
//text => setTextInputValue(text)
  return(
    <TextInput
      onChangeText={(text) => setTextInputValue(text)}
      value={textInputValue}
      style={{ fontSize, borderColor: "red", borderWidth: 1 }}
    >      
    </TextInput>  )


})


const FirstScreen = ({ navigation }) => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const inputRef = useRef();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(()=> {
    firstNameRef.current.focus();
  }, [])

  
 
  useEffect(() => {
    let fontName = 'Poppins-Bold'
    GlobalFont.applyGlobal(fontName)
  })


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4eabee", position: "relative", }}>
      <LinearGradient colors={['#37d2f1', '#4eabee']}
        style={[styles.linearGradient, {
          paddingHorizontal: 20,
          height: Dimensions.get("window").height * 0.40
        }]}
      >


        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginVertical: 10}}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginVertical: 15 }}>
            <View>
              <User height={32} width={30} fill={"#fefefe"} />
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: "#daffff", fontSize: 13 }}>Hello</Text>
              <Text style={{ color: "#e4ffff", fontSize: 15, fontWeight: "bold" }}>One Achmad</Text>
            </View>
          </View>

          <View>
            <Notification height={30} width={22} fill={"#d8ffff"} />
          </View>
        </View>

        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "#daffff", fontSize: 13 }}>Balance</Text>
            <Text style={{ color: "#ecffff", fontSize: 32, fontWeight: "bold" }}>$26,520</Text>
          </View>
        </View>

        <View style={{flexDirection:"row"}}>
          <Input ref={firstNameRef} blurOnSubmit={false} onSubmitEditing={()=> lastNameRef.current.focus()} placeholder="enter first name" />
          <Input ref={lastNameRef} placeholder="enter last name"/>
          <MyInput ref={inputRef}/>
          <Text onPress={()=>inputRef.current.incFont()}>IncreaseFont</Text>
          <Text onPress={() => inputRef.current.decFont()}>DecreaseFont</Text>

        </View>

        <View style={{ paddingHorizontal: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginVertical: 15, }}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={[{ backgroundColor: "#90dcf4", height: 45, width: 45, borderRadius: 13 }, { alignItems: "center", justifyContent: "center" }]}>
              <Send height={30} width={22} fill={"#feffff"} />
            </View>
            <Text style={{ color: "#dcffff" }}>Send</Text>
          </View>


          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={[{ backgroundColor: "#90dcf4", height: 45, width: 45, borderRadius: 13 }, { alignItems: "center", justifyContent: "center" }]}>
              <TopUp height={30} width={22} fill={"#feffff"} />
            </View>
            <Text style={{ color: "#dcffff",  }}>Topup</Text>
          </View>


          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={[{ backgroundColor: "#90dcf4", height: 45, width: 45, borderRadius: 13 }, { alignItems: "center", justifyContent: "center" }]}>
              <Pay height={30} width={22} fill={"#feffff"} />
            </View>
            <Text style={{ color: "#dcffff" }}>Pay</Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View style={[{ backgroundColor: "#90dcf4", height: 45, width: 45, borderRadius: 13 }, { alignItems: "center", justifyContent: "center" }]}>
              <More height={30} width={22} fill={"#feffff"} />
            </View>
            <Text style={{ color: "#dcffff" }}>More</Text>
          </View>

        </View>
      </LinearGradient>


      {/* Last Transaction Part */}
      <View style={{ flex: 1, borderTopRightRadius: 45, borderTopLeftRadius: 45, backgroundColor: '#FFFFFF', paddingHorizontal: 20, flexDirection: "column", justifyContent: "space-between" }}>
        <View style={{ marginTop: 25, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 17, color: "#455286" }}>Last Transaction</Text>
          <Text style={{ color: "#89b6d5" }}>See all</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Netflix */}
          <View style={[styles.rows, {marginTop:20}]}>
            <View style={styles.iconText}>
              <View style={[styles.iconBackground, { backgroundColor: "#ffd4d5" }]}>
                <Netflix height={30} width={22} fill={"#1E2439"} />
              </View>
              <View style={styles.entertainItems}>
                <Text style={[styles.entertainItemsText, {fontWeight:"200"}]}>Netflix</Text>
                <Text style={styles.grayText}>4 March</Text>
              </View>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
              <Text style={styles.redText}>-$8.99</Text>
              <Text style={styles.grayText}>Subscription</Text>
            </View>
          </View>
          {/* PayPal */}
          <View style={styles.rows}>
            <View style={styles.iconText}>
              <View style={[styles.iconBackground, { backgroundColor: "#d5f2ff" }]}>
                <Paypal height={30} width={22} fill={"#1E2439"} />
              </View>
              <View style={styles.entertainItems}>
                <Text style={[styles.entertainItemsText,]}>Paypal</Text>
                <Text style={styles.grayText}>7 March</Text>
              </View>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
              <Text style={styles.redText}>-$120.00</Text>
              <Text style={styles.grayText}>Subscription</Text>
            </View>
          </View>
          {/* Joe Ramon */}
          <View style={styles.rows}>
            <View style={styles.iconText}>
              <View style={[styles.iconBackground, { backgroundColor: "#efd6c2" }]}>
                <User height={30} width={22} fill={"#1E2439"} />
              </View>
              <View style={styles.entertainItems}>
                <Text style={styles.entertainItemsText}>Joe Ramon</Text>
                <Text style={styles.grayText}>10 March</Text>
              </View>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
              <Text style={{ color: "#79d09b" }}>+$80.50</Text>
              <Text style={styles.grayText}>Subscription</Text>
            </View>
          </View>
          {/* Dribble */}
          <View style={[styles.rows]}>
            <View style={styles.iconText}>
              <View style={[styles.iconBackground, { backgroundColor: "#fdd7e6" }]}>
                <Dribble height={30} width={22} fill={"#1E2439"} />
              </View>
              <View style={styles.entertainItems}>
                <Text style={styles.entertainItemsText}>Dribble</Text>
                <Text style={styles.grayText}>12 March</Text>
              </View>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
              <Text style={styles.redText}>-$180.00</Text>
              <Text style={styles.grayText}>Subscription</Text>
            </View>
          </View>
          
          {/* Dribble */}
          <View style={[styles.rows]}>
            <View style={styles.iconText}>
              <View style={[styles.iconBackground, { backgroundColor: "#fdd7e6" }]}>
                <Dribble height={30} width={22} fill={"#1E2439"} />
              </View>
              <View style={styles.entertainItems}>
                <Text style={styles.entertainItemsText}>Dribble</Text>
                <Text style={styles.grayText}>12 March</Text>
              </View>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
              <Text style={styles.redText}>-$180.00</Text>
              <Text style={styles.grayText}>Subscription</Text>
            </View>
          </View>
          {/* Dribble */}
          <View style={[styles.rows, ]}>
            <View style={styles.iconText}>
              <View style={[styles.iconBackground, { backgroundColor: "#fdd7e6" }]}>
                <Dribble height={30} width={22} fill={"#1E2439"} />
              </View>
              <View style={styles.entertainItems}>
                <Text style={styles.entertainItemsText}>Dribble</Text>
                <Text style={styles.grayText}>12 March</Text>
              </View>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
              <Text style={styles.redText}>-$180.00</Text>
              <Text style={styles.grayText}>Subscription</Text>
            </View>
          </View>
          {/* Dribble */}
          <View style={[styles.rows, { marginBottom: 65 }]}>
            <View style={styles.iconText}>
              <View style={[styles.iconBackground, { backgroundColor: "#fdd7e6" }]}>
                <Dribble height={30} width={22} fill={"#1E2439"} />
              </View>
              <View style={styles.entertainItems}>
                <Text style={styles.entertainItemsText}>Dribble</Text>
                <Text style={styles.grayText}>12 March</Text>
              </View>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
              <Text style={styles.redText}>-$180.00</Text>
              <Text style={styles.grayText}>Subscription</Text>
            </View>
          </View>

        </ScrollView>
      </View>


      {/* Footer */}
      <View style={{
        position: "absolute",
        flex: 1,
        width: '100%',
        bottom: 0,
        flexDirection: "row", alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#FFFFFF",
        height: 50,
      }}
      >
        <TouchableOpacity onPress={() => setActiveTabIndex(0)} style={{ width: Dimensions.get("window").width / 4, padding: 5, alignItems: "center" }}>
          <Home height={30} width={22} fill={activeTabIndex == 0 ? "#3dbcef" : "#d4e6f1"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTabIndex(1)} style={{ width: Dimensions.get("window").width / 4, padding: 5, alignItems: "center" }}>
          <Ratio height={30} width={22} fill={activeTabIndex == 1 ? "#3dbcef" : "#d6e8f2"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            setActiveTabIndex(2)
            navigation.navigate("ThirdScreen")}
          } 
            style={{ width: Dimensions.get("window").width / 4, padding: 5, alignItems: "center" }}
        >
          <Time height={30} width={22} fill={activeTabIndex == 2 ? "#3dbcef" : "#d6e8f2"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTabIndex(3)} style={{ width: Dimensions.get("window").width / 4, padding: 5, alignItems: "center" }}>
          <User on height={30} width={22} fill={activeTabIndex == 3 ? "#3dbcef" : "#d5e8f4"} />
        </TouchableOpacity>


      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  elevation: {
    backgroundColor: "#fdfdfd",
    elevation: 3,
    height: 60,
    borderRadius: 10,
  },
  rows: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBackground: {
    height: 40,
    width: 40,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center"
  },
  entertainItems: {
    flexDirection: "column",
    marginLeft: 20,
  },
  bigBold: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 15,
  },
  entertainItemsText: {
    fontSize: 15,
    color: "#435085"
  },
  redText: {
    color: "#e46e6a",
    fontWeight: "bold",
    fontSize: 15,
  },
  grayText: {
    color: "#b2b4c3",
  },
})


export default FirstScreen;
