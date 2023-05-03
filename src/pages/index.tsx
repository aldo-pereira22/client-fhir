
import FHIR from 'fhirclient'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'


const client = FHIR.client({
  serverUrl: 'http://localhost:8080'
})




export default function Home() {
  const [patient, setPatient] = useState()

  // const getPatient = async () => {
  //   var result = await client.request('Patient')
  //   setPatient(result)
  // }

  useEffect(() => {

  },[])

  return (
    <>
      <h1>FHIR {patient}</h1>
    </>
  )
}
