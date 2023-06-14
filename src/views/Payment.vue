<template>
  <section class="about">
    <div class="userslist">
      <div class="userslist__username" v-for="payment in payments" :key="payment.id">
        <h3>
          {{ payment.title }}
        </h3>
        <img :src="detailsImg" alt="details" class="btn" @click="showPaymentDetails(payment)"/>
      </div>
    </div>
  <payment-details-modal :title="`${selectedPayments.title} подробная информация`" :info="selectedPayments.details" v-if="selectedPayments" @close="closePaymentDetails"></payment-details-modal>
  </section>
</template>

<script>
import PaymentDetailsModal from '../components/PaymentDetailsModal.vue';
import detailsImg from '@/assets/icons/details-button.svg';
import paymentsData from '../data/payments.json';
export default {
  data() {
    return {
      payments: paymentsData,
      selectedPayments: null,
      detailsImg: detailsImg
    };
  },
  methods: {
    showPaymentDetails(payment) {
      this.selectedPayments = payment;
    },
    closePaymentDetails() {
      this.selectedPayments = null;
    }
  },
  components: {
    PaymentDetailsModal
  }
};
</script>

<style scoped>
.userslist {
  display: flex;
  flex-direction: column;
}
.users {
  display: flex;
}
.userslist__username {
  cursor: default;
  padding-bottom: 15px;
  display: flex;
  width: 150px;
  justify-content: space-around;
  align-items: center;
}
.btn {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>