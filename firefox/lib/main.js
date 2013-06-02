var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
 
pageMod.PageMod({
  include: "*.iltalehti.fi",
  contentScriptFile: [self.data.url("jquery.min.js"),
    self.data.url("iltasaatana.js")]
});
