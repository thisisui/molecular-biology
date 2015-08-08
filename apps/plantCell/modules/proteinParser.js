export class ProteinParser {
	constructor(protein){
		this.name = this.getProteinName(protein);
		this.sequence = this.getSequence(protein);
	}
    getSequence(xmlObject){
        return xmlObject.uniprot.entry[0].sequence[0]._;
    }

    getProteinName(xmlObject){
        return xmlObject.uniprot.entry[0].protein[0].recommendedName[0].fullName[0];
    }
}