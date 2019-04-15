service database {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
