<script>
    import { login } from "../api/auth";

    const handleSubmit = event =>  {
        const request = {
            login: event.target.login.value,
            password: event.target.password.value
        };

        login(request).then(res => {
            localStorage.setItem("jwt", res)
            }
        );
    }
</script>

<form on:submit|preventDefault="{handleSubmit}" class="login-form">
    <label for="login">Login</label>
    <input required type="text" id="login" />

    <label for="password">Password</label>
    <input required type="password" id="password" />

    <button type="submit">Sign in</button>
</form>

<style>
    .login-form {
        margin: auto;
        width: 30%;
        display: flex;
        flex-direction: column;
    }
</style>