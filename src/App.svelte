<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import {Router, Route, Link} from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Login from "./pages/Login.svelte";
	import Signup from "./pages/Signup.svelte";
	import Admin from "./pages/Admin.svelte";

	export let url = "";
</script>

<svelte:head>
	<title>Leantech delivery</title>
</svelte:head>

<Router url="{url}">
	<Header/>
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="login">Sign in</Link>
		<Link to="signup">Sign up</Link>
	</nav>
	<div class="page-block">
		<Route path="about"><About /></Route>
		<Route path="/"><Home /></Route>
		<Route path="login" component="{Login}" />
		<Route path="signup"><Signup/></Route>
		<Route path="admin"><Admin/></Route>
	</div>
	<Footer/>
</Router>

<style>
	:global(body) {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.page-block {
		flex-grow: 2;
		display: flex;
	}
</style>