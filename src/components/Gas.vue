<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <select class="form-select" v-model="chosedOptionOne" aria-label="Default select example">
          <option value="703A2D101835">703A2D101835</option>
          <option value="703A2D10182C">703A2D10182C</option>
        </select>
      </div>
      <!-- <div class="col">
                <button type="button" @click="getMessage" class="btn btn-success">
                    获取
                </button>
            </div> -->
      <div class="col-auto">
        <input type="text" id="inputTimeStamp" :value="gas_ts" class="form-control" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">ECO2</label>
        </div>
        <div class="col-auto">
          <input type="text" id="inputPassword6" :value="eco2" class="form-control" />
        </div>
      </div>
      <div class="col">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">TVOC</label>
        </div>
        <div class="col-auto">
          <input type="text" id="inputPassword6" :value="tvoc" class="form-control" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Temperature</label>
        </div>
        <div class="col-auto">
          <input type="text" id="inputPassword6" :value="temperature" class="form-control" />
        </div>
      </div>
      <div class="col">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Humidity</label>
        </div>
        <div class="col-auto">
          <input type="text" id="inputPassword6" :value="humidity" class="form-control" />
        </div>
      </div>
    </div>
    <div class="row">
    </div>
  </div>
</template>

<script>
import { formatDate } from '../utils/date.js'
import * as echarts from 'echarts/core';

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
  },
  data() {
    return {
      chosedOptionOne: "703A2D10182C",
      gas_ts: "1970-01-01 00:00:00",
      eco2: 400,
      tvoc: 0,
      temperature: 25.0,
      humidity: 50.0,
      timer: null,
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    getMessage() {
      console.log("getMessage! %s", this.chosedOptionOne);
      var data = JSON.stringify({ "deviceid": this.chosedOptionOne });
      var config = {
        method: "post",
        url: "/gas/getdata",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      console.log("data: %s", data)
      this.$http(config)
        .then(({ data }) => {
          console.log("data: %s", data);
          this.eco2 = data.eco2;
          this.tvoc = data.tvoc;
          this.temperature = data.temp;
          this.humidity = data.hum;
          this.gas_ts = formatDate(new Date(data.ts * 1000), 'yyyy-MM-dd hh:mm:ss');
        }).catch(function (error) {
          console.log(error);
        })
    },
    setTimer() {
      if (this.timer == null) {
        this.timer = setInterval(() => {
          this.getMessage();
        }, 1000);
      }
    },
  },
  created: function () {
    clearInterval(this.timer);
    this.timer = null;
    this.setTimer();
  },
  destroyed: function () {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>
