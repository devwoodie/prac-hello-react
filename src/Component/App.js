import Info from "./Info";
import {useState} from "react";
import Counter2 from "./Counter2";

const App = () => {
    let [visible, setVisible] = useState(false);

    return (
        <Info />
    )
}

export default App;