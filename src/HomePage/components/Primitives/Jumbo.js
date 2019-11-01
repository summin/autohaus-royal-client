import React, { Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';


export default ({ ...props }) => {

    const { jumbo, bg, loading, title, text, button, width } = props
    return (
        <Fragment>
            <div className="m-1 p-0 rounded-lg" style={{ "width": "300px", "height": "50px", "color": "white", "backgroundColor": bg }}>
                <h1 className="font-weight-bolder d-inline mb-3" style={{ "color": "white", "width": "40px", "padding": "4px 10px 0" }}>{jumbo ? jumbo : <CircularProgress />}</h1>
                <button className="btn btn-light d-inline mb-3">{button}</button>
                <p className="text-center ml-2 d-inline">{text}</p>
            </div>
        </Fragment>
    )
}