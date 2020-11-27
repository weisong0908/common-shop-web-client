<template>
  <div>
    <div class="field">
      <label for="customerName" class="label">Name</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <input
          type="text"
          id="customerName"
          class="input"
          v-model="customer.name"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Address</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-map"></i>
        </span>
        <input
          type="text"
          id="customerAddressLine1"
          class="input"
          v-model="customer.address.line1"
          placeholder="Line 1"
        />
      </div>
    </div>
    <div class="field">
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-map"></i>
        </span>
        <input
          type="text"
          id="customerAddressLine2"
          class="input"
          v-model="customer.address.line2"
          placeholder="Line 2"
        />
      </div>
    </div>
    <div class="field">
      <label for="customerAddressPostalCode" class="label">Postal Code</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-map"></i>
        </span>
        <input
          type="text"
          id="customerAddressPostalCode"
          class="input"
          v-model="customer.address.postalCode"
        />
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Place Order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["customer"]
};
</script>
