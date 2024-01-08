<template>
    
    <v-row justify="end">

      <div class="flex justify-end mr-3 mb-2">
            <button @click="openDialog" type="button" class="bg-green-200 hover:bg-green-400 focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-green-200 dark:hover:bg-green-400">
                <svg class="h-6 w-6 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
                <span class="sr-only">Icon description</span>
            </button>
          </div>
    <v-dialog
      v-model="dialog"
      persistent
      width="600"
    >
      <v-card>
        
        <v-card-text>
          <v-container>
            <div class="flex mr-4" style="justify-content: flex-end;">
              <button  @click="closeDialog" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <v-form ref="form" @submit.prevent="saveForm">

              <div class="flex flex-col">
                <div class="text-xl font-semibold">Add New Customer</div>
                <div class="flex flex-col w-ful mt-2 mb-2">
                  <label for="customerName">Customer Name*</label>
                  <input v-model="formData.name" id="formData.name" name="formData.name" required>
                  <span class="error-message">{{isNameValid}}</span>
                </div>

                <div class="flex flex-col w-ful mt-2 mb-2">
                  <label for="company">Company*</label>
                  <input v-model="formData.company" id="formData.company" name="formData.company" required>
                  <span class="error-message">{{isCompanyValid}}</span>
                </div>

                <div class="flex flex-col w-ful mt-2 mb-2">
                  <label for="phoneNo">Contact(Phone)*</label>
                  <input v-model="formData.phoneNo" id="formData.phoneNo" name="formData.phoneNo" type="number" required>
                  <span class="error-message">{{isPhoneNoValid}}</span>
                </div>

                <div class="flex flex-col w-ful mt-2 mb-2">
                  <label for="email">Email*</label>
                  <input v-model="formData.email" id="formData.email" name="email" required>
                  <span class="error-message">{{isEmailValid}}</span>
                </div>

                <div class="flex flex-col w-ful mt-2 mb-2">
                  <label for="country">Country*</label>
                  <input v-model="formData.country" id="formData.country" name="formData.country" required>
                  <span class="error-message">{{isCountryValid}}</span>
                </div>

                <div class="text-lg font-semibold">Address Details</div>
                <div class="error-message" v-if="formData.addresses.length === 0 ||
                  !formData.addresses[0].number ||
                  !formData.addresses[0].street ||
                  !formData.addresses[0].city">at least one address is required.</div>

                <div v-for="(address, index) in formData.addresses" :key="index">

                      <v-card class="mt-2 mb-2" style="padding: 10px;">
                        <div class="flex flex-col w-full">
                          <div class="flex flex-row w-full">
                          <div class="flex flex-col w-1/3 mt-2 mb-2">
                            <label for="phoneNo">Number*</label>
                            <input v-model="address.number" id="address.number" name="address.number" type="number" required>
                          </div> 
                          <div class="flex flex-col w-2/3 mt-2 mb-2 ml-2">
                            <label for="address.street">Street*</label>
                            <input v-model="address.street" id="address.street" name="address.street" required>
                          </div> 
                        </div>
                        <div class="flex flex-col w-2/3 mt-2 mb-2 w-full">
                            <label for="address.street">City State*</label>
                            <input v-model="address.city" id="address.city" name="address.city" required>
                          </div> 
                        </div>
                    
                      <div class="flex justify-end mr-2">
                        <button type="button" v-if="index !== 0" @click="removeItem(index)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex justify-end">Remove</button>
                      </div>
                      </v-card>
                      </div>
              </div>

            <div class="flex mr-2">
              <button type="button" @click="addItem" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
            </div>
            
            <small>*indicates required field</small>
               
            <div class="flex justify-end mr-2">
              <button type="submit" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </div> 
  </v-form>
           
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
  <div class="rounded-lg p-2 bg-white mt-4">
     <div class="flex flex-row" style="justify-content: space-around">
      <div class="p-2 bg-white mt-4"> 
        <div class="flex flex-row">
          <div class="h-20 w-20 flex items-center justify-center rounded-full bg-green-200">
            <svg class="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
          </div>
        <div class="pl-5">
          <p class="text-sm text-slate-500">Total Customers</p>
          <p class="text-3xl font-semibold">5,423</p>
          <p class="text-sm font-medium"><span class="text-green-700">↑ 16%</span> this month</p>
        </div>    
        </div>
      </div>
        <div class="p-2 bg-white mt-4">
          <div class="flex flex-row">
            <div class="h-20 w-20 flex items-center justify-center rounded-full bg-green-200">
            <svg class="h-10 w-10 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </div>
          <div class="pl-5">
          <p class="text-sm text-slate-500">Members</p>
          <p class="text-3xl font-semibold">1,893</p>
          <p class="text-sm font-medium"><span class="text-red-700">↓ 1%</span> this month</p>
        </div> 
          </div>
        </div>
        <div class="p-2 bg-white mt-4">
          <div class="flex flex-row">
            <div class="h-20 w-20 flex items-center justify-center rounded-full bg-green-200">
            <svg class="h-10 w-10 text-green-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />  <polyline points="17 2 12 7 7 2" /></svg>
          </div>
          <div class="pl-5">
          <p class="text-sm text-slate-500">Active now</p>
          <p class="text-3xl font-semibold">189</p>
          <div class="flex -space-x-1 overflow-hidden">
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </div>
        </div> 
          </div>
        
        </div>
     </div>

    </div>

  <div class="rounded-lg p-2 bg-white mt-4">
    <div class="flex justify-between p-4">
      <div>
        <p class="text-lg font-semibold">All Customers</p>
        <p class="text-sm text-green-400">Active Members</p>
      </div>
      <div class="w-60">
        <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" single-line variant="outlined"
          hide-details></v-text-field>
      </div>
    </div>

    <v-data-table
    class="w-full"
    :headers="headers"
    :items="customers"
    :search="search"
    :items-per-page=5
    @click:row="onRowClicked"
    header-class="custom-header-style"
  >
      <template v-slot:item.status="{ item }">
        <div class="text-end">
          <v-chip :color="item.status === 'active' ? 'green' : 'red'"
            :text="item.status === 'active' ? 'active' : 'inactive'" class="text-uppercase" label size="small"></v-chip>
        </div>
      </template>
  </v-data-table>

 <!-- Dialog component for displaying expanded item -->
   <v-dialog v-model="dialogVisible" max-width="600">
 
      <v-card>
        <v-card-text>
          <div class="customer-details">
            <div class="flex mr-4" style="justify-content: flex-end;">
              <button @click="dialogVisible = false" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

      <div v-for="customer in this.expandedItems" :key="customer.email" class="customer">
        <div class="mb-6 lg:mb-0">
            <div class="relative block rounded-lg p-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="flex-row items-center lg:flex">
                <div class="w-full shrink-0 grow-0 basis-auto lg:w-5/12 lg:pr-6">
                  <img :src="randomImage" alt="Avatar"
                    class="mb-6 w-full rounded-md lg:mb-0" />
                </div>
                <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                  <h5 class="mb-2 text-lg font-bold text-sky-700">{{ customer.name }}</h5>
                  <p><strong>Company:</strong> {{ customer.company }}</p>
                  <p><strong>Email:</strong> {{ customer.email }}</p>
                  <p><strong>Country:</strong> {{ customer.country }}</p>
                  <p><strong>Status:</strong> 
                      <v-chip :color="customer.status === 'active' ? 'green' : 'red'"
                :text="customer.status === 'active' ? 'active' : 'inactive'" class="text-uppercase pl-2" label size="small"></v-chip></p>

                  <div class="pt-4">
                    <h3 class="text-lime-500">Addresses:</h3>
                  <div v-for="(address, index) in customer.addresses" :key="index" class="address">
                    <p><strong>Address {{ index + 1 }}:</strong></p>
                    <div class="pl-4">
                      <p><strong>Number:</strong> {{ address.number }}</p>
                      <p><strong>Street:</strong> {{ address.street }}</p>
                      <p><strong>City:</strong> {{ address.city }}</p>
                    </div>
                  </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/customers').reply(200, {
  customers: [
        {
          name: 'Alice Smith',
          company: 'Google',
          phoneNo: 2255501232,
          email: 'alice@google.com',
          country: 'United States',
          status: 'active',
          addresses: [
            {
              number: 123,
              street: 'Maple Avenue',
              city: 'Toronto'
            },
            {
              number: 456,
              street: 'Oak Street',
              city: 'Vancouver'
            },
          ]
        },
        {
          name: 'Bob Johnson',
          company: 'Apple',
          phoneNo: 1234567890,
          email: 'bob@apple.com',
          country: 'Canada',
          status: 'inactive',
          addresses: [
            {
              number: 123,
              street: 'Maple Avenue',
              city: 'Toronto'
            },
            {
              number: 456,
              street: 'Oak Street',
              city: 'Vancouver'
            },
          ]
        },
        {
          name: 'Eva Williams',
          company: 'Microsoft',
          phoneNo: 9876543210,
          email: 'eva@microsoft.com',
          country: 'United Kingdom',
          status: 'active',
          addresses: [
            {
              number: 123,
              street: 'Maple Avenue',
              city: 'Toronto'
            },
            {
              number: 456,
              street: 'Oak Street',
              city: 'Vancouver'
            },
          ]
        },
        {
          name: 'Daniel Brown',
          company: 'Amazon',
          phoneNo: 5544332211,
          email: 'daniel@amazon.com',
          country: 'Australia',
          status: 'active',
          addresses: [
            {
              number: 123,
              street: 'Maple Avenue',
              city: 'Toronto'
            },
            {
              number: 456,
              street: 'Oak Street',
              city: 'Vancouver'
            },
          ]
        },
        {
          name: 'Grace Davis',
          company: 'Google',
          phoneNo: 8765432109,
          email: 'grace@google.com',
          country: 'United States',
          status: 'inactive',
          addresses: [
            {
              number: 123,
              street: 'Maple Avenue',
              city: 'Toronto'
            },
            {
              number: 456,
              street: 'Oak Street',
              city: 'Vancouver'
            },
          ]
        },
        {
          name: 'Olivia Miller',
          company: 'Apple',
          phoneNo: 1029384756,
          email: 'olivia@apple.com',
          country: 'Canada',
          status: 'active',
          addresses: [
            {
              number: 123,
              street: 'Maple Avenue',
              city: 'Toronto'
            },
            {
              number: 456,
              street: 'Oak Street',
              city: 'Vancouver'
            },
          ]
        },
        {
          name: 'Liam Wilson',
          company: 'Microsoft',
          phoneNo: 2468109753,
          email: 'liam@microsoft.com',
          country: 'United Kingdom',
          status: 'active',
          addresses: [
            {
              number: 123,
              street: 'Maple Avenue',
              city: 'Toronto'
            },
            {
              number: 456,
              street: 'Oak Street',
              city: 'Vancouver'
            },
          ]
        },
        {
          name: 'Sophia Garcia',
          company: 'Amazon',
          phoneNo: 9876543210,
          email: 'sophia@amazon.com',
          country: 'Australia',
          status: 'inactive',
          addresses: [
            {
              number: 123,
              street: 'Maple Avenue',
              city: 'Toronto'
            },
            {
              number: 456,
              street: 'Oak Street',
              city: 'Vancouver'
            },
          ]
        },
        {
          name: 'Noah Brown',
          company: 'Google',
          phoneNo: 1122334455,
          email: 'noah@google.com',
          country: 'United States',
          status: 'active',
          addresses: [
            {
              number: 123,
              street: 'Maple Avenue',
              city: 'Toronto'
            },
            {
              number: 456,
              street: 'Oak Street',
              city: 'Vancouver'
            },
          ]
        },
        {
          name: 'Ava Johnson',
          company: 'Apple',
          phoneNo: 9988776655,
          email: 'ava@apple.com',
          country: 'Canada',
          status: 'active',
          addresses: [
            {
              number: 123,
              street: 'Maple Avenue',
              city: 'Toronto'
            },
            {
              number: 456,
              street: 'Oak Street',
              city: 'Vancouver'
            },
          ]
        },
      ],
});

export default {
  data() {
    return {
      search: '',
      dialog: false,
      dialogVisible: false,
      formData: {
        name: '',
        company: '',
        phoneNo: null,
        email: '',
        country: '',
        status: 'active',
        addresses:[],
      },
      imageSources: [
        'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
        'https://tecdn.b-cdn.net/img/new/avatars/2.webp',
        'https://tecdn.b-cdn.net/img/new/avatars/3.webp',
        'https://tecdn.b-cdn.net/img/new/avatars/4.webp',
        'https://tecdn.b-cdn.net/img/new/avatars/5.webp'
      ],
      expandedItems: [],
      page: 1,
      itemsPerPage: 5,
      headers: [
        {
          align: 'start',
          key: 'name',
          sortable: false,
          title: 'Customer Name',
        },
        { key: 'company', title: 'Company' },
        { key: 'phoneNo', title: 'Phone Number' },
        { key: 'email', title: 'Email' },
        { key: 'country', title: 'Country' },
        { key: 'status', title: 'Status' },
      ],
      customers: [],
      isNameValid: '',
      isCompanyValid: '',
      isPhoneNoValid: '',
      isEmailValid: '',
      isCountryValid: ''
    }
  },

  created() {
    this.getCustomers();
  },

  methods: {
    onRowClicked(item, row) {
      this.expandedItems = [];
      const index = row.index
      if (index !== -1) {
        this.expandedItems.push(this.customers[index]);
        this.dialogVisible = true;
      }
    },

    getCustomers() {
      axios.get('/customers')
        .then(response => {
          this.customers = response.data.customers;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },

    openDialog() {
      this.dialog = true;
      this.formData.addresses.push({
        number: null,
        street: '',
        city: ''
      });
    },

    closeDialog() {
      this.dialog = false;
      this.reasetForm();
    },

    addItem() {
      this.formData.addresses.push({
        number: null,
        street: '',
        city: ''
      });
    },

    removeItem(index) {
      this.formData.addresses.splice(index, 1);
    },

    saveForm() {
      const isFormValid = this.validateForm(); 
      if (isFormValid) {
        const customerData = {
          name: this.formData.name,
          company: this.formData.company,
          phoneNo: this.formData.phoneNo,
          email: this.formData.email,
          country: this.formData.country,
          status: 'active',
          addresses: this.formData.addresses,
        };
        this.customers.push(customerData);
        this.dialog = false;
        this.reasetForm();
      } else {
        console.log('Form is not valid. Please check.');
      }
    },

    validateForm(){
      let isValid = true;

      if(!this.formData.name || this.formData.name===''){
        this.isNameValid = 'Name is required';
        isValid = false;
      }else{
        this.isNameValid = ''
      } 

      if(!this.formData.company || this.formData.company===''){
        this.isCompanyValid = 'Company is required';
        isValid = false;
      }else{
        this.isCompanyValid = ''
      }  

      if(!this.formData.phoneNo || this.formData.phoneNo===''){
        this.isPhoneNoValid = 'Contact(Phone) is required';
        isValid = false;
      }else if (!/^[0-9]{10}$/.test(this.formData.phoneNo)) {
        this.isPhoneNoValid = 'Please enter 10-digit phone number';
        isValid = false;
      }else{
        this.isPhoneNoValid = ''
      } 

      if(!this.formData.email || this.formData.email===''){
        this.isEmailValid = 'Email is required';
        isValid = false;
      }else if (!/.+@.+\..+/.test(this.formData.email)) {
        this.isEmailValid = 'Please enter valid email address';
      }else{
        this.isEmailValid = ''
      } 

      if(!this.formData.country || this.formData.country===''){
        this.isCountryValid = 'Country is required';
        isValid = false;
      }else{
        this.isCountryValid = ''
      } 

      return isValid;
    },
    
    reasetForm() {
      this.formData = {
        name: '',
        company: '',
        phoneNo: null,
        email: '',
        country: '',
        status: 'active',
        addresses: [],
      }

      this.isNameValid = '',
      this.isCompanyValid = '',
      this.isPhoneNoValid = '',
      this.isEmailValid = '',
      this.isCountryValid = ''
    },
  },

  computed: {
    randomImage() {
      const randomIndex = Math.floor(Math.random() * this.imageSources.length);
      return this.imageSources[randomIndex];
    },

    isAddressValid() {
      return formData.addresses.length === 0 || 
      !formData.addresses[0].number || 
      !formData.addresses[0].street || 
      !formData.addresses[0].cityName 
    },

    nameListner(){
    }
  }
}
</script>

<style>
.v-datatable>.v-datatable__actions {
  justify-content: flex-end;
}

.v-data-table-header__content span {
  font-weight: bold;
  color: cadetblue;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.error-message {
  color: red;
  font-size: 12px;
}
</style>