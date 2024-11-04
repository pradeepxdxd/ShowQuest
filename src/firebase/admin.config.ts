// lib/firebaseAdmin.js
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey:
        process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY &&
        process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY.replace(
          /\\n/g,
          "\n"
        ),
    }),
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
}

export default admin;
