'use strict';

app.homeView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('homeView');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        homeViewModel = kendo.observable({
        submit: function() {},
        /// start add model functions
        /// end add model functions

        cancel: function() {}
    });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('homeViewModel', homeViewModel);
})(app.homeView);
function Startapp(){
    debugger;
localStorage.removeItem('IhrVorname');
localStorage.removeItem('IhrNachname');
localStorage.removeItem('NameIhresUnternehmens');
localStorage.removeItem('PostalCode');
localStorage.removeItem('BarCodeUri');
localStorage.removeItem('BarcodeResult');
    var IhrVorname = document.getElementById("IhrVorname").value;
    var IhrNachname = document.getElementById("IhrNachname").value;
    var NameIhresUnternehmens = document.getElementById("NameIhresUnternehmens").value;
    var PostalCode = document.getElementById("PostalCode").value;   
    localStorage.setItem("IhrVorname", IhrVorname);
    localStorage.setItem("IhrNachname", IhrNachname);
         localStorage.setItem("NameIhresUnternehmens", NameIhresUnternehmens);
         localStorage.setItem("PostalCode", PostalCode);        
         app.mobileApp.navigate('components/homeView/view.html');
}
// START_CUSTOM_CODE_homeViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeViewModel