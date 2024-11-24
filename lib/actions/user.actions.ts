"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { appwriteConfig } from "../appwrite/config";
import { parseStringify } from "../utils";

// Create  account flow

// 1. User enters full name and email
// 2. Check if the user already exists using the email (which we will use to identify if we still need to create a user document or not)
// 3. Send OTP to user's email
// 4. This will send a secret key for creating a session
// 5. Create a new user document if the user is a new user
// 6. Return the user's ID
// 7 . Verify the OTP

const getUserByEmail = async(email:string)=>{
    const { database } = await createAdminClient();
    const result = await database.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [Query.equal('email',[email])]
    )
    return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error:unknown, message:string)=>{
    console.log(error,message);
    throw error;
};

const sendEmailOTP = async({email}:{email:string})=>{
    const {account} = await createAdminClient();
    try{
        const session = await account.createEmailToken(ID.unique(),email);
        return session.userId;
    }catch(error){
        handleError(error,"Failed to send OTP");
    }
};

export const createAccount = async({fullName,email}:{fullName:string;email:string})=>{
    const existingUser = await getUserByEmail(email);
    const accountId = await sendEmailOTP({email})

    if(!accountId) throw new Error("failed to send OTP");

    if(!existingUser){
        const {database} = await createAdminClient();

        await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            ID.unique(),
            {
                fullName,
                email,
                avatar:'https://pngtree.com/so/avatar-logo',
                accountId
            }
        )
    }

    return parseStringify({accountId});
};
