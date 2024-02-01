const AbstractManager = require("./AbstractManager");

class FishManager extends AbstractManager {
  constructor() {
    super({ table: "fish" });
  }

  async create(fish) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name,weight,picture,year,methods_id) values (?,?,?,?,?)`,
      [fish.name, fish.weight, fish.picture, fish.year, fish.methods_id]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT fish.*, methods.style
        FROM fish
        INNER JOIN methods ON fish.methods_id = methods.id
        WHERE fish.id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async update(fish, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "fish" table
    const result = await this.database.query(
      `update ${this.table} set id = ?, name = ?, weight = ?, picture = ?, year = ?, methods_id = ? where id = ?`,
      [
        fish.id,
        fish.name,
        fish.weight,
        fish.picture,
        fish.year,
        fish.methodsId,
        id,
      ]
    );

    return result;
  }

  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = FishManager;
