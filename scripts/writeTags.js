const NodeID3 = require("node-id3")
const fs = require("fs")
const path = require("path")
const { VOICE_DIR } = require("./constants")

fs.readdir(VOICE_DIR, async (err, files) => {
    if (err) throw err
    const fileList = files.filter(file => {
        return fs.statSync(path.join(VOICE_DIR, file)).isFile() && /.*\.mp3$/.test(file)
    })

    fileList.forEach((file, i) => {
        const basename = path.basename(file, path.extname(file))
        const filepath = `${VOICE_DIR}/${basename}`
        let tags = {
            title: basename,
            artist: "望月のあ",
            album: "「noavoice」",
            APIC: "./scripts/cover.png",
            TRCK: `${i}`,
            copyright: "Copyright (C) MochiNoaProject 2020. All Rights Reserved."
        }
        console.log(filepath)
        NodeID3.write(tags, `${filepath}.mp3`, function(err, buffer) {
            console.log(buffer)
            console.error(err)
        })
    })
})
