import {useEffect, useState} from "react";

const Info = () => {
    let [name, setName] = useState('');
    let [nick, setNick] = useState('');

    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('unmount');
        }
    },[]);

    const onChangeName = e => {
        setName(e.target.value)
    };
    const onChangeNick = e => {
        setNick(e.target.value)
    };
    return(
        <div>
            <div>
                <input type="text"
                    onChange={onChangeName}
                />
                <input type="text"
                       onChange={onChangeNick}
                />
            </div>
            <div>
                <div><b>이름 : </b>{name}</div>
                <div><b>닉네임 : </b>{nick}</div>
            </div>
        </div>
    )
}

export default Info;