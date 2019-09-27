<template>
  <div>
    <LoginHeader></LoginHeader>
    <a-row
      :style="{
        'background-image':
          'url(' + require('../assets/Why_so_serious.jpg') + ')'
      }"
      class="background_img"
    >
      <div class="display: flex">
        <a-col class="login_page_block" :span="8">
          <h2>Log-in</h2>
          <a-form id="login-form" :form="form_login" class="login-form">
            <a-form-item>
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your email address'
                      }
                    ]
                  }
                ]"
                placeholder="Email address"
              >
                <a-icon
                  slot="prefix"
                  type="user"
                  style="color: rgba(0,0,0,.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [
                      { required: true, message: 'Please enter your password' }
                    ]
                  }
                ]"
                type="password"
                placeholder="Password"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0,0,0,.25)"
                />
              </a-input>
              <a class="login-form-forgot" href="">
                Forgot Password
              </a>
            </a-form-item>
            <a-form-item>
              <a-button
                style="cursor: pointer; text-decoration: underline"
                type="primary"
                v-on:click="logingin()"
                class="login-form-button"
              >
                Log in
              </a-button>
            </a-form-item>
          </a-form>
        </a-col>

        <a-col class="login_page_block" :span="8">
          <h2>Sign-in</h2>
          <a-form
            id="sign_in_form"
            :form="form_signin"
            class="signin-form"
            @submit="signingin"
          >
            <a-form-item>
              <a-input
                v-decorator="[
                  'userName',
                  {
                    rules: [
                      { required: true, message: 'Please enter your username' }
                    ]
                  }
                ]"
                placeholder="Username"
              >
                <a-icon
                  slot="prefix"
                  type="user"
                  style="color: rgba(0,0,0,.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your email adress'
                      }
                    ]
                  }
                ]"
                placeholder="Email address"
              >
                <a-icon
                  slot="prefix"
                  type="mail"
                  style="color: rgba(0,0,0,.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [
                      { required: true, message: 'Please enter your password' }
                    ]
                  }
                ]"
                type="password"
                placeholder="Password"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0,0,0,.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password_confirm',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please confirm your password'
                      }
                    ]
                  }
                ]"
                type="password"
                placeholder="Password confirmation"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0,0,0,.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                class="login-form-button"
                @click="signingin()"
              >
                Sign up
              </a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </div>
    </a-row>
    <router-view></router-view>
  </div>
</template>

<script>
import LoginHeader from "./LoginHeader";
import axios from "axios";
import Vue from "vue";

export default {
  data() {
    return {
      post: null,
      error: null,
      id: null,
      username: null,
      email: null,
      token: null,
      role: null,
      form_login: this.$form.createForm(this),
      form_signin: this.$form.createForm(this)
    };
  },
  name: "Login",
  components: {
    LoginHeader
  },

  beforeCreate() {
    this.form_login = this.$form.createForm(this);
    this.form_signin = this.$form.createForm(this);
  },

  methods: {
    //Méthode permettant de traiter la création de compte, à relier sur l'API
    signingin() {
      // e.preventDefault();
      this.form_signin.validateFields((err, values) => {
        if (!err) {
          let signin_password = values.password;
          let signin_password_confirmation = values.password_confirm;
          let signin_email = values.email;
          let signin_username = values.userName;
          //Si les mots de passe correspondent, on crée le compte
          if (
            signin_password.toString() ===
            signin_password_confirmation.toString()
          ) {
            axios
              .post("http://localhost:4000/api/users/sign_up", {
                user: {
                  username: signin_username,
                  email: signin_email,
                  password: signin_password,
                  password_confirmation: signin_password_confirmation,
                  role: "employee"
                }
              })
              .then(response => {
                if (response.status == "403") {
                  console.log("Prout");
                } else if (response.status == "200") {
                  document.getElementById("sign_in_form").reset();
                  this.openNotification(
                    "Account created",
                    "Your account has been created, please log in using your email and password",
                    "success"
                  );
                } else {
                  console.log("Pouet");
                }
              });
          } else {
            this.openNotification(
              "Password not corresponding",
              "Please make sure your password and password confirmation have the same informations",
              "warning"
            );
          }
        } else {
          this.openNotification(
            "Field Validation failed",
            "An unknown error occured and prevented field validation",
            "error"
          );
        }
      });
    },

    setData(err, post) {
      if (err) {
        this.error = err.toString();
      } else {
        this.post = post;
      }
    },
    //Méthode permettant de traiter la connection à un compte, à relier à l'API
    logingin() {
      // e.preventDefault();
      this.form_login.validateFields((err, values) => {
        if (!err) {
          let login_email = values.email;
          let login_password = values.password;
          // let remember = values.remember;
          axios
            .post("http://localhost:4000/api/users/sign_in", {
              email: login_email,
              password: login_password
            })
            .then(response => {
              if (response.status == "403") {
                console.log("Prout");
              } else if (response.status == "200") {
                this.token = response.data.jwt;
                var uncrypted_token = Vue.$jwt.decode(this.token);
                var user_info = uncrypted_token.sub;
                this.id = user_info[0];
                this.username = user_info[1];
                this.email = user_info[2];
                this.role = user_info[3];
                this.Get_Dashboard();
              } else {
                console.log("Pouet");
              }
            });
        } else {
          this.openNotification("Field Validation failed", err, "error");
        }
      });
    },
    openNotification(title, msg, type) {
      this.$notification.open({
        message: title,
        description: msg,
        type: type
      });
    },
    Get_Dashboard() {
      this.$router.push({
        name: "User",
        params: {
          token: this.token,
          username: this.username,
          email: this.email,
          role: this.role,
          id: this.id
        }
      });
    }
  }
};
</script>

<style scoped>
.login_page_block {
  background-color: rgba(194, 198, 204, 0.75);
  padding: auto;
  border-radius: 2%;
  margin-left: 10%;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
  /*background: url("../assets/Why_so_serious.jpg") no-repeat;*/
}

.background_img {
  height: 100vh;
}
</style>
