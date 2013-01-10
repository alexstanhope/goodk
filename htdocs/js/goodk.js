
/*
 * goodk.js
 *
 * Javascript support for goodk.co.uk
 *
 */
 
  // initial vars must be defined in inherited javascript for general.js
  var DEBUG = false;

  // global email address, built on init
  var goodk_email = "";
  function goodk_buildEmail()
  {
    // unicodes used to beat the spambots
    goodk_email = "mail" + "to" + "\u003A" + "inform" + "\u0040" + "goodk" + "\u002E" + "co" + "\u002E" + "uk";
  }
  
  function goodk_popEmail()
  {
    general_popup(goodk_email);
  }

  function init()
  {
    goodk_buildEmail();
  }


