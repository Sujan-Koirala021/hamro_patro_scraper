import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeNepaliNews = async () => {
    try {
        const url = "https://www.hamropatro.com/news/national";
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const news = [];
        $(".newsCard").each((i, element) => {
            news.push({
                title: $(element).find(".newsheadingMobile").text().trim(),
                link: 'www.hamropatro.com' + $(element).find("a").attr("href"),
                summary: $(element).find(".newsSummary").text().trim(),
            });
        });

        return news;
    } catch (error) {
        console.error("Error scraping news:", error);
        throw new Error("Failed to fetch news");
    }
};


export const scrapeRashifal = async () => {
    try {
        const url = "https://www.hamropatro.com/rashifal";
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        // Select all rashifal links and extract required data
        const rashifals = [];

        $('#rashifal .item').each((index, element) => {
            const title = $(element).find('h3').text().trim(); // Horoscope name
            const desc = $(element).find('.desc p').text().trim(); // Horoscope description
            const href = 'www.hamropatro.com/' + $(element).closest('a').attr('href');

            rashifals.push({ title, desc, href });
        });

        // console.log(rashifals);
        return rashifals;
    } catch (error) {
        console.error("Error scraping rashifal:", error);
        throw new Error("Failed to fetch rashifal");
    }
};


export const scrapeForex = async () => {
    try {
        const url = "https://www.hamropatro.com/forex";
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const updatedDateInfo = $('p b').text().trim()
        // Get only date from text..
        const lastUpdated = updatedDateInfo.split(" ")[2];

        const forex = [];
        const listItems = $('ul.forex > li'); // Select all <li> within the "forex" list

        for (let i = 3; i < listItems.length; i += 3) { // Skip the first three "title" elements
            const currency = $(listItems[i]).text().trim();
            const buy = parseFloat($(listItems[i + 1]).text().trim());
            const sell = parseFloat($(listItems[i + 2]).text().trim());

            forex.push({
                currency,
                buy,
                sell,
            });
        }
        return  {lastUpdated, forex};        


    } catch (error) {
        console.error("Error scraping forex:", error);
        throw new Error("Failed to fetch forex");
    }
};

export const scrapeGoldSilver = async () => {
    try {
        const url = "https://www.hamropatro.com/gold";
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let updatedDateInfo = $('p b').text().trim()
        const lastUpdated = updatedDateInfo.replace("Last Updated: ", "");

        const prices = [];
        const listItems = $('ul.gold-silver > li'); // Select all <li> within the "gold-silver" list

        for (let i = 0; i < listItems.length; i += 2) { 
            const itemType = $(listItems[i]).text().trim();
            // cleanup whitespace sequence in price
            const price = $(listItems[i + 1]).text().replace(/\s+/g, ' ').trim();
            prices.push({
                itemType,
                price
            });
        }
        return  {lastUpdated, prices};     
    } catch (error) {
        console.error("Error scraping gold silver price:", error);
        throw new Error("Failed to fetch gold silve price");
    }
}