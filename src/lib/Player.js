export default class Player {
    Player(id) {
        this.id = id;
        this.name = "Player " + id;
        this.avatar = null;
        this.money = 200000;
        this.authorization = false;
        this.position = 1;
        this.possessions = new Array();
        this.prison = false;
        this.libertyCard = false;
    }
  
    getId() {return this.id;}
    setId(id) {this.id = id;}

    getName() {return this.name;}
    setName(name) {this.name = name;}

    getAvatar() {return this.avatar;}
    setAvatar(avatar) {this.avatar = avatar;}

    getMoney() {return this.money;}
    setMoney(money) {this.money = money;}
    addMoney(money) {this.money += money;}
    delMoney(money) {this.money -= money;}

    getAuthorization() {return this.authorization;}
    setAuthorization(authorization) {this.authorization = authorization;}

    getPosition() {return this.position;}
    setPosition(position) {this.position = position;}

    addPossession(caseId) {
        if (plateau[caseId].PropId == null) {
            this.possessions.push((caseId, 0));
            plateau[caseId].PropId = this.id;
            console.log(`Propriété ${caseId} achetée !`);
        } else {
            console.log("ERREUR : la propriété ne peux pas être ajoutée car elle possède déjà un propriétaire.");
        }
    }

    delPossession(caseId) {
        let indexCarte;
        for (let i = 0; i < this.possessions.length; i++) {
            if (caseId == i) {
                indexCarte = i;
            }
        }
        this.possessions.splice(indexCarte, 1);
        plateau[caseId].PropId = null;
    }

    getPossessions() {return this.possessions;}

    getPrison() {return this.prison;}
    setPrison(prison) {this.prison = prison;}

    getLibertyCard() {return this.libertyCard;}
    setLibertyCard(bool) {this.libertyCard = bool;}
}

