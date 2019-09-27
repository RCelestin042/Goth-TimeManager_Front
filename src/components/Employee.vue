<template>
  <div>
    <!--    <GeneralHeader-->
    <!--      :username="username"-->
    <!--      :email="email"-->
    <!--    ></GeneralHeader>-->
    <body v-if="role === 'general_manager'"></body>

    <body v-if="role === 'manager'" class="body_manager">
      <a-row type="flex" justify="center">
        <a-col
          id="clocking_container_manager"
          class="clocking_container"
          :span="20"
          type="flex"
          justify="space-between"
        >
          <a-col id="clocking_manager" :span="10">
            <h2>Clocking</h2>
            <a-button type="primary" id="Bouton_clock_in_out_manager" class="Bouton_clock_in_out"
              >Clock in/out
            </a-button>
          </a-col>
          <a-col id="manual_clocking_manager" :span="10">
            <h2>Manually create a workingtime</h2>
            <a-row>
              <h3>Start</h3>
              <a-col :span="12">
                <a-input
                  id="start_date_input_manager"
                  class="workingtime_start_input"
                  type="date"
                />
              </a-col>
              <a-col :span="12">
                <a-input
                  id="start_time_input_manager"
                  class="workingtime_start_input"
                  type="time"
                />
              </a-col>
            </a-row>
            <a-row>
              <h3>End</h3>
              <a-col :span="12">
                <a-input
                  id="end_date_input_manager"
                  class="workingtime_end_input"
                  type="date"
                />
              </a-col>
              <a-col :span="12">
                <a-input
                  id="end_time_input_manager"
                  class="workingtime_end_input"
                  type="time"
                />
              </a-col>
            </a-row>
            <a-button
              type="primary"
              id="Bouton_manual_manager"
              class="workingtime_add_input"
              v-on:click="add_workingtime()"
              >Add workingtime
            </a-button>
          </a-col>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center">
        <a-col id="myteam_stats" class="clocking_container" :span="15">
          <a-card title="Your team's dashboard">
            <a href="#" slot="extra">more</a>
            <a-col :span="20">
              <a-col :lg="12" :md="24">
                <h2>Working time in team</h2>
                <div id="team_pieChart">
                  <apexchart
                    type="pie"
                    width="350"
                    :options="PiechartOptions"
                    :series="Pieseries"
                  />
                </div>
              </a-col>
              <a-col :lg="12" :md="24">
                <h2>Working time on the current month</h2>
                <div id="team_lineChart">
                  <apexchart
                    type="line"
                    height="350"
                    :options="LinechartOptions"
                    :series="Lineseries"
                  />
                </div>
              </a-col>
            </a-col>
          </a-card>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center" class="under-block">
        <a-col id="user_table_container" :lg="11" :md="20">
          <a-table
            :columns="columns_table_manager"
            :dataSource="data_table_manager"
            :pagination="pagination_table_manager"
            :loading="loading_table_manager"
            @change="handleTableChange"
          >
            <span slot="action" slot-scope="text, record">
              <a href="javascript:;" class="ant-dropdown-link">
                More actions <a-icon type="down" />
              </a>
              <div v-if="role === 'general_manager'">
                <a-divider type="vertical" />
                <a href="javascript:;">Delete</a>
              </div>
            </span>
          </a-table>
        </a-col>
        <a-col id="user_details_container" :lg="11" :md="20">
          <a-card title="User Details">
            <a href="#" slot="extra">more</a>
            <a-col :span="20">
              <a-col :span="12">
                <h2>Working time in team</h2>
                <div id="detail_pieChart">
                  <apexchart
                    type="pie"
                    width="350"
                    :options="PiechartOptions"
                    :series="Pieseries"
                  />
                </div>
              </a-col>
              <a-col :span="12">
                <h2>Working time on the current month</h2>
                <div id="detail_lineChart">
                  <apexchart
                    type="line"
                    height="350"
                    :options="LinechartOptions"
                    :series="Lineseries"
                  />
                </div>
              </a-col>
            </a-col>
          </a-card>
        </a-col>
      </a-row>
    </body>

    <body class="body_employee" v-if="role === 'employee'">
      <a-row type="flex" justify="center">
        <a-col
          id="clocking_container_employee"
          class="clocking_container"
          :span="20"
          type="flex"
          justify="space-between"
        >
          <a-col id="clocking" :span="10">
            <h2>Clocking</h2>
            <a-button type="primary" id="Bouton_clock_in_out" class="Bouton_clock_in_out"
              >Clock in/out</a-button
            >
          </a-col>
          <a-col id="manual_clocking" :span="10">
            <a-row>
              <h2>Manually create a workingtime</h2>
              <h3>Start</h3>
              <a-col :span="12">
                <a-input
                  id="start_date_input"
                  class="workingtime_start_input"
                  type="date"
                />
              </a-col>
              <a-col :span="12">
                <a-input
                  id="start_time_input"
                  class="workingtime_start_input"
                  type="time"
                />
              </a-col>
            </a-row>
            <a-row>
              <h3>End</h3>
              <a-col :span="12">
                <a-input
                  id="end_date_input"
                  class="workingtime_end_input"
                  type="date"
                />
              </a-col>
              <a-col :span="12">
                <a-input
                  id="end_time_input"
                  class="workingtime_end_input"
                  type="time"
                />
              </a-col>
            </a-row>
            <a-button
              type="primary"
              id="Bouton_manual"
              class="workingtime_add_input"
              v-on:click="add_workingtime()"
              >Add workingtime</a-button
            >
          </a-col>
        </a-col>
      </a-row>
      <a-row id="charts_container" type="flex" justify="center">
        <a-col :span="20">
          <a-col :lg="8" :md="15">
            <h2>Working time in team on the last 30 days</h2>
            <div id="pieChart">
              <apexchart
                type="pie"
                width="350"
                :options="PiechartOptions"
                :series="Pieseries"
              />
            </div>
          </a-col>
          <a-col :lg="8" :md="15">
            <h2>Working time on the last 30 days</h2>
            <div id="lineChart">
              <apexchart
                type="line"
                height="350"
                :options="LinechartOptions"
                :series="Lineseries"
              />
            </div>
          </a-col>
          <a-col :lg="8" :md="15">
            <h2>My points</h2>
            <div id="gaugeChart">
              <apexchart
                type="radialBar"
                height="350"
                :options="GaugechartOptions"
                :series="Gaugeseries"
              />
            </div>
          </a-col>
        </a-col>
      </a-row>
    </body>
  </div>
