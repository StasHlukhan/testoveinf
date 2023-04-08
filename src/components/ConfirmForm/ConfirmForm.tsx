import React, { FC } from 'react'
import MyButton from '../UI/Button/MyButton'
interface IConfirmFormProps{
  handleRemoveClick: () => void;
  handleModalClose: () => void;
}
const ConfirmForm:FC<IConfirmFormProps> = ({handleRemoveClick,handleModalClose}) => {
  return (
    <div>
      <h1>Are you sure?</h1>
      <MyButton onClick={handleModalClose}>Cancel</MyButton>
      <MyButton onClick={ handleRemoveClick} >Confirm</MyButton>
    </div>
  )
}

export default ConfirmForm