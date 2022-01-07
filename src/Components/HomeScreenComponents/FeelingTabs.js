import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../helpers/colors.js';
import useSettings from '../../hooks/useSettings';

const FeelingTabs = (props) => {
  const { settings } = useSettings();
  const [firstIndex, setFirstIndex] = useState(0);
  const [startSlide, setStartSlide] = useState(0);
  const maxOnSite = parseInt(settings.windowWidth / 80);

  const moveLeftFeelings = () => {
    if (firstIndex === 0) return;
    setFirstIndex(firstIndex - 1)
  }

  const moveRightFeelings = () => {
    if (firstIndex + maxOnSite === props.availableTabs.length) return;
    setFirstIndex(firstIndex + 1)
  }

  return (
    <View style={[styles.container, props.style]}
          onTouchStart={e => {
            setStartSlide(e.nativeEvent.pageX)
          }}
          onTouchEnd={e => {
            // If slide is smaller than 20px just return
            if (Math.abs(e.nativeEvent.pageX - startSlide) < 20) return;
            // if user moved to right move tabs right else left
            (e.nativeEvent.pageX < startSlide) ? moveRightFeelings() : moveLeftFeelings()
          }}
    >

      <View style={{ flex: 1 }}>
        {firstIndex !== 0 &&
          <TouchableOpacity
            style={[styles.angleItem]}
            activeOpacity={0.5}
            onPress={() => moveLeftFeelings()}>
            <Image
              source={require('../../assets/img/left-arrow.png')}
              style={[styles.imageFullWidth]}
            />
          </TouchableOpacity>

        }
      </View>

      <View style={styles.feelingContainer}>
        {props.availableTabs.map((obj, index) => {
          // console.log(index, obj, currentFeeling, currentFeeling === index, Dimensions.get('window').width);
          if (index >= firstIndex && index < maxOnSite + firstIndex) {
            return (
              <TouchableOpacity activeOpacity={0.5} key={index}
                // style current tab
                                style={[styles.buttonItem, props.currentTab === index ? styles.buttonItemCurrent : null]}
                                onPress={() => props.setCurrentTab(index)}
              >
                <Image
                  source={obj.src}
                  style={styles.imageFullWidth}
                />
              </TouchableOpacity>
            );
          }


        })}
      </View>


      <View style={{ flex: 1 }}>
        {firstIndex + maxOnSite !== props.availableTabs.length &&
          <TouchableOpacity
            style={[styles.angleItem]}
            activeOpacity={0.5}
            onPress={() => moveRightFeelings()}>
            <Image
              source={require('../../assets/img/right-arrow.png')}
              style={[styles.imageFullWidth]}
            />
          </TouchableOpacity>

        }
      </View>
    </View>
  )
}

export default FeelingTabs

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

  },
  feelingContainer: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  angleItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: Colors.primary,
    aspectRatio: 1,
    height: undefined,
    borderRadius: 100,
  },
  buttonItemCurrent: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.third,
  },
  imageFullWidth: {
    aspectRatio: 1,
    height: undefined,

    width: '60%',
  },
});
