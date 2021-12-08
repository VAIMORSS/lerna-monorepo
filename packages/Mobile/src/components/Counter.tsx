import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {incrementCounter} from '@poc/redux';
import {decrementCounter} from '@poc/redux';

function Counter(props: any) {
  const increment = () => {
    props.increment();
  };

  const decrement = () => {
    console.log('object');
    props.decrement();
  };

  return (
    <>
      <Button
        onPress={() => {
          increment();
        }}
        title="Add"
      />
      <Text style={styles.counter}>{props.count}</Text>
      <Button onPress={decrement} title="Remove" />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.count.count,
});

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  counter: {
    margin: 10,
    fontSize: 24,
  },
});
