import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, ScrollView, Dimensions, TouchableHighlight } from "react-native";

import Transfer from "../icons/transfer.svg";
import Entertain from "../icons/entertain.svg";
import Netflix from "../icons/netflix.svg";
import Button from "../icons/button.svg";
import Dribble from "../icons/dribble.svg";
import Spotify from "../icons/spotify.svg";
import Twitch from "../icons/twitch.svg";
import Bill from "../icons/bill.svg";
import Time from "../icons/time.svg";
import Home from "../icons/home.svg";
import User from "../icons/user.svg";
import Ratio from "../icons/ratio.svg";

import { BoxShadow } from 'react-native-shadow'


const ThirdScreen = ({ navigation }) => {

  const shadowOpt = {
    width: 350,
    height: 60,
    color: "#000",
    border: 2,
    radius: 3,
    opacity: 0.1,
    x: 0,
    y: 3,
    style: { marginVertical: 5 }
  }

  {
    isShown && (shadowOpt = {
      width: 350,
      height: 370,
      color: "#000",
      border: 2,
      radius: 2,
      opacity: 0.1,
      x: 0,
      y: 3,
      style: { marginVertical: 5 }
    })
  }

  // Default to `false` so the section is initially hidden
  const [isShown, setIsShown] = React.useState(false);
  const toggleButton = () => {
    setIsShown(!isShown);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff", position: "relative" }}>
      <View style={{ alignItems: "center", padding: 20 }}>
        <Text style={styles.transaction}>Transaction History</Text>
      </View>

      <View style={{ padding: 10, }}>
        <View style={styles.rows}>
          <Text style={styles.bigBold}>Category</Text>
          <Text style={{ color: "#7cb3d9" }}>This week</Text>
        </View>

        <View style={{ padding: 20 }}>
          {/* Transfer */}
          <View style={[styles.elevation, { marginBottom: 10, }]}>
            <View style={[styles.rows, { padding: 5 }]}>
              <View style={styles.iconText}>
                <View style={[styles.circleBackground, { backgroundColor: "#ffa46f" }]}>
                  <Transfer height={30} width={22} fill={"#1E2439"} />
                </View>
                <Text style={styles.bigBold}>Transfer</Text>
              </View>

              <View>
                <Button height={30} width={22} fill={"#1E2439"} />
              </View>
            </View>
          </View>

          <View>
            <BoxShadow setting={shadowOpt}>
              <View style={{
                position: "relative",
                width: 350,
                height: (isShown ? 360 : 60),
                backgroundColor: "#fff",
                borderRadius: 3,
                // marginVertical:5,
                overflow: "hidden"
              }}>
                {/* Entertain */}
                <ScrollView  showsVerticalScrollIndicator={false} style={styles.elevation} >
                  <View>
                    <View style={[styles.rows, { padding: 5, }]}>
                      <View style={styles.iconText}>
                        <View style={[styles.circleBackground, { backgroundColor: "#fc6260" }]}>
                          <Entertain height={30} width={22} fill={"#1E2439"} />
                        </View>
                        <Text style={styles.bigBold}>Entertain</Text>
                      </View>

                      <View>
                        <Button height={30} width={22} fill={"#1E2439"}
                          onPress={toggleButton}
                        />
                      </View>
                    </View>
                  </View>

                  {isShown && (
                    <View style={{ padding: 10 }}>
                      {/* Netflix */}
                      <View style={styles.rows}>
                        <View style={styles.iconText}>
                          <View style={[styles.iconBackground, { backgroundColor: "#ffd4d5" }]}>
                            <Netflix height={30} width={22} fill={"#1E2439"} />
                          </View>
                          <View style={styles.entertainItems}>
                            <Text style={styles.entertainItemsText}>Netflix</Text>
                            <Text style={styles.grayText}>4 March</Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                          <Text style={styles.redText}>-$8.99</Text>
                          <Text style={styles.grayText}>Subscription</Text>
                        </View>
                      </View>

                      {/* Dribble */}
                      <View style={styles.rows}>
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
                          <Text style={styles.redText}>-$120.00</Text>
                          <Text style={styles.grayText}>Subscription</Text>
                        </View>
                      </View>

                      {/* Spotify */}
                      <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={styles.iconText}>
                          <View style={[styles.iconBackground, { backgroundColor: "#d5ffd9" }]}>
                            <Spotify height={30} width={22} fill={"#1E2439"} />
                          </View>
                          <View style={styles.entertainItems}>
                            <Text style={styles.entertainItemsText}>Spotify</Text>
                            <Text style={styles.grayText}>25 March</Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                          <Text style={styles.redText}>-$9.99</Text>
                          <Text style={styles.grayText}>Subscription</Text>
                        </View>
                      </View>

                      {/* Twitch */}
                      <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={styles.iconText}>
                          <View style={[styles.iconBackground, { backgroundColor: "#efd6ff" }]}>
                            <Twitch height={30} width={22} fill={"#1E2439"} />
                          </View>
                          <View style={styles.entertainItems}>
                            <Text style={styles.entertainItemsText}>Twitch</Text>
                            <Text style={styles.grayText}>25 March</Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                          <Text style={styles.redText}>-$24.99</Text>
                          <Text style={styles.grayText}>Subscription</Text>
                        </View>
                      </View>
                      {/* Twitch */}
                      <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={styles.iconText}>
                          <View style={[styles.iconBackground, { backgroundColor: "#efd6ff" }]}>
                            <Twitch height={30} width={22} fill={"#1E2439"} />
                          </View>
                          <View style={styles.entertainItems}>
                            <Text style={styles.entertainItemsText}>Twitch</Text>
                            <Text style={styles.grayText}>25 March</Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                          <Text style={styles.redText}>-$24.99</Text>
                          <Text style={styles.grayText}>Subscription</Text>
                        </View>
                      </View>
                      {/* Twitch */}
                      <View style={{ marginTop:10, marginBottom:20, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={styles.iconText}>
                          <View style={[styles.iconBackground, { backgroundColor: "#efd6ff" }]}>
                            <Twitch height={30} width={22} fill={"#1E2439"} />
                          </View>
                          <View style={styles.entertainItems}>
                            <Text style={styles.entertainItemsText}>Twitch</Text>
                            <Text style={styles.grayText}>25 March</Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                          <Text style={styles.redText}>-$24.99</Text>
                          <Text style={styles.grayText}>Subscription</Text>
                        </View>
                      </View>

                    </View>
                  )}

                </ScrollView>



              </View>
            </BoxShadow>
          </View>



          {/* Bill */}
          <View>
            <View style={[styles.elevation, { marginTop: isShown ? 8 : 15 }]}>
              <View style={[styles.rows, { padding: 5, }]}>
                <View style={styles.iconText}>
                  <View style={[styles.circleBackground, { backgroundColor: "#6fd795" }]}>
                    <Bill height={30} width={22} fill={"#1E2439"} />
                  </View>
                  <Text style={styles.bigBold}>Bill</Text>
                </View>

                <View>
                  <Button height={30} width={22} fill={"#1E2439"} />
                </View>
              </View>
            </View>
          </View>
          
        </View>
      </View>
      {/* Footer */}
      <View style={{
        position: "absolute", flex: 1,
        width: "100%",
        bottom: 0,
        flexDirection: "row", alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#FFFFFF",
        height: 50,
      }}
      >
        <Home onPress={() => {
          navigation.navigate("FirstScreen")
        }
        } height={30} width={22} fill={"#d4e6f1"} />
        <Ratio height={30} width={22} fill={"#d4e6f1"} />
        <Time height={30} width={22} fill={"#d4e6f1"} />
        <User height={30} width={22} fill={"#d4e6f1"} />

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  transaction: {
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: .5,
    color: "#4b5f8d"
  },
  elevation: {
    backgroundColor: "#fdfdfd",
    elevation: 3,
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
  circleBackground: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
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
    color: "#4b5f8d"
  },
  entertainItemsText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4b5f8d"
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

export default ThirdScreen;