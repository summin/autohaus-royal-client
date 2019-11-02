import React, { Fragment, useState } from 'react'
import Table from 'react-bootstrap/Table'


const TableCustomers = ({ ...props }) => {

    const customers = props.customers
    const editEntry = props.editEntry
    console.log(customers)

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nachname</th>
                    <th className="d-md-table-cell d-none">Vorname</th>
                    <th className="d-md-table-cell d-none">Geschlecht</th>
                    <th className="d-md-table-cell d-none">Straße</th>
                    <th className="d-md-table-cell d-none">Postleitzahl</th>
                    <th>Ort</th>
                </tr>
            </thead>
            <tbody>
                {customers.entries && Object.values(customers.entries).map((i) => (
                    <tr className="cursorPointer" onClick={() => editEntry(i._id)}>
                        <td>{i.ref}</td>
                        <td>{i.lastName}</td>
                        <td className="d-md-table-cell d-none">{i.firstName}</td>
                        <td className="d-md-table-cell d-none">{i.gender}</td>
                        <td className="d-md-table-cell d-none">{i.street}</td>
                        <td className="d-md-table-cell d-none">{i.postCode}</td>
                        <td>{i.city}</td>
                    </tr>))
                }
            </tbody>
        </Table>

    );
}

export default TableCustomers;