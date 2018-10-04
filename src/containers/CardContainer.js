import React, { Component } from 'react';
import CardItems from '../components/CardItems';
import axios from 'axios';

//const endpointUrl = 'https://jsonplaceholder.typicode.com/posts';

const endpointUrl = 'http://localhost:3000/result';

class cardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      financeOpts: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get(endpointUrl).then((response) => {
     if (response.data && response.data.detail) {
      setTimeout(() => {
        this.updateState(response.data.detail);
      }, 2000);
        
      }
    })
      .catch((error) => {
        // Error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('error'+error.response.data);
          console.log(error.response.status);
          //console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('request',error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log('error config' + JSON.stringify(error.config));
      });
  }

updateState=(responsedata)=>{
  this.setState({
    financeOpts: responsedata,
    isLoading: false
  })
}

  render() {
    const {financeOpts,isLoading} = this.state;
    return (
      <div>
        <div class='container'>
          <div className="col-md-12 label-font-xl pt-4 w-100 p-0 finance-title-center">Total amount Financed</div>
          <h1 className="finance-title-center">$3500</h1>
          <hr className='hr-solid' />
          {/*<CardItems cards={this.state.users} />*/}
          <CardItems financeOpts={financeOpts} isLoading= {isLoading}/>
        </div>
      </div>
    )
  }
}
export default cardContainer;
