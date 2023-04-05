<script lang="ts">
    import Navbar from "./components/Navbar.svelte";
	import Footer from "./components/Footer.svelte";   
    import { track } from "./stores/TrackComponents";
    
    let component;
    track.subscribe(value => {
		component = value
	});
    
</script>
  
<Navbar />

<svelte:component this={component} />

<Footer />

<style>

</style>