<template>
  <div class="login-container">
    <img src="../assets/cart.svg" alt="Login Image" class="login-image" />
    <!-- login form content here -->
    <form class="login-form">
      <input type="text" v-model="username" placeholder="USERNAME" class="username-input" />
      <input type="password" v-model="password" placeholder="PASSWORD" class="password-input"
        @input="validatePassword" />
      <div v-if="showError" class="error-message">Wrong combination</div>
      <button @click="handleLogin" class="login-button">LOGIN</button>
      <div class="forgot-password">Forgot password?</div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const showError = ref(false);
const router = useRouter();

const validatePassword = () => {
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/;
  showError.value = !passwordPattern.test(password.value);
};

const handleLogin = () => {
  const correctUsername = 'test@luxpmsoft.com';
  const correctPassword = 'test1234!';

  if (username.value === correctUsername && password.value === correctPassword && !showError.value) {
    alert('Login successful!');
    router.push('/blank'); // Navigate to the blank page
  } else {
    alert('the provided password is wrong');
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #2148C0 url('@/assets/background.svg') no-repeat center center;
  background-size: cover;
  padding: 20px;
}

.login-image {
  position: absolute;
  width: 119.39px;
  height: 97.85px;
  left: 50%;
  transform: translateX(-50%);
  top: 161px;
}

.login-form {
  position: absolute;
  width: 300px;
  height: 398px;
  left: 50%;
  transform: translateX(-50%);
  top: 161px;
  background: transparent;
}

.username-input {
  position: absolute;
  width: 255px;
  height: 45px;
  left: 0;
  top: 169px;
  padding-left: 40px;
  /* Adjust padding to make space for the icon */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  background: url('../assets/user.svg') no-repeat 10px center;
  background-size: 20px 20px;
}

.username-input::placeholder {
  color: #fff;
}

.password-input {
  position: absolute;
  width: 255px;
  height: 45px;
  left: 0;
  top: 234px;
  padding-left: 40px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  background: url('../assets/lock.svg') no-repeat 10px center;
  background-size: 20px 20px;
}

.password-input::placeholder {
  color: #fff;
}

.login-button {
  position: absolute;
  width: 300px;
  height: 45px;
  left: 0;
  top: 322px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #2148C0;
}

.forgot-password {
  position: absolute;
  width: 300px;
  height: 20px;
  left: 87px;
  top: 380px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
}


.error-message {
  color: red;
  font-size: 14px;
  position: absolute;
  left: 0;
  top: 284px;
}
</style>