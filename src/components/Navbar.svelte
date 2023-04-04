<script lang="ts">
  
  import Home from "./Home.svelte";
  import Product from "./Product.svelte";
  import AboutUs from "./AboutUs.svelte";
  import ContactUs from "./ContactUs.svelte";
  import Admin from "./Admin.svelte";

  import { writable } from 'svelte/store';
  import { track } from "../TrackComponents";

  let showMenu:boolean = false;
  let title = "Title"
  let tagLine = "Tag line"

  function toggleNavbar():void {
    showMenu = !showMenu;
  }
  
  function switchComponents(componentName){
    track.update(value => componentName)
    showMenu = !showMenu;
  }
</script>

<div class="bg-gray-700 fixed left-0 right-0">
    <nav class="container px-6 py-4">
      <div>
          <div class="flex text-white">
              <img src="../images/logo.webp" alt="LOGO" class="w-12 h-12 md:w-30" />
              
              <div class="ml-3">
                  <div>{title}</div>
                  <div>{tagLine}</div>
              </div>

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={toggleNavbar} class="flex md:hidden absolute right-8 mt-2">
                <i class="fa-solid fa-bars text-white text-3xl"></i>
            </div>
          </div>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="flex-col space-y-4 
              md:text-center
              md:grid 
              md:grid-cols-5
              md:mt-0  {showMenu? 'flex': 'hidden'}">
            <div class="text-white hover:text-white-800 flex-col text-white md:pt-4 pt-4" on:click={() => switchComponents(Home)}>Home</div>
            <div class="text-white hover:text-white-800 text-white " on:click={() => switchComponents(Product)}>Products</div>
            <div class="text-white hover:text-white-800 text-white " on:click={() => switchComponents(ContactUs)}>Contact Us</div>
            <div class="text-white hover:text-white-800 text-white " on:click={() => switchComponents(AboutUs)}>About Us</div>
            <div class="text-white hover:text-white-800 text-white " on:click={() => switchComponents(Admin )}>Admin</div>
          </div>
      </div>
    </nav>
</div>
<div class="my-24 md:my-36"></div>
