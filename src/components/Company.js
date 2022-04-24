import React, { Component } from 'react';
import axios from "axios";
import UserConsumer from "../context/context";

class Company extends Component {
    DeleteCompany = async (dispatch, e) => {
        const { ID } = this.props;
        await axios.delete('https://localhost:44324/Company/DeleteCompany/?id=' + ID);
        dispatch({ type: "DELETE", payload: ID });
    }
    render = () => {
        const { ID, name } = this.props;
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                        <tr scope="row">
                            <td>
                                {ID}
                            </td>
                            <td>
                                {name}
                            </td>
                            <td>
                                <a >Güncelle</a>
                            </td>
                            <td>
                                <a onClick={this.DeleteCompany.bind(this,dispatch)} >Sil</a>
                            </td>
                        </tr>
                        )
                    }
                }
            </UserConsumer>)
    }
}
export default Company;