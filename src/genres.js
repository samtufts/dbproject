import React from 'react'

const Genres = ({ values }) => {
    return (
        <>
            <span className={values ? "badge" : ""}>
                {values}
            </span>
        </>
    )
}

export default Genres