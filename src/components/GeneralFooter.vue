<template>
  <div id="footer_container">
    <a-layout-footer>
      <a-row type="flex" justify="center">
        <a-col id="contact_footer" :span="8">
          <h1>Contact us</h1>
          <p>ronan.duault@epitech.eu - bastien.noirant@epitech.eu</p>
          <p>dorian.testa@epitech.eu - raphael.celestin@epitech.eu</p>
        </a-col>
        <a-col :span="12"> </a-col>
        <a-col class="margin_footer" :span="2">
          <p>Goth-Time Manager by City of Gotham Trade-Union</p>
        </a-col>
        <a-col class="margin_footer" :span="2">
          <img src="../assets/CGT-U_logo.png" height="100" width="100"
        /></a-col>
      </a-row>
    </a-layout-footer>
  </div>
</template>

<script>
export default {
  name: "GeneralFooter"
};
</script>

<style scoped>
/*#contact_footer {*/
/*  text-align: left;*/
/*  font-size: 12px;*/
/*  color: #2c3e50;*/
/*}*/

#footer_container {
  text-align: left;
  font-size: 12px;
  color: #2c3e50;
}

.margin_footer {
  text-align: right;
  margin: auto;
  font-size: 12px;
  color: #2c3e50;
}
</style>
