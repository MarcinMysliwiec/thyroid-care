import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from '../helpers/colors.js';
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { ContentWrapper } from "./index";

const ContentWrapperWithMenu = props => {
  const navigation = useNavigation();

  const routes = useNavigationState(state => state.routes)
  const currentRoute = routes[routes.length - 1].name
  console.log('currentRoute:', currentRoute)

  return (
    <ContentWrapper style={[styles.container, props.style]}>
      <View style={styles.upperSection}>
        {props.children}
      </View>

      <View style={styles.downSection}>

        <TouchableOpacity activeOpacity={0.5}
                          style={[styles.menuItem]}
                          onPress={() => console.log('navigate - chart')}
        >
          <Image source={require('../assets/img/chart.png')}
                 style={styles.menuItemImage}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}
                          style={[styles.menuItem]}
                          onPress={() => console.log('navigate - pills')}
        >
          <Image source={require('../assets/img/pills.png')}
                 style={styles.menuItemImage}
          />
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.5}
                          style={[styles.menuItem, styles.menuItemMain, (currentRoute === "Home") ? styles.menuItemActive : null]}
                          onPress={() => navigation.navigate('Home')}
        >
          <Image source={require('../assets/img/plus.png')}
                 style={styles.menuItemImage}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}
                          style={[styles.menuItem]}
                          onPress={() => console.log('navigate - calendar')}
        >
          <Image source={require('../assets/img/calendar.png')}
                 style={styles.menuItemImage}
          />
        </TouchableOpacity>

        <TouchableOpacity sactiveOpacity={0.5}
                          style={[styles.menuItem, (currentRoute === "Options") ? styles.menuItemActive : null]}
                          onPress={() => navigation.navigate('Options')}
        >
          <Image source={(currentRoute === "Options") ? require('../assets/img/user.png') : require('../assets/img/user-image.jpg')}
                 style={[styles.userImage]}
          />
        </TouchableOpacity>

      </View>
    </ContentWrapper>
  )
}

export default ContentWrapperWithMenu

const styles = StyleSheet.create({
  upperSection: {
    flex: 1,
    // justifyContent: "space-between",
  },
  downSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: 15,
    paddingTop: 15,
  },
  menu: {},
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 45 / 2,
    width: 45,
    height: 45,
    overflow: "hidden",
  },
  menuItemMain: {
    borderRadius: 55 / 2,
    width: 55,
    height: 55,
  },
  menuItemActive: {
    backgroundColor: Colors.secondary,
  },
  menuItemImage: {
    maxWidth: '50%',
    maxHeight: '50%',
    resizeMode: 'contain'
  },
  userImage: {
    width: 45,
    height: 45,
  },
});
