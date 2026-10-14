const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// apple
	// write code here
	// dont chnage function name
	fs.writeFile(fileName , fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let data = fs.readFile(fileName,(err,data)=>{
		return data
	})
	console.log((await data).toString())
}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName , fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName);
}
myFileWriter("GovindFile.txt" , "hello")
// myFileReader("GovindFile.txt")
// myFileUpdater("GovindFile.txt" , " World");
// myFileDeleter("GovindFile.txt")

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }