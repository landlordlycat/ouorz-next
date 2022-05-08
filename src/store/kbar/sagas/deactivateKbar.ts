import { put, delay } from 'redux-saga/effects'
import { setKbarAnimation, hideKbar } from '../actions'

export default function* deactivateKbarSaga() {
	try {
		// set animation
		yield put(setKbarAnimation('out'))
		// wait for animation to finish
		yield delay(200)
		// hide the reader
		yield put(hideKbar())
	} catch (error) {
		console.error(error)
	}
}
