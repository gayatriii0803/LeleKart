import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
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
import styles from './styles';


class AddToCartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      productPrice: 991,
    };
  }

  incrementQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }));
  };

  decrementQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState(prevState => ({
        quantity: prevState.quantity - 1,
      }));
    }
  };

  removeItem = () => {
    // Handle remove item logic
    console.log('Remove item');
  };

  proceedToCheckout = () => {
    // Handle checkout logic
    console.log('Proceed to checkout');
  };

  getTotalPrice = () => {
    return this.state.quantity * this.state.productPrice;
  };

  render() {
    const { quantity, productPrice } = this.state;
    const totalPrice = this.getTotalPrice();

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#2474F5" barStyle="light-content" />
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
           style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Shopping Cart</Text>
          <View style={styles.headerRight} />
        </View>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {/* Product Card */}
          <View style={styles.productCard}>
            <View style={styles.productImageContainer}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop'
                }}
                style={styles.productImage}
                resizeMode="contain"
              />
            </View>
            
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>
                A9 Pro ANC Wireless Earbuds with LED Touch Display & GPS
              </Text>
              <Text style={styles.productCategory}>Electronics</Text>
              
              <View style={styles.priceContainer}>
                <Text style={styles.priceSymbol}>₹</Text>
                <Text style={styles.priceAmount}>{productPrice}</Text>
              </View>

              {/* Quantity Controls */}
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={this.decrementQuantity}
                  disabled={quantity === 1}
                >
                  <Icon 
                    name="remove" 
                    size={20} 
                    color={quantity === 1 ? '#C0C0C0' : '#2474F5'} 
                  />
                </TouchableOpacity>
                
                <View style={styles.quantityDisplay}>
                  <Text style={styles.quantityText}>{quantity}</Text>
                </View>
                
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={this.incrementQuantity}
                >
                  <Icon name="add" size={20} color="#2474F5" />
                </TouchableOpacity>
              </View>

              {/* Remove Button */}
              <TouchableOpacity style={styles.removeButton} onPress={this.removeItem}>
                <Icon name="delete-outline" size={18} color="#FF4757" />
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Order Summary */}
          <View style={styles.orderSummaryCard}>
            <Text style={styles.orderSummaryTitle}>Order Summary</Text>
            
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>₹{totalPrice.toFixed(2)}</Text>
            </View>
            
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Shipping</Text>
              <Text style={styles.freeText}>FREE</Text>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>₹{totalPrice.toFixed(2)}</Text>
            </View>
            
            <Text style={styles.noteText}>Taxes and shipping calculated at checkout</Text>
          </View>
        </ScrollView>

        {/* Checkout Button */}
        <View style={styles.checkoutContainer}>
          <TouchableOpacity
            style={styles.checkoutButton}
             onPress={() => this.props.navigation.navigate('CheckoutScreen')}
            activeOpacity={0.8}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
            <Icon name="arrow-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default AddToCartScreen;