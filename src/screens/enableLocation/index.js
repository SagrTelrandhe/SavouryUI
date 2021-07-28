import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class EnableLocation extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{paddingHorizontal: 25, marginBottom: 14}}>
          <Text
            style={{
              fontSize: 22,
              lineHeight: 28,
              fontFamily: 'NunitoBold-1GD50',
              textAlign: 'center',
              color: '#1C1C1C',
            }}>
            Enjoy Best Restaurants Near Your Location
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontFamily: 'NunitoRegular-vmABZ',
              color: '#606060',
              textAlign: 'center',
            }}>
            Help us display your local delivery options by granting location
            permissions
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: '20%',
            width: '100%',
            position: 'absolute',
            bottom: 10,
          }}>
          <TouchableOpacity
            style={{
              height: '40%',
              width: '100%',
              backgroundColor: '#D53C25',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#FFFFFF',
                fontFamily: 'NunitoRegular-vmABZ',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Share Location
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('UseEffect');
            }}
            style={{
              height: '40%',
              width: '100%',
              backgroundColor: '#FFFFFF',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#1C1C1C',
                fontFamily: 'NunitoRegular-vmABZ',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Not Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}
export default EnableLocation;
