export class FileCommentResponse {
    fileCommentList: FileComment[];
}

export class FileComment {
    fileID: number;
    fileDownloadUri: string;
    fileName: string;
    comment: string;
}