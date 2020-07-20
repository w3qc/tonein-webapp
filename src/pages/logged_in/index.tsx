import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../reducers'
import { fetchIssueCount } from '../../reducers/githubRepos'
import { fetchIssues } from '../../reducers/issue'
import IssuesList from './issueList'

type LoggedInProps = {
  org?:string,
  repo?:string,
  page?:number,
  name: string
}

const LoggedIn: React.FC<LoggedInProps> = ({ name, org = 'w3qc', repo = 'w3qc.github.io', page = 1 }) => {
  const dispatch = useDispatch()
  // const getRepos = (org:string, repo:string) => {
  //   dispatch(fetchIssueCount(org, repo))
  // }
  // const { openIssuesCount } = useSelector((state: RootState) => state.githubRepos)
  const {
    currentPageIssues,
    isLoading,
    error: issuesError,
    issuesByNumber,
    pageCount
  } = useSelector((state: RootState) => state.issues)

  const issues = currentPageIssues.map(
    (issueNumber) => issuesByNumber[issueNumber]
  )

  useEffect(() => {
    dispatch(fetchIssues('w3qc', 'w3qc.github.io', 1))
  }, [org, repo, page, dispatch])

  if (issuesError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{issuesError.toString()}</div>
      </div>
    )
  }

  const renderedList = isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <IssuesList issues={issues} />
  )

  return (
    <div>
      Login,
      {name}
      {renderedList}
    </div>
  )
}

export default LoggedIn
