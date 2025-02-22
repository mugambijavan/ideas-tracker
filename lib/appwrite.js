import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67b98076000894c1fb77") // Replace with your project ID
    .setPlatform('com.example.idea-tracker');


export const account = new Account(client);
export const databases = new Databases(client);
