const AbstractManager = require("./AbstractManager");

class MethodManager extends AbstractManager {
  constructor() {
    super({ table: "methods" });
  }

  async create(method) {
    const [result] = await this.database.query(
      `insert into ${this.table} (style) values (?)`,
      [method.name]
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

module.exports = MethodManager;
