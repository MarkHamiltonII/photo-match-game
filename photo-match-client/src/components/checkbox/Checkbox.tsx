import "./checkbox.css";

export function Checkbox(props: Props) {
    const { label, value, checked, onClick } = props;
    return (
        <div className="checkbox">
            <input type="checkbox" id={value} value={value} checked={checked} onChange={({ target: { checked } }) => onClick(checked)} />
            <label className="checkbox-label" htmlFor={value}>{label}</label>
        </div>
    )
}

type Props = {
    label?: React.ReactNode | string;
    value: string;
    checked?: boolean;
    onClick: (value: boolean) => void;
}