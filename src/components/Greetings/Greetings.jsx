import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let greeting

    if (lang === "de") greeting = "Hallo"
    else if (lang === "fr") greeting = "Bonjour"
    else if (lang === "es") greeting = "Hola"
    else if (lang === "en") greeting = "Hello"

    return (
        <div className="Greetings">
            <p> {greeting} {children}</p>
        </div>
    )


}

export default Greetings




