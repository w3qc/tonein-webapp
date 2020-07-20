import React, { MouseEvent } from 'react'

import { Issue } from 'src/api/githubAPI'

type Props = Issue & {
  showIssueComments?: (issueId: number) => void
}

const IssueListItem = ({
  number,
  title,
  labels,
  user,
  comments,
  body = '',
  showIssueComments
}: Props) => {
  // const onIssueClicked = (e: MouseEvent) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   showIssueComments(number)
  // }

  const pluralizedComments = comments === 1 ? 'comment' : 'comments'

  return (
    <div>
      {/* <UserWithAvatar user={user} /> */}
      <div>
        {/* <a href="#comments" onClick={onIssueClicked}> */}
        <span>
          #
          {number}
        </span>
        <span>{title}</span>
        {/* </a> */}
        <br />
        {' '}
        (
        {comments}
        {' '}
        {pluralizedComments}
        )
        {/* <p className="issue__summary">{shorten(body)}</p> */}
        {/* <IssueLabels labels={labels} className={styles.label} /> */}
      </div>
    </div>
  )
}

export default IssueListItem
