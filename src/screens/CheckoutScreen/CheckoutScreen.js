import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles'

class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'Gayatri sargam',
      email: 'sargamgayatri0803@gmail.com',
      phone: '9158577616',
      address: 'ASHIRWAD NAGAR KAMATGHAR BHIWANDI',
      pinCode: '123456',
      city: 'New York',
      state: 'NY',
      orderNotes: 'Special instructions for delivery',
      selectedPayment: 'cod',
    };
  }

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handlePaymentSelect = (paymentType) => {
    this.setState({ selectedPayment: paymentType });
  };

  handlePlaceOrder = () => {
    console.log('Order placed with data:', this.state);
    // Handle order placement logic here
  };

  renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity 
      onPress={() => this.props.navigation.goBack()}
      style={styles.backButton}>
        <Feather name="arrow-left" size={wp('6%')} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Checkout</Text>
      <View style={styles.headerRight} />
    </View>
  );

  renderShippingInfo = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Icon name="local-shipping" size={wp('6%')} color="#2474F5" />
        <Text style={styles.sectionTitle}>Shipping Information</Text>
      </View>
      
      <Text style={styles.subSectionTitle}>Shipping Address</Text>
      
      <View style={styles.row}>
        <View style={styles.halfWidth}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={this.state.fullName}
            onChangeText={(value) => this.handleInputChange('fullName', value)}
            placeholder="Enter full name"
          />
        </View>
        <View style={styles.halfWidth}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={(value) => this.handleInputChange('email', value)}
            placeholder="Enter email"
            keyboardType="email-address"
          />
        </View>
      </View>

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={this.state.phone}
        onChangeText={(value) => this.handleInputChange('phone', value)}
        placeholder="Enter 10-digit number"
        keyboardType="phone-pad"
      />
      <Text style={styles.helperText}>Enter a 10-digit number without spaces or special characters</Text>

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={this.state.address}
        onChangeText={(value) => this.handleInputChange('address', value)}
        placeholder="Enter your address"
        multiline
        numberOfLines={3}
      />

      <View style={styles.row}>
        <View style={styles.thirdWidth}>
          <Text style={styles.label}>PIN Code</Text>
          <TextInput
            style={styles.input}
            value={this.state.pinCode}
            onChangeText={(value) => this.handleInputChange('pinCode', value)}
            placeholder="123456"
            keyboardType="numeric"
          />
          <Text style={styles.helperText}>Enter a 6-digit PIN code</Text>
        </View>
        <View style={styles.thirdWidth}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={[styles.input, styles.disabledInput]}
            value={this.state.city}
            editable={false}
            placeholder="Auto-populated"
          />
          <Text style={styles.helperText}>Auto-populated from PIN code</Text>
        </View>
        <View style={styles.thirdWidth}>
          <Text style={styles.label}>State</Text>
          <TextInput
            style={[styles.input, styles.disabledInput]}
            value={this.state.state}
            editable={false}
            placeholder="Auto-populated"
          />
          <Text style={styles.helperText}>Auto-populated from PIN code</Text>
        </View>
      </View>

      <Text style={styles.label}>Order Notes (Optional)</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={this.state.orderNotes}
        onChangeText={(value) => this.handleInputChange('orderNotes', value)}
        placeholder="Special instructions for delivery"
        multiline
        numberOfLines={2}
      />
    </View>
  );

  renderPaymentMethod = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Icon name="payment" size={wp('6%')} color="#2474F5" />
        <Text style={styles.sectionTitle}>Payment Method</Text>
      </View>
      
      <Text style={styles.subSectionTitle}>Select Payment Option</Text>
      
      <TouchableOpacity
        style={[
          styles.paymentOption,
          this.state.selectedPayment === 'cod' && styles.selectedPaymentOption
        ]}
        onPress={() => this.handlePaymentSelect('cod')}
      >
        <View style={styles.radioContainer}>
          <View style={[
            styles.radioButton,
            this.state.selectedPayment === 'cod' && styles.radioButtonSelected
          ]}>
            {this.state.selectedPayment === 'cod' && (
              <View style={styles.radioButtonInner} />
            )}
          </View>
          <Text style={styles.paymentText}>Cash on Delivery (COD)</Text>
        </View>
        <Icon name="local-shipping" size={wp('5%')} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.paymentOption,
          this.state.selectedPayment === 'razorpay' && styles.selectedPaymentOption
        ]}
        onPress={() => this.handlePaymentSelect('razorpay')}
      >
        <View style={styles.radioContainer}>
          <View style={[
            styles.radioButton,
            this.state.selectedPayment === 'razorpay' && styles.radioButtonSelected
          ]}>
            {this.state.selectedPayment === 'razorpay' && (
              <View style={styles.radioButtonInner} />
            )}
          </View>
          <Text style={styles.paymentText}>Pay Online with Razorpay</Text>
        </View>
        <Icon name="credit-card" size={wp('5%')} color="#666" />
      </TouchableOpacity>
    </View>
  );

  renderPlaceOrderButton = () => (
    <View style={styles.bottomSection}>
      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={this.handlePlaceOrder}
        activeOpacity={0.8}
      >
        <Text style={styles.placeOrderText}>Place Order</Text>
        <Icon name="arrow-forward" size={wp('5%')} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#2474F5" barStyle="light-content" />
        {this.renderHeader()}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {this.renderShippingInfo()}
          {this.renderPaymentMethod()}
          <View style={styles.spacer} />
        </ScrollView>
        {this.renderPlaceOrderButton()}
      </SafeAreaView>
    );
  }
}

export default CheckoutScreen;