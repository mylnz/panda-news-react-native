import styles from './styles';
import React, { PropTypes } from 'react';
import { View, Text, ListItem, Thumbnail, Left, Right, Body } from 'native-base';

const SourceItem = ({ source, onItemPress }) => {
  return (
    <ListItem
      button
      thumbnail
      onPress={onItemPress}
    >
      <Left>
        <Thumbnail
          square
          style={styles.thumbnail}
          source={{ uri: source.icon }}
        />
      </Left>
      <Body>
        <Text>{source.name}</Text>
      </Body>
    </ListItem>
  );
};

SourceItem.propTypes = {
  source: PropTypes.object,
  onItemPress: PropTypes.func,
};

export default SourceItem;
