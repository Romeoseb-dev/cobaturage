const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "admin" as configuration
    super({ table: "admin" });
  }

  // The C of CRUD - Create operation

  async create(admin) {
    const { mail, password } = admin;
    // Execute the SQL INSERT query to add a new admin to the "admin" table
    const [result] = await this.database.query(
      `insert into ${this.table} (mail, password) values (?, ?)`,
      [mail, password]
    );

    // Return the ID of the newly inserted admin
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific admin by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the admin
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all admins from the "admin" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of admins
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing admin

  async update(admin, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "admin" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [admin, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an admin by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = AdminManager;
