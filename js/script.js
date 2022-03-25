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
                type: 1,
            },
            {
                name: 'Beat/ Mech/ Bug',
                type: 2,
            },
            {
                name: 'Bird/ Aqua/ Dawn',
                type: 3,
            }
        ],
        selectedskills: [],
        isBugSplatAttackingBug: false,
        isPricklyTrapAttackingLast: false,
        targettype: null,
        axies: [
            {
                name: 'Mech',
                skills: [
                    {
                        name: 'Heroic Reward',
                        ene: 1,
                        atk: 55,
                        def: 0,
                        desc: 'Draw a card when attacking an Aquatic, Bird, or Dawn target.',
                        img: 'beast-back-04.png',
                        selected: false
                    },
                    {
                        name: 'Nut Crack',
                        ene: 1,
                        atk: 105,
                        def: 30,
                        desc: "Deal 120% damage when comboed with another 'Nut Cracker' card.",
                        img: 'beast-mouth-02.png',
                        selected: false
                    },
                    {
                        name: 'Sinister Strike',
                        ene: 1,
                        atk: 130,
                        def: 20,
                        desc: "Deal 200% damage on critical strikes.",
                        img: 'beast-horn-10.png',
                        selected: false
                    },
                    {
                        name: 'Nut Throw',
                        ene: 1,
                        atk: 105,
                        def: 30,
                        desc: "Deal 120% damage when comboed with another 'Nut Cracker' card.",
                        img: 'beast-tail-10.png',
                        selected: false
                    },
                ]
            },
            {
                name: 'Dusk',
                skills: [
                    {
                        name: 'Vine Dagger',
                        ene: 0,
                        atk: 20,
                        def: 30,
                        desc: 'Double shield from this card when comboed with a plant card.',
                        img: 'reptile-back-06.png',
                        selected: false
                    },
                    {
                        name: 'Chomp',
                        ene: 1,
                        atk: 75,
                        def: 50,
                        desc: 'Apply Stun to enemy when comboed with at least 2 additional cards.',
                        img: 'reptile-mouth-10.png',
                        selected: false
                    },
                    {
                        name: 'Headshot',
                        ene: 1,
                        atk: 130,
                        def: 0,
                        desc: "Disable target's horn cards next round.",
                        img: 'bird-horn-08.png',
                        selected: false
                    },
                    {
                        name: 'Spicy Surprise',
                        ene: 1,
                        atk: 80,
                        def: 50,
                        desc: "Disable target's mouth cards next round.",
                        img: 'plant-tail-12.png',
                        selected: false
                    }
                ]
            },
            {
                name: 'Plant',
                skills: [
                    {
                        name: 'Bug Splat',
                        ene: 1,
                        atk: 110,
                        def: 50,
                        desc: "Deal 50% more damage when attacking Bug targets.",
                        img: 'bug-back-08.png',
                        selected: false
                    },
                    {
                        name: 'Vegetal Bite',
                        ene: 1,
                        atk: 30,
                        def: 30,
                        desc: "Steal 1 energy from your opponent when comboed with another card.",
                        img: 'plant-mouth-02.png',
                        selected: false
                    },
                    {
                        name: 'Prickly Trap',
                        ene: 1,
                        atk: 110,
                        def: 20,
                        desc: "Deal 120% damage if this Axie attacks last.",
                        img: 'plant-horn-10.png',
                        selected: false
                    },
                    {
                        name: 'Spicy Surprise',
                        ene: 1,
                        atk: 80,
                        def: 50,
                        desc: "Disable target's mouth cards next round.",
                        img: 'plant-tail-12.png',
                        selected: false
                    },
                ]
            },
        ],
        message: 'Hello Vue!'
    },
    computed: {
        totalDamage: function () {
            var count = 0;
            _.forEach(this.selectedskills, function (skills) {
                count += skills.atk;
            });
            
            return count;
        }
    },
    methods: {
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
            skill.selected = !skill.selected;

            var valObj = this.selectedskills.findIndex(object => {
                return object.name === skill.name;
            });
            console.log(valObj);

            if (skill.selected) {
                if (valObj < 0) {
                    this.selectedskills.push(skill);
                }
            } else {
                if (valObj >= 0) {
                    this.selectedskills.splice(valObj, 1);
                }
            }
        }
    }
})