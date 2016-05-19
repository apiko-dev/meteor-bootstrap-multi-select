Package.describe({
  name: 'jss:bootstrap-multi-select',
  version: '0.0.2',
  summary: 'Bootstrap multi select wrapper for Meteor',
  git: 'https://github.com/JSSolutions/meteor-bootstrap-multi-select',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript');
  api.use(['jquery', 'templating'], 'client');

  api.addFiles('bootstrap-multiselect/bootstrap-multiselect.js', 'client');
  api.addFiles('bootstrap-multiselect/bootstrap-multiselect.css', 'client');

  api.addFiles('bootstrap-multi-select.html', 'client');
  api.addFiles('bootstrap-multi-select.js', 'client');
});
