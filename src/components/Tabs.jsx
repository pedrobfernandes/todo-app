export default function Tabs(props)
{
    const {todos, selectedTab, setSelectedTab} = props;
    const tabs = ['All', 'Open', 'Completed'];

    const todoCounts = todos.reduce((accumulator, todo) =>
    {
        accumulator.All++;
        todo.complete ? accumulator.Completed++ : accumulator.Open++;

        return(accumulator);
    },
        {All: 0, Open: 0, Completed: 0}
    );

    return(
        <nav className="tab-container">
            {tabs.map( (tab, tabIndex) =>
            {
                return(
                    <button className={"tab-button " +
                        (tab === selectedTab ? ' tab-selected' : ' ')}
                        type="button" key={tabIndex} onClick={() => setSelectedTab(tab)}
                        aria-label={`Click to see ${selectedTab.toLowerCase()} tasks`}
                    >
                        <p>{tab} <span>({todoCounts[tab]})</span></p>
                    </button>
                );
            } )}
            <hr/>
        </nav>
    );
}
