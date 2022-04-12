const csv = require('csvtojson')

class FileHelper {
    static async readCsv(file) {
        return csv().fromFile(file.path).subscribe(row => row)
    }
}

module.exports = FileHelper