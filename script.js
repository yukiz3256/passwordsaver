import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'

const firebaseApp = initializeApp({
const db = getFirestore(firebaseApp);

})


onAuthStateChanged(auth 
if user {
console.log ("logged in!");
}
 else{
console.log ("no such user try again?")
}
)