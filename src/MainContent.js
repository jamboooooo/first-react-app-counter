import React from "react";

function MainContent() {
    return <div className='main-content'>
        <Number />
        <Buttons />
    </div>
}

function Number() {
    return <div className='counter'>
        140
    </div>
}

function Buttons() {
    return <div className='buttons'>
        <button className='plus'>Увеличить</button>
        <button className='minus'>Уменьшить</button>
        <button className='to-zero'>Сбросить</button>
    </div>
}

export default MainContent