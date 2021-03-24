<script>
    async function handleSubmit(event) {
        const response = await fetch("http://localhost:8087/auth",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({login: login, password: password})
            });
        const data = await response.json();
        console.log(data.token);
    }
</script>

<form on:submit|preventDefault="{handleSubmit}">
    <label for="login">Login</label>
    <input required type="text" id="login" />

    <label for="password">Password</label>
    <input required type="password" id="password" />

    <button type="submit">Create account</button>
</form>