<script>
    import { signup } from "../api/auth";

    const handleSubmit = event =>  {
        const request = {
            login: event.target.login.value,
            password: event.target.password.value
        };

        signup(request);
    }
</script>

<form on:submit|preventDefault="{handleSubmit}" class="signup-form">
    <label for="login">Login</label>
    <input required type="text" id="login" />

    <label for="password">Password</label>
    <input required type="password" id="password" />

    <button type="submit">Create account</button>
</form>

<style>
    .signup-form {
        margin: auto;
        width: 30%;
        display: flex;
        flex-direction: column;
    }
</style>