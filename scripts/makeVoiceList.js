const { VOICE_DIR } = require("./constants")

const fs = require("fs")
const path = require("path")

fs.readdir(VOICE_DIR, (err, files) => {
    if (err) throw err
    const fileList = files.filter(file => {
        return fs.statSync(path.join(VOICE_DIR, file)).isFile() && /.*\.mp4$/.test(file)
    })
    const f = fileList.map(file => path.basename(file, path.extname(file)))
    fs.writeFileSync(
        path.resolve(__dirname, "../constants/voices.ts"),
        `export const voices = ${JSON.stringify(f, null, 4)}\n`
    )
})
