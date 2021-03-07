import { render } from '@testing-library/react';
import React,{Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import Searchh from '../components/Searchh';
import  './App.css'
import Scrolll from '../components/Scrolll'
import ErrorBoundary from './ErrorBoundary'
class App extends Component
{

    constructor()
    {
        super()
        this.state={
            robotss:[],
            searchfield:''
        }
    }

    searchingg=(event)=>
    {
        this.setState({searchfield:event.target.value})
        console.log(event.target.value);
    }
    render()
    {

        const filteredrobots=this.state.robotss.filter((robo)=>
        {
            return (
                robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        })

        if(this.state.robotss.length===0)
        {
            return(
                <h1>Loading</h1>
            )
        }
        else
        {
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                     <Searchh searchfun={this.searchingg}/>
                     <Scrolll>
                         <ErrorBoundary>
                         <CardList robots={filteredrobots}/>
                         </ErrorBoundary>
                     
                     </Scrolll>
           
                </div>
           
            )
        }
      
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => {this.setState({robotss:users})})
    }
}

export default App;