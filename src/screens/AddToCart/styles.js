import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2474F5',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backButton: {
    padding: wp('2%'),
  },
  headerTitle: {
    fontSize: wp('5%'),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  headerRight: {
    width: wp('10%'),
  },
  
  // Scroll Container
  scrollContainer: {
    flex: 1,
    paddingHorizontal: wp('4%'),
    paddingTop: hp('2%'),
  },
  
  // Product Card Styles
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp('3%'),
    padding: wp('4%'),
    marginBottom: hp('2%'),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  productImageContainer: {
    alignItems: 'center',
    marginBottom: hp('2%'),
    backgroundColor: '#F8F9FA',
    borderRadius: wp('2%'),
    padding: wp('4%'),
  },
  productImage: {
    width: wp('30%'),
    height: wp('30%'),
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: wp('4.2%'),
    fontWeight: '600',
    color: '#2C3E50',
    lineHeight: wp('5.5%'),
    marginBottom: hp('0.5%'),
  },
  productCategory: {
    fontSize: wp('3.5%'),
    color: '#7F8C8D',
    marginBottom: hp('1.5%'),
    fontWeight: '400',
  },
  
  // Price Styles
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: hp('2%'),
  },
  priceSymbol: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#2474F5',
    marginRight: wp('0.5%'),
  },
  priceAmount: {
    fontSize: wp('5.5%'),
    fontWeight: '700',
    color: '#2474F5',
  },
  
  // Quantity Controls
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  quantityButton: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('2%'),
    backgroundColor: '#F1F2F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E1E5E9',
  },
  quantityDisplay: {
    paddingHorizontal: wp('6%'),
    paddingVertical: wp('2%'),
    marginHorizontal: wp('3%'),
    backgroundColor: '#F8F9FA',
    borderRadius: wp('2%'),
    minWidth: wp('12%'),
    alignItems: 'center',
  },
  quantityText: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#2C3E50',
  },
  
  // Remove Button
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('3%'),
    borderRadius: wp('2%'),
    backgroundColor: '#FFE8E8',
  },
  removeText: {
    fontSize: wp('3.5%'),
    color: '#FF4757',
    fontWeight: '600',
    marginLeft: wp('1%'),
  },
  
  // Order Summary Styles
  orderSummaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp('3%'),
    padding: wp('5%'),
    marginBottom: hp('2%'),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  orderSummaryTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: hp('2%'),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
  },
  summaryLabel: {
    fontSize: wp('4%'),
    color: '#5A6C7D',
    fontWeight: '400',
  },
  summaryValue: {
    fontSize: wp('4%'),
    color: '#2C3E50',
    fontWeight: '600',
  },
  freeText: {
    fontSize: wp('4%'),
    color: '#27AE60',
    fontWeight: '700',
  },
  
  // Divider
  divider: {
    height: 1,
    backgroundColor: '#E1E5E9',
    marginVertical: hp('1.5%'),
  },
  
  // Total Row
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    marginBottom: hp('1%'),
  },
  totalLabel: {
    fontSize: wp('4.5%'),
    color: '#2C3E50',
    fontWeight: '700',
  },
  totalValue: {
    fontSize: wp('4.8%'),
    color: '#2474F5',
    fontWeight: '700',
  },
  
  // Note Text
  noteText: {
    fontSize: wp('3.2%'),
    color: '#95A5A6',
    textAlign: 'center',
    marginTop: hp('1%'),
    fontStyle: 'italic',
  },
  
  // Checkout Container
  checkoutContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  checkoutButton: {
    backgroundColor: '#2474F5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp('2%'),
    borderRadius: wp('3%'),
    elevation: 2,
    shadowColor: '#2474F5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  checkoutButtonText: {
    fontSize: wp('4.5%'),
    fontWeight: '700',
    color: '#FFFFFF',
    marginRight: wp('2%'),
  },
});

export default styles;