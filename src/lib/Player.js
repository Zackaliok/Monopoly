
class Player {
    constructor(id) {
        this.id = id;
        this.name = "DEFAULT_NAME";
        this.avatar = avatar.WHITE;
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

    setAvatar(avatar) {
        this.avatar = avatar;
    }

    getMoney() {return this.money;}
    setMoney(money) {this.money = money;}
    addMoney(money) {this.money += money;}
    delMoney(money) {this.money -= money;}

    getAuthorization() {return this.authorization;}
    setAuthorization(authorization) {this.authorization = authorization;}

    getPosition() {return this.position;}
    setPosition(position) {this.position = position;}

    addPossession() {
        //TODO
    }

    delPossession() {
        //TODO
    }

    getPossessions() {return this.possessions;}

    getPrison() {return this.prison;}
    setPrison(prison) {this.prison = prison;}

    getLibertyCard() {return this.libertyCard;}
    setLibertyCard(bool) {this.libertyCard = bool;}
  }