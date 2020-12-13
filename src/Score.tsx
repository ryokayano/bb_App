import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { loadAll } from "./Store";
import { FAB, List, TextInput } from "react-native-paper";
import moment from "moment";
import { save } from "./Store";

export function Score() {
  const [score, setScore] = useState("");
  const [score2, setScore2] = useState("");
  const [score3, setScore3] = useState("");
  const [score4, setScore4] = useState("");
  const [score5, setScore5] = useState("");
  const [score6, setScore6] = useState("");
  const [score7, setScore7] = useState("");
  const [score8, setScore8] = useState("");
  const [score9, setScore9] = useState("");
  const [score10, setScore10] = useState("");
  const [score11, setScore11] = useState("");
  const [score12, setScore12] = useState("");
  const [score13, setScore13] = useState("");
  const [score14, setScore14] = useState("");
  const [score15, setScore15] = useState("");
  const [score16, setScore16] = useState("");
  const [score17, setScore17] = useState("");
  const [score18, setScore18] = useState("");
  const [score19, setScore19] = useState("");
  const [score20, setScore20] = useState("");
  const [score21, setScore21] = useState("");

  let frame1Result = 0;
  if (score === "x") {
    if (score3 === "x") {
      if (score5 === "x") {
        frame1Result = 30;
      } else {
        frame1Result = 20 + Number(score5);
      }
    } else if (score4 === "/") {
      frame1Result = 20;
    } else {
      frame1Result = 10 + Number(score3) + Number(score4);
    }
  } else if (score2 === "/") {
    if (score3 === "x") {
      frame1Result = 20;
    } else {
      frame1Result = 10 + Number(score3);
    }
  } else {
    frame1Result = Number(score) + Number(score2);
  }

  let frame2Result = 0;
  if (score3 === "x") {
    if (score5 === "x") {
      if (score7 === "x") {
        frame2Result = frame1Result + 30;
      } else {
        frame2Result = frame1Result + 20 + Number(score7);
      }
    } else if (score6 === "/") {
      frame2Result = frame1Result + 20;
    } else {
      frame2Result = frame1Result + 10 + Number(score5) + Number(score6);
    }
  } else if (score4 === "/") {
    if (score5 === "x") {
      frame2Result = frame1Result + 20;
    } else {
      frame2Result = frame1Result + 10 + Number(score5);
    }
  } else {
    frame2Result = frame1Result + Number(score3) + Number(score4);
  }

  let frame3Result = 0;
  if (score5 === "x") {
    if (score7 === "x") {
      if (score9 === "x") {
        frame3Result = frame2Result + 30;
      } else {
        frame3Result = frame2Result + 20 + Number(score9);
      }
    } else if (score8 === "/") {
      frame3Result = frame2Result + 20;
    } else {
      frame3Result = frame2Result + 10 + Number(score7) + Number(score8);
    }
  } else if (score6 === "/") {
    if (score7 === "x") {
      frame3Result = frame2Result + 20;
    } else {
      frame3Result = frame2Result + 10 + Number(score7);
    }
  } else {
    frame3Result = frame2Result + Number(score5) + Number(score6);
  }

  let frame4Result = 0;
  if (score7 === "x") {
    if (score9 === "x") {
      if (score11 === "x") {
        frame4Result = frame3Result + 30;
      } else {
        frame4Result = frame3Result + 20 + Number(score11);
      }
    } else if (score10 === "/") {
      frame4Result = frame3Result + 20;
    } else {
      frame4Result = frame3Result + 10 + Number(score9) + Number(score10);
    }
  } else if (score8 === "/") {
    if (score9 === "x") {
      frame4Result = frame3Result + 20;
    } else {
      frame4Result = frame3Result + 10 + Number(score9);
    }
  } else {
    frame4Result = frame3Result + Number(score7) + Number(score8);
  }

  let frame5Result = 0;
  if (score9 === "x") {
    if (score11 === "x") {
      if (score13 === "x") {
        frame5Result = frame4Result + 30;
      } else {
        frame5Result = frame4Result + 20 + Number(score13);
      }
    } else if (score12 === "/") {
      frame5Result = frame4Result + 20;
    } else {
      frame5Result = frame4Result + 10 + Number(score11) + Number(score12);
    }
  } else if (score10 === "/") {
    if (score11 === "x") {
      frame5Result = frame4Result + 20;
    } else {
      frame5Result = frame4Result + 10 + Number(score11);
    }
  } else {
    frame5Result = frame4Result + Number(score9) + Number(score10);
  }

  let frame6Result = 0;
  if (score11 === "x") {
    if (score13 === "x") {
      if (score15 === "x") {
        frame6Result = frame5Result + 30;
      } else {
        frame6Result = frame5Result + 20 + Number(score15);
      }
    } else if (score14 === "/") {
      frame6Result = frame5Result + 20;
    } else {
      frame6Result = frame5Result + 10 + Number(score13) + Number(score14);
    }
  } else if (score12 === "/") {
    if (score13 === "x") {
      frame6Result = frame5Result + 20;
    } else {
      frame6Result = frame5Result + 10 + Number(score13);
    }
  } else {
    frame6Result = frame5Result + Number(score11) + Number(score12);
  }

  let frame7Result = 0;
  if (score13 === "x") {
    if (score15 === "x") {
      if (score17 === "x") {
        frame7Result = frame6Result + 30;
      } else {
        frame7Result = frame6Result + 20 + Number(score17);
      }
    } else if (score16 === "/") {
      frame7Result = frame6Result + 20;
    } else {
      frame7Result = frame6Result + 10 + Number(score15) + Number(score16);
    }
  } else if (score14 === "/") {
    if (score15 === "x") {
      frame7Result = frame6Result + 20;
    } else {
      frame7Result = frame6Result + 10 + Number(score15);
    }
  } else {
    frame7Result = frame6Result + Number(score13) + Number(score14);
  }

  let frame8Result = 0;
  if (score15 === "x") {
    if (score17 === "x") {
      if (score19 === "x") {
        frame8Result = frame7Result + 30;
      } else {
        frame8Result = frame7Result + 20 + Number(score19);
      }
    } else if (score18 === "/") {
      frame8Result = frame7Result + 20;
    } else {
      frame8Result = frame7Result + 10 + Number(score17) + Number(score18);
    }
  } else if (score16 === "/") {
    if (score17 === "x") {
      frame8Result = frame7Result + 20;
    } else {
      frame8Result = frame7Result + 10 + Number(score17);
    }
  } else {
    frame8Result = frame7Result + Number(score15) + Number(score16);
  }

  let frame9Result = 0;
  if (score17 === "x") {
    if (score19 === "x") {
      if (score20 === "x") {
        frame9Result = frame8Result + 30;
      } else {
        frame9Result = frame8Result + 20 + Number(score20);
      }
    } else if (score20 === "/") {
      frame9Result = frame8Result + 20;
    } else {
      frame9Result = frame8Result + 10 + Number(score19) + Number(score20);
    }
  } else if (score18 === "/") {
    if (score19 === "x") {
      frame9Result = frame8Result + 20;
    } else {
      frame9Result = frame8Result + 10 + Number(score19);
    }
  } else {
    frame9Result = frame8Result + Number(score17) + Number(score18);
  }

  let frame10Result = 0;
  if (score19 === "x") {
    if (score20 === "x") {
      if (score21 === "x") {
        frame10Result = frame9Result + 30;
      } else {
        frame10Result = frame9Result + 20 + Number(score21);
      }
    } else if (score21 === "/") {
      frame10Result = frame9Result + 20;
    } else {
      frame10Result = frame9Result + 10 + Number(score20) + Number(score21);
    }
  } else if (score20 === "/") {
    if (score21 === "x") {
      frame10Result = frame9Result + 20;
    } else {
      frame10Result = frame9Result + 10 + Number(score21);
    }
  } else {
    frame10Result = frame9Result + Number(score19) + Number(score20);
  }

  const navigation = useNavigation();
  const toBack = () => {
    navigation.goBack();
  };
  // const onSave = () => {
  //   save(frame10Result, Date.now());
  //   navigation.goBack();
  // };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={styles.out}>
            <View style={styles.flame}>
              <Text style={styles.flameText}>1</Text>
            </View>
            <View style={styles.flame}>
              <Text style={styles.flameText}>2</Text>
            </View>
            <View style={styles.flame}>
              <Text style={styles.flameText}>3</Text>
            </View>
            <View style={styles.flame}>
              <Text style={styles.flameText}>4</Text>
            </View>
            <View style={styles.flame}>
              <Text style={styles.flameText}>5</Text>
            </View>
            <View style={styles.flame}>
              <Text style={styles.flameText}>6</Text>
            </View>
            <View style={styles.flame}>
              <Text style={styles.flameText}>7</Text>
            </View>
            <View style={styles.flame}>
              <Text style={styles.flameText}>8</Text>
            </View>
            <View style={styles.flame}>
              <Text style={styles.flameText}>9</Text>
            </View>
            <View style={styles.flame}>
              <Text style={styles.flameText}>10</Text>
            </View>
          </View>

          <View style={styles.out}>
            <View style={styles.scorenumber}>
              <View style={styles.scoreView}>
                  <TextInput
                    style={styles.scoreText}
                    onChangeText={(text) => {
                      setScore(text);
                    }}
                    keyboardType="numbers-and-punctuation"
                  />
              </View>
              <View style={styles.scoreView2}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore2(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
            </View>
            <View style={styles.scorenumber}>
              <View style={styles.scoreView}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore3(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
              <View style={styles.scoreView2}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore4(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
            </View>
            <View style={styles.scorenumber}>
              <View style={styles.scoreView}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore5(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
              <View style={styles.scoreView2}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore6(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
            </View>
            <View style={styles.scorenumber}>
              <View style={styles.scoreView}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore7(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
              <View style={styles.scoreView2}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore8(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
            </View>
            <View style={styles.scorenumber}>
              <View style={styles.scoreView}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore9(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
              <View style={styles.scoreView2}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore10(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
            </View>
            <View style={styles.scorenumber}>
              <View style={styles.scoreView}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore11(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
              <View style={styles.scoreView2}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore12(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
            </View>
            <View style={styles.scorenumber}>
              <View style={styles.scoreView}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore13(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
              <View style={styles.scoreView2}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore14(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
            </View>
            <View style={styles.scorenumber}>
              <View style={styles.scoreView}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore15(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
              <View style={styles.scoreView2}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore16(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
            </View>
            <View style={styles.scorenumber}>
              <View style={styles.scoreView}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore17(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
              <View style={styles.scoreView2}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore18(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
            </View>
            <View style={styles.scorenumber}>
              <View style={styles.scoreView}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore19(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
              <View style={styles.scoreView}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore20(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
              <View style={styles.scoreView2}>
                <TextInput
                  style={styles.scoreText}
                  onChangeText={(text) => {
                    setScore21(text);
                  }}
                  keyboardType="numbers-and-punctuation"
                />
              </View>
            </View>
          </View>

          <View style={styles.out}>
            <View style={styles.total}>
              <Text style={styles.totalText}>{frame1Result}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>{frame2Result}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>{frame3Result}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>{frame4Result}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>{frame5Result}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>{frame6Result}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>{frame7Result}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>{frame8Result}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>{frame9Result}</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.totalText}>{frame10Result}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.scoreView3}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{"保存"}</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "white",
  },
  out: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "moccasin",
  },
  flame: {
    borderWidth: 1,
    padding: 5,
    width: 120,
  },
  scorenumber: {
    borderWidth: 1,
    width: 120,
    flexDirection: "row",
  },
  total: {
    borderWidth: 1,
    padding: 5,
    width: 120,
  },
  flameText: {
    fontSize: 35,
    textAlign: "center",
    justifyContent: "center",
  },
  scoreText: {
    fontSize: 25,
    textAlign: "center",
    justifyContent: "flex-end",
    backgroundColor: "moccasin",
  },
  totalText: {
    fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
  },
  scoreView: {
    flex: 1,
    borderRightWidth: 1,
    justifyContent: "center",
  },
  scoreView2: {
    flex: 1,
    justifyContent: "center",
  },
  scoreView3: {
    flex: 3,
    backgroundColor: "#f4511e",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "gray",
    width: "25%",
    height: 70,
    position: "absolute",
    right: 30,
    bottom: 350,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
});
