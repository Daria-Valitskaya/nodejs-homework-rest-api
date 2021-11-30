const signUp = require("./signUp");
const signIn = require("./signIn");
const signOut = require("./signOut");
const currentUser = require("./currentUser");
const subscriptionUpdate = require("./subscriptionUpdate");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const repeatedVerify = require("./repeatedVerify");
module.exports = {
  signUp,
  signIn,
  signOut,
  currentUser,
  subscriptionUpdate,
  updateAvatar,
  verify,
  repeatedVerify,
};
