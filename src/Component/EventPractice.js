import {useState} from "react";

const EventPractice = () => {
    let [form, setForm] = useState({
        username : '',
        message : ''
    })
    let {username, message} = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };

    const btnClick = () => {
        alert(username + ': ' +message);
        setForm({
            username: '',
            message: ''
        })
    };

    const enterPress = (e) => {
        if(e.key === 'Enter'){
            btnClick();
        };
    };

    return(
        <div>
            <h1>Event Practice</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자 이름"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="내용을 입력해 주세요"
                value={message}
                onChange={onChange}
                onKeyPress={enterPress}
            />
            <button onClick={btnClick} >확인</button>
        </div>
    )
}

export default EventPractice;