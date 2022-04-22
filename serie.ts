export class Serie {
    num: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    linkWebPage: string;
    linkImage: string;


    constructor(num: number, name: string, channel: string, seasons: number, description: string, linkWebPage: string, linkImage: string) {
        this.num = num;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.linkWebPage = linkWebPage;
        this.linkImage = linkImage;
    }
}