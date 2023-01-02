import React, { FC } from "react"
import Loader from "../Loader"

const empty =() => {
    return null
}

export default empty

// type withLoaderPropsType = {
//     isLoading: boolean
// }
/*
const withLoader<WC> = (WrappedComponent : React.Component<WC & {isLoading: boolean}>) => {
    return (props: WC) => {
        return <WrappedComponent {...props}/>
    }
}

export default withLoader

*/