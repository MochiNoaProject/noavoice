for f in ./public/static/voices/*.mp4; do mv $f ${f%.mp4}.mp3; done