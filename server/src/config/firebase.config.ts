import admin from 'firebase-admin';
import serviceAccount from '../../ecommerce-2c879-firebase-adminsdk-fbsvc-e40d32a6cd.json';

const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    
});

export default firebaseApp;