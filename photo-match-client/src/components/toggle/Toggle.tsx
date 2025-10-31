import "./toggle.css"

export function Toggle(props: Props) {
    const { value, onChange, labels = { yes: "On", no: "Off" } } = props;
    const { yes = "On", no = "Off", label } = labels;
    return (
        <div className="toggle">
            <p>{label}</p>
            <div className="toggle-container">
                <button className={`btn ${!value && "btn-contrast"} yes`} onClick={() => onChange(true)}>{yes}</button>
                <button className={`no btn ${value && "btn-contrast"} no`} onClick={() => onChange(false)}>{no}</button>
            </div>
        </div>
    )
}
type Props = {
    value: boolean;
    labels?: { yes?: string, no?: string, label?: string }
    onChange: (value: boolean) => void
}