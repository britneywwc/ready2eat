import React, { useContext } from 'react';
import {StyleSheet, View } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, ListItem, Text } from 'react-native-elements';
import { MainLogo } from '../utils/tools';
import { MyContext } from '../context';

const StageOne = () => {
  const context = useContext(MyContext);

  // Function to access the state of restaurants and get a map
  const renderRestaurants = () => (
    // access item and iteration number of item/index
    context.state.restaurants.map((item, idx) => (
      <ListItem
        key={idx}
        bottomDivider
        style={ {width:'100%'}}
        onLongPress={() => context.removeRestaurantHandler(idx)}
      >

        <ListItem.Chevron/>
        <ListItem.Content>
          <ListItem.Title>{item}</ListItem.Title>
        </ListItem.Content>


      </ListItem>
    ))
  )
  // console.log(context);   // get same state as App.js

    return (
      <>
        <Formik
          initialValues={{restaurant:''}}
          validationSchema={Yup.object({
            restaurant:Yup.string()
            .min(3, 'Must be more than 3 characterrs')
            .max(20, 'Must be less than 20 characters')
            .required('Restaurant is required')
          })}

          onSubmit={(values, { resetForm }) =>{
            context.addRestaurant(values.restaurant)   
            resetForm()
          }}> 

          {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
            <>

            <MainLogo/>

            <Input
              placeholder='Add restaurants here'
              leftIcon={{type:'antdesign', name:'adduser'}}
              inputContainerStyle={{
                marginHorizontal:50,
                marginTop:50
                }}
                
                // Check if the text input field is touched
                renderErrorMessage={errors.restaurant && touched.restaurant}
                errorMessage={errors.restaurant}
                errorStyle = {{
                  marginHorizontal:50
                }
                }
                onChangeText={handleChange('restaurant')}
                onBlur={handleBlur('restaurant')}
                value={values.restaurant}
              />

              <Button 
                buttonStyle={styles.button}
                title="Add restaurant"
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>

        <View style={{padding:20, width:'100%'}}>
          {
            context.state.restaurants && context.state.restaurants.length > 0 ? 
            <>
              <Text>List of restaurants</Text>
              {renderRestaurants()}
              
              <Button 
                buttonStyle={styles.button}
                title="Eat now"
                onPress={() => context.next()}
              />

            </>
            : null
          }

        </View>
      </>
    )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#C74141',
    marginTop:20
  }
})

export default StageOne;