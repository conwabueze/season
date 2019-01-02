import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    //every class needs a constructor
    constructor(props){
        super(props);

        this.state={
            lat : null,
            errorMessage: null
        };

        
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if(this.state.lat && !this.state.errorMessage){
            {/*example of passing a state as a prop*/}
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request"/>;
    }
   
    //we have to define render in class based components
    render(){
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        );
        
        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);