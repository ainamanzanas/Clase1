<template>
        <h1>{{ myTitle }}</h1>
    <form>
        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        <div>
            <button v-if="buttonConfig.showButton">{{ buttonConfig.myButtonText }}</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'FormComp',
    props: {
        myTitle: {
            type: String,
            required: true,
            default: 'Hello',
        },
        buttonConfig: Object
    },
    methods: {
        handleSubmit() {
            this.passwordError = this.password.length > 8 ?
             '' : 'Password must be at least 8 characters'
        }
    }
}
</script>

<style scoped>
</style>