import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Mua ngay",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Nước ngọt",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bánh kẹo",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Đồ ăn nhanh",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Khuyến mãi",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Cafe và trà",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Món tráng miệng",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
