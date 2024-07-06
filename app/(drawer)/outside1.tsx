import { getAllProductData } from "@/api/getRequests";
import React, { Component } from "react";
import { Button, Text, View } from "react-native";

const OutSide1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Get Product" onPress={getAllProductData}></Button>
      <Text> OutSide1 Screen</Text>
    </View>
  );
};

export default OutSide1;
