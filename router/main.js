const express = require("express");
const { Router } = express;
const router = Router();
const ROUTER_PREFIX = "/:language(tr|en|ru)";
const mw = {
  Bootstrap: require("../middlewares/bootstrap"),
};
const ctrl = {
  home: require("../controllers/Home"),
  products: require("../controllers/Products"),
  software_and_docs: require("../controllers/SoftwareAndDocs"),
  about: require("../controllers/About"),
  contactUs: require("../controllers/ContactUs"),
};

/* Get Routes */
router.route(ROUTER_PREFIX + "/").get([mw.Bootstrap], ctrl.home.get);
router
  .route(ROUTER_PREFIX + "/products")
  .get([mw.Bootstrap], ctrl.products.get);
router
  .route(ROUTER_PREFIX + "/software-docs")
  .get([mw.Bootstrap], ctrl.software_and_docs.get);
router.route(ROUTER_PREFIX + "/about").get([mw.Bootstrap], ctrl.about.get);
router
  .route(ROUTER_PREFIX + "/contact-us")
  .get([mw.Bootstrap], ctrl.contactUs.get);

module.exports = router;
