<script lang="ts">
import { contactsInfo } from '../stores/StoreData';
import * as _ from 'lodash'

let userName = ''
let userEmail = ''
let userContactNo = ''

let userNameError = ''
let userEmailError = ''
let userContactError = ''

let contactsData;
contactsInfo.subscribe(value => {
    contactsData = value
});

function validation():boolean{
    let status:boolean = true
    if(userName === ''){
        userNameError = 'This field is required'
        status = false
    }
    if(userEmail === ''){
        userEmailError = 'This field is required'
        status = false
    }
    if(!userEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        userEmailError = 'This field only accept valid email'
        status = false
    }
    if(userContactNo === ''){
        userContactError = 'This field is required'
        status = false
    }else if(isNaN(Number(userContactNo))){
        userContactError = 'This field only accepts numeric number'
        status = false
    }
    if(userContactNo.length !== 10){
        userContactError = 'This field only accepts numeric 10 digit Contact No'
        status = false
    }
    return status
}

function clearForm():void{
    userNameError = ''
    userEmailError = ''
    userContactError = ''
}
function addContact():void {
    clearForm()
    if(validation()){
        contactsInfo.update(users => [...users , { userName , userEmail, userContactNo}])
        userName = ''
        userEmail = ''
        userContactNo = '' 
    }
}
</script>


<div class="grid md:grid-cols-2 md:gap:24">
    <div class="bg-white rounded-lg shadow border border-gray-300 md:mx-5 md:mr-18 mx-3">
        <div class="px-6 py-6 lg:px-8">
              <form class="space-y-6" action="#">
                <div>
                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900  ">Name</label>
                    <input type="text" name="name" bind:value={userName}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 " placeholder="name" required>
                    <span class="text-red-500">{userNameError}</span>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email-Id</label>
                    <input type="text" name="email" bind:value={userEmail}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 " placeholder="adam.smith@gmail.com" required>
                    <span class="text-red-500">{userEmailError}</span>
                </div>

                <div>
                    <label for="ContactNumber" class="block mb-2 text-sm font-medium text-gray-900  ">Contact Number</label>
                    <input type="text" name="ContactNumber" bind:value={userContactNo}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 " placeholder="000-999-8888" required>
                    <span class="text-red-500">{userContactError}</span>
                </div>

                  <div class="flex items-center rounded-b">
                      <div class="ml-auto">
                          <button type="button" on:click={addContact} class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
                          <button type="reset" on:click={clearForm} class="mx-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Reset</button>
                      </div>
                  </div>
              </form>
        </div>
    </div>
        <div class="h-96 md:mt-0 mt-16">
            <div>
                <div class="mapouter">
                    <div class="gmap_canvas h-64 p-3 rounded-lg shadow border border-gray-300 mb-3">
                      <!-- svelte-ignore a11y-missing-attribute -->
                      <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Binori B Square 1, 801, 8th floor, BRTS road, Ambli, Ahmedabad, Gujarat 380058&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                    </div>
                  </div>
            </div>
            <div class="flex">
                <div class="mx-auto">
                    <h3 class="text-xl font-medium leading-tight text-neutral-800 ">
                        Reach Out to Us
                    </h3>
                    <p>Binori B Square 1, </p>
                    <p> 801, 8th floor, </p>
                    <p> BRTS road, Ambli, </p>
                    <p> Ahmedabad, Gujarat 380058</p>
                </div>
            </div>
        </div>
</div> 