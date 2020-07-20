import React from 'react'
import { Issue } from 'src/api/githubAPI'
import IssueListItem from './issueListItem'

interface Props {
  issues: Issue[]
}

const IssueList = ({ issues }: Props) => {
  const renderList = issues.map((issue) => (
    <li key={issue.id}>
      <IssueListItem {...issue} />
    </li>
  ))
  return <ul>{renderList}</ul>
}

export default IssueList
