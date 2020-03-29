import { CommentRequest } from './CommentRequest';

export class FileCommentRequest {
    fileCommentRequest: FileComment;
}

export class FileComment {
    commentRequestList: CommentRequest[];
}