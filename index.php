<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>AE AXIE</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="container">
            <div class="wrapper">
                <div class="row">
                    <div id="app" class="col-12" style="position: relative">
                        <div class="row">
                            <div class="col-12" v-for="axie in axies">
                                <div v-bind:class="loadClass(skills)" v-for="skills in axie.skills" v-bind:style="loadBg(skills.img)" @click="selectSkills(skills)">
                                    <span class="ene">{{ skills.ene }}</span>
                                    <span class="name">{{ skills.name }}</span>

                                    <p class="desc">{{ skills.desc }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <h4 class="mt-3">Total <b class="text-primary">Life/</b> <b class="text-danger">Damage/</b> <b>Remains</b></h4>
                                <h2>
                                    <strong class="text-primary">【{{ totalLife }}】</strong>
                                    <strong class="text-danger">【{{ totalDamage }}】</strong>
                                    <strong>【{{ difference }}】</strong></h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12"> <br />
                                <h2>
                                    <small class="btn btn-success col-1" @click="add('win')">WIN</small></small><strong class="text-primary">【{{ win }}】</strong> <br />
                                    <small class="btn btn-danger col-1" @click="add('loss')">LOSS</small></small><strong class="text-danger">【{{ loss }}】</strong> <br />
                                    <small class="btn btn-dark col-1" @click="add('draw')">DRAW</small></small><strong>【{{ draw }}】</strong>
                                </h2> <br />
                            </div>
                        </div>
                        <div class="calc">
                            <small class="btn btn-sm btn-danger" @click="resetall">Reset all</small></small>
                            <h4>Target Class</h4>
                            <div class="form-check" v-for="target in targettypes">
                                <input type="radio" class="form-check-input" v-bind:id="target.name" v-bind:value="target.type" v-model="targettype">
                                <label class="form-check-label" v-bind:for="target.name">{{ target.name }}</label>
                            </div>
                            <h4 class="mt-1">Additional Options</h4>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="check1"  v-model="isBugSplatAttackingBug">
                                <label for="check1">Is Bug Splat attacking a BUG type</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="check2" v-model="isPricklyTrapAttackingLast">
                                <label for="check2">Is Prickly Trap attacking last</label>
                            </div>

                            <h4 class="mt-1">Target Life/ P. Defense</h4>
                            <div class="row">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="LIFE" v-model="targetlife"/>
                                    <input type="text" class="form-control" placeholder="POSIBLE DEFENSE" v-model="targetdefense"/>
                                </div>
                            </div>
                            
                            <h4 class="mt-3">Selected Skills <small><small class="btn btn-sm btn-danger" @click="clearall">Clear all</small></small></h4>
                            <div v-for="(sskills , index) in selectedskills">
                                <label class="form-check-label mt-1"> <small class="btn btn-sm btn-danger" @click="removesskill(index, sskills)">X</small> <b>{{ sskills.name }}</b> 【{{ skilldmg(sskills) }}】</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/script.js"></script>
    </body>
</html>
