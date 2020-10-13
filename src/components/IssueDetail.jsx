import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import 'bulma/css/bulma.css';

import { Box, Subtitle, Title } from 'bloomer';

const IssueDetail = props => {
    const { issues } = props;
    const { issue_number } = useParams();
    const issue = issues.find((issue) => {
        return issue.number === parseInt(issue_number) ? issue : null;
    })

    return (
        <Box>
            <Title isSize={4}>{issue.title}</Title>
            <Subtitle isSize={6}>Issue: {issue.number}</Subtitle>
            <ReactMarkdown source={issue.body} escapeHtml={false} />
        </Box>
    );
}

export default IssueDetail;