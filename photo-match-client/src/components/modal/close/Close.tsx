import "./close.css";

export const Close: React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (<button className="close" {...props}>&#10006;</button>)
}