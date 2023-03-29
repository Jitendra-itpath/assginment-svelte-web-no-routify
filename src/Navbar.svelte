<script lang="ts">
  let showMenu:boolean = false;

  function toggleNavbar():void {
    showMenu = !showMenu;
  }
</script>

<div class="nav-bar bg-gray-700 fixed left-0 right-0">
    <nav class="container px-6 py-4">
      <div>
          <div class="flex text-white">
              <img src="../images/logo.webp" alt="LOGO" class="w-12 h-12 md:w-30">
              
              <div class="ml-3">
                  <div>[Title]</div>
                  <div>[Tag line]</div>
              </div>

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={toggleNavbar} class="flex md:hidden absolute right-8 mt-2">
                <i class="fa-solid fa-bars text-white text-3xl"></i>
            </div>
          </div>
          <div class="flex-col space-y-4 
              md:flex 
              md:ml-8
              md:space-y-0 
              md:flex-row 
              md:items-center
              md:justify-between
              md:mt-0  {showMenu? 'flex': 'hidden'}">
            <div class="text-white hover:text-white-800 flex-col text-white md:pt-4 pt-4">Home</div>
            <div class="text-white hover:text-white-800 flex-col text-white md:pt-4">Products</div>
            <div class="text-white hover:text-white-800 flex-col text-white md:pt-4">Contact Us</div>
            <div class="text-white hover:text-white-800 flex-col text-white md:pt-4">About Us</div>
            <div class="text-white hover:text-white-800 flex-col text-white md:pt-4">Admin</div>
          </div>
      </div>
    </nav>
</div>
<div class="my-24 md:my-36"></div>


