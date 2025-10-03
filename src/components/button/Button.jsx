import { useContext } from "react"
import { PageSettings } from "../../pageSettings";

export default function Button({ text, disable, onClickButton }) {

    const hColor = useContext(PageSettings);

    return <button style={{ color: hColor }} disabled={disable} onClick={onClickButton}>
        {text}
    </button>
}