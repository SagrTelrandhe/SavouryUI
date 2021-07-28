import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState('');

  useEffect(() => {
    if (count >= 5) {
      setState('Oops! You Exceeded the counter. ');
      console.warn('Counter Exceeded!');
    } else {
      setState('Increase the counter.');
    }
  }, [count]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50, fontWeight: 'bold', color: 'black'}}>
        {count}
      </Text>
      <TouchableOpacity
        style={{
          height: '7.5%',
          backgroundColor: 'tomato',
          width: '80%',
        }}
        onPress={() => {
          setCount(count + 1);
        }}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFFFFF',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Counter
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text>{state}</Text>
      </View>
    </View>
  );
};
export default UseEffect;
