import React, { Component } from 'react';

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
            <>
                <h1>Issue List</h1>
                {
                    issues.map((issue, index) => (
                        <Issue issue={issue} key={`issue=${index}`}/>
                    ))
                }
                
            </>
        )
    }
}

export default IssueList;