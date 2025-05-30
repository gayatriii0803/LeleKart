import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const PRIMARY_COLOR = '#2474F5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flex: 1,
  },
  
  // Header Styles - Slightly bigger
  header: {
    paddingTop: 12,
    paddingBottom: 18,
    paddingHorizontal: 18,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 8,
    shadowColor: PRIMARY_COLOR,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  logoText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: '#FF6B6B',
    borderRadius: 8,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadge: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: '#4ECDC4',
    borderRadius: 8,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
  },
  
  // Search Styles - Slightly bigger
  searchContainer: {
    marginTop: 4,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  micButton: {
    padding: 6,
  },

  // Image Slider Styles - Slightly bigger
  sliderContainer: {
    height: 160,
    marginVertical: 12,
    marginHorizontal: 14,
    position: 'relative',
    borderRadius: 15,
    overflow: 'hidden',
  },
  slider: {
    height: 160,
  },
  slideItem: {
    width: width - 28,
    height: 160,
    position: 'relative',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  slideOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    paddingTop: 28,
  },
  slideContent: {
    alignItems: 'flex-start',
  },
  slideTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  slideSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '600',
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  sliderDots: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 18,
  },
  
  // Categories Styles - Slightly bigger
  categoriesContainer: {
    paddingTop: 17,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 14,
    paddingHorizontal: 17,
  },
  categoriesScrollContainer: {
    paddingHorizontal: 14,
  },
  circularCategoryItem: {
    alignItems: 'center',
    marginHorizontal: 7,
    marginBottom: 5,
  },
  circularCategoryGradient: {
    width: 62,
    height: 62,
    borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    marginBottom: 7,
  },
  circularCategoryText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
  },
  categoryTextActive: {
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  
  // Section Styles - Slightly bigger
  sectionContainer: {
    paddingHorizontal: 17,
    marginBottom: 23,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  seeAllText: {
    color: PRIMARY_COLOR,
    fontSize: 14,
    fontWeight: '700',
  },
  
  // Featured Products Styles - Slightly bigger
  horizontalProductScroll: {
    marginHorizontal: -17,
  },
  horizontalProductContainer: {
    paddingHorizontal: 17,
  },
  horizontalProductCard: {
    width: 145,
    backgroundColor: 'white',
    borderRadius: 12,
    marginRight: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  horizontalProductImage: {
    width: '100%',
    height: 92,
    resizeMode: 'cover',
  },
  horizontalProductInfo: {
    padding: 9,
  },
  horizontalScroll: {
    marginHorizontal: -17,
    paddingHorizontal: 17,
  },
  featuredCard: {
    width: width * 0.7,
    height: 180,
    marginRight: 14,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
  },
  featuredContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  discountBadge: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 15,
    position: 'absolute',
    top: -140,
    right: 0,
  },
  discountText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  featuredPriceContainer: {
    flex: 1,
  },
  featuredPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  featuredOriginalPrice: {
    fontSize: 14,
    color: '#ccc',
    textDecorationLine: 'line-through',
    marginTop: 2,
  },
  quickAddButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  
  // Products Grid Styles - Slightly bigger
  productsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productCard: {
    width: (width - 46) / 2,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 18,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  productImageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  wishlistButton: {
    position: 'absolute',
    top: 7,
    right: 7,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 7,
    borderRadius: 15,
    elevation: 2,
  },
  ratingBadge: {
    position: 'absolute',
    bottom: 7,
    left: 7,
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 10,
  },
  ratingText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    lineHeight: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  addToCartButton: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  addToCartGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  addToCartText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  
  // Bottom Spacing - Slightly bigger
  bottomSpacing: {
    height: 24,
  },
  categoriesLoadingContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default styles;
