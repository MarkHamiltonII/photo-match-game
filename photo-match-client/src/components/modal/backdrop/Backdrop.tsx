import "./backdrop.css"

// Typing allows it to have all normal div props
export const Backdrop: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
    return (<div className="backdrop" {...props}></div>)
}