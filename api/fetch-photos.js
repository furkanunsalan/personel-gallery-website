// api/fetch-photos.js
import admin from 'firebase-admin';

if (!admin.apps.length) {
    // eslint-disable-next-line no-undef
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
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
