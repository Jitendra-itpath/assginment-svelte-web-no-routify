<script lang="ts">
    import Navbar from "./components/Navbar.svelte";
	import Footer from "./components/Footer.svelte";   
    import Home from "./components/Home.svelte";
    import Product from "./components/Product.svelte";
    import AboutUs from "./components/AboutUs.svelte";
    import ContactUs from "./components/ContactUs.svelte";
    import Admin from "./components/Admin.svelte";
    import { track } from "./stores/TrackComponents";
    const componentOptions = {
		'Home' : Home   ,
		'Product' : Product ,
		'AboutUs' : AboutUs  ,
		'ContactUs' : ContactUs  ,
		'Admin' : Admin  
	};
</script>
  
<Navbar />

<svelte:component this={componentOptions[$track]} />

<Footer />
