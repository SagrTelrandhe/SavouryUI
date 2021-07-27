import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-easy-icon';
import CheckBox from '@react-native-community/checkbox';

const LoginButtons = props => {
  return (
    <TouchableOpacity
      onPress={props.onpress}
      style={{
        width: 344,
        height: 42,
        backgroundColor: props.buttonColor,
        marginTop: '1%',
        flexDirection: 'row',
        padding: '1%',
        justifyContent: 'center',
        marginBottom: 16,
      }}>
      <Icon
        type={props.iconType}
        name={props.iconName}
        color="white"
        size={21}
        style={{flex: 0.2, marginLeft: '2.5%', marginVertical: 7.5}}
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

export default JoinUS = props => {
  const [customerName, setCustomerName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [mobNumber, setMobNumber] = useState('');
  const [check, setCheck] = useState(false);

  const gotoEnableLocation = () => {
    console.log('Alert: Your Data is recorded');
    alert(`Login Successfull! Your Data is recorded.`);
    props.navigation.navigate('EnableLocation');
  };

  const GotoEnableLocationViaLoginButtons = () => {
    alert(`Hi! Logging through your selected account.`);
    props.navigation.navigate('EnableLocation');
  };

  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 0.8, backgroundColor: 'white', marginTop: 40}}>
          <View
            style={{
              flex: 0.125,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  flex: 0.25,
                  backgroundColor: 'white',
                  paddingLeft: '1%',
                }}
                onPress={goBack}>
                <Icon
                  type="materialicons"
                  name="keyboard-backspace"
                  color="#010101"
                  size={24}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: '#1C1C1C',
                  fontFamily: 'NunitoExtrabold-BW0lB',
                  fontSize: 18,
                  flex: 0.75,
                  backgroundColor: 'white',
                  paddingLeft: '22.5%',
                }}>
                Join Us
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.11,
              backgroundColor: 'white',
              paddingBottom: '2%',
              marginTop: 16,
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 20,
                color: '#606060',
                fontFamily: 'NunitoRegular-vmABZ',
                textAlign: 'center',
                paddingHorizontal: '13%',
              }}>
              Create an account so you can stay up to date with awesome recipes
            </Text>
          </View>
          <View
            style={{
              flex: 0.5,
              backgroundColor: 'white',
              paddingHorizontal: '5.5%',
              paddingTop: '1%',
              marginTop: 24,
            }}>
            <TextInput
              style={{
                height: '25%',
                color: '#1C1C1C',
                backgroundColor: '#FFFFFF',
                fontSize: 16,
                borderColor: '#E6E6E6',
                borderRadius: 5,
                borderWidth: 1,
                fontFamily: 'NunitoRegular-vmABZ',
                marginBottom: 16,
              }}
              placeholder="First and Last name"
              onChangeText={cName => {
                setCustomerName(cName);
              }}
              placeholderTextColor="#A3A3A3"
            />
            {console.log('Customer Name:', customerName)}
            <TextInput
              style={{
                height: '25%',
                color: '#1C1C1C',
                backgroundColor: '#FFFFFF',
                fontSize: 16,
                borderColor: '#E6E6E6',
                borderRadius: 5,
                borderWidth: 1,
                fontFamily: 'NunitoRegular-vmABZ',
                marginBottom: 16,
              }}
              placeholder="Email address"
              onChangeText={email => {
                setEmailAddress(email);
              }}
              placeholderTextColor="#A3A3A3"
            />
            {console.log('Email Address:', emailAddress)}

            <TextInput
              style={{
                height: '25%',
                color: '#1C1C1C',
                backgroundColor: '#FFFFFF',
                fontSize: 16,
                borderColor: '#E6E6E6',
                borderRadius: 5,
                borderWidth: 1,
                fontFamily: 'NunitoRegular-vmABZ',
                marginBottom: 16,
              }}
              placeholder="Password (8 - 20 characters)"
              secureTextEntry={true}
              onChangeText={pass => {
                setPassword(pass);
              }}
              placeholderTextColor="#A3A3A3"
            />
            {console.log('Password:', password)}

            <TextInput
              style={{
                height: '25%',
                color: '#1C1C1C',
                backgroundColor: '#FFFFFF',
                fontSize: 16,
                borderColor: '#E6E6E6',
                borderRadius: 5,
                borderWidth: 1,
                fontFamily: 'NunitoRegular-vmABZ',
                marginBottom: 16,
              }}
              placeholder="Mobile number (For delivery updates)"
              onChangeText={mNumber => {
                setMobNumber(mNumber);
              }}
              placeholderTextColor="#A3A3A3"
            />
            {console.log('Mobile Number', mobNumber)}

            {/* {console.log('Customer Details:', this.state)} */}
          </View>
          <View
            style={{
              flex: 0.2,
              backgroundColor: 'white',
              marginTop: '17.5%',
              paddingHorizontal: '5.5%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 0.08,
                backgroundColor: 'white',
                alignItems: 'center',
                marginTop: '1%',
              }}>
              <CheckBox
                value={check}
                onValueChange={() => setCheck(!check)}
                tintColors={{true: '#79B955', false: '#E6E6E6'}}
                style={{backgroundColor: '#FFFFFF', height: 16}}
              />
            </View>
            <View style={{flex: 0.95, backgroundColor: 'white'}}>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 20,
                  color: '#606060',
                  fontFamily: 'NunitoRegular-vmABZ',
                  textAlign: 'left',
                }}>
                By joining Savory you agree that you are over 18 years of age or
                older, will receive email updates, promotions and special
                offers.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => gotoEnableLocation()}
            style={{
              // flex: 0.09,
              height: 42,
              width: 344,
              alignSelf: 'center',
              backgroundColor: '#D53C25',
              justifyContent: 'center',
              marginTop: 27,
              paddingVertical: 11,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'NunitoBold-1GD50',
                color: '#FFFFFF',
                textAlign: 'center',
              }}>
              Join Us
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            // flex: 0.35,
            marginTop: 118,
            backgroundColor: 'white',
            alignItems: 'center',
            paddingTop: '10%',
          }}>
          <Text
            style={{
              fontFamily: 'NunitoSemibold-w1G82',
              fontSize: 22,
              lineHeight: 26,
              paddingBottom: '2%',
              marginBottom: 32,
            }}>
            Continue With
          </Text>

          <LoginButtons
            iconName="instagram"
            iconType="antdesign"
            buttonColor="#1C1C1C"
            buttonName="Instagram"
            onpress={() => GotoEnableLocationViaLoginButtons()}
          />
          <LoginButtons
            iconName="facebook-square"
            iconType="antdesign"
            buttonColor="#4760A9"
            buttonName="Facebook"
            onpress={() => GotoEnableLocationViaLoginButtons()}
          />

          <LoginButtons
            iconName="twitter"
            iconType="feather"
            buttonColor="#1DA1F2"
            buttonName="Twitter"
            onpress={() => GotoEnableLocationViaLoginButtons()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

// class JoinUS extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       customerName: '',
//       emailAddress: '',
//       password: '',
//       mobNumber: '',
//       check: false,
//     };
//   }

//   gotoEnableLocation = () => {
//     console.log('Alert: Your Data is recorded');
//     alert(`Login Successfull! Your Data is recorded.`);
//     this.props.navigation.navigate('EnableLocation');
//   };

//   GotoEnableLocationViaLoginButtons = () => {
//     alert(`Hi! Logging through your selected account.`);
//     this.props.navigation.navigate('EnableLocation');
//   };

//   goBack = () => {
//     this.props.navigation.goBack();
//   };

//   render = () => {
//     return (
//       <View style={{flex: 1, backgroundColor: 'powderblue'}}>
//         <View style={{flex: 0.8, backgroundColor: 'white'}}>
//           <View
//             style={{
//               flex: 0.125,
//               backgroundColor: 'white',
//               justifyContent: 'center',
//             }}>
//             <View style={{flexDirection: 'row'}}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.25,
//                   backgroundColor: 'white',
//                   paddingLeft: '1%',
//                 }}
//                 onPress={this.goBack}>
//                 <Icon
//                   type="materialicons"
//                   name="keyboard-backspace"
//                   color="#010101"
//                   size={24}
//                 />
//               </TouchableOpacity>
//               <Text
//                 style={{
//                   color: '#1C1C1C',
//                   fontFamily: 'NunitoExtrabold-BW0lB',
//                   fontSize: 18,
//                   flex: 0.75,
//                   backgroundColor: 'white',
//                   paddingLeft: '22.5%',
//                 }}>
//                 Join Us
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{flex: 0.11, backgroundColor: 'white', paddingBottom: '2%'}}>
//             <Text
//               style={{
//                 fontSize: 16,
//                 lineHeight: 20,
//                 color: '#606060',
//                 fontFamily: 'NunitoRegular-vmABZ',
//                 textAlign: 'center',
//                 paddingHorizontal: '13%',
//               }}>
//               Create an account so you can stay up to date with awesome recipes
//             </Text>
//           </View>
//           <View
//             style={{
//               flex: 0.5,
//               backgroundColor: 'white',
//               paddingHorizontal: '5.5%',
//               paddingTop: '1%',
//             }}>
//             <TextInput
//               style={{
//                 height: '25%',
//                 color: '#1C1C1C',
//                 backgroundColor: '#FFFFFF',
//                 fontSize: 16,
//                 borderColor: '#E6E6E6',
//                 borderRadius: 5,
//                 borderWidth: 1,
//                 fontFamily: 'NunitoRegular-vmABZ',
//                 marginBottom: 4,
//               }}
//               placeholder="First and Last name"
//               onChangeText={cName => this.setState({customerName: cName})}
//               placeholderTextColor="#A3A3A3"
//             />

//             <TextInput
//               style={{
//                 height: '25%',
//                 color: '#1C1C1C',
//                 backgroundColor: '#FFFFFF',
//                 fontSize: 16,
//                 borderColor: '#E6E6E6',
//                 borderRadius: 5,
//                 borderWidth: 1,
//                 fontFamily: 'NunitoRegular-vmABZ',
//                 marginBottom: 4,
//               }}
//               placeholder="Email address"
//               onChangeText={email => this.setState({emailAddress: email})}
//               placeholderTextColor="#A3A3A3"
//             />

//             <TextInput
//               style={{
//                 height: '25%',
//                 color: '#1C1C1C',
//                 backgroundColor: '#FFFFFF',
//                 fontSize: 16,
//                 borderColor: '#E6E6E6',
//                 borderRadius: 5,
//                 borderWidth: 1,
//                 fontFamily: 'NunitoRegular-vmABZ',
//                 marginBottom: 4,
//               }}
//               placeholder="Password (8 - 20 characters)"
//               secureTextEntry={true}
//               onChangeText={pass => {
//                 this.setState({password: pass});
//               }}
//               placeholderTextColor="#A3A3A3"
//             />

//             <TextInput
//               style={{
//                 height: '25%',
//                 color: '#1C1C1C',
//                 backgroundColor: '#FFFFFF',
//                 fontSize: 16,
//                 borderColor: '#E6E6E6',
//                 borderRadius: 5,
//                 borderWidth: 1,
//                 fontFamily: 'NunitoRegular-vmABZ',
//               }}
//               placeholder="Mobile number (For delivery updates)"
//               onChangeText={mNumber => {
//                 this.setState({mobNumber: mNumber});
//               }}
//               placeholderTextColor="#A3A3A3"
//             />
//             {console.log('Customer Details:', this.state)}
//           </View>
//           <View
//             style={{
//               flex: 0.2,
//               backgroundColor: 'white',
//               marginTop: '4.5%',
//               paddingHorizontal: '5.5%',
//               flexDirection: 'row',
//             }}>
//             <View
//               style={{
//                 flex: 0.08,
//                 backgroundColor: 'white',
//                 alignItems: 'center',
//                 marginTop: '1%',
//               }}>
//               <CheckBox
//                 value={this.state.check}
//                 onValueChange={() => {
//                   this.setState({check: !this.state.check});
//                 }}
//                 tintColors={{true: '#79B955', false: '#E6E6E6'}}
//                 style={{backgroundColor: '#FFFFFF', height: 16}}
//               />
//             </View>
//             <View style={{flex: 0.95, backgroundColor: 'white'}}>
//               <Text
//                 style={{
//                   fontSize: 13,
//                   lineHeight: 20,
//                   color: '#606060',
//                   fontFamily: 'NunitoRegular-vmABZ',
//                   textAlign: 'left',
//                 }}>
//                 By joining Savory you agree that you are over 18 years of age or
//                 older, will receive email updates, promotions and special
//                 offers.
//               </Text>
//             </View>
//           </View>

//           <TouchableOpacity
//             onPress={this.gotoEnableLocation}
//             style={{
//               flex: 0.09,
//               width: '90%',
//               alignSelf: 'center',
//               backgroundColor: '#D53C25',
//               justifyContent: 'center',
//             }}>
//             <Text
//               style={{
//                 fontSize: 16,
//                 fontFamily: 'NunitoBold-1GD50',
//                 color: '#FFFFFF',
//                 textAlign: 'center',
//               }}>
//               Join Us
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flex: 0.35,
//             backgroundColor: 'white',
//             alignItems: 'center',
//             paddingTop: '10%',
//           }}>
//           <Text
//             style={{
//               fontFamily: 'NunitoSemibold-w1G82',
//               fontSize: 22,
//               lineHeight: 26,
//               paddingBottom: '2%',
//             }}>
//             Continue With
//           </Text>

//           <LoginButtons
//             iconName="instagram"
//             iconType="antdesign"
//             buttonColor="#1C1C1C"
//             buttonName="Instagram"
//             onpress={this.GotoEnableLocationViaLoginButtons}
//           />
//           <LoginButtons
//             iconName="facebook-square"
//             iconType="antdesign"
//             buttonColor="#4760A9"
//             buttonName="Facebook"
//             onpress={this.GotoEnableLocationViaLoginButtons}
//           />

//           <LoginButtons
//             iconName="twitter"
//             iconType="feather"
//             buttonColor="#1DA1F2"
//             buttonName="Twitter"
//             onpress={this.GotoEnableLocationViaLoginButtons}
//           />
//         </View>
//       </View>
//     );
//   };
// }
// export default JoinUS;
