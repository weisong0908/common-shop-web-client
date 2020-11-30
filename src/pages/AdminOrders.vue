<template>
  <page title="Manage Orders">
    <breadcrumb :links="links" currentLinkName="adminOrders"></breadcrumb>
  </page>
</template>

<script>
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb";

export default {
  components: {
    Page,
    Breadcrumb
  },
  data() {
    return {
      links: [
        { title: "Dashboard", name: "adminDashboard" },
        { title: "Orders", name: "adminOrders" }
      ]
    };
  }
};
</script>
