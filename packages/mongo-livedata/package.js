Package.describe({
  summary: "Moved to the 'mongo' package",
  version: '1.0.10-rc.1'
});

Package.onUse(function (api) {
  api.imply("mongo");
});
