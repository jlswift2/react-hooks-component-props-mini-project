import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}){
    const coffeeCup = "☕️"
    const bentoBox = "🍱"
    const showMinutes = (minutes < 30) ? coffeeCup.repeat(Math.ceil(minutes/5)) + ` ${minutes} min read` : bentoBox.repeat(Math.ceil(minutes/10)) + ` ${minutes} min read`
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{showMinutes}</p>
        </article>
    )
}

export default Article
