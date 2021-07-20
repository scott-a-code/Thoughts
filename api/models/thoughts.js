const db = require('../dbConfig/init');

class Thoughts {
    constructor(data){
        this.postTitle = data.postTitle;
        this.pseudonym = data.pseudonym;
        this.postBody = data.postBody;
    }

    findPostById(id){
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

    create(title, pseudonym, post_body) {
        return new Promise (async(resolve, reject) => {
            try {
                let thoughtPost = await db.query(`INSERT INTO thoughts (title, pseudonym, post_body) VALUES ($1, $2, $3) RETURNING *;`, [id, title, pseudonym, post_body]);
                let newThought = new Thoughts(thoughtPost.rows[0]);
                resolve(newThought);
            } catch (err) {
                reject('Something went wrong, could not create though post :-(')
            }
        });
    }
};


module.exports = Thoughts;