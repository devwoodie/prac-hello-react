import Info from "./Info";
import {useState} from "react";
import Counter2 from "./Counter2";
import Average from "./Average";

const App = () => {
    let [visible, setVisible] = useState(false);

    return (
        <Average />
    )
}

export default App;