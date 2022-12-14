import React from 'react'

const Content = props => {

    const talk = () => {
        console.log('i am toggled!')
    }

    return (
        <div className="grid place-items-center mx-4 md:mx-32">
            {props.children}
        </div>
    )
}

export default Content