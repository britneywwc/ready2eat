import React, { Component } from "react";
import Toast from 'react-native-toast-message';


// Context needs Provider to wrap the whole application
const MyContext = React.createContext();

class MyProvider extends Component {
    // default stage when application starts
    state = {
        stage:1,
        restaurants:['Nobu', 'Taco Bell', 'Thai Thai'],
        result:''
    }

    // receive name as argument and add state of new players
    addRestaurantHandler = (name) =>  {
        this.setState((prevState, props) => ({
            restaurants: [
                ...prevState.restaurants,
                name
            ]
        }))
    }

    removeRestaurantHandler = (idx) => {
        let newArray = this.state.restaurants;
        newArray.splice(idx, 1);
        this.setState({restaurants:newArray});
    }

    nextHandler = () => {
        const {restaurants} = this.state;

        if (restaurants.length < 2) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Sorry',
                text2: 'Not enough restaurants to choose from'});
        } else {
            this.setState({
                stage:2
            }, () => {
                this.generateWinner()
            })
        }
    }

    // Get random value from array
    generateWinner = () => {
        const {restaurants} = this.state;
        this.setState({
            result: restaurants[Math.floor(Math.random()*restaurants.length)]
        })
    }

    resetGame = () => {
        this.setState({
            stage:1,
            restaurants:[],
            result:''
        })
    }

    // create a provider that wraps 'something' (props.children)
    render() {
        return (
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    addRestaurant: this.addRestaurantHandler,
                    removeRestaurantHandler: this.removeRestaurantHandler,
                    next: this.nextHandler,
                    getNewWinner: this.generateWinner,
                    resetGame: this.resetGame
                    
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }
}

export {
    MyProvider,
    MyContext
}