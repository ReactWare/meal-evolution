import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Searchbar, Appbar} from 'react-native-paper';
import CategoryCard from './CategoryCard';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar: {
    width: '95%',
    marginTop: 10,
  },
  main: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    marginTop: 10,
    marginLeft: 12,
    width: '100%',
  },
});

const cuisines = [
  {
    name: 'Asian',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-905079230-4-1562672691.jpg?resize=768:*',
    dataURL: null,
  },
  {
    name: 'American',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/London_broil.jpg/1280px-London_broil.jpg',
    dataURL: null,
  },
  {
    name: 'Italian',
    image: 'https://i.ndtvimg.com/i/2016-07/pasta_625x350_51467797057.jpg',
    dataURL: null,
  },
  {
    name: 'Mexican',
    image:
      'https://media1.fdncms.com/sacurrent/imager/u/original/23149095/taquitos_west_ave.png',
    dataURL: null,
  },
];

export default class StartBrowsePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
    };
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
  }

  updateSearchQuery(q) {
    this.setState({ q });
  }

  pressRestaurant() {
    const { navigation } = this.props;
    navigation.navigate('Restaurant');
  }

  render() {
    const { q } = this.state;
    return (
      <View style={style.container}>
        <View style={style.main}>
          <Searchbar
            placeholder="Search here betch"
            onChangeText={this.updateSearchQuery}
            value={q}
            style={style.searchbar}
          />
          <ScrollView style={style.scroll}>
            {cuisines.map(cuisine => (
              <CategoryCard
                cuisine={cuisine}
                pressFn={this.pressRestaurant.bind(this)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
