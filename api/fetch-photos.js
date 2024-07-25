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
        const photos = files.map(file => {
            // Generate a public URL for each file
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(file.name)}?alt=media`;
            return { name: file.name, url: publicUrl };
        });

        res.status(200).json({ photos });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};
