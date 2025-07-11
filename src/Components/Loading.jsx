import React from 'react'

function Loading() {
  return (
     <div className="flex items-center justify-center h-96 w-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
    </div>
  )
}

export default Loading