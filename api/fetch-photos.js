// api/fetch-photos.js
import admin from 'firebase-admin';

// Path to your service account key file
const serviceAccountPath = '../gallery-website-9d258-firebase-adminsdk-g6g9b-400d0290b9';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountPath),
        databaseURL: 'https://gallery-website-9d258.firebaseio.com'
    });
}

const db = admin.firestore();

export default async (req, res) => {
    try {
        const photosCollection = await db.collection('photos').get();
        const photos = [];
        photosCollection.forEach(doc => {
            photos.push(doc.data());
        });
        res.status(200).json({ photos });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};
