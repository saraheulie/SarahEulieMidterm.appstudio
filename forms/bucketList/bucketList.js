let bucketList = []
let i = 0
let item = ""

let confirmIfFinished = false

while (confirmIfFinished === false) {
    let input = prompt('If you want to see your bucket list, type in "view bucket list". \n If you want to add to your bucket list, type in "Add a new item"')
    if (input === 'view bucket list') {
      for (let i= 0; i< bucketList.length; i++){
      console.log(bucketList[i])}
    } else {
        item = prompt('Type in your bucket list item!')
      bucketList.push(item)
    }
    i++
    confirmIfFinished = confirm("Are you done? If not, press Cancel")
  
}