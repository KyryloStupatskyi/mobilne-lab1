const { User } = require('../models')

class UserController {
  async registration(req, res) {
    const { email, password } = req.body

    const candidate = await User.findOne({ where: { email } })

    if (candidate) {
      return res
        .status(409)
        .json({ message: 'User with such login is already exist' })
    }

    const user = await User.create({ email, password })

    return res.json(user)
  }

  async login(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return req.status(404).json({ message: 'User with such email not found' })
    }

    const comparePass = user.password === password

    if (!comparePass) {
      return res
        .status(401)
        .json({ message: 'Password is not correct, please try again!' })
    }

    return res.json(user)
  }
}

module.exports = new UserController()
