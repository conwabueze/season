import React from 'react';

//function to determine what season is
const getSeason = (lat,month) =>{
    if(month>2 && month<9)
        return lat > 0 ? 'summer' : 'winter';
    
    else
        return lat > 0 ?  'winter' : 'summer';
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    
    //ternary logic for season text output
    const test = season === 'winter' ? 'Burrr, its winter' : 'Lets hit the beach'
    return <div>{test}</div>;
}

export default SeasonDisplay