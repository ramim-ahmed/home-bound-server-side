const express = require("express");
const { roomRoutes } = require("../modules/room/room.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/rooms",
    route: roomRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
