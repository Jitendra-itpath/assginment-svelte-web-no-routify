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
<div class="bg-gray-700 fixed left-0 right-0">
    <nav class="container px-6 py-4">
      <div>
          <div class="flex text-white">
              <i class="fa-brands fa-opencart text-4xl mt-1" style="color: #008000 ;" on:click={() => switchComponents(navigationComponent.Home)}></i>
              <div class="ml-3" >
                  <div>{title}</div>
                  <div>{tagLine}</div>
              </div>
            <div on:click={toggleNavbar} class="flex md:hidden absolute right-8 mt-2">
                <i class="fa-solid fa-bars text-white text-3xl"></i>
            </div>
          </div>
          <div class="flex-col space-y-4  md:text-center md:grid md:grid-cols-5 md:mt-0  {showMenu? 'flex': 'hidden'}">
            <div class=" select-none text-white hover:text-white-800 flex-col text-white md:pt-4 pt-4 hover:text-green-700" on:click={() => switchComponents(navigationComponent.Home)}>Home</div>
            <div class="select-none text-white hover:text-white-800 text-white hover:text-green-700" on:click={() => switchComponents(navigationComponent.Product)}>Products</div>
            <div class="select-none text-white hover:text-white-800 text-white hover:text-green-700" on:click={() => switchComponents(navigationComponent.ContactUs)}>Contact Us</div>
            <div class="select-none text-white hover:text-white-800 text-white hover:text-green-700" on:click={() => switchComponents(navigationComponent.AboutUs)}>About Us</div>
            <div class="select-none text-white hover:text-white-800 text-white hover:text-green-700" on:click={() => switchComponents(navigationComponent.Admin )}>Admin</div>
          </div>
      </div>
    </nav>
</div>
<div class="my-20 md:my-30"></div>
