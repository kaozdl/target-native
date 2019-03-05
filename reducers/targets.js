import * as types from '../actions/actionTypes'

const initialState = {
  nearbyTargets: [],
  myTargets: [],
  currentTarget: null,
  isLoading: false,
}

export default function targetsApp(state = initialState, action) {
  switch (action.types) {
    case (types.TARGETS_LOADING):
      return { ...state, isLoading: false }
    case (types.TARGETS_LOADED):
      return {
        ...state,
        isLoading: false,
        nearbyTargets: action.nearbyTargets,
        myTargets: action.myTargets,
      }
    case (types.TARGET_LOADING):
      return {
        ...state,
        isLoading: true,
      }
    case (types.TARGET_LOADED):
      return {
        ...state,
        isLoading: false,
        currentTarget: action,
      }
    case (types.TARGET_SUBMITTING):
      return {
        ...state,
        isLoading: true,
        currentTarget: action,
      }
    case (types.TARGET_SUBMIT_SUCCESS):
      return {
        ...state,
        isLoading: false,
        currentTarget: action,
      }
    default:
      return state
  }
}