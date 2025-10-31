import "./tabs.css";

export function Tabs<T extends string>(props: Props<T>) {
    const { tabNames, selection, onSelection = () => {} } = props;
    return (
        <div className="tabs">
            {Object.entries(tabNames).map(([_, { tabName, label }]) => {
                const classname = selection === tabName ? "tab selected" : "tab"
                return (
                    <div key={tabName} className={classname} onClick={() => onSelection(tabName)}>{label}</div>
                )
            })}
        </div>
    )
}


type Props<T extends string> = {
    tabNames: { tabName: T, label: React.ReactNode }[];
    selection: T;
    onSelection?: (selection: T) => void;
}