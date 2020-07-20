/* eslint-disable import/no-cycle */
import { combineReducers } from '@reduxjs/toolkit'
import profileReducer from './profile'
import githubReposReducer from './githubRepos'
import issuesReducer from './issue'

const rootReducer = combineReducers({
  profile: profileReducer,
  githubRepos: githubReposReducer,
  issues: issuesReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
