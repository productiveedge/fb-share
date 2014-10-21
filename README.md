# _FB Share_

_Custom Facebook share modal._

## Custom Variables

    var $appID  = "FB_App_id",  
        $fbLink = "https://github.com",  
        $fbPic  = "http://placekitten.com/g/200/200",  
        $fbName = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  
        $fbCap  = "Duis viverra ipsum et tincidunt fringilla.",  
        $fbDesc = "In hendrerit sagittis ligula, et aliquet metus porttitor nec.";

### $appID
 Your app's unique identifier. Required. You can get your own app at [Facebook](https://developers.facebook.com/) and they will generate an App ID for you.

### $fbLink
 The link attached to this post.

### $fbPic 
The URL of a picture attached to this post. The picture must be at least 200px by 200px. See Facebook's documentation on sharing [best practices](https://developers.facebook.com/docs/sharing/best-practices#images) for more information on sizes.

### $fbName
The name of the link attachment.

### $fbCap
The caption of the link (appears beneath the link name). If not specified, this field is automatically populated with the URL of the link.

### $fbDesc 
The description of the link (appears beneath the link caption). If not specified, this field is automatically populated by information scraped from the link, typically the title of the page.

### [Additional Custom Facebook Parameters](https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.1)

---------------------------------------

## _IE Hack_
    if (FB.UIServer) {  
        FB.UIServer.setLoadedNode = function(a, b) {  
            FB.UIServer._loadedNodes[a.id] = b;  
        }; // IE hack to correct FB bug 20168  
    }

Reference Solution: [Stackoverflow](http://stackoverflow.com/questions/7447729/error-in-ie-with-facebook-share-and-doesnt-close-window)

## _Setup FB App_
1. Create your app
2. Add your app ID to the JS
3. Click on 'Add Platform' and choose 'Facebook Canvas' and Update the canvas URL 
4. Inside your FB app be sure that your `App Domains` matches the domain that you are hosted on
5. REMEMBER to publish your App in the 'Status & Review' section 