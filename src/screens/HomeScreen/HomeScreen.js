import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
  Alert,
  Animated,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import axios from 'axios';
import { BASE_URL } from '../../../BASE_URL';

const { width } = Dimensions.get('window');

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedCategory: 'fashion',
      cartItems: [],
      cartCount: 0,
      wishlistItems: [],
      currentSlideIndex: 0,
      categories: [],
      loadingCategories: true,
      // Product states
      products: [],
      loadingProducts: true,
      topElectronics: [],
      topFashion: [],
      topHome: [],
      featuredProducts: [],
      loadingFeatured: true,
    };
    this.pulseAnimation = new Animated.Value(1);
    this.sliderScrollRef = null;
    this.sliderTimer = null;
  }

  componentDidMount() {
    this.startPulseAnimation();
    this.startSliderAutoPlay();
    this.fetchCategories();
    this.fetchProducts();
    // this.fetchFeaturedProducts();
  }

  // Fetch all products from API
  fetchProducts = async () => {
    try {
      this.setState({ loadingFeatured: true });
      const response = await axios.get(`${BASE_URL}/products`);
      console.log('Products response:', response.data.products);
      
      const products = response.data.products;
      
      // Filter products by categories for different sections
      // const electronics = products.filter(product => 
      //   product.category && product.category.toLowerCase().includes('electronic')
      // ).slice(0, 10);
      
      // const fashion = products.filter(product => 
      //   product.category && product.category.toLowerCase().includes('fashion')
      // ).slice(0, 10);
      
      // const home = products.filter(product => 
      //   product.category && (
      //     product.category.toLowerCase().includes('home') ||
      //     product.category.toLowerCase().includes('furniture')
      //   )
      // ).slice(0, 10);

      this.setState({
        products: products,
        // topElectronics: electronics,
        // topFashion: fashion,
        // topHome: home,
        loadingFeatured: false,
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      this.setState({ loadingProducts: false });
      // Fallback to static data if API fails
      this.setDefaultProducts();
    }
  };

  // Fetch featured/discounted products
  fetchFeaturedProducts = async () => {
    try {
      this.setState({ loadingFeatured: true });
      const response = await axios.get(`${BASE_URL}/products`);
      
      // Filter products with discounts or high ratings for featured section
      const featured = response.data
        .filter(product => product.discountPercentage > 20 || product.rating > 4.5)
        .slice(0, 5)
        .map(product => ({
          id: product.id,
          name: product.name,
          originalPrice: product.originalPrice || product.price,
          price: product.price,
          discount: product.discountPercentage ? `${product.discountPercentage}% OFF` : 'Special Offer',
          image: product.images && product.images.length > 0 ? product.images[0] : product.image,
        }));

      this.setState({
        featuredProducts: featured.length > 0 ? featured : this.getDefaultFeaturedProducts(),
        loadingFeatured: false,
      });
    } catch (error) {
      console.error('Error fetching featured products:', error);
      this.setState({ 
        featuredProducts: this.getDefaultFeaturedProducts(),
        loadingFeatured: false 
      });
    }
  };

  // Set default products if API fails
  setDefaultProducts = () => {
    const defaultElectronics = [
      { 
        id: 'e1', 
        name: 'iPhone 15 Pro Max', 
        price: '1,15,999', 
        originalPrice: '1,25,999',
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop' 
      },
      { 
        id: 'e2', 
        name: 'MacBook Air M2', 
        price: '89,999', 
        originalPrice: '99,999',
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop' 
      },
      { 
        id: 'e3', 
        name: 'AirPods Pro', 
        price: '24,999', 
        originalPrice: '29,999',
        rating: '4.7',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' 
      },
    ];

    const defaultFashion = [
      { 
        id: 'f1', 
        name: 'Designer Summer Dress', 
        price: '2,299', 
        originalPrice: '3,299',
        rating: '4.5',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop' 
      },
      { 
        id: 'f2', 
        name: 'Premium Cotton Shirt', 
        price: '1,499', 
        originalPrice: '1,999',
        rating: '4.6',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&h=200&fit=crop' 
      },
      { 
        id: 'f3', 
        name: 'Nike Air Force 1', 
        price: '7,999', 
        originalPrice: '9,999',
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop' 
      },
    ];

    const defaultHome = [
      { 
        id: 'h1', 
        name: 'Modern Table Lamp', 
        price: '2,599', 
        originalPrice: '3,599',
        rating: '4.4',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' 
      },
      { 
        id: 'h2', 
        name: 'Luxury Cushion Set', 
        price: '1,299', 
        originalPrice: '1,799',
        rating: '4.3',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop' 
      },
      { 
        id: 'h3', 
        name: 'Vintage Wall Clock', 
        price: '1,899', 
        originalPrice: '2,499',
        rating: '4.7',
        image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=200&h=200&fit=crop' 
      },
    ];

    this.setState({
      topElectronics: defaultElectronics,
      topFashion: defaultFashion,
      topHome: defaultHome,
    });
  };

  getDefaultFeaturedProducts = () => [
    {
      id: 'f1',
      name: 'Summer Sale',
      originalPrice: 1500,
      price: 991,
      discount: '34% OFF',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop',
    },
    {
      id: 'f2',
      name: 'Flash Deal',
      originalPrice: 500,
      price: 200,
      discount: '60% OFF',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
    },
    {
      id: 'f3',
      name: 'Special Offer',
      originalPrice: 2000,
      price: 1299,
      discount: '35% OFF',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=250&fit=crop',
    },
  ];

  fetchCategories = async () => {
    try {
      this.setState({ loadingCategories: true });
      const response = await axios.get(`${BASE_URL}/categories`);
      console.log('Categories response:', response.data);
      
      const transformedCategories = response.data.map(category => ({
        name: category.name,
        icon: this.getCategoryIcon(category.name),
        key: category.id.toString(),
        color: this.getCategoryColor(category.name),
      }));
      
      this.setState({ 
        categories: transformedCategories,
        loadingCategories: false 
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
      this.setState({ loadingCategories: false });
      this.setDefaultCategories();
    }
  };

  getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Fashion': 'checkroom',
      'Beauty': 'face',
      'Toys': 'toys',
      'Industrial & Scientific': 'science',
      'Electronics': 'devices',
      'Home': 'home',
      'Appliances': 'kitchen',
      'Mobiles': 'phone-android',
      'Grocery': 'local-grocery-store',
    };
    return iconMap[categoryName] || 'category';
  };

  getCategoryColor = (categoryName) => {
    const colorMap = {
      'Fashion': '#FF6B6B',
      'Beauty': '#4ECDC4',
      'Toys': '#45B7D1',
      'Industrial & Scientific': '#DDA0DD',
      'Electronics': '#96CEB4',
      'Home': '#FFEAA7',
      'Appliances': '#FD79A8',
      'Mobiles': '#6C5CE7',
      'Grocery': '#A29BFE',
    };
    return colorMap[categoryName] || '#74B9FF';
  };

  setDefaultCategories = () => {
    const defaultCategories = [
      { name: 'Fashion', icon: 'checkroom', key: 'fashion', color: '#FF6B6B' },
      { name: 'Beauty', icon: 'face', key: 'beauty', color: '#4ECDC4' },
      { name: 'Toys', icon: 'toys', key: 'toys', color: '#45B7D1' },
      { name: 'Industrial &\n Scientific', icon: 'science', key: 'science', color: '#DDA0DD' },
      { name: 'Electronics', icon: 'devices', key: 'electronics', color: '#96CEB4' },
      { name: 'Home', icon: 'home', key: 'home', color: '#FFEAA7' },
    ];
    this.setState({ categories: defaultCategories });
  };

  // Format price for display
  formatPrice = (price) => {
    if (typeof price === 'string') return price;
    return price;
  };

  // Get product image URL
  getProductImage = (product) => {
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      return product.images[0];
    }
    if (product.image) {
      return product.image;
    }
    // Default placeholder image
    return 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop';
  };

  componentWillUnmount() {
    if (this.sliderTimer) {
      clearInterval(this.sliderTimer);
    }
  }

  startPulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.pulseAnimation, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.pulseAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  startSliderAutoPlay = () => {
    this.sliderTimer = setInterval(() => {
      const { currentSlideIndex } = this.state;
      const sliderImages = this.getSliderImages();
      const nextIndex = (currentSlideIndex + 1) % sliderImages.length;
      
      this.setState({ currentSlideIndex: nextIndex });
      
      if (this.sliderScrollRef) {
        this.sliderScrollRef.scrollTo({
          x: nextIndex * width,
          animated: true,
        });
      }
    }, 3000);
  };

  onSliderScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    this.setState({ currentSlideIndex: slideIndex });
  };

  getSliderImages = () => [
    {
      id: 's1',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=300&fit=crop',
      title: 'Summer Collection',
      subtitle: 'Up to 70% Off',
    },
    {
      id: 's2',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=300&fit=crop',
      title: 'Tech Deals',
      subtitle: 'Latest Gadgets',
    },
    {
      id: 's3',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=300&fit=crop',
      title: 'Home & Living',
      subtitle: 'Transform Your Space',
    },
  ];

  addToCart = async (product) => {
    try {
      // Call API to add to cart
      const response = await axios.post(`${BASE_URL}/cart`, {
        productId: product.id,
        quantity: 1
      });
      
      const { cartItems, cartCount } = this.state;
      const existingItem = cartItems.find(item => item.id === product.id);
      
      if (existingItem) {
        const updatedItems = cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        this.setState({ cartItems: updatedItems });
      } else {
        this.setState({
          cartItems: [...cartItems, { ...product, quantity: 1 }],
          cartCount: cartCount + 1,
        });
      }
      
      Alert.alert('Success!', `${product.name} added to cart`, [{ text: 'OK' }]);
    } catch (error) {
      console.error('Error adding to cart:', error);
      Alert.alert('Error', 'Failed to add item to cart', [{ text: 'OK' }]);
    }
  };

  toggleWishlist = async (product) => {
    try {
      const { wishlistItems } = this.state;
      const isInWishlist = wishlistItems.some(item => item.id === product.id);
      
      if (isInWishlist) {
        // Remove from wishlist
        await axios.delete(`${BASE_URL}/wishlist/${product.id}`);
        this.setState({
          wishlistItems: wishlistItems.filter(item => item.id !== product.id),
        });
      } else {
        // Add to wishlist
        await axios.post(`${BASE_URL}/wishlist`, {
          productId: product.id
        });
        this.setState({
          wishlistItems: [...wishlistItems, product],
        });
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
      Alert.alert('Error', 'Failed to update wishlist', [{ text: 'OK' }]);
    }
  };

  renderHeader() {
    return (
      <LinearGradient
        colors={['#2474F5', '#1E5ED9', '#1A4BC7']}
        style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.logoText}>Lelekart</Text>
            <Text style={styles.tagline}>Shop with Style</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={24} color="white" />
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={() => this.props.navigation.navigate('AddToCartScreen')}
            style={styles.iconButton}>
              <Icon name="shopping-cart" size={24} color="white" />
              {this.state.cartCount > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.badgeText}>{this.state.cartCount}</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="person-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Icon name="search" size={18} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search products..."
              placeholderTextColor="#666"
              value={this.state.searchText}
              onChangeText={(text) => this.setState({ searchText: text })}
            />
            <TouchableOpacity style={styles.micButton}>
              <Icon name="mic" size={16} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }

  renderImageSlider() {
    const sliderImages = this.getSliderImages();
    
    return (
      <View style={styles.sliderContainer}>
        <ScrollView
          ref={(ref) => (this.sliderScrollRef = ref)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.onSliderScroll}
          scrollEventThrottle={16}
          style={styles.slider}>
          {sliderImages.map((slide) => (
            <TouchableOpacity key={slide.id} style={styles.slideItem}>
              <Image source={{ uri: slide.image }} style={styles.slideImage} />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.6)']}
                style={styles.slideOverlay}>
                <View style={styles.slideContent}>
                  <Text style={styles.slideTitle}>{slide.title}</Text>
                  <Text style={styles.slideSubtitle}>{slide.subtitle}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <View style={styles.sliderDots}>
          {sliderImages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                this.state.currentSlideIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </View>
    );
  }

  renderCategories() {
    const { categories, loadingCategories } = this.state;

    if (loadingCategories) {
      return (
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesLoadingContainer}>
            <ActivityIndicator size="large" color="#2474F5" />
            <Text style={styles.loadingText}>Loading categories...</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.categoriesScrollContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.key}
              style={styles.circularCategoryItem}
              onPress={() => this.setState({ selectedCategory: category.key })}>
              <LinearGradient
                colors={this.state.selectedCategory === category.key 
                  ? ['#2474F5', '#1E5ED9'] 
                  : [category.color, category.color + '80']}
                style={styles.circularCategoryGradient}>
                <Icon 
                  name={category.icon} 
                  size={28} 
                  color="white"
                />
              </LinearGradient>
              <Text style={[
                styles.circularCategoryText,
                this.state.selectedCategory === category.key && styles.categoryTextActive
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  renderFeaturedProducts() {
    const { featuredProducts, loadingFeatured } = this.state;

    if (loadingFeatured) {
      return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>🔥Hot Deals</Text>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#2474F5" />
            <Text style={styles.loadingText}>Loading deals...</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>🔥Hot Deals</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {this.state.products.map((product) => (
            <Animated.View 
              key={product.id}
              style={[
                styles.featuredCard,
                { transform: [{ scale: this.pulseAnimation }] }
              ]}>
              <Image source={{ uri: this.getProductImage(product) }} style={styles.featuredImage} />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.featuredOverlay}>
                <View style={styles.featuredContent}>
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{product.discount}</Text>
                  </View>
                  <View style={styles.featuredPriceContainer}>
                    <Text style={styles.featuredPrice}>₹{this.formatPrice(product.price)}</Text>
                    <Text style={styles.featuredOriginalPrice}>₹{this.formatPrice(product.originalPrice)}</Text>
                  </View>
                  <TouchableOpacity 
                    style={styles.quickAddButton}
                    onPress={() => this.addToCart(product)}>
                    <Icon name="add-shopping-cart" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </Animated.View>
          ))}
        </ScrollView>
      </View>
    );
  }

  renderProductSection(title, products, loading = false) {
    if (loading) {
      return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#2474F5" />
            <Text style={styles.loadingText}>Loading products...</Text>
          </View>
        </View>
      );
    }

    if (!products || products.length === 0) {
      return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.noProductsText}>No products available</Text>
        </View>
      );
    }

    return (
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.horizontalProductScroll}
          contentContainerStyle={styles.horizontalProductContainer}>
          {products.map((product, index) => {
            const isInWishlist = this.state.wishlistItems.some(item => item.id === product.id);
            return (
              <View key={product.id} style={styles.horizontalProductCard}>
                <View style={styles.productImageContainer}>
                  <Image source={{ uri: this.getProductImage(product) }} style={styles.horizontalProductImage} />
                  <TouchableOpacity 
                    style={styles.wishlistButton}
                    onPress={() => this.toggleWishlist(product)}>
                    <FontAwesome 
                      name={isInWishlist ? "heart" : "heart-o"} 
                      size={16} 
                      color={isInWishlist ? "#FF6B6B" : "#666"} 
                    />
                  </TouchableOpacity>
                  {product.rating && (
                    <View style={styles.ratingBadge}>
                      <Icon name="star" size={12} color="#FFD700" />
                      <Text style={styles.ratingText}>{product.rating}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.horizontalProductInfo}>
                  <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.productPrice}>₹{this.formatPrice(product.price)}</Text>
                    {product.originalPrice && (
                      <Text style={styles.originalPrice}>₹{this.formatPrice(product.originalPrice)}</Text>
                    )}
                  </View>
                  <TouchableOpacity 
                    style={styles.addToCartButton}
                    onPress={() => this.addToCart(product)}>
                    <LinearGradient
                      colors={['#2474F5', '#1E5ED9']}
                      style={styles.addToCartGradient}>
                      <Icon name="shopping-cart" size={16} color="white" />
                      <Text style={styles.addToCartText}>Add to Cart</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  render() {
    const { topElectronics, topFashion, topHome, loadingProducts } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#2474F5" barStyle="light-content" />
        {this.renderHeader()}
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {this.renderImageSlider()}
          {this.renderCategories()}
          {this.renderFeaturedProducts()}
          {this.renderProductSection('Top Electronics', topElectronics, loadingProducts)}
          {this.renderProductSection('Top Fashion', topFashion, loadingProducts)}
          {this.renderProductSection('Top Home', topHome, loadingProducts)}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;