// CountryPickerComponent.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

const CountryPickerComponent = ({
  phoneNumber = '',
  setPhoneNumber = () => {},
  countryCode = 'IN',
  setCountryCode = () => {},
  countryCallingCode = '+91',
  setCountryCallingCode = () => {},
}) => {
  return (
    <View style={styles.phoneContainer}>
      <CountryPicker
        withCallingCode
        withFlag
        withCountryNameButton={false}
        withAlphaFilter
        withCallingCodeButton
        countryCode={countryCode}
        onSelect={(country) => {
          setCountryCode(country.cca2);
          setCountryCallingCode(`+${country.callingCode[0]}`);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder={`Phone number (${countryCallingCode})`}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
});

export default CountryPickerComponent;
