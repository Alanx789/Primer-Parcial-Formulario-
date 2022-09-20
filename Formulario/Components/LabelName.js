import React from 'react'

export const LabelName = ( {uName, change} ) => {

    return (
        <>
            <format>
                <label>Name: </label>
                <input
                    type="text"
                    placeholder='Insert your name'
                    value = {uName}
                    onChange={ (e) => change(e.target.value) }
                />
            </format>
        </>
    )

}
