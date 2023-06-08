import React  from "react";

export default function Header({name , age ,ceoBolean, array}){
    return(
<div>
    <h1>Welcome, {name} , age = {age} , is ceo = {ceoBolean ? 'yes' : 'No'}
    ,array = {JSON.stringify(array)}
    </h1>
</div>
    )
}