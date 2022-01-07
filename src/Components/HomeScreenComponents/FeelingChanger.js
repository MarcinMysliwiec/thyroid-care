import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../helpers/colors.js';
import useSettings from '../../hooks/useSettings';

const FeelingChanger = (props) => {
  const { settings } = useSettings();

  return (
    <View style={[styles.container, props.style]}>
      {props.availableFeelings.map((arr, arrIndex) => {
        {/* ROW */}
        return (<View style={[styles.fellingRow]} key={'column-' + arrIndex}>
          {arr.map((obj, objIndex) => {
            {/* OBJECT */}
            return (
              <TouchableOpacity activeOpacity={0.5} key={objIndex}
                // style current tab
                                style={[styles.buttonItem]}
                // onPress={() => props.setCurrentTab(index)}
              >
                <Image
                  source={obj.src}
                  style={styles.imageFullWidth}
                />
              </TouchableOpacity>
            );
          })}
        </View>)
      })}
    </View>
  )
}

export default FeelingChanger

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 20,
  },
  fellingRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonItem: {
    flexBasis: '23%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.third,
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,

    aspectRatio: 1.25,
    width: undefined,
  },
  buttonItemCurrent: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.third,
  },
  imageFullWidth: {
    aspectRatio: 1,
    height: '70%',
    width: undefined,
  },
  angleRight: {
    transform: [{ rotate: '180deg' }],
  }


});