</template>

<script>
import axios from "axios";
import GeneralHeader from "./GeneralHeader";

const columns_table_manager = [
  {
    title: "Username",
    dataIndex: "username",
    sorter: true,
    width: "20%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Email",
    sorter: true,
    dataIndex: "email",
    width: "20%"
  },
  {
    title: "Role",
    dataIndex: "role"
  },
  {
    title: "Action",
    dataIndex: "action",
    scopedSlots: { customRender: "action" }
  }
];

export default {
  name: "Employee",
  components: {
    GeneralHeader
  },
  props: {
    role: {
      type: String,
      default: "manager"
    },
    username: {
      type: String,
      default: "DefaultUser"
    },
    email: {
      type: String,
      default: "user@mail.com"
    },
    id: {
      type: String,
      default: "0"
    },
    token: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      //LINECHART DATA
      Lineseries: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      LinechartOptions: {
        chart: {
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep"
            ]
          }
        }
      },
      //PIECHART DATA
      Pieseries: [44, 55, 13, 43, 22],
      PiechartOptions: {
        labels: [
          "Jean Bon",
          "Bernard Tichot",
          "Anna-Lise Durine",
          "Tim Hagine",
          "Eli Copter"
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      //GAUGECHART DATA
      Gaugeseries: [(175 * 100) / 350], //Changer la valeur 175 par la valeur de point retournée par l'API
      GaugechartOptions: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%"
            }
          }
        },
        labels: ["Points: " + "175"] //Changer la valeur 175 par la valeur de point retournée par l'API
      },
      data_table_manager: [],
      pagination_table_manager: {},
      loading_table_manager: false,
      columns_table_manager,
      manager_team: null
    };
  },
  mounted() {
    // Une fois montée, la page appele la fct axios (interraction ac API)
    if (this.role === "manager" || this.role === "general_manager") {
      //Chargement du tableau de visualisation des utilisateurs
      //faire en sorte de créer un label indiquant si l'utilisateur fait partie de la team ou non
      axios
        .get("http://localhost:4000/api/users/all", {
          headers: {
            Authorization: "Bearer " + this.token
          }
        })
        .then(response => {
          this.data_table_manager = response.data.data;
        })
        .catch(error => console.log(error));
      if (this.role === "manager") {
        axios
          .get("http://localhost:4000/api/teams/manager/" + this.id)
          .then(response => {
            console.log(response);
          });
      }
    } else if (this.role === "employee") {
      //Chargement des données des graphs
    }
  },
  methods: {
    handleTableChange(pagination_table_manager, filters, sorter) {
      // console.log(pagination_table_manager);
      const pager = { ...this.pagination_table_manager };
      pager.current = pagination_table_manager.current;
      this.pagination_table_manager = pager;
      this.fetch({
        results: pagination_table_manager.pageSize,
        page: pagination_table_manager.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      });
    },
    openNotification(title, msg, type) {
      this.$notification.open({
        message: title,
        description: msg,
        type: type
      });
    },
    add_workingtime() {
      var start_time;
      var start_date;
      var end_time;
      var end_date;
      var start;
      var end;
      if (this.role === "employee") {
        start_time = document.getElementById("start_time_input").value;
        start_date = document.getElementById("start_date_input").value;
        end_time = document.getElementById("end_time_input").value;
        end_date = document.getElementById("end_date_input").value;
        console.log(start_date, start_time, end_date, end_time);
      } else if (this.role === "manager") {
        start_time = document
          .getElementById("start_time_input_manager")
          .value;
        start_date = document
          .getElementById("start_date_input_manager")
          .value;
        end_time = document.getElementById("end_time_input_manager").value;
        end_date = document.getElementById("end_time_input_manager").value;
        console.log(start_date, start_time, end_date, end_time);
      }
      try {
        axios
          .post("http://localhost:4000/api/workingtimes/" + this.id, {
            start: start_date,
            end: end_date
          })
          .then(response => {
            this.openNotification(
              "Workingtime added",
              "Workingtime successfully added",
              "success"
            );
          });
      } catch (error) {
        if (error.response) {
          this.openNotification(
            error.response.headers,
            error.response.status + error.response.data,
            "error"
          );
        } else if (error.request) {
          this.openNotification("Error", error.request, "error");
        } else {
          this.openNotification("Error", error.message, "error");
        }
      }
    }
  }
};
</script>

<style scoped>
.label_for_input {
  text-align: left;
}

.body_employee {
  background: url("../assets/workers_employees.jpg");
  height: auto;
}

.body_manager {
  background: url("../assets/workers_manager.jpg");
  height: auto;
}

.Bouton_clock_in_out {
  height: 200px;
  margin-top: 2%;
  margin-bottom: 2%;
}

.clocking_container {
  background-color: rgba(194, 198, 204, 0.75);
  padding: auto;
  border-radius: 5%;
  margin-top: 5%;
}

#charts_container {
  margin-top: 5%;
  background-color: rgba(194, 198, 204, 0.75);
  border-radius: 5%;
}

#manual_clocking {
  line-height: 300%;
  margin-left: 5%;
  margin-right: 5%;
}

#center_bar_clocking {
  border-left: 6px solid green;
  height: 500px;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
}

#user_table_container {
  background-color: rgba(194, 198, 204, 0.75);
}

.under-block {
  margin-top: 5%;
}

.workingtime_start_input {
}

.workingtime_end_input {
}

.workingtime_add_input {
}
</style>
