// api/fetch-photos.js
import admin from 'firebase-admin';

if (!admin.apps.length) {
    // eslint-disable-next-line no-undef
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: 'gs://gallery-website-9d258.appspot.com'
    });
}

const bucket = admin.storage().bucket();

export default async (req, res) => {
    try {
        const [files] = await bucket.getFiles();
        const photos = await Promise.all(files.map(async file => {
            const [url] = await file.getSignedUrl({ action: 'read', expires: '03-09-2491' });
            return { name: file.name, url };
        }));

        res.status(200).json({ photos });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};
