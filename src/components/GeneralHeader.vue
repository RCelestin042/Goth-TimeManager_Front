<template>
  <a-layout-header class="General_header">
    <a-row type="flex" justify="center">
      <a-col id="current_time_container" :span="8">
        <p class="clock_date">{{ current_time }}</p>
      </a-col>
      <a-col id="logo_container" :span="8">
        <img
          src="../assets/Goth-Time_Manager_logo.png"
          height="103.6px"
          width="119px"
          class="app_logo"
        />
      </a-col>
      <a-col id="user_avatar_container" :span="4">
        <a-avatar :size="64" icon="user" />
      </a-col>
      <a-col id="user_info_container" class="user_container" :span="4">
        <p>{{ username }} - {{ email }}</p>
        <a href="/">Edit Password</a>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
var moment = require("moment");

export default {
  name: "GeneralHeader",
  props: {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      current_time: ""
    };
  },
  created: function() {
    this.Showtime();
  },
  methods: {
    Showtime: function() {
      this.current_time = moment()
        .format("dddd, MMMM Do YYYY, h:mm:ss a")
        .toString();
      setInterval(this.Showtime, 1000);
    }
  }
};
</script>

<style scoped>
.General_header {
  background-color: white;
  height: fit-content;
  margin-top: 1%;
  text-align: center;
  font-size: 12px;
  color: #2c3e50;
  line-height: 20px;
}
.user_container {
  text-align: right;
}

#current_time_container {
  font-size: 20px;
  /*font-family: 'Share Tech Mono', monospace;*/
  /*color: #ffffff;*/
  /*text-align: center;*/
  /*position: absolute;*/
  /*left: 50%;*/
  /*top: 50%;*/
  /*transform: translate(-50%, -50%);*/
  /*color: #daf6ff;*/
  /*text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);*/
}
/*.app_logo {*/
/*  position: absolute;*/
/*  left: 47%;*/
/*}*/
/*.clock_time {*/
/*  letter-spacing: 0.05em;*/
/*  font-size: 80px;*/
/*  padding: 5px 0;*/
/*}*/
/*.clock_date {*/
/*  letter-spacing: 0.1em;*/
/*  font-size: 24px;*/
/*}*/
</style>
