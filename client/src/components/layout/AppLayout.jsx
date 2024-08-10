
import React from 'react'
import Header from './Header'

const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Header />
                <div> <WrappedComponent {...props} /> </div>
                <div> Footer </div>
            </>
        )
    }

}

export default AppLayout