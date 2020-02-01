import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Segment, Tab, Button } from "semantic-ui-react";




export default function TabPage() {

    const panes = [
        { menuItem: 'Tab 1', render: () => <Tabcontent1/>, url: "tab1"},
        { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>, url: "tab2"},
        { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>, url: "tab3"},
    ]
    
    useEffect(() => {
        let url = window.location.href.split('/').pop()
        const index = panes.findIndex(menuItem => menuItem.url === url)
        setActiveIndex(index)
    }, [panes],);
    
    
    let history = useHistory();
    const [index, setActiveIndex] = useState(0);
    const handleTabChange = (event: any, { activeIndex, panes }: any ) => {
        if (activeIndex !== index) {
            setActiveIndex(activeIndex)
            history.push(panes[activeIndex].url)
        }
    };

    return (
        <Container>
            <Tab activeIndex={index} onTabChange={handleTabChange} panes={panes} />
        </Container>
    );
}

const Tabcontent1 = () => {
    const [count, setCounter] = useState(0);
    return (
        <Tab.Pane>
            <Container>
                <Segment>
                    <div>Count: {count}</div>
                    <Button onClick={() => setCounter(count+1)}>
                        Increment
                    </Button>
                </Segment>
            </Container>
        </Tab.Pane>
    )
};
