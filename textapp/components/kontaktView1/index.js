'use strict';

app.kontaktView1 = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('kontaktView1');

// START_CUSTOM_CODE_kontaktView1
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_kontaktView1
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        kontaktView1Model = kendo.observable({
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
    parent.set('kontaktView1Model', kontaktView1Model);
})(app.kontaktView1);


function Anmeldedaten()
{
    localStorage.removeItem('BarcodeResult'); //barcode scanned cleared
    localStorage.removeItem('ReklamationMessage');
    localStorage.removeItem('FirstName');
    localStorage.removeItem('LastName');
    localStorage.removeItem('barcodetext'); // text barcode cleared
     jQuery('.kontakt').removeClass('Current');
    app.mobileApp.navigate('components/home/view.html'); 
}
 function kontakt(){
    debugger;   
    jQuery('.kontakt').addClass('Current');
}
// START_CUSTOM_CODE_kontaktView1Model
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_kontaktView1Model