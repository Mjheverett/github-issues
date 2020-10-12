import React from 'react';

const Issue = props => {
    const { issue } = props;
    return (
        <>
            <h3>{issue.title}</h3>
            <a href={issue.url}>{issue.url}</a>
            <p>{issue.body}</p>
        </>
    )
}

export default Issue;