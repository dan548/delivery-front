<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import {Router, Route, Link} from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Login from "./pages/Login.svelte";
	import Signup from "./pages/Signup.svelte";
	import Admin from "./pages/Admin.svelte";
	import Courier from "./pages/Courier.svelte";
	import Customer from "./pages/Customer.svelte";

	export let url = "";
</script>

<svelte:head>
	<title>Leantech delivery</title>

	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
</svelte:head>

<Router url="{url}">
	<Header/>
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="login">Sign in</Link>
		<Link to="signup">Sign up</Link>
		<Link to="admin">Admin panel</Link>
		<Link to="courier">Courier</Link>
		<Link to="order">Make order</Link>
	</nav>
	<div class="page-block">
		<Route path="about"><About /></Route>
		<Route path="/"><Home /></Route>
		<Route path="login" component="{Login}" />
		<Route path="signup"><Signup/></Route>
		<Route path="admin"><Admin/></Route>
		<Route path="courier"><Courier/></Route>
		<Route path="order"><Customer/></Route>
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