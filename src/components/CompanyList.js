import React, { Component } from 'react'
import Company from './Company';
import CompanyConsumer from '../context/context';

class CompanyList extends Component {
    render() {
        return (
            <table className="table ">
                <thead className="thead-dark">
                    <tr>
                        <th >ID</th>
                        <th >Şirket Adı</th>
                        <th>Güncelle</th>
                        <th>Sil</th>
                    </tr>
                </thead>
                <tbody>
                    <CompanyConsumer>
                        {
                            value => {
                                const { companies } = value;
                                return (
                                    companies.map(company => {
                                        return (
                                            <Company
                                                key={company.ID}
                                                ID={company.ID}
                                                name={company.Name}
                                            />
                                        )

                                    })
                                )

                            }

                        }
                    </CompanyConsumer >
                </tbody>
            </table>
        )
    }
}
export default CompanyList; 