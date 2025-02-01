import React from 'react'
import Strings from '../Constant/Strings'

function FormSubmittedData({submittedData}) {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded">
    <h2 className="text-xl font-bold mb-2">{ Strings.submittedData.submittedDataText }</h2>
    <pre className="bg-white p-4 rounded overflow-auto">
      {JSON.stringify(submittedData, null, 2)}
    </pre>
  </div>
  )
}

export default FormSubmittedData