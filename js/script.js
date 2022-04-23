/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = new Vue({
    el: '#app',
    data: {
        targettypes: [
            {
                name: 'Plant/ Reptile/ Dusk',
                type: 0,
            },
            {
                name: 'Beat/ Mech/ Bug',
                type: 1,
            },
            {
                name: 'Bird/ Aqua/ Dawn',
                type: 2,
            }
        ],
        selectedskills: [],
        isBugSplatAttackingBug: false,
        isPricklyTrapAttackingLast: false,
        targetlife: null,
        targetdefense: null,
        targettype: 0,
        mechCardsCnt: 0,
        plantCardsCnt: 0,
        duskCardsCnt: 0,
        win: 0,
        loss: 0,
        draw: 0,
        axies: [
            {
                name: 'Mech',
                skills: [
                    {
                        id: 2,
                        name: 'Nut Crack',
                        ene: 1,
                        atk: 105,
                        def: 30,
                        desc: "Deal 120% damage when comboed with another 'Nut Cracker' card.",
                        img: 'beast-mouth-02.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 129,
                                combo: 144,
                                combo2: 173
                            },
                            {
                                solo: 112,
                                combo: 125,
                                combo2: 150
                            },
                            {
                                solo: 95,
                                combo: 106,
                                combo2: 128
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Sinister Strike',
                        ene: 1,
                        atk: 130,
                        def: 20,
                        desc: "Deal 200% damage on critical strikes.",
                        img: 'beast-horn-10.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 160,
                                combo: 178
                            },
                            {
                                solo: 139,
                                combo: 155
                            },
                            {
                                solo: 118,
                                combo: 132
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: 'Heroic Reward',
                        ene: 0,
                        atk: 55,
                        def: 0,
                        desc: 'Draw a card when attacking an Aquatic, Bird, or Dawn target.',
                        img: 'beast-back-04.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 67,
                                combo: 75
                            },
                            {
                                solo: 59,
                                combo: 65
                            },
                            {
                                solo: 50,
                                combo: 55
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Nut Throw',
                        ene: 1,
                        atk: 105,
                        def: 30,
                        desc: "Deal 120% damage when comboed with another 'Nut Cracker' card.",
                        img: 'beast-tail-10.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 129,
                                combo: 144,
                                combo2: 173
                            },
                            {
                                solo: 112,
                                combo: 125,
                                combo2: 150
                            },
                            {
                                solo: 95,
                                combo: 106,
                                combo2: 128
                            }
                        ]
                    },
                ]
            },
            {
                name: 'Dusk',
                skills: [
                    {
                        id: 6,
                        name: 'Chomp',
                        ene: 1,
                        atk: 75,
                        def: 50,
                        desc: 'Apply Stun to enemy when comboed with at least 2 additional cards.',
                        img: 'reptile-mouth-10.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 80,
                                combo: 82
                            },
                            {
                                solo: 68,
                                combo: 70
                            },
                            {
                                solo: 92,
                                combo: 95
                            }
                        ]
                    },
                    {
                        id: 7,
                        name: 'Headshot',
                        ene: 1,
                        atk: 130,
                        def: 0,
                        desc: "Disable target's horn cards next round.",
                        img: 'bird-horn-08.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 110,
                                combo: 113
                            },
                            {
                                solo: 149,
                                combo: 153
                            },
                            {
                                solo: 130,
                                combo: 133
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Vine Dagger',
                        ene: 0,
                        atk: 20,
                        def: 30,
                        desc: 'Double shield from this card when comboed with a plant card.',
                        img: 'reptile-back-06.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 21,
                                combo: 22
                            },
                            {
                                solo: 17,
                                combo: 18
                            },
                            {
                                solo: 24,
                                combo: 25
                            }
                        ]
                    },
                    {
                        id: 8,
                        name: 'Spicy Surprise',
                        ene: 1,
                        atk: 80,
                        def: 50,
                        desc: "Disable target's mouth cards next round.",
                        img: 'plant-tail-12.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 86,
                                combo: 88
                            },
                            {
                                solo: 73,
                                combo: 74
                            },
                            {
                                solo: 98,
                                combo: 101
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Plant',
                skills: [
                    {
                        id: 10,
                        name: 'Vegetal Bite',
                        ene: 1,
                        atk: 30,
                        def: 30,
                        desc: "Steal 1 energy from your opponent when comboed with another card.",
                        img: 'plant-mouth-02.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 33,
                                combo: 34
                            },
                            {
                                solo: 28,
                                combo: 29
                            },
                            {
                                solo: 37,
                                combo: 39
                            }
                        ]
                    },
                    {
                        id: 11,
                        name: 'Prickly Trap',
                        ene: 1,
                        atk: 110,
                        def: 20,
                        desc: "Deal 120% damage if this Axie attacks last.",
                        img: 'plant-horn-10.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 121,
                                combo: 126,
                                sololast: 145,
                                combolast: 152
                            },
                            {
                                solo: 0,
                                combo: 0,
                                sololast: 123,
                                combolast: 129
                            },
                            {
                                solo: 0,
                                combo: 145,
                                sololast: 166,
                                combolast: 174
                            }
                        ]
                    },
                    {
                        id: 9,
                        name: 'Bug Splat',
                        ene: 1,
                        atk: 110,
                        def: 50,
                        desc: "Deal 50% more damage when attacking Bug targets.",
                        img: 'bug-back-08.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 126,
                                combo: 132
                            },
                            {
                                solo: 110,
                                combo: 115,
                                solobug: 165,
                                combobug: 172
                            },
                            {
                                solo: 93,
                                combo: 97
                            }
                        ]
                    },
                    {
                        id: 12,
                        name: 'Spicy Surprise',
                        ene: 1,
                        atk: 80,
                        def: 50,
                        desc: "Disable target's mouth cards next round.",
                        img: 'plant-tail-12.png',
                        selected: false,
                        dmg: [
                            {
                                solo: 88,
                                combo: 92
                            },
                            {
                                solo: 74,
                                combo: 78
                            },
                            {
                                solo: 101,
                                combo: 105
                            }
                        ]
                    },
                ]
            },
        ],
        message: 'Hello Vue!'
    },
    computed: {
        totalLife: function () {
            return +this.targetlife + +this.targetdefense;
        },
        totalDamage: function () {
            var vm = this;
            var count = 0;
            _.forEach(this.selectedskills, function (skills) {
                var dmgType = vm.damagetype(skills);
            
                count += skills.dmg[vm.targettype][dmgType];
                
            });
            
            return count;
        },
        difference: function() {
            return this.totalLife - this.totalDamage;
        }
    },
    methods: {
        damagetype: function (skills) {
            var dmgType = 'solo';
            if(skills.id > 8) {
                //plant
                if(this.plantCardsCnt > 1) {
                    dmgType = 'combo';
                }
                if(skills.id == 9) {
                    if(this.isBugSplatAttackingBug) {
                        if(dmgType == 'solo') {
                            dmgType = 'solobug';
                        } else {
                            dmgType = 'combobug';
                        }
                    }
                }
                if(skills.id == 11) {
                    if(this.isPricklyTrapAttackingLast) {
                        if(dmgType == 'solo') {
                            dmgType = 'sololast';
                        } else {
                            dmgType = 'combolast';
                        }
                    }
                }
            } else if (skills.id > 4) {
                //dusk
                if(this.duskCardsCnt > 1) {
                    dmgType = 'combo';
                }
            } else {
                // mech
                if(this.mechCardsCnt > 1) {
                    dmgType = 'combo';
                }
                
                if(skills.id == 2 || skills.id == 4) {
                    var count = _.filter(this.selectedskills, function(o) { if (o.id == 2 || o.id == 4 ) return o }).length;
                    if(count > 1) {
                        dmgType = 'combo2';
                    }
                }
            }
            return dmgType;
        },
        skilldmg: function (skills) {
            var dmgType = this.damagetype(skills);
            
            return skills.dmg[this.targettype][dmgType];
        },
        loadBg: function (image) {
            return "background-image: url(images/" + image + ")";
        },
        loadClass: function (skill) {
            if (skill.selected) {
                return "dcards active";
            } else {
                return "dcards";
            }
        },
        selectSkills: function (skill) {
            skill.selected = true;

            var count = _.filter(this.selectedskills, function(o) { if (o.id == skill.id) return o }).length;
            
            if(count < 2) {
                this.selectedskills.push(skill);
                
                if(skill.id > 8) {
                    //plant
                    this.plantCardsCnt += 1;
                } else if (skill.id > 4) {
                    //dusk
                    this.duskCardsCnt += 1;
                } else {
                    // mech
                    this.mechCardsCnt += 1;
                }
                
            }
        },
        clearall: function () {
            var vm = this;
            _.forEach(this.selectedskills, function (skills) {
                var ss = vm.findSkill(skills);
                ss.selected = false;
            });
            
            this.selectedskills = [];
            this.plantCardsCnt = 0;
            this.duskCardsCnt = 0;
            this.mechCardsCnt = 0;
        },
        removesskill: function (index, skill) {
            this.selectedskills.splice(index, 1);
            
            var count = _.filter(this.selectedskills, function(o) { if (o.id == skill.id) return o }).length;
            
            if(skill.id > 8) {
                //plant
                this.plantCardsCnt -= 1;
            } else if (skill.id > 4) {
                //dusk
                this.duskCardsCnt -= 1;
            } else {
                // mech
                this.mechCardsCnt -= 1;
            }
            
            if(count <= 0) {
                var ss = this.findSkill(skill);
                ss.selected = false;
            }
        },
        findSkill: function (skill) {
            var ss = null;
            if(skill.id > 8) {
                //plant
                ss = _.find(this.axies[2].skills, function(o) { if (o.id == skill.id) return o });
            } else if (skill.id > 4) {
                //dusk
                ss = _.find(this.axies[1].skills, function(o) { if (o.id == skill.id) return o });
            } else {
                // mech
                ss = _.find(this.axies[0].skills, function(o) { if (o.id == skill.id) return o });
            }

            return ss;
        },
        add: function (param) {
            switch(param) {
                case "win":
                    this.win += 1;
                    break;
                case "loss":
                    this.loss += 1;
                    break;
                case "draw":
                    this.draw += 1;
                    break;
            }
        },
        resetall: function() {
            this.clearall();
            
            this.targetlife = null;
            this.targetdefense = null;
        }
    }
})