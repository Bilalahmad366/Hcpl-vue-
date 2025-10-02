<script lang="ts" setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const city = ref('');
const country = ref('');
const interest = ref('');
const subject = ref('');
const message = ref('');

const handleSubmit = (e: Event) => {
  e.preventDefault();
  // Form submission logic
  console.log({
    name: name.value,
    email: email.value,
    phone: phone.value,
    city: city.value,
    country: country.value,
    interest: interest.value,
    subject: subject.value,
    message: message.value,
  });
  alert('Form submitted!'); // Placeholder
};
</script>

<template>
  <form @submit="handleSubmit" class="space-y-4">
    <!-- Name & Email -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input v-model="name" type="text" placeholder="Name*" class="form-input" />
      <input v-model="email" type="email" placeholder="Email*" class="form-input" />
    </div>

    <!-- Phone & City -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input v-model="phone" type="tel" placeholder="Phone*" class="form-input" />
      <input v-model="city" type="text" placeholder="City*" class="form-input" />
    </div>

    <!-- Country -->
    <input v-model="country" type="text" placeholder="Country" class="form-input" />

    <!-- Interest & Subject -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <select v-model="interest" class="form-input">
        <option disabled value="">Select Your Interest</option>
        <option>Villas</option>
        <option>Apartments</option>
        <option>Commercial</option>
      </select>
      <input v-model="subject" type="text" placeholder="Subject" class="form-input" />
    </div>

    <!-- Message -->
    <textarea v-model="message" placeholder="Message" rows="4" class="form-input"></textarea>

    <!-- Submit Button -->
    <button
      type="submit"
      class="btn btn-primary w-full text-white bg-[#1d4c6d] hover:bg-[#163d57]"
    >
      Send
    </button>
  </form>
</template>
