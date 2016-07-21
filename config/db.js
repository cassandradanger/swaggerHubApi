'use strict'

//crypto used to generate creature id

module.exports = function(){
        return{
            creatureList : [],

            //save creature inside the db
            save(creature){
                creature.id = crypto.randomBytes(20).toString('hex');
                thiscreatureList.push(creature);
                return 1;
            },
            //retrieve creature with a given id
            find(id){
                if(id){
                    return this.creatureList.find(element => {
                            return element.id ===id;
                    });
                }else{
                    return this.creatureList;
                }
            },
            //delete a creature with a given id
            remove(id){
                var found = 0;
                this.creatureList = this.creatureList.filter(element => {
                        if(element.id === id){
                            found = 1;
                        }else{
                            return element.id !== id;
                        }
                });
                return found;
            },
            //udpdate a creature with the given id
            update(id, creature){
                var creatureIndex = this.creatureList.findIndex(element => {
                        return element.id === id;
                });
                if(creatureIndex !== -1) {
                    this.creatureList[creatureIndex].title = creature.title;
                    this.creatureList[creatureIndex].year = creature.year;
                    return 1;
                }else{
                    return 0;
                }
            }

        }
}