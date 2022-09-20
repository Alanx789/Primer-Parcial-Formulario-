import React from 'react'

export const LabelNickname = ( {uNick, change} ) => {
    return (
        <>
            <format>
                <label>Nickname: </label>
                <input
                    type="text"
                    placeholder='Insert your name'
                    value = {uNick}
                    onChange={ (e) => change(e.target.value) }
                />
            </format>
        </>
    )
}
