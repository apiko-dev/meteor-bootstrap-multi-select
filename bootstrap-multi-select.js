Template.MultiSelect.onRendered(function () {
  this.$('select').multiselect(this.data.selectOptions);

  this.autorun(() => {
    let data = Template.currentData();
    $('select').multiselect('dataprovider', data.options);
  });
});


Template.MultiSelect.helpers({
  selectAttributes () {
    let attributes = {};

    let setAttribute = (attributeName) => {
      if (this[attributeName]) {
        attributes[attributeName] = this[attributeName];
      }
    };

    ['name', 'id', 'multiple'].forEach(attribute => setAttribute(attribute));

    return attributes;
  }
});