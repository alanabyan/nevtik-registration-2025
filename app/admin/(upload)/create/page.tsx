"use client"

import React from 'react'
import CreateForm from '@/components/create-form'
const CreatePage = () => {

  
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-300'>
      <div className='bg-white rounded-lg shadow p-9'>
        <h1 className='text-2xl text-blue-500 font-bold mb-5'>Upload Content</h1>
        <CreateForm />
      </div>
    </div>


  )
}

export default CreatePage