let fs = require('fs');

const DATA_FILE = 'data.json';
class Scores {
    static get instance() {
        if (!this._instance) {
            this._instance = new Scores();
        }

        return this._instance;
    }

    constructor() {
        this.data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }

    add(data) {
        this.data.push(data);

        fs.writeFile(DATA_FILE, JSON.stringify(this.data), function(err) {
            if (err) throw err;
        });
    }

    get formatted() {
        return this.data.map(function (row) {
            return {
                name: row.name,
                score: row.score,

            }
        })
    }
}

module.exports = Scores;