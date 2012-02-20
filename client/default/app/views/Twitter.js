app.views.Twitter = Ext.extend(Ext.Panel, {
  title: 'Twitter',
  iconCls: 'home',

  listeners: {
  	show: function() {
  		app.views.viewport.tabBar.show();
  		app.views.viewport.componentLayout.childrenChanged = true;
  		app.views.viewport.doComponentLayout();

  		// Get a list of tweets
      Ext.dispatch({
        controller: app.controllers.twitter,
        action: 'getTweets'
      });
  	}
  },

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
  		items: [
  			{
  				text: 'Back',
  				handler: function() {
  					app.views.viewport.setActiveItem(app.views.home);
  				}
  			}
  		]
  	}
  ],
  
  items: [
  	new Ext.List({
  		id: 'list',
  		store: app.stores.twitter,
  		itemTpl: '{text}',
      grouped: false,
      scroll: 'vertical',
      fullscreen: true
    }],

  	})
  ]
});