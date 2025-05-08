
const homeController = (req, res) => {
    res.send(`<h1> Hello Express js</h1>`)
  }

const aboutController = (req, res) => {
    res.send(`<h1> About Express</h1>`)
}

const postsController = (req, res) => {
    res.send(`<h1>Posts route</h1>`)
}

module.exports = { homeController, aboutController, postsController };