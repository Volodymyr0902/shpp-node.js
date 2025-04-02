import path from "path"

const __filename = import.meta.filename;
console.log(__filename)

console.log(path.basename(__filename, path.extname(__filename)))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))

console.log(path.resolve("path.js")) // absolute path of relative path

console.log(path.join('/', 'Users', path.basename(__filename)))
console.log(path.parse(__filename))