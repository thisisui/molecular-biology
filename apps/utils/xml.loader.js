export class loadXMLDoc  {

    loadXMLDoc(filePath) {
        let fs = require('fs');
        let xml2js = require('xml2js');
        let json;
        try {
            let fileData = fs.readFileSync(filePath, 'ascii');
            let parser = new xml2js.Parser();
            
            parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
                json = JSON.stringify(result);
            });

            return json;
        } catch (ex) {console.log(ex)}
    }

}