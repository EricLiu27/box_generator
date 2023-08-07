import React, { useState } from 'react'





const DisplayBox = (props) => {


    // const receiveNewColor = (newColor) => {
    //     setIcecreamList([...icecreamList, newIcecream])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap-reverse', }}>
            {props.current.map((eachCurrent, idx) => {
                return (

                    <div style={{ background: eachCurrent, height: 100, width: 100, margin: 10 }}>
                        {idx}
                    </div >
                )
            })}

        </div>
    )
}
export default DisplayBox