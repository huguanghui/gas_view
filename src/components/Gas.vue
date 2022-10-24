<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <select class="form-select" v-model="chosedOptionOne" aria-label="Default select example">
          <option value="703A2D101835">703A2D101835</option>
          <option value="703A2D101836">703A2D101836</option>
          <option value="703A2D101837">703A2D101837</option>
        </select>
      </div>
      <div class="col">
        <button type="button" @click="getMessage" class="btn btn-success">
          获取
        </button>
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
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      chosedOptionOne: "703A2D101835",
      eco2: 400,
      tvoc: 0,
      temperature: 25.0,
      humidity: 50.0,
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
        .then(function (response) {
          console.log("eco2: %d", response.data.eco2)
          this.eco2 = response.data.eco2
          // this.data.tvoc = response.data.tvoc
          // this.data.temperature = response.data.temp
          // this.data.humidity = response.data.hum
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
