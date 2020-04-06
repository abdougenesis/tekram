import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {toggleDrawer} from '../actions';

const {height, width} = Dimensions.get('window');

const DrawerElem = ({
  title,
  type,
  icon,
  size,
  navigation,
  navigateTo,
  closedrawer,
}) => {
  let MyIcon = '';
  switch (type) {
    case 'f5':
      MyIcon = <IconF5 name={icon} size={size} color={Colors.$white} />;
      break;
    case 'f':
      MyIcon = <IconF name={icon} size={size} color={Colors.$white} />;
      break;
    case 'mc':
      MyIcon = <Icon name={icon} size={size} color={Colors.$white} />;
      break;
    default:
      MyIcon = <Icon name={icon} size={size} color={Colors.$white} />;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        closedrawer();
        navigation.navigate(navigateTo);
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.elemWrapper}>
          {MyIcon}
          <Text style={styles.elemText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

class MyDrawer extends Component {
  componentDidUpdate(prevProps) {
    const isDrawerOpen = this.props.navigation.state.isDrawerOpen;
    const wasDrawerOpen = prevProps.navigation.state.isDrawerOpen;

    if (!wasDrawerOpen && isDrawerOpen) {
      console.log(isDrawerOpen);
      console.log('dazdad');
      //this.props.isOpen();
    } else if (wasDrawerOpen && !isDrawerOpen) {
      this.props.toggleDrawerState(false);
      //this.props.isClosed();
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
            <Icon
              style={{fontWeight: 'bold'}}
              name="menu"
              size={25}
              color={Colors.$primaryBlue}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{flex: 1, backgroundColor: Colors.$primaryBlue}}>
          <View style={styles.userContainer}>
            <View>
              <Image
                source={require('../../assets/user.jpg')}
                style={styles.img}
              />
            </View>
            <Text style={styles.userText}>john doe</Text>
            <Text style={[styles.userText, {fontSize: 13}]}>
              tripoli - dam w farez
            </Text>
          </View>
          <View>
            <DrawerElem
              title="home"
              icon="home"
              type="f"
              size={22}
              navigation={this.props.navigation}
              navigateTo="home"
              closedrawer={this.props.navigation.closeDrawer}
            />
            <DrawerElem
              title="favoris"
              icon="star"
              type="mc"
              size={22}
              navigation={this.props.navigation}
              navigateTo="favoris"
              closedrawer={this.props.navigation.closeDrawer}
            />
            <DrawerElem
              title="our partners"
              icon="user-tie"
              type="f5"
              size={22}
              navigation={this.props.navigation}
              navigateTo="partners"
              closedrawer={this.props.navigation.closeDrawer}
            />
            <DrawerElem
              title="about us"
              icon="information-outline"
              type="mc"
              size={22}
              navigation={this.props.navigation}
              navigateTo="aboutus"
              closedrawer={this.props.navigation.closeDrawer}
            />
            <DrawerElem
              title="contact us"
              icon="headset"
              type="mc"
              size={22}
              navigation={this.props.navigation}
              navigateTo="contactus"
              closedrawer={this.props.navigation.closeDrawer}
            />
            <DrawerElem
              title="settings"
              icon="settings-outline"
              type="mc"
              size={22}
              navigation={this.props.navigation}
              navigateTo="home"
              closedrawer={this.props.navigation.closeDrawer}
            />
            <DrawerElem
              title="log out"
              icon="power"
              type="mc"
              size={22}
              navigation={this.props.navigation}
              navigateTo="home"
              closedrawer={this.props.navigation.closeDrawer}
            />
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 30,
          }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>العربية</Text>
            <IconF name="language" size={20} color={Colors.$primaryBlue} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight + 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    //backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginBottom: 10,
  },
  userContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: Colors.$white,
    borderBottomWidth: 0.3,
  },
  userText: {
    color: Colors.$white,
    fontSize: 15,
    textTransform: 'capitalize',
  },
  elemWrapper: {
    width: '70%',
    flexDirection: 'row',
    borderBottomColor: Colors.$lightOrange,
    borderBottomWidth: 1.5,
    padding: 18,
    alignItems: 'baseline',
  },
  elemText: {
    color: Colors.$white,
    fontSize: 14,
    textTransform: 'uppercase',
    marginLeft: 10,
  },
  button: {
    backgroundColor: Colors.$white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    paddingHorizontal: 25,
    width: '60%',
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.$primaryBlue,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 7,
    textTransform: 'capitalize',
    //width: "100%"
  },
});

const mapStateToProps = ({changeDrawer}) => {
  return {
    isOpened: changeDrawer.drawerOpened,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleDrawerState: (state) => dispatch(toggleDrawer(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer);