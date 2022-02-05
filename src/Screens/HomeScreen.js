import React, { useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import useAuth from '../hooks/useAuth';
import { ContentWrapperWithMenu, FeelingChanger, FeelingTabs, CustomText } from '../Components';
import CalendarStrip from 'react-native-calendar-strip';
import { Colors, RandomHEX } from '../helpers/colors.js';
import moment from 'moment';
import 'moment/locale/pl';


const availableTabs = [{
  name: 'sad',
  src: require('../assets/img/sad.png'),
  description: '',
  feelings: [
    [
      {
        name: 'sad',
        src: require('../assets/img/sad.png'),
      },
      {
        name: 'dead',
        src: require('../assets/img/dead.png'),
      },
      {
        name: 'glasses',
        src: require('../assets/img/glasses.png'),
      },
    ],
    [
      {
        name: 'confused',
        src: require('../assets/img/confused.png'),
      },
      {
        name: 'nice',
        src: require('../assets/img/nice.png'),
      },
      {
        name: 'crying',
        src: require('../assets/img/crying.png'),
      },
    ],
    [
      {
        name: 'confused',
        src: require('../assets/img/confused.png'),
      },
      {
        name: 'nice',
        src: require('../assets/img/nice.png'),
      },
      {
        name: 'nice',
        src: require('../assets/img/nice.png'),
      }
    ]
  ]
},
  {
    name: 'dead',
    src: require('../assets/img/dead.png'),
    feelings: [],
  },
  {
    name: 'glasses',
    src: require('../assets/img/glasses.png'),
    feelings: [],
  },
  {
    name: 'confused',
    src: require('../assets/img/confused.png'),
    feelings: [],
  },
  {
    name: 'nice',
    src: require('../assets/img/nice.png'),
    feelings: [],
  },
  {
    name: 'crying',
    src: require('../assets/img/crying.png'),
    feelings: [],
  }];

const HomeScreen = () => {
  const { user } = useAuth();
  const firstName = user.displayName.split(" ")[0]
  const [currentTab, setCurrentTab] = useState(0);

  const datesWhitelist = [{
    start: moment.unix(0),
    end: moment()
  }]

  const avCol = [RandomHEX(),RandomHEX(),RandomHEX(),RandomHEX(),RandomHEX(),RandomHEX()]

  const markedDatesArray = [{
    date: moment(),
    dots: [
      {
        color: avCol[0],
        selectedColor: avCol[0],
      },
      {
        color: avCol[1],
        selectedColor: avCol[1],
      },
      {
        color: avCol[2],
        selectedColor: avCol[2],
      },
    ],
  },
    {
      date: moment().subtract(3, 'days'),
      dots: [
        {
          color: avCol[3],
          selectedColor: avCol[3],
        },
        {
          color: avCol[4],
          selectedColor: avCol[4],
        },
        {
          color: avCol[5],
          selectedColor: avCol[5],
        },
      ],
    }]

  // console.log(markedDatesArray)
  // console.log(datesWhitelist)

  StatusBar.setHidden(false);

  const datesBlacklistFunc = date => {
    return date.isoWeekday() === 6; // disable Saturdays
  }


  return (
    <ContentWrapperWithMenu>
      <View style={styles.headerContainer}>
        <CustomText style={styles.headerText}>Witaj {firstName}.</CustomText>
        <CustomText style={styles.headerText}>Jak się dziś czujesz?</CustomText>
      </View>

      <View style={styles.body}>

      <FeelingTabs style={styles.feelingTabs} availableTabs={availableTabs} currentTab={currentTab}
                   setCurrentTab={setCurrentTab}/>

      <FeelingChanger style={styles.feelingChanger} availableFeelings={availableTabs[currentTab].feelings}/>

      <View style={styles.temp}>
        <CalendarStrip
          scrollable
          style={{ height: '100%', paddingTop: 5, paddingBottom: 5 }}
          calendarColor={Colors.dark}
          calendarHeaderStyle={{ color: 'white' }}
          dateNumberStyle={{ color: 'white' }}
          dateNameStyle={{ color: 'white' }}
          iconContainer={{ flex: 0.1 }}
          iconLeft={require('../assets/img/left-arrow.png')}
          iconRight={require('../assets/img/right-arrow.png')}

          highlightDateNumberStyle={{ color: Colors.secondary }}
          highlightDateNameStyle={{ color: Colors.secondary }}
          datesWhitelist={datesWhitelist}
          markedDates={markedDatesArray}
          maxDate={moment()}
        />
      </View>
      </View>

    </ContentWrapperWithMenu>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 25,
    paddingRight: 25,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
  },
  body: {
    flex: 6,
    width:'100%'
  },
  feelingTabs: {
    flex: 1,
  },
  feelingChanger: {
    flex: 4,
  },
  temp: {
    flex: 1,
  },

});
