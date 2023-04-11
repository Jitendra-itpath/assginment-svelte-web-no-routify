<script lang="ts">
    import * as _ from 'lodash';
    import { productInfo } from '../stores/StoreData';
    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';
    toastr.options.timeOut = 1500;

    let blurScreen : boolean = false
    let addProductToggle : boolean = false;   
    let deleteProductToggle : boolean = false;   
    let updateProductToggle : boolean = false;
    
    function formToggle(formName:string):void{
        if(formName === 'insert'){
            addProductToggle = !addProductToggle;
            emptyInsertProductForm()
            clearError()
        }
        if(formName === 'delete'){
            deleteProductToggle = !deleteProductToggle;
            clearDeleteForm()
        }
        if(formName === 'update'){
            updateProductToggle = !updateProductToggle;
            emptyUpdateProductForm();
            clearError()
        }
        blurScreen = !blurScreen
    }
    let productName = null;
    let productDescription = null
    let productPrice = null

    let productPriceError = ''
    let productNameError = ''
    let productDescriptionError = ''

    function validation(productName,productDescription,productPrice):boolean{
        let status:boolean = true
        if(productName === ''){
            productNameError = 'This field is required.'
            status = false
        }else if(productName.length < 5 || productName.length >= 30){
            productNameError = 'Product name length must be between 5 to 50.'
            status = false
        }
        if(productDescription === ''){
            productDescriptionError = 'This field is required.'
            status = false
        }else if(productDescription.length < 5 || productDescription.length >= 50 ){
            productDescriptionError = 'Description length must be between 5 to 50.'
            status = false
        }
        if(productPrice === ''){
            productPriceError = 'This field is required.'
            status = false
        }else if(isNaN(Number(productPrice))){
            productPriceError = 'Enter proper price.'
            status = false
        }
        return status
    }
    function addProduct(){
        clearError();
        if(validation(productName,productDescription,productPrice)){
            let productId = 1
            productInfo.subscribe(value => {
                if(_.last(value) != undefined){
                    productId = (_.last(value)).productId + 1;
                }
            });
            productInfo.update(users => [...users , {productId , productName , productDescription , productPrice}])
            formToggle('insert')
            toastr.success('Product Added.')
        }
    }

    let newProductId = 0
    let newProductName = ''
    let newProductDescription = ''
    let newProductPrice = ''

    function findProductForUpdate(id):void{
        let productForUpdate = _.find(productData,function(product){
            if(product.productId == id){
                newProductId = id
                newProductName = product.productName;
                newProductDescription = product.productDescription;
                newProductPrice = product.productPrice;
            }
        });   
    }

    function updateProduct():void{
        if(validation(newProductName,newProductDescription,newProductPrice)){
            productInfo.update(products => {
                let updatedProduct = _.find(products, { productId : newProductId });
                if (updatedProduct) {
                    updatedProduct.productName = newProductName
                    updatedProduct.productDescription = newProductDescription
                    updatedProduct.productPrice = newProductPrice
                }
                newProductId = 0
                return products;
            });
            formToggle('update')
            toastr.success('Product Updated.')
        }
    }
    
    let forDeleteProductName = ''
    let forDeleteProductId = 0
    let deleteProductError = ''
    let displayDelete = ''
    function setDeleteId(id):void{
        forDeleteProductId = id;  
        let productForUpdate = _.find(productData,function(product){
            if(product.productId == id){
                displayDelete = product.productName
            }
        });  
    }

    function deleteProduct():void{
        productInfo.update(products => {
            let forDeleteProduct = _.find(products, { productId : forDeleteProductId });
            if(forDeleteProduct.productName === forDeleteProductName){
                _.remove(products, { productId: forDeleteProductId });
                formToggle('delete')
                toastr.success('Product Deleted.')
            }
            else{
                deleteProductError = 'product name not match.'
            }
            return products;
        });
    }
    function emptyInsertProductForm():void{
        productName = '';
        productDescription = ''
        productPrice = ''
    }
    function clearError():void{
        productPriceError = ''
        productNameError = ''
        productDescriptionError = ''
    }
    function emptyUpdateProductForm():void{
        newProductName = ''
        newProductDescription = ''
        newProductPrice = ''
    }
    function clearDeleteForm():void{
        forDeleteProductId = 0
        forDeleteProductName = ''
        deleteProductError = ''
        displayDelete = ''
    }
    
    let productData
    productInfo.subscribe(value => {
        productData = value
    });
</script>

<div class="md:mx-10 mx-2 md:pt-10 pt-2">
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
                        <td data-th="Name" class="px-6 py-4 font-medium whitespace-nowrap ">
                            {product.productName}
                        </td>
                        <td data-th="Price" class="px-6 py-4">
                            ${product.productPrice}
                        </td>
                        <td data-th="Description" class="px-6 py-4">
                            {product.productDescription}
                        </td>
                        <td data-th="Action" class="px-6 py-4">
                            <div class="flex">
                                <div>
                                    <button type="button" on:click={() => {formToggle('update'); findProductForUpdate(product.productId);}} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Edit</button>
                                </div>
                                <div>
                                    <button type="button" on:click={() => {formToggle('delete'); setDeleteId(product.productId);}} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="{blurScreen? '':'hidden' } z-[2] backdrop-blur-lg fixed top-0 left-0 right-0 bottom-0 p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full">
    <div class="border border-gray-300 rounded-lg ml-auto mr-auto w-full h-full max-w-md md:h-auto popup {addProductToggle? '':'hidden' }">
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
    <div class="border border-gray-300 rounded-lg ml-auto mr-auto w-full h-full max-w-md md:h-auto popup {deleteProductToggle? '':'hidden' }">
        <div class="bg-white rounded-lg shadow">
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 "> Delete - {displayDelete} </h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900  "> Please write the deleting item name in the textbox. </label>
                        <input bind:value={forDeleteProductName} type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5 " placeholder="[Product_Name]" >
                       <span class="text-red-500">{deleteProductError}</span>
                    </div>
                    <div class="flex items-center rounded-b">
                        <div class="ml-auto">
                            <button on:click={deleteProduct} type="button" class="mx-1 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                            <button on:click={()=>formToggle('delete')} type="button" class="mx-1 text-gryay-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="border border-gray-300 rounded-lg ml-auto mr-auto w-full h-full max-w-md md:h-auto popup {updateProductToggle? '':'hidden' }">
        <div class="bg-white rounded-lg shadow">
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 "> Edit product - {newProductName} </h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900  ">Name</label>
                        <input bind:value={newProductName} type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5 " placeholder="name" >
                       <span class="text-red-500">{productNameError}</span>
                    </div>
                    <div>
                        <label for="Description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <textarea bind:value={newProductDescription} name="Description" placeholder="Product Description" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                         <span class="text-red-500">{productDescriptionError}</span>
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900  ">Price</label>
                        <input bind:value={newProductPrice} type="text" name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                         focus:border-blue-500 block w-full p-2.5 " placeholder="$ 0.0" >
                         <span class="text-red-500">{productPriceError}</span>
                    </div>
                    <div class="flex items-center rounded-b">
                        <div class="ml-auto">
                            <button type="button" on:click={updateProduct} class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Edit</button>
                            <button on:click={()=>formToggle('update')} type="button" class="mx-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
