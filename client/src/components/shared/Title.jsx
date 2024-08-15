import React from 'react'
import { Helmet } from "react-helmet-async"

const Title = ({ title = "Share || Talk || Chat APP", description = "This is app share you emotion with your buddy" }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export default Title