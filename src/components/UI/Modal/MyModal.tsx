import React, { FC } from 'react'
import cl from './MyModal.module.css'
interface MyModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
   
  }
const MyModal:FC<MyModalProps> = ({children,visible,setVisible}) => {

const rootClasses = [cl.myModal]
if(visible){
  rootClasses.push(cl.active);
}

  return (
    <div onClick={()=> setVisible(false)} className={rootClasses.join(' ')}>
      <div className={cl.myModalContent} onClick={(e)=> e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal