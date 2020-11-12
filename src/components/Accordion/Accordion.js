import { useState, useRef } from 'react'

import '../../scss/_accordion.scss'

const Accordion = (props) => {
    const [ isActive, setIsActive ] = useState('')
    const [ height, setHeight ] = useState("0px")

    const contentRef = useRef(null)

    const toggle = () => {
        setIsActive(isActive === "" ? "active" : "")
        setHeight(isActive === "active" ? "0px" : `${contentRef.current.scrollHeight}px`)
    }

    return (
        <div className="accordion-container">
            <div className="accordion__section">
                <button className={`accordion ${isActive}`} onClick={toggle}>
                    <p className="accordion__title">{props.title}</p>
                </button>
            </div>
            <div ref={contentRef} style={{maxHeight: `${height}`}} className="accordion__content">
                <div className="accordion__text">
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Accordion