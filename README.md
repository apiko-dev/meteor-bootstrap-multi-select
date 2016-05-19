# jss:bootstrap-multi-select

## Basics
This package is a reactive wrapper for [Bootstrap Multiselect](https://github.com/davidstutz/bootstrap-multiselect)
jQuery plugin. It produce a template with name `MultiSelect` for creating reactive dropdown select component.

## How to use
For using multi select, you should to create a template with `MultiSelect` calling:

```html
<template name="testTemplate">
  {{> MultiSelect id="options-select" name="options-select" multiple="multiple" options=options selectOptions=selectOptions}}
</template>
```

and create helpers:

```js
Template.testTemplate.helpers({
  options () {
    return [
      {
        label: 'Option 1',
        value: '1'
      },
      {
        label: 'Option 2',
        value: '2'
      },
      {
        label: 'Option 3',
        value: '3'
      }
    ];
  },

  selectOptions () {
    return {
      buttonClass: 'btn btn-white',
      nonSelectedText: 'Check option',
      onChange () {
        // change handler
      }
    };
  }
});
```

You should get something like this:

![Example of MultiSelect](https://snag.gy/orMCTW.jpg)

For creating a group of options, your `options` helper should be rewrite:

```js
options () {
  return [
    {
      label: 'Group 1',
      children: [
        {
          label: 'Option 1',
          value: '1'
        },
        {
          label: 'Option 2',
          value: '2'
        },
        {
          label: 'Option 3',
          value: '3'
        }
      ]
    },
    {
      label: 'Group 2',
      children: [
        {
          label: 'Option 1',
          value: '1'
        },
        {
          label: 'Option 2',
          value: '2'
        },
        {
          label: 'Option 3',
          value: '3'
        }
      ]
    }
  ];
}
```

The result:

![Multi groups select](https://snag.gy/oplmkF.jpg)

To learn about all available select options you can [here](http://davidstutz.github.io/bootstrap-multiselect/#configuration-options).

Made by [![Professional Meteor Development Studio](http://s30.postimg.org/jfno1g71p/jss_xs.png)](http://jssolutionsdev.com) - [Professional Meteor Development Company](http://jssolutionsdev.com)