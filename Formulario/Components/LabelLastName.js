import React from 'react'

export const LabelLastName = ( {uLast, change} ) => {
  return (
    <>
    <format>
        <label>Last Name: </label>
        <input
          type="text"
          placeholder='Insert your name'
          value = {uLast}
          onChange={ (e) => change(e.target.value) }
        />
    </format>
</>
  )
}
