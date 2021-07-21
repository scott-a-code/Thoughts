const db = require('../dbConfig/init');

class Thoughts {
    constructor(data){
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.body = data.body;
    }

    static findPostById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let thoughData = await db.query(`SELECT * FROM thoughts WHERE id = $1;`, [id]);
                const thought = thoughData.rows.map(d => new Thoughts(d));
                resolve(thought);
            } catch (err) {
                reject(`Sorry post with ${id} not found!`)
            }
        });
    }

    static create(title, pseudonym, body) {
        return new Promise (async (resolve, reject) => {
            try {
                let thoughtPost = await db.query(`INSERT INTO thoughts (title, pseudonym, body) VALUES ($1, $2, $3) RETURNING *;`, [title, pseudonym, body]);
                resolve(thoughtPost);
            } catch (err) {
                reject('Something went wrong, could not create though post :-(')
            }
        });
    }
};

module.exports = Thoughts;