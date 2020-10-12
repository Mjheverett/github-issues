import React, { Component } from 'react';

import 'bulma/css/bulma.css';

import { Column, Columns, Title } from 'bloomer';

import Issue from './Issue';

class IssueList extends Component {
    state = {
        issues: [],
    }

    loadData = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        const issues = await this.loadData();

        this.setState({
            issues: issues,
        })
    };

    render() {
        const { issues } = this.state;

        return (
            <Columns isCentered>
                <Column isSize='3/4'>
                    <Title isSize={2}>Issue List</Title>
                    {
                        issues.map((issue, index) => (
                            <Issue issue={issue} key={`issue=${index}`}/>
                        ))
                    }
                </Column>
            </Columns>
        )
    }
}

export default IssueList;