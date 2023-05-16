import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 10,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Trang chủ" />
      <Icon icon="search" text="Tìm kiếm" />
      <Icon icon="shopping-bag" text="Giỏ hàng" />
      <Icon icon="receipt" text="Đặt hàng" />
      <Icon icon="user" text="Tài khoản" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={20}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
