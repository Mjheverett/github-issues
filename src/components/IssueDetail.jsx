import React from 'react';

import 'bulma/css/bulma.css';

import { Column, Columns, Subtitle, Title } from 'bloomer';

const IssueDetail = props => {
    const { issues } = props;
    const issue = issues[0];
    return (
        <Columns>
            <Column>
                <Title isSize={2}>Issue: {issue.number}</Title>
                <Subtitle isSize={4}>{issue.title}</Subtitle>
                <a href={issue.url} className="is-link">{issue.url}</a>
                <p className="content">{issue.body}</p>
            </Column>
        </Columns>
    )
};

export default IssueDetail;