export default function Tabs(props)
{
    const {todos, selectedTab, setSelectedTab} = props;
    const tabs = ['Todas', 'Abertas', 'Completadas'];

    const todoCounts = todos.reduce((accumulator, todo) =>
    {
        accumulator.Todas++;
        todo.complete ? accumulator.Completadas++ : accumulator.Abertas++;

        return(accumulator);
    },
        {Todas: 0, Abertas: 0, Completadas: 0}
    );

    return(
        <nav className="tab-container">
            {tabs.map( (tab, tabIndex) =>
            {
                return(
                    <button className={"tab-button " +
                        (tab === selectedTab ? ' tab-selected' : ' ')}
                        type="button" key={tabIndex} onClick={() => setSelectedTab(tab)}
                        aria-label={`Clique para vêr ${tab === 'Todas' ? ' todas as tarefas' :  'as tarefas ' + tab.toLowerCase()}`}
                    >
                        <p>{tab} <span>({todoCounts[tab]})</span></p>
                    </button>
                );
            } )}
            <hr/>
        </nav>
    );
}
