import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-easy-icon';

const SwiperSlides = props => {
  return (
    <View
      style={{
        height: '80%',
        width: '80%',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: '5%',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        <View style={{flex: 0.25, backgroundColor: 'white'}}></View>

        <View
          style={{
            flex: 2,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1, backgroundColor: '#E6E6E6'}}>
            {/* <Image
              source={require('../../assets/images/Sagar.png')}
              style={{flex: 1}}
            /> */}
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#1C1C1C',
                fontSize: 16,
                lineHeight: 20,
                fontFamily: 'NunitoBold-1GD50',
                fontWeight: 'bold',
              }}>
              {props.name}
            </Text>
            <Text
              style={{
                fontFamily: 'NunitoRegular-vmABZ',
                fontSize: 14,
                lineHeight: 20,
                color: '#606060',
              }}>
              Copywriter
            </Text>
          </View>
        </View>
        <View style={{flex: 0.25}}></View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text
          style={{
            color: '#606060',
            fontSize: 15.3,
            marginTop: '3%',
            textAlign: 'center',
          }}>
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum
          tortor quam porttitor, facilisis luctus tincidunt.”
        </Text>
      </View>
    </View>
  );
};

// const GotoEnableLocationViaInsta = () => {
//   alert(`Hi Logging through Instagram`);
//   // props.navigation.navigate('enableLocation');
//   console.log('vlaues', this.props);
// };

const LoginButtons = props => {
  return (
    <TouchableOpacity
      onPress={props.onpress}
      style={{
        width: '90%',
        height: '20%',
        backgroundColor: props.buttonColor,
        marginTop: '1%',
        flexDirection: 'row',
        padding: '1%',
        justifyContent: 'center',
      }}>
      <Icon
        type={props.iconType}
        name={props.iconName}
        color="white"
        size={21}
        style={{flex: 0.2, marginLeft: '2.5%'}}
      />
      <Text
        style={{
          flex: 0.8,
          justifyContent: 'center',
          alignSelf: 'center',
          paddingLeft: '18%',
          fontSize: 16,
          fontFamily: 'NunitoBold-1GD50',
          color: 'white',
        }}>
        {props.buttonName}
      </Text>
    </TouchableOpacity>
  );
};

class GoOn extends React.Component {
  constructor(props) {
    super(props);
  }

  // console.log('spring');
  // joinbyGoogle = () => {
  //   console.log('String');
  //   this.props.navigation.navigate('joinUS')
  // }
  GotoEnableLocationViaInsta = () => {
    alert(`Hi! Logging through your Instagram account.`);
    this.props.navigation.navigate('EnableLocation');
    // console.log('vlaues', this.props);
  };
  GotoEnableLocationViaFacebook = () => {
    alert(`Hi! Logging through your Facebook account.`);
    this.props.navigation.navigate('EnableLocation');
  };
  GotoEnableLocationViaTwitter = () => {
    alert(`Hi! Logging through your Twitter account.`);
    this.props.navigation.navigate('EnableLocation');
  };
  GotoJoinUS = () => {
    this.props.navigation.navigate('JoinUS');
  };
  render = () => {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingTop: '2%',
            paddingRight: '50%',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/logo/Logo.png')}
            style={{flex: 0.7}}
          />
        </View>

        <View style={{flex: 1.2, backgroundColor: 'white'}}>
          <Swiper
            dotStyle={{
              backgroundColor: '#F4F4F4',
              width: 10,
              height: 10,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 3,
              marginBottom: 0,
              borderRadius: 0,
            }}
            activeDotStyle={{
              backgroundColor: '#D53C25',
              width: 10,
              height: 10,
              borderRadius: 0,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 3,
              marginBottom: 0,
            }}>
            <SwiperSlides name="Ratan Tata" />
            <SwiperSlides name="Sagar Telrandhe" />
            <SwiperSlides name="Elon Musk" />
          </Swiper>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'NunitoSemibold-w1G82',
              color: '#1C1C1C',
              fontSize: 22,
            }}>
            Continue with
          </Text>
          <View>
            <LoginButtons
              iconName="instagram"
              iconType="antdesign"
              buttonColor="#1C1C1C"
              buttonName="Instagram"
              onpress={
                this.GotoEnableLocationViaInsta
                // console.log(
                //   'hello',
                //   this.props.navigation.navigate('EnableLocation'),
                // )
              }
            />

            <LoginButtons
              iconName="facebook-square"
              iconType="antdesign"
              buttonColor="#4760A9"
              buttonName="Facebook"
              onpress={this.GotoEnableLocationViaFacebook}
            />

            <LoginButtons
              iconName="twitter"
              iconType="feather"
              buttonColor="#1DA1F2"
              buttonName="Twitter"
              onpress={this.GotoEnableLocationViaTwitter}
            />

            <LoginButtons
              iconName="envelope"
              iconType="simple-line-icon"
              buttonColor="#D53C25"
              buttonName="Email Address"
              onpress={this.GotoJoinUS}
            />
          </View>
        </View>
      </View>
    );
  };
}
export default GoOn;
