import React from 'react'

export const ShowData = ( {dataArray} ) => {
  return dataArray.map( (user, index) => (
    <div className="user Data" key={index}>
        <div key={user.id}>
            {user.name} {user.lastName} "{user.nickname}"         
        </div>
    </div>
))
}
