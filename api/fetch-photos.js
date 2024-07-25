// api/fetch-photos.js
import admin from 'firebase-admin';

if (!admin.apps.length) {
    // eslint-disable-next-line no-undef
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: 'your-bucket-name.appspot.com'  // Replace with your Firebase Storage bucket name
    });
}

const bucket = admin.storage().bucket();

export default async (req, res) => {
    try {
        const [files] = await bucket.getFiles();
        const photos = files.map(file => {
            // Generate a public URL for each file
            const publicUrl = file.publicUrl();
            return { name: file.name, url: publicUrl };
        });

        res.status(200).json({ photos });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};
