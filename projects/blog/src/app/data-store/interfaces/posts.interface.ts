type status = "draft" | "published" | "removed";

export interface INewPost {
    author: number;
    body: string;
    dateWritten: string;
    status: status;
    tags: string;
    title: string;
};

export interface IPostFull {
    author: number;
    authorName: string;
    body: string;
    datePublished: string;
    dateWritten: string;
    id: number;
    status: status;
    tags: string;
    title: string;
    voteDown: number;
    voteUp: number;
};

export interface IPostListItem {
    author: number;
    authorName: string;
    datePublished: string;
    id: number;
    status: status;
    tags: string;
    title: string;
    voteDown: number;
    voteUp: number;
}