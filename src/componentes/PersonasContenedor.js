import React from 'react'
import AgregarPerContenedor from './AgregarPerContenedor'
import ListadoPerContenedor from './ListadoPerContenedor'

const PersonasContenedor = () => {
  return (
      <div className="col-md-4 ">
         <AgregarPerContenedor/>
        <ListadoPerContenedor/>
      </div>
  )
}

export default PersonasContenedor