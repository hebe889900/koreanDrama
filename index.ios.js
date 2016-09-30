/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  NavigatorIOS,
  TabBarIOS
} from 'react-native';

import ShotList from "./app/ShotList";
import Icon from "react-native-vector-icons/FontAwesome";

export default class koreanDrama extends Component {

  constructor() {
        super();
        this.state = {
            selectedTab: "default"
        }
    }
  
  _renderContent(category: string, title: ?string) {
    return (
      <NavigatorIOS style={styles.wrapper}
        initialRoute={{
          component: ShotList,
          title: title,
          passProps: {filter: category}
        }}
      />
    );
  }

  render() {
    return (
      <TabBarIOS tintColor={"#ea4c89"}>
        <Icon.TabBarItem
          title="All"
          iconName="dribbble"
          selectedIconName="dribbble"
          selected={this.state.selectedTab === "default"}
          onPress={() => {
            this.setState({
              selectedTab: "default",
            });
          }}>
          {this._renderContent("default", "All")}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Debuts"
          iconName="trophy"
          selectedIconName="trophy"
          selected={this.state.selectedTab === "debuts"}
          onPress={() => {
            this.setState({
              selectedTab: "debuts",
            });
          }}>
          {this._renderContent("debuts", "Debuts")}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Animated"
          iconName="heart"
          selectedIconName="heart"
          selected={this.state.selectedTab === "animated"}
          onPress={() => {
            this.setState({
              selectedTab: "animated",
            });
          }}>
          {this._renderContent("animated", "Animated")}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Rebounds"
          iconName="lightbulb-o"
          selectedIconName="lightbulb-o"
          selected={this.state.selectedTab === "rebounds"}
          onPress={() => {
            this.setState({
              selectedTab: "rebounds",
            });
          }}>
          {this._renderContent("rebounds", "Rebounds")}
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    color: "white",
    margin: 50,
  },
  wrapper: {
    flex: 1
  }
});

AppRegistry.registerComponent('koreanDrama', () => koreanDrama);
