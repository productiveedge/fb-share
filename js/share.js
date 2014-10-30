this.$('#btnFacebook').click(function () {
    // Customizable Variables
    var $appID  = "FB_App_id",
        $fbLink = "https://github.com",
        $fbPic  = "http://placekitten.com/g/504/504",
        $fbName = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        $fbCap  = "Duis viverra ipsum et tincidunt fringilla.",
        $fbDesc = "In hendrerit sagittis ligula, et aliquet metus porttitor nec.";

    var config = {
        appId: $appID,
        status: true,
        cookie: true
    };
    FB.init(config);
    if (FB.UIServer) {
        FB.UIServer.setLoadedNode = function(a, b) {
            FB.UIServer._loadedNodes[a.id] = b;
        }; // IE hack to correct FB bug 20168
    }

    var params = {
        // Option 1 [Preferred way via FB documentation]
        method: 'share',
        href: 'https://developers.facebook.com/docs/',

        // Option 2 [Displaying 'Likes']
        // method: 'share_open_graph',
        // action_type: 'og.likes',
        // action_properties: JSON.stringify({
        //      object:'https://developers.facebook.com/docs/',
        // })

        // Option 3 [Deprecated in API Version 2.0]
        // method: 'feed',
        // link: $fbLink,
        // picture: $fbPic,
        // name: $fbName,
        // caption: $fbCap,
        // description: $fbDesc

    };

    FB.ui(params, function (response) {
        console.log(response);
        if (window.location.search.indexOf('post_id') == 1) window.close();
    });
});