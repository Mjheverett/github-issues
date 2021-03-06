import React from 'react';

import 'bulma/css/bulma.css';

import { Box, Container, Subtitle } from 'bloomer';

const Issue = props => {
    const { issue } = props;
    return (
        <Container>
            <Box>
                <Subtitle isSize={4}>{issue.title}</Subtitle>
                <a href={issue.url} className="is-link">{issue.url}</a>
                <p className="content">{issue.body}</p>
            </Box>
            <br />
        </Container>
    )
}

export default Issue;