const fs = require("fs")
const path = require("path")

const VOICE_DIR = path.resolve(__dirname, "../static/voices/")

fs.readdir(VOICE_DIR, (err, files) => {
    if (err) throw err
    const fileList = files.filter(file => {
        return fs.statSync(path.join(VOICE_DIR, file)).isFile() && /.*\.mp3$/.test(file)
    })
    const f = fileList.map(file => path.basename(file, path.extname(file)))
    fs.writeFileSync(
        path.resolve(__dirname, "../constants/voices.js"),
        `export const voices = ${JSON.stringify(f, null, 4)}\n`
    )
})
