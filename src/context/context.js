import axios from 'axios';
import React, { Component } from 'react';
const CompanyContext = React.createContext();

const reducer = (state,action) => {
  console.log(state.companies);
  debugger;
    switch(action.type) {
      case "DELETE":
         return {
          ...state,
          companies: state.companies.filter(company => action.payload !== company.ID)
         }
      case "ADD":
         return {
           ...state,
           companies : [...state.companies,action.payload]
         }
      case "UPDATE":
         return {
           ...state,
           companies: state.companies.map(company => company.ID === action.payload ? action.payload : company)
         }
      default:
        return state
    }
  }

export class CompanyProvider extends Component {
    state = {
        companies: [],
        dispatch : action => {
          this.setState(state => reducer(state,action))
        }
      }
    componentDidMount = async () => {
      debugger;
        const response = await axios.get('https://localhost:44324/Company/GetAllCompanys')
        const data = await response.data;
        debugger;
        this.setState({
            companies:data
        });
    }
    render = () => {
        return (
            <CompanyContext.Provider value={this.state}>
                {this.props.children}
            </CompanyContext.Provider>
        )
    }
}
const CompanyConsumer = CompanyContext.Consumer;
export default CompanyConsumer;