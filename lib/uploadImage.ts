import {ID, storage} from "@/appwrite";

const uploadImage = async (file:File) =>{
    if(!file) return;

    const fileUploaded = await storage.createFile(
        "64a722d4af55f98f0af2",
        ID.unique(),
        file
    );
    return fileUploaded;
}

export default uploadImage