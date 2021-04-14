import React from 'react'
//Navbar, searchbar, 
function InputForm(props) {
    return (
        <>
            <label for={props.name} className="block mt-2 text-xs font-semibold text-gray-600 uppercase">{props.label}</label>
            <input id={props.name} type={props.type} name={props.name} placeholder={props.placeholder} autocomplete={props.autocomplete} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required={props.required} />
        </>
    )
}

export default InputForm
