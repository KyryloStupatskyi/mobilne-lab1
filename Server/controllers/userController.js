const pool = require('../db')
// const { User } = require('../models')

class UserController {
  async registration(req, res) {
    // const { email, password } = req.body
    // const candidate = await User.findOne({ where: { email } })
    // if (candidate) {
    //   return res
    //     .status(409)
    //     .json({ message: 'User with such login is already exist' })
    // }
    // const user = await User.create({ email, password })
    // return res.json(user)
  }

  async login(req, res) {
    const { email, password } = req.body

    const result = await pool.query(
      `SELECT * FROM "users" WHERE email = '${email}' AND password = '${password}'`
    )

    const user = result.rows

    return res.json(user)
  }
}

module.exports = new UserController()
