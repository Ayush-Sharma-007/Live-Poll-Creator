'use client'
import React, { useState } from 'react'

const ManageRoom = () => {

  const [count, setCount] = useState(0);
  const [RoomList, setRoomList] = useState([]);

  const addRoom = (e) => {
    if (e.code === 'Enter') {
      console.log(e.target.value);

      const newRoom = { text: e.target.value, completed: false, added: new Date() };
      setRoomList([...RoomList, newRoom]);

      e.target.value = '';
    }
  }

  return (
    <div className='max-w-5xl mx-auto mt-6'>

      <div className='border shadow rounded-xl'>

        <div className='p-4 border-b-2'>
          <input type="text" className='w-full px-3 py-3 bg-gray-300 rounded-xl outline-none' />
        </div>

        <div className='p-6'>

          {

            RoomList.map((room, i) => {
              return (

                <div key={i} className='rounded-md border mb-5 shadow p-4 bg-gray-100'>

                  <p>{room.text}</p>

                </div>
              )
            })

          }
        </div>
      </div>
    </div>
  )
}

export default ManageRoom