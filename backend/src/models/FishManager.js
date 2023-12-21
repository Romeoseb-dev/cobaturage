const AbstractManager = require("./AbstractManager");

class FishManager extends AbstractManager {
  constructor() {
    super({ table: "fishs" });
  }

  async create(fish) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [fish.title]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = FishManager;
