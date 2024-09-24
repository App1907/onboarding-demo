
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

const BackgroundImage = (props) => {

  return (
    <ImageBackground
      source={require('../assets/icons/background.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.cont}>
          <Image
            source={require('../assets/icons/quivio-logo.png')}
            style={styles.image1}
          />
          <View style={styles.texts}>
            <Text style={styles.text4}>QUIVIO</Text>
            <Text style={styles.text2}>
              Your Personal CarWash Assistant</Text>
          </View>

        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.box}>
            <View style={styles.item}>
              <Image
                source={require('../assets/icons/chart.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Aesthetical{'\n'}Graphics</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../assets/icons/clock.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Real time{'\n'}statistics</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../assets/icons/clock.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Track equipment{'\n'}usage</Text>
            </View>
          </View>
        </ScrollView>


      </View>

      {props.children}

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 35,
  },
  overlay: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',

  },
  box: {
    flexDirection: 'row',
    //marginTop: 10,
    gap: 50,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  image1: {
    marginTop: 30,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  item: {
    alignItems: 'center',
    //marginHorizontal: 25,
    flexDirection: 'row'
  },
  texts: {
    marginTop: 5
  },
  image: {
    width: 16,
    height: 16,
    marginTop: 10,
    marginRight: 10,
  },
  cont: {
    //backgroundColor: '#148fcd',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  text: {
    color: 'white',
    fontSize: 14,

  },
  text1: {
    color: 'white',
    fontSize: 12,
    marginRight: 25
  },
  text2: {
    color: '#F8F9F9',
    fontFamily: 'Montserrat',
    fontSize: 17,
    fontWeight: '400',
    marginTop: 5,
  },
  text4: {
    color: '#F8F9F9',
    fontFamily: 'Montserrat',
    fontSize: 28,
    fontWeight: 'bold',
    //marginTop: 10,
  }
});

export default BackgroundImage;






// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

// const BackgroundImage = (props) => {

//   return (
//     <ImageBackground
//       source={require('../assets/icons/background.png')}
//       style={styles.backgroundImage}
//     >
//       <View style={styles.overlay}>
//         <View style={styles.cont}>
//           <Image
//             source={require('../assets/icons/quivio-logo.png')}
//             style={styles.image}
//           />
//           <View style={styles.texts}>
//             <Text style={styles.text4}>QUIVIO</Text>
//             <Text style={styles.text2}>
//               Your Personal CarWash Assistant</Text>
//           </View>

//         </View>

//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.scrollViewContent}
//         >
//           <View style={styles.box}>
//             <View style={styles.item}>
//               <Image
//                 source={require('../assets/icons/chart.png')}
//                 style={styles.image}
//               />
//               <Text style={styles.text}>Aesthetical{'\n'}Graphics</Text>
//             </View>
//             <View style={styles.item}>
//               <Image
//                 source={require('../assets/icons/clock.png')}
//                 style={styles.image}
//               />
//               <Text style={styles.text}>Real time{'\n'}statistics</Text>
//             </View>
//             <View style={styles.item}>
//               <Image
//                 source={require('../assets/icons/clock.png')}
//                 style={styles.image}
//               />
//               <Text style={styles.text}>Track equipment{'\n'}usage</Text>
//             </View>
//           </View>
//         </ScrollView>


//       </View>

//       {props.children}

//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,


//   },
//   scrollViewContent: {
//     paddingHorizontal: 15,
//   },
//   overlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   box: {
//     flexDirection: 'row',
//     marginTop: 10,
//     gap: 5,
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//   },
//   image1: {

//     width: 12,
//     height: 12,
//     marginTop: 5

//   },
//   item: {
//     alignItems: 'center',
//     marginHorizontal: 25,
//     flexDirection: 'row'
//   },
//   texts: {
//     marginTop: 20
//   },
//   image: {

//     marginTop: 10,
//     marginRight: 10,
//   },
//   cont: {
//     marginRight: 100,
//     marginTop: 100,

//   },
//   text: {
//     color: 'white',
//     fontSize: 14,


//   },
//   text1: {
//     color: 'white',
//     fontSize: 12,
//     marginRight: 25
//   },
//   text2: {
//     color: 'white',
//     fontSize: 16,
//     marginRight: 25,
//     marginTop: 10
//   },
//   text4: {
//     color: 'white',
//     fontSize: 30,
//     fontWeight: 'bold',
//   }
// });

// export default BackgroundImage;