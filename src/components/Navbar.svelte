<script lang="ts">
  import { track } from "../stores/TrackComponents";
  import { navigationComponent } from '../enums/navigationEnum';

  let showMenu:boolean = false;
  let title = "Smart Cart"
  let tagLine = "Upgrade your shoping"
  
  function toggleNavbar():void {
    showMenu = !showMenu;
  }

  function switchComponents(componentName){
    track.set(componentName)
    showMenu = false;
  }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav class="bg-gray-700 fixed left-0 right-0">
    <div class="flex text-white my-2">
        <i class="fa-brands fa-opencart text-4xl mt-1 ml-2" style="color: #008000 ;" on:click={() => switchComponents(navigationComponent.Home)}></i>
        <div class="ml-3" >
          <div>{title}</div>
          <div>{tagLine}</div>
        </div>
        <div on:click={toggleNavbar} class="flex md:hidden absolute right-8 mt-2">
          <i class="fa-solid fa-bars text-white text-3xl"></i>
        </div>
    </div>
    <div class="w-full py-1 md:flex md:justify-between {showMenu? '': 'hidden'}">
      <div class="select-none text-white px-3 my-2 hover:text-white-800 md:text-center md:mx-auto text-white hover:text-green-700" on:click={() => switchComponents(navigationComponent.Home)}>Home</div>
      <div class="select-none text-white px-3 my-2 hover:text-white-800 md:text-center md:mx-auto text-white hover:text-green-700" on:click={() => switchComponents(navigationComponent.Product)}>Products</div>
      <div class="select-none text-white px-3 my-2 hover:text-white-800 md:text-center md:mx-auto text-white hover:text-green-700" on:click={() => switchComponents(navigationComponent.ContactUs)}>Contact Us</div>
      <div class="select-none text-white px-3 my-2 hover:text-white-800 md:text-center md:mx-auto text-white hover:text-green-700" on:click={() => switchComponents(navigationComponent.AboutUs)}>About Us</div>
      <div class="select-none text-white px-3 my-2 hover:text-white-800 md:text-center md:mx-auto text-white hover:text-green-700" on:click={() => switchComponents(navigationComponent.Admin )}>Admin</div>
    </div>
</nav>
<div class="my-20 md:my-30"></div>
