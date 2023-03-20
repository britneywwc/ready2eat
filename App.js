import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { MyContext } from './src/context';

import StageOne from './src/components/stage_one';
import StageTwo from './src/components/stage_two';

class App extends Component {
  // only way to use context
  // used to show which state (1 or 2 for pages)
  static contextType = MyContext;   

  render() {

    return (
      <ScrollView>

        <View style={styles.container}>
          {
            this.context.state.stage === 1 ?
            <StageOne/>
            :
            <StageTwo/>
          }
        </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
});

export default App;