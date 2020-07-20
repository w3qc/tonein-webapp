import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store'
import { RepoDetails, getRepoDetails } from '../api/githubAPI'

interface RepoDetailsState {
  openIssuesCount: number
  error: string | null
}

const initialState: RepoDetailsState = {
  openIssuesCount: -1,
  error: null
}

const repoDetails = createSlice({
  name: 'repoDetails',
  initialState,
  reducers: {
    getRepoDetailSuccess(state, action: PayloadAction<RepoDetails>) {
      state.openIssuesCount = action.payload.open_issues_count
    },
    getRepoDetailFailed(state, action: PayloadAction<string>) {
      state.error = action.payload
    }
  }
})

export const {
  getRepoDetailSuccess,
  getRepoDetailFailed
} = repoDetails.actions

export default repoDetails.reducer

// const fetchIssueCount = (org:string, repo:string) : AppThunk => async dispath => {

// }

export function fetchIssueCount(org:string, repo:string): AppThunk {
  async function aa(dispatch:any) {
    let repos
    try {
      repos = await getRepoDetails(org, repo)
    } catch (error) {
      dispatch(getRepoDetailFailed(error.toString()))
      return
    }
    dispatch(getRepoDetailSuccess(repos))
  }
  return aa
}
