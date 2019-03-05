import { retrieve } from '../Api';
import * as types from './actionTypes';

const targetsLoading = () => ({
  type: types.TARGETS_LOADING,
});

const targetLoading = () => ({
  type: types.TARGET_LOADING,
});

const targetsLoaded = (targets) => ({
  type: types.TARGETS_LOADING,
  targets,
});

const targetLoaded = (target) => ({
  type: types.TARGET_LOADED,
  target,
});

const targetError = (error) => ({
  type: types.TARGET_ERROR,
  error
});

const targetsError = (error) => ({
  type: types.TARGETS_ERROR,
  error
});

export const loadTargets = () => async (dispatch) => {
  dispatch(targetsLoading());
  try {
    console.log('LOADING TARGETS')
    let response = await retrieve('targets');
    console.log(response);
    dispatch(targetsLoaded(response));
  } catch (error) {
    console.log(error);
    dispatch(targetsError(message));
    const message = `Error: ${error.message}`
  }
}

export const loadTarget = (id) => async (dispatch) => {
  dispatch(targetLoading());
  try {
    let response = await retrieve(targets, id);
    dispatch(targetLoaded(response));
  } catch (error) {
    const message = `Error: ${error.message}`
    dispatch(targetError(message));
  }
}