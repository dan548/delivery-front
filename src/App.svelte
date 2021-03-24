<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Login from "./pages/Login.svelte";
	export let url = "";

	export let name;
</script>

<Router url="{url}">
	<Header/>
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="login">Sign in</Link>
	</nav>
	<div>
		<Route path="about" component="{About}" />
		<Route path="/"><Home /></Route>
		<Route path="login" component="{Login}" />
	</div>
	<Footer/>
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>