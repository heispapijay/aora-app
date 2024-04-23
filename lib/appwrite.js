import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jay.aora',
    projectId: '66277aad4bc8163992fb',
    databaseId: '66277c45e5c916ae6a34',
    userCollectionId: '66278580ec743b0cfbdd',
    videoCollectionId: '662785925d104d763c3d',
    storadeId: '6627873998d449ae9d06'
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storadeId
} = config;



// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id, // Corrected attribute name
                email,
                username,
                avatar: avatarUrl
            }
        )
        
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


export const signIn = async (email, password) => {
    try{
        const session = await account.createEmailSession(email, password);

        return session;
    }
    catch(error) {
        console.log(error);
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try{
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        );

        if (!currentUser) throw Error;
        return currentUser.documents[0];
    }
    catch(error) {
        console.log(error);
        // throw new Error(error);
    }
}

export const getAllPosts = async () => {
    try{
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId
        );

        return posts.documents;
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
}