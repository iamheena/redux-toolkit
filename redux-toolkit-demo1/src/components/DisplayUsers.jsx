import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import {FiTrash2} from 'react-icons'
import {Trash2} from 'react-feather'
import { removeUser } from '../store/slices/UserSlice'
import styled from 'styled-components'


function DisplayUsers() {

  const dispatch=useDispatch()

    const selector=useSelector((state)=>{
        return state.users

    })
    const DeleteAllUsers=(id)=>{
      dispatch(removeUser(id))

    }
    console.log(selector);
  return (
    <Wrapper>
      {selector.map((d,i)=>(
        <>
          <li key={i}>{d}
            <Trash2 onClick={()=>DeleteAllUsers(i)} className='delete-icon' />
            </li>
        </>
          
      ))}
    </Wrapper>
  )
}
const Wrapper=styled.section`
li{
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:1rem;
  border-bottom:1px solid #eee;
  &:first-child{
    border-top:1px solid #eee;
  }


}
`

export default DisplayUsers