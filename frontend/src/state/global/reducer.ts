/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { updateVersion } from './actions';

export interface GlobalState {}

export const initialState: GlobalState = {};

export default createReducer(initialState, builder => builder.addCase(updateVersion, () => {}));
