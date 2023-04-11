<script lang="ts">
  import { navigationComponent } from '../enums/navigationEnum';
  import { track } from "../stores/TrackComponents";
  import { productInfo, totalProducts } from '../stores/StoreData';
  import { totalContacts } from '../stores/StoreData';

</script>
<div class="home mt-6 md:mx-8 mx-4 md:pt-16 pt-8">
    <div class="grid md:grid-cols-2 lg:gap-24 md:gap-16 gap-10">
        <div class="flex justify-center">
            <div
              class="block max-w-fit rounded-lg bg-white p-6 shadow-lg">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Products Available : <span class="text-green-700">{totalProducts}</span>
              </h5>
              <p class="mb-4 text-base text-neutral-800 text-justify">
                We offer a wide variety of moile and laptop-related goods. Please check our product page for more details. 
              </p>
              <button on:click={ () => {track.set(navigationComponent.Product)}} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                View All
              </button>
            </div>
          </div>

          <div class="flex justify-center">
            <div
              class="block max-w-fit rounded-lg bg-white p-6 shadow-lg ">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800">
                Total <span class="text-green-700">{totalContacts}</span> users contactd us
              </h5>
              <p class="mb-4 text-base text-neutral-800 text-justify">
                We value your support and look forward to hearing from you. Thank you for selecting Smart Cart for your smartphone and notebook requirements.
              </p>
              <button on:click={ () => {track.set(navigationComponent.ContactUs)}} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Contact US Now
              </button>
            </div>
          </div>
    </div>

    <div class="mt-10">
        <p class="text-5xl font-bold mb-4 text-neutral-600 leading-loose">Smart Cart</p>
        <p class="mb-4 text-lg text-neutral-600 text-justify">
          Smart Cart is your one-stop store for all things smart. We provide a diverse selection of the most recent cellphones, tablets, and accessories from the industry's leading names, all at reasonable rates. Our user-friendly website makes it quick and simple to buy for your preferred mobile devices, with a seamless checkout process intended to make your experience as pleasant as possible.
        </p>
        <p class="mb-4 text-lg text-neutral-600 text-justify">
          Smart Cart is your one-stop store for all things smart. We provide a diverse selection of the most recent cellphones, tablets, and accessories from the industry's leading names, all at reasonable rates. Our user-friendly website makes it quick and simple to buy for your preferred mobile devices, with a seamless checkout process intended to make your experience as pleasant as possible.
        </p>
    </div>
</div>