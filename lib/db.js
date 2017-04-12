import firebase from 'firebase'

try {
	firebase.initializeApp({
		databaseURL:"https://hacker-news.firebaseio.com"
	})
} catch (err) {
	if(!/already exists/.test(err.message)) {
		console.error('Firebase initialization error', err.stack)
	}
}

const root = firebase
	.database()
	.ref('v0')

export default root