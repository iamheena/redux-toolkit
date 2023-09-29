import React from 'react'
import styled from 'styled-components'
import { deleteUser } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'


function DeleteAllUsers() {
  const dispatch=useDispatch()
  const deleteusers=()=>{
    dispatch(deleteUser())

  }
  return (
    <Wrapper>
      <button className=' btn clear-btn' onClick={deleteusers}>Clear all user</button>
      </Wrapper>
  )
}

const Wrapper=styled.section`
.clear-btn{
  text-decoration:capitalize,
  background-color:#db338a;
  margin-top:2rem;
}
`

export default DeleteAllUsers