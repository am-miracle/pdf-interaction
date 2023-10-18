import {Pinecone } from "@pinecone-database/pinecone"
import { downloadFromS3 } from "./s3-server";
import {PDFLoader } from "langchain/document_loaders/fs/pdf"


export const getPinecone = async () => {
    const pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY as string,
        environment: process.env.PINECONE_ENVIRONMENT as string,
    });
    return pinecone
}

export const loadS3IntoPinecone = async (fileKey: string) =>{
    console.log(`Downloading S3 into file system`);
    const file_name = await downloadFromS3(fileKey);
    if(!file_name){
        throw new Error("Could not download from s3")
    }
    const loader = new PDFLoader(file_name)
    const page = await loader.load()
    return page
}