window.clevertapInit = function(CLEVERTAP_ACCOUNT_ID="TEST-9R7-Z8W-946Z"){
    window.clevertap = {event:[], profile:[], account:[], onUserLogin:[], region:'in1', notifications:[], privacy:[]};
    // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
   clevertap.account.push({"id": CLEVERTAP_ACCOUNT_ID});
   clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
   clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
   clevertap.spa = true; 
   (function () {
            var wzrk = document.createElement('script');
            wzrk.type = 'text/javascript';
            wzrk.async = true;
            wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wzrk, s);
     })();
}