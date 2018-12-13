export default class NewsData {
    constructor(newsID , title , description , datePublished , isSubscribed) {
        this.newsID = newsID;
        this.title = title;
        this.description = description;
        this.datePublished = datePublished;
        this.isSubscribed = isSubscribed;
    }
}