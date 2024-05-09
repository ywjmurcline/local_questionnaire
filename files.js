console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        console.log("is Object")
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {encoding:"utf-8",type:"text/plain;charset=utf-8"}),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a')

    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    console.log(timestamp)
    a.download = timestamp.toString() + filename
    a.href = window.URL.createObjectURL(blob)
    // console.log(a.href)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    // console.log(a.dataset.downloadurl)
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
}