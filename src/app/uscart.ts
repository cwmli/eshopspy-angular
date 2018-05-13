export class USCart {
    title: string;
    id: string;
    nsuid: string;

    front_box_art: string;

    release_date: string;
    slug: string;

    usd_price: number; // USD
    cad_price: number;    // CAD
    sale_price: number; // USD
    free_to_start: boolean;

    number_of_players: string;

    constructor(title: string, id: string, nsuid: string, front_box_art: string,
                release_date: string, slug: string, usd_price: number, cad_price: number,
                free_to_start: boolean, number_of_players: string) {
        this.title = title;
        this.id = id;
        this.nsuid = nsuid;

        this.front_box_art = front_box_art;

        this.release_date = release_date;
        this.slug = slug;

        this.usd_price = usd_price; // USD
        this.cad_price = cad_price;    // CAD
        this.free_to_start = free_to_start;

        this.number_of_players = number_of_players;
    }
}