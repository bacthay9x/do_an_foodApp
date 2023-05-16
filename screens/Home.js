import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/Home/HeaderTabs";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import { ScrollView } from "react-native";
import RestaurantItems, {
  localRestaurants,
} from "../components/Home/RestaurantItem";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTab";

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");
  // const getRestaurantsFromYelp = () => {
  //   const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=NewYork`;

  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };

  //   return fetch(yelpUrl, apiOptions)
  //     .then((res) => res.json())
  //     .then((json) =>
  //       setRestaurantData(
  //         json.businesses
  //         // json.businesses.filter((business) =>
  //         //   business.transactions.includes(activeTab.toLowerCase())
  //         // )
  //       )
  //     );
  // };
  // useEffect(() => {
  //   getRestaurantsFromYelp();
  // }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#eee", height: 30 }}></View>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
