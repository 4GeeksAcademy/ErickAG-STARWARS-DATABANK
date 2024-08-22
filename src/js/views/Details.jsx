import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext'
import ObjectDetails from '../component/ObjectDetails.jsx'
import Navbar from '../component/Navbar.jsx'

export default function Details() {
  const { store, actions } = useContext(Context)
  const params = useParams()

  useEffect(() => {
    actions.currentCharacter(params)
  }, [])

  return (
    <>
    <Navbar></Navbar>
    <div className="container d-flex justify-content-center align-items-center mw-100 ">
      {store.currentCharacter && (<ObjectDetails value={store.currentCharacter} params={params}></ObjectDetails>
      )}
    </div>
    </>

  )
}
