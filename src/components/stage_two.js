import React, { useContext } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

import { MyContext } from '../context';

const StageTwo = () => {
  const context = useContext(MyContext);

    return (
        <>
          <Text>The chosen restaurant is</Text>
          <Text style={{marginTop:30, fontSize:30}}>{context.state.result}</Text>
          
          <Button
            buttonStyle={styles.button}
            title="Try Again"
            onPress={() => context.getNewWinner()}
            // Can improve by not getting repeated winner from previous result
          />

        <Button
          buttonStyle={styles.button}
          title="Start Over"
          onPress={() => context.resetGame()}
          />
        </>
    )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#C74141',
    marginTop:20
  }
})

export default StageTwo;