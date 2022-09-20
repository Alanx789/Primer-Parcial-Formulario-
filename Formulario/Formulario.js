import React, {useState} from 'react'
import { Clean } from './Components/Clean'
import { LabelLastName } from './Components/LabelLastName'
import { LabelName } from './Components/LabelName'
import { LabelNickname } from './Components/LabelNickname'
import { Send } from './Components/Send'
import { ShowData } from './Components/ShowData'

export const Formulario = () => {

    const [data, setData] = useState([])
    const [number, setNumber] = useState(0)
    const [userName, setUserName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userNickname, setUserNickname] = useState('')
    const [isDisable, setIsDisable] = useState(false)
    
    const changeName = (text) => { setUserName(text); validation() }
    const changeLast = (text) => { setUserLastName(text); validation() }
    const changeNick = (text) => { setUserNickname(text); validation() }

    const cleanData = () => {
        setUserName('')
        setUserLastName('')
        setUserNickname('')
    }

    const sendData = () => {
        if(!isDisable){ return }
        else{

            const newData = {
                id : number,
                name : userName,
                lastName : userLastName,
                nickname : userNickname
            }

            setData([...data, newData])
            setNumber(number + 1)
            setIsDisable(false)
            cleanData()
        }
    }

    const validation = () => {
        if(userName && userLastName && userNickname){setIsDisable(true)}
    }

    return(
        <>
            <LabelName uName={userName} change={changeName}/><br/>
            <LabelLastName uLast={userLastName} change={changeLast}/><br/>
            <LabelNickname uNick={userNickname} change={changeNick}/><br/>

            <Send sendFunc={sendData}/>
            
            <Clean cleanFunc={cleanData}/>   
            <br/>
            <ShowData dataArray={data}/>         
        </>
    )
}
