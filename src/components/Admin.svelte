<script lang="ts">
    import { contactsInfo } from '../stores/StoreData';
    let contactsData;
    contactsInfo.subscribe(value => {
        contactsData = value
    });
</script>
<div class="md:mx-10 mx-2 md:pt-6 pt-2">
    <div class="overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left text-gray-500  mt-10">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Contact Number
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each contactsData as user}
                    <tr class="bg-white border-b">
                        <td data-th="Name" class="px-6 py-4 font-medium whitespace-nowrap ">
                            {user.userName}
                        </td>
                        <td data-th="Email" class="px-6 py-4">
                            {user.userEmail}
                        </td>
                        <td data-th="Contact Number" class="px-6 py-4">
                            {user.userContactNo}
                        </td>
                    </tr>
                {/each} 
            </tbody>
        </table>
    </div>
</div>

<style>
   
</style>