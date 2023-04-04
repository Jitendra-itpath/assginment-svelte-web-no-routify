<script lang="ts">
    import * as _ from 'lodash';
    import { writable } from 'svelte/store';
    import { productInfo } from '../StoreData';
    let blurScreen : boolean = false
    let addProductToggle : boolean = false;   
    let deleteProductToggle : boolean = false;   
    let updateProductToggle : boolean = false;
    
    function formToggle(formName:string):void{
        if(formName === 'insert'){
            addProductToggle = !addProductToggle;
        }
        if(formName === 'delete'){
            deleteProductToggle = !deleteProductToggle;
        }
        if(formName === 'update'){
            updateProductToggle = !updateProductToggle;
        }
        blurScreen = !blurScreen
    }
    let productName = '';
    let productDescription = ''
    let productPrice = ''

    let productPriceError = ''
    let productNameError = ''
    let productDescriptionError = ''
   
    function validation(){
        let status:boolean = true
        if(productName === ''){
            productNameError = 'is required'
            status = false
        }
        if(productDescription === ''){
            productDescriptionError = 'is required'
            status = false
        }
        if(productPrice === ''){
            productPriceError = 'is required'
            status = false
        }else if(isNaN(Number(productPrice))){
            productPriceError = 'Enter proper price'
            status = false
        }
        return status
    }
    function addProduct(){
        if(validation()){
            let productId = 1
            productInfo.subscribe(value => {
                if(_.last(value) != undefined){
                    productId = (_.last(value)).productId + 1;
                }
            });
            productInfo.update(users => [...users , {productId , productName , productDescription , productPrice}])
            productName = '';
            productDescription = ''
            productPrice = ''
            formToggle('insert')
        }
    }
    let productData
    productInfo.subscribe(value => {
        productData = value
        console.log(productData);
    });
    
</script>

<div class="md:mx-10 mx-2">
    <div class="mt-16 mb-8 z-[-1] flex"> 
        <div class="flex-grow"></div>
        <div>
            <button  on:click={()=>formToggle('insert')} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Add new product
            </button>
        </div>
    </div>
    <div class="overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>

                {#each productData as product}
                    <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {product.productName}
                        </th>
                        <td class="px-6 py-4">
                            ${product.productPrice}
                        </td>
                        <td class="px-6 py-4">
                            {product.productDescription}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex">
                                <div>
                                    <button type="button" on:click={()=>formToggle('update')} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Edit</button>
                                </div>
                                <div>
                                    <button type="button" on:click={()=>formToggle('delete')} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                {/each}



                <tr class="bg-white border-b">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex">
                            <div>
                                <button type="button" on:click={()=>formToggle('update')} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Edit</button>
                            </div>
                            <div>
                                <button type="button" on:click={()=>formToggle('delete')} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr class="border-b bg-gray-50">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">
                        $1999
                    </td>
                    <td class="px-6 py-4">
                        Laptop PC
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex">
                            <div>
                                <button type="button" on:click={()=>formToggle('update')} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Edit</button>
                            </div>
                            <div>
                                <button type="button" on:click={()=>formToggle('delete')} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="bg-white border-b ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        $99
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex">
                            <div>
                                <button type="button" on:click={()=>formToggle('update')} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Edit</button>
                            </div>
                            <div>
                                <button type="button" on:click={()=>formToggle('delete')} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="border-b bg-gray-50">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Google Pixel Phone
                    </th>
                    <td class="px-6 py-4">
                        $799
                    </td>
                    <td class="px-6 py-4">
                        Phone
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex">
                            <div>
                                <button type="button" on:click={()=>formToggle('update')} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Edit</button>
                            </div>
                            <div>
                                <button type="button" on:click={()=>formToggle('delete')} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Apple Watch 5
                    </th>
                    <td class="px-6 py-4">
                        $999
                    </td>
                    <td class="px-6 py-4">
                        Wearables
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex">
                            <div>
                                <button type="button" on:click={()=>formToggle('update')} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Edit</button>
                            </div>
                            <div>
                                <button type="button" on:click={()=>formToggle('delete')} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="{blurScreen? '':'hidden' } z-[2] backdrop-blur-lg fixed top-0 left-0 right-0 bottom-0 p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full">
    <div class="ml-auto mr-auto w-full h-full max-w-md md:h-auto mt-7 {addProductToggle? '':'hidden' }">
        <div class="bg-white rounded-lg shadow">
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 "> Add new product </h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900  ">Name</label>
                        <input type="text" bind:value={productName} name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name" >
                         <span class="text-red-500">{productNameError}</span>
                    </div>
                    <div>
                        <label for="Description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <textarea bind:value={productDescription} name="Description" placeholder="Product Description" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        <span class="text-red-500">{productDescriptionError}</span>
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900  ">Price</label>
                        <input bind:value={productPrice} type="text" name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                           focus:border-blue-500 block w-full p-2.5 " placeholder="$ 0.0" >
                        <span class="text-red-500">{productPriceError}</span>
                    </div>
                    <div class="flex items-center rounded-b">
                        <div class="ml-auto">
                            <button type="button" on:click={addProduct} class=" disabled:opacity-40 mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add</button>
                            
                            <button on:click={()=>formToggle('insert')} type="button" class="mx-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="ml-auto mr-auto w-full h-full max-w-md md:h-auto mt-7 {deleteProductToggle? '':'hidden' }">
        <div class="bg-white rounded-lg shadow">
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 "> Delete - [Product_Name] </h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900  "> Please write the deleting item name in the textbox. </label>
                        <input type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5 " placeholder="[Product_Name]" >
                    </div>
                    <div class="flex items-center rounded-b">
                        <div class="ml-auto">
                            <button type="button" class="mx-1 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                            <button on:click={()=>formToggle('delete')} type="button" class="mx-1 text-gryay-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="ml-auto mr-auto w-full h-full max-w-md md:h-auto mt-7 {updateProductToggle? '':'hidden' }">
        <div class="bg-white rounded-lg shadow">
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 "> Edit product - [Product_Name] </h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900  ">Name</label>
                        <input type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5 " placeholder="name" >
                    </div>
                    <div>
                        <label for="Description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <textarea name="Description" placeholder="Product Description" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900  ">Price</label>
                        <input type="text" name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                         focus:border-blue-500 block w-full p-2.5 " placeholder="$ 0.0" >
                    </div>
                    <div class="flex items-center rounded-b">
                        <div class="ml-auto">
                            <button type="button" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Edit</button>
                            <button on:click={()=>formToggle('update')} type="button" class="mx-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<style>

</style>