Template.MultiSelect.onRendered(function () {
  this.select = $(this.firstNode);

  this.select.multiselect(this.data.selectOptions);

  this.autorun(() => {
    let data = Template.currentData();
    this.select.multiselect('dataprovider', data.options);
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


Template.MultiSelect.onDestroyed(function () {
  this.select.multiselect('destroy');
});