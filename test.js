// File: trust-form.js

(function() {
  console.log("trusted-form testing");
  document.write(`
  <!-- TrustedForm -->
  <script type="text/javascript">
  (function() {
  var tf = document.createElement('script');
  tf.type = 'text/javascript'; tf.async = true;
  tf.src = ("https:" == document.location.protocol ? 'https' : 'http') + "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&l=" + new Date().getTime() + Math.random();
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tf, s);
  })();
  </script>
  <noscript>
  <img src="https://api.trustedform.com/ns.gif" />
  </noscript>
  <!-- End TrustedForm -->
`);
})();
