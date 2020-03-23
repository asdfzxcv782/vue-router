<template>
    <div>
        <!--<b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
        <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="exampleInputGroup1"
        label="Username:"
        label-for="exampleInput1">
        <b-row class="justify-content-md-center">
            <b-col></b-col>
            <b-col>
                <b-form-input id="exampleInput1"
                    type="text"
                    v-model="form.username"
                    required
                    placeholder="Enter username"
                    class="mb-2 mr-sm-2 mb-sm-0">
                </b-form-input>
            </b-col>
            <b-col></b-col>
        </b-row>
        <!--<b-form-input id="exampleInput1"
        type="text"
        v-model="form.username"
        required
        placeholder="Enter username"
        class="mb-2 mr-sm-2 mb-sm-0">
        </b-form-input> -->
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
        label="Password:"
        label-for="exampleInput2">
        <b-row class="justify-content-md-center">
            <b-col></b-col>
            <b-col>
                <b-form-input id="exampleInput2"
                type="password"
                v-model="form.password"
                required
                placeholder="Enter password">
                </b-form-input>
            </b-col>
            <b-col></b-col>
        </b-row>
        </b-form-group>
        <div v-if="loginsucess">
             <b-alert show dismissible variant="success">
                <b-icon icon="check-box" scale="2" variant="success"></b-icon> Login Sucess
            </b-alert>
        </div>
        <div v-else-if="loginfail">
            <b-alert show dismissible variant="danger">
                <b-icon icon="x-circle" scale="2" variant="danger"></b-icon> Login Fail
            </b-alert>
        </div>
        <div v-else></div>
        <!--</b-form-group>
        <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
        <b-form-checkbox value="me">Check me out</b-form-checkbox>
        <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
        </b-form-group> -->
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
    data () {
        return {
            form: {
                username: '',
                password: '',
                checked: []
            },
            loginsucess:false,
            loginfail:false,
            show: true
        }
    },
   

    methods: {
        onSubmit (evt) {
            evt.preventDefault();
            this.loginfail = false;
            this.loginsucess = false;
            axios.post('http://192.168.1.119:8081/demo/login',qs.stringify({
                'username': this.form.username,
                'password': this.form.password
            })).then((response) => {
            var status = response.data;
            if(status === 'OK') {
                this.loginsucess = true;
            this.$router.push({name:'main'});
            //window.location = `http://192.168.1.119:8081/demo/main`;
                
            } else {
                //this.$router.push({name:'main'});
               window.location = `http://192.168.1.119:8081/demo/main`;
            }
                
            }).catch((error) => {
                if(error.response.status === 401){
                    this.loginfail = true;
                }
            });
        }
    }
}
</script>