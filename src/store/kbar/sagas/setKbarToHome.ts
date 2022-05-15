import { put } from 'redux-saga/effects'
import {
	updateKbarLocation,
	setKbarPlaceholder,
	setKbarLoading,
} from '../actions'

export default function* setKbarToHomeSaga() {
	try {
		// set the location to home
		yield put(updateKbarLocation(['home']))
		// set kbar placeholder
		yield put(setKbarPlaceholder('Type your command or search...'))
		// stop loading incase it's still running
		yield put(setKbarLoading(false))
	} catch (error) {
		console.error(error)
	}
}
