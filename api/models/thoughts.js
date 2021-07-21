const db = require('../dbConfig/init');

class Thoughts {
    constructor(data){
        this.postTitle = data.postTitle;
        this.pseudonym = data.pseudonym;
        this.body = data.body;
    }

    static findPostById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let thoughData = await db.query(`SELECT * FROM thoughts WHERE id = $1;`, [id]);
                const though = thoughData.rows.map(d => new Thoughts(d));
                resolve(though);
            } catch (err) {
                reject(`Sorry post with ${id} not found!`)
            }
        });
    }

    static create(title, pseudonym, body) {
        return new Promise (async (resolve, reject) => {
            try {
                console.log('attempting to post to server')
                let thoughtPost = await db.query(`INSERT INTO thoughts (title, pseudonym, body) VALUES ($1, $2, $3) RETURNING *;`, [title, pseudonym, body]);
                // let newThought = new Thoughts(thoughtPost.rows[0]);
                console.log('posted to server')
                resolve(thoughtPost);
            } catch (err) {
                reject('Something went wrong, could not create though post :-(')
            }
        });
    }
};

module.exports = Thoughts;