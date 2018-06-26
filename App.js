import React from 'react';
import { StyleSheet, 
        Text, 
        View, 
        TouchableHighlight, 
        Image } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { backgroundColor: '#000', titleColor: '#fff', subtitleColor: '#fff' }
  }

  lightButtonTap() {
    console.log("Light button tapped");
    if(this.state.backgroundColor == "#000") {
      this.setState({
        backgroundColor: '#fff',
        titleColor: '#000',
        subtitleColor: '#000',
        underlayColor: '#000'
      })
    }
  }
  darknessButtonTap() {
    console.log("Darkness button tapped");
    if(this.state.backgroundColor == "#fff") {
      this.setState({
        backgroundColor: '#000',
        titleColor: '#fff',
        subtitleColor: '#fff',
        underlayColor: '#fff'
     })
    }
  }

  render() {
    let pic = {
      uri: 'https://ithinkbigger.com/wp-content/uploads/2015/03/end-of-tunnel.jpg'
    };
    return (
      <View style={styles.container}>

        <View style={[styles.container1, {backgroundColor: this.state.backgroundColor}]}>
          <Text>
           <Text style ={[styles.title, {color: this.state.titleColor}]}>
              STOP{"\n"}
              LOOKING{"\n"}
              FOR THE <Text style ={[styles.title, {color: this.state.titleColor} ]} onPress={this.lightButtonTap.bind(this)}>LIGHT</Text>
                {"\n"}
                <Text style ={[styles.title, {color: this.state.titleColor}]}>
              AT THE END{"\n"}
              OF THE TUNNEL{"\n"}
              AND FIND GOD{"\n"}
              IN THE{"\n"}
              <Text style ={[styles.title, {color: this.state.titleColor}]} onPress={this.darknessButtonTap.bind(this)}>DARKNESS.</Text>
            </Text>
            </Text>
            </Text>
          <Text />
          <Text />
          <Text style ={[styles.subtitle,{color: this.state.subtitleColor}]}>- Jasmine Mans</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.image}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the parent view
    backgroundColor: '#000',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1.5,
    paddingRight: 40,
    paddingLeft: 40,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
    width: 390,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle: {
    fontWeight: 'normal',
    fontSize: 20,
    textAlign: 'right',
  },
  touchableHL: {
    padding: 0,
    height: 33,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  }
});
