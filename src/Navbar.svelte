<script lang="ts">
    let showMenu:boolean = false;
  
    function toggleNavbar():void {
      showMenu = !showMenu;
    }
  </script>
  
  <div>
      <div class="bg-gray-800">
        <nav class="container px-6 py-4">
          <div>
              <div class="flex items-center justify-between mb-4">
                  <img src="../images/logo.webp" alt="LOGO" class="w-12 h-12 md:w-30">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div on:click={toggleNavbar} class="flex md:hidden">
                  <i class="fa-solid fa-bars text-white text-3xl"></i>
              </div>
              </div>
  
              <div class="flex-col mt-8 space-y-4
                  md:flex 
                  md:space-y-0 
                  md:flex-row 
                  md:items-center 
                  md:space-x-16 -space-x-16 
                  md:mt-0 
              {showMenu? 'flex': 'hidden'}">
                  <span class="text-white hover:text-white-800">Home</span>
                  <span class="text-white hover:text-white-800">Products</span>
                  <span class="text-white hover:text-white-800">Contact Us</span>
                  <span class="text-white hover:text-white-800">About Us</span>
                  <span class="text-white hover:text-white-800">Admin</span>
              </div>
          </div>
        </nav>
      </div>
    </div>
  
  <style>
  
  </style>