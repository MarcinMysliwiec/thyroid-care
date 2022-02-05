import React, { useState } from 'react'
import { Dimensions, Image, StatusBar, StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import { ContentWrapperWithMenu, CustomText } from '../Components';
import 'moment/locale/pl';

import { LineChart } from "react-native-chart-kit";
import { Colors } from "../helpers/colors";

const initData = {
  // labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
  labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
  datasets: [
    {
      id: 0,
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      color: (opacity = 1) => Colors.primary,
      bgColor: Colors.primary,

      label:'Hormony podstawowe',
      expanded: false,
      icon: require('../assets/img/chart.png'),
    },
    {
      id: 1,
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      color: (opacity = 1) => Colors.secondary,
      bgColor: Colors.secondary,

      label:'Hormony rozszerzone',
      expanded: false,
      icon: require('../assets/img/chart.png'),

    },
    {
      id: 2,
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      color: (opacity = 1) => Colors.third,
      bgColor: Colors.third,

      label:'Witaminy',
      expanded: false,
      icon: require('../assets/img/chart.png'),

    },
    {
      id: 3,
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      color: (opacity = 1) => 'yellow',
      bgColor: 'yellow',
      label:'Morfologia',
      expanded: false,
      icon: require('../assets/img/chart.png'),

    }
  ]
};


const AnalysisScreen = () => {
  StatusBar.setHidden(false);

  const [data, setData] = useState(initData);

  return (
    <ContentWrapperWithMenu style={{ width: '100%', }}>

      <View style={styles.headerContainer}>
        <CustomText style={styles.headerText}>Twoje wyniki</CustomText>
      </View>

      <View style={styles.body}>
        <View style={[styles.chart]}>
          <LineChart
            data={data}
            width={Dimensions.get("window").width} // from react-native
            height={Dimensions.get("window").height / 3}
            // yAxisLabel="$"
            // yAxisSuffix="k"

            chartConfig={{
              backgroundGradientFrom: Colors.dark,
              backgroundGradientTo: Colors.dark,
              decimalPlaces: 0,

              color: () => Colors.primary,
              labelColor: () => Colors.white,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
              }
            }}
          />
        </View>

        <ScrollView style={[styles.scrollableWrapper]}>
          <View style={[styles.buttonsWrapper]}>

            {data.datasets.map(obj => (
              <View style={[styles.buttonWrapper]} key={obj.id}>
                <TouchableOpacity style={[styles.button]}
                                  onPress={() => setData(prevState => {
                                    let dataset = prevState.datasets.map(el => (el.id === obj.id ? {...el, expanded: !el.expanded} : el))
                                    return {...prevState, datasets: dataset}
                                  })}
                >
                  <View style={[styles.menuItemImageWrapper, {backgroundColor: obj.bgColor}]}>
                    <Image source={require('../assets/img/chart.png')} style={[styles.menuItemImage]} />
                  </View>

                  <CustomText style={styles.textWhite}>{obj.label}</CustomText>
                  <Image source={require('../assets/img/down-arrow-white-1.png')} style={[styles.arrowDown, [obj.expanded ? {transform: [{rotate: '180deg'}]}  :  {transform: [{rotate: '0deg'}]}] ]}/>
                </TouchableOpacity>

                {obj.expanded &&
                  <View>
                    <Text>First part and </Text>
                    <Text>second part</Text>
                    <Text>third part</Text>
                    <Text>fourth part</Text>
                    <Text>fourth part</Text>
                    <Text>fourth part</Text>
                    <Text>fourth part</Text>
                  </View>
                }
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </ContentWrapperWithMenu>
  )
}

export default AnalysisScreen

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 25,
    paddingRight: 25,

  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 7,
  },

  chart: {},

  scrollableWrapper: {
    flex: 1,
  },

  buttonsWrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  buttonWrapper: {
    width: '80%',
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginBottom: 15,
  },


  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,

    paddingLeft: 8,
    paddingRight: 8,
  },
  menuItemImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    borderRadius: 10,

    resizeMode: 'contain'
  },
  menuItemImage: {
    height: 28,
    width: 28,
    resizeMode: 'contain'
  },
  arrowDown: {
    maxWidth: '20%',
    maxHeight: '50%',
    resizeMode: 'contain',
  }
});
