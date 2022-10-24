<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">ECO2</label>
                </div>
                <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control"
                        aria-describedby="passwordHelpInline">
                </div>
            </div>
            <div class="col">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">TVOC</label>
                </div>
                <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control"
                        aria-describedby="passwordHelpInline">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Temperature</label>
                </div>
                <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control"
                        aria-describedby="passwordHelpInline">
                </div>
            </div>
            <div class="col">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Humidity</label>
                </div>
                <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control"
                        aria-describedby="passwordHelpInline">
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
            count: 0,
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        }
    }
}
</script>