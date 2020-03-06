const fs = require("fs")
const path = require("path")
const { VOICE_DIR } = require("./constants")

fs.readdir(VOICE_DIR, (err, files) => {
    if (err) throw err
    const fileList = files.filter(file => {
        return fs.statSync(path.join(VOICE_DIR, file)).isFile() && /.*\.mp4$/.test(file)
    })
    fileList.forEach(file => {
        const basename = path.basename(file, path.extname(file))
        const filepath = `${VOICE_DIR}/${basename}`
        fs.unlinkSync(`${filepath}.mp4`)
    })
})
