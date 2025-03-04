export function Tabs(props)
{
    const { selectedTab, setSelectedTab, todos }  = props
    const tabs = ['All', 'Open', 'Completed'];

    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) =>
            {
                const numberOfTasks = tab === 'All' ? todos.length :
                    tab === 'Open' ? todos.filter(value => !value.complete).length :
                    todos.filter(value => value.complete).length;

                return(
                    <button onClick={() => setSelectedTab(tab)}
                        key={tabIndex} className={"tab-button " +
                        (tab === selectedTab ? ' tab-selected' : ' ')}>
                        <h4>{tab}<span>({numberOfTasks})</span></h4>
                    </button>
                )
            })}
            <hr/>
        </nav>
    )
}
