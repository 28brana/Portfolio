import { BlobServiceClient } from "@azure/storage-blob";
import { v4 as uuidv4 } from 'uuid';

const REACT_APP_STORAGESASTOKEN = "sv=2021-06-08&ss=b&srt=sco&sp=wactfx&se=2022-11-30T13:51:41Z&st=2022-11-30T05:51:41Z&spr=https&sig=bXBu8OzJU9EMrXsKx0mGRsmGeacNk103EipRRBtq1EQ%3D"

const containerName = `demo`;
const storageAccountName = "sateeqweb";

const createBlobInContainer = async (containerClient, file, fileName) => {
    try {
        // create blobClient for container
        const blobClient = containerClient.getBlockBlobClient(fileName);

        // set mimetype as determined from browser with file upload control
        const options = { blobHTTPHeaders: { blobContentType: file.type } };

        // upload file
        await blobClient.uploadData(file, options);

    } catch (e) {
        console.log(e);
    }
}
export const uploadFileToBlob = async (file) => {

    try {
        const uniqueKey = uuidv4();
        const fileName = `${file.name}_${uniqueKey}`;
        // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
        const blobService = new BlobServiceClient(
            `https://${storageAccountName}.blob.core.windows.net/?${REACT_APP_STORAGESASTOKEN}`
        );

        // get Container - full public read access
        const containerClient = blobService.getContainerClient(containerName);

        // // // Create container if not exists
        // await containerClient.createIfNotExists({
        //     access: 'container',
        // });

        // upload file
        await createBlobInContainer(containerClient, file, fileName);

        return fileName;


    } catch (e) {

        console.log(e);

    }

};