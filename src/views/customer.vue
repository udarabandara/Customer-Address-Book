<template>
    
    <v-row justify="end">
    <v-dialog
      v-model="dialog"
      persistent
      width="600"
    >
      <template v-slot:activator="{ props }">
        <div class="flex justify-end mr-3 mb-2">
          <button v-bind="props"  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
<span class="sr-only">Icon description</span>
</button>
        </div>
        
      </template>
      <v-card>
        
        <v-card-text>
          <v-container>
            <v-form ref="form" @submit.prevent="saveForm">
              <v-row>
               <v-col cols="12">
                <div class="text-xl font-semibold">Add New Customer</div>
               </v-col> 
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Customer Name*" v-model="formData.name"
                  required :rules="[v => !!v || 'Name is required', v => v !== null || 'Name cannot be null']"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Company*" v-model="formData.company"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Contact(Phone)" v-model="formData.phoneNo"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Email*" v-model="formData.email"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Country*" v-model="formData.country"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
              >
              <div class="text-lg font-semibold">Address Details</div>
              </v-col>
                
                <v-col
                cols="12" sm="4"
              >
                <v-text-field
                  label="Number*" v-model="formData.number"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12" sm="8"
              >
                <v-text-field
                  label="Street*" v-model="formData.street"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="City State*" v-model="formData.city"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-col cols="12">  <small>*indicates required field</small></v-col>
              <v-col cols="12">
                <div class="flex justify-end mr-2">
                  <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Close
            </v-btn>

              <v-btn
              color="blue-darken-1"
              variant="text" type="submit"
            >
              Save
            </v-btn>
                </div> 
               </v-col>
</v-form>
           
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>

  <div class="rounded-lg p-2 bg-white mt-4 w-100000">
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
    :items-per-page="5"
    :expanded.sync="expandedItems"
    item-key="email" show-expand
    header-class="custom-header-style"
  >
      <template v-slot:item.status="{ item }">
        <div class="text-end">
          <v-chip :color="item.status === 'active' ? 'green' : 'red'"
            :text="item.status === 'active' ? 'active' : 'inactive'" class="text-uppercase" label size="small"></v-chip>
        </div>
      </template>

      <template v-slot:expand="{ item }">
  <tr>
    <td :colspan="headers.length">
      <div class="p-4">
        <p><strong>Additional Information:</strong></p>
        <p>Email: {{ item.email }}</p>
        <p>Country: {{ item.country }}</p>
        <!-- Add other details as needed -->
        <pre>{{ item }}</pre> <!-- Output the entire 'item' object -->
      </div>
    </td>
  </tr>
</template>
  </v-data-table>
  </div>
</template>

<script>
export default {

  data() {
    return {
      search: '',
      dialog: false,
      formData: {
        name: '',
        company: '',
        phoneNo: null,
        email: '',
        country: '',
        status: 'inactive',
        address: {
          number: null,
          street: '',
          city: ''
        }
      },
      expandedItems: [],
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

    }
  },

  created() {
    // Populate expandedItems with all unique identifiers (e.g., emails)
    this.expandedItems = this.customers.map(customer => customer.email);
  },

  methods: {
    toggleRow(item) {
      const index = this.expandedItems.indexOf(item);
      if (index > -1) {
        this.expandedItems.splice(index, 1);
        console.log(this.expandedItems)
      } else {
        this.expandedItems.push(item);
        console.log(this.expandedItems)
      }
    },

    saveForm() {
    this.$refs.form.validate().then((valid) => {
      if (valid) {
        const customerData = {
          name: this.formData.name,
          company: this.formData.company,
          phoneNo: this.formData.phoneNo,
          email: this.formData.email,
          country: this.formData.country,
          status: 'active', 
          address: [{
            number: this.formData.number,
            street: this.formData.street,
            city: this.formData.city
          }]
        };
        this.customers.push(customerData);
        this.dialog = false;
      } else {
        console.log('Form is not valid. Please check.');
      }
    });
  }
  },
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
</style>