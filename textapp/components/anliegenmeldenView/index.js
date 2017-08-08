'use strict';

app.anliegenmeldenView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('anliegenmeldenView');

// START_CUSTOM_CODE_anliegenmeldenView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_anliegenmeldenView
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        anliegenmeldenViewModel = kendo.observable({
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
    parent.set('anliegenmeldenViewModel', anliegenmeldenViewModel);
})(app.anliegenmeldenView);

// function Weiterclick()
// {
//     debugger;
//     $('#AnligenMelden').attr('display','none');
//     $('#anliegenMeldenOptional').attr('display','display');
// }

function Weiterclick(){
    debugger;      
    var FirstDropDown = document.getElementById("ddfirst").value;
   var SecondDropDown = document.getElementById("ddsecond").value;
    // var ThirdDd = document.getElementById("ddthird").value;
     var TextBarCode = document.getElementById("barcodewritten").value;
    var message = document.getElementById("txtBeschreibung").value;
    // var PostalCode = document.getElementById("PostalCode").value;
    localStorage.setItem("ddfirst", FirstDropDown);
    localStorage.setItem("ddsecond", SecondDropDown);
    // localStorage.setItem("ddthird", ThirdDd);
         localStorage.setItem("txtBeschreibung", message);
         localStorage.setItem("barcodetext", TextBarCode);
        //   localStorage.setItem("PostalCode", PostalCode);      
     app.mobileApp.navigate('components/anliegenmeldenView/AnliegenMolden.html');
    // $('#AnligenMelden').hide();
    // $('#anliegenMeldenOptional').show();
}
var pictureSource; // picture source
var destinationType; // sets the format of returned value 
document.addEventListener("deviceready", onDeviceReady, false);
function gotoTop(e) {
    e.view.scroller.reset();
}
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

///barcode Scan Section///

function barcodeScan(){
    debugger;
    if (window.navigator.simulator === true) {
            alert("Not Supported in Simulator.");
        }
        else {
  cordova.plugins.barcodeScanner.scan(

    // success callback function
    function (result) {
        // wrapping in a timeout so the dialog doesn't free the app
        setTimeout(function() {
            // alert("We got a barcode\n" +
            //       "Result: " + result.text + "\n" +
            //       "Format: " + result.format + "\n" +
            //       "Cancelled: " + result.cancelled);
            alert("Barcode erkannt.\n"+"Drücken sie OK um fortzufahren.");
                //   $("#result").append('<div class="row"><div class="col u-text-right"><label class="u-text-bold">' + result.format + '</label></div><div class="col u-text-left"><span class="u-color-accent">' + result.text + '</span></div></div>');
localStorage.removeItem('BarcodeResult');
                localStorage.setItem("BarcodeResult","The barcode format is: "+ result.format +" and the text is: "+ result.text);
        }, 0);
    },

    // error callback function
    function (error) {
        alert("Scanning failed: " + error);
    },

    // options object
    {
        "preferFrontCamera" : false,
        "showFlipCameraButton" : true,
        "showTorchButton" : true,
        "orientation" : "landscape"
    })
        }
}
var el = new Everlive('m5oob46plbvyoz13'); // App id Of telerik backend
var BarCodeUri = ""; //Will store live link of barcode in this variable
var image1 ="";
var image2 ="";
var image3 ="";
var image4 ="";
function onPhotoDataSuccess(imageData) {
 var file = {
        Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
        ContentType: "image/jpeg",
        base64: imageData,
        quality: 50,
        targetWidth: 400,
        targetHeight: 300
    };
    el.Files.create(file, function(response) {
         BarCodeUri = response.result.Uri;
         localStorage.removeItem('BarCodeUri');
         localStorage.setItem("BarCodeUri", BarCodeUri);
    }, function(err) {
        navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    });
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage = document.getElementById('largeImage');

    // Unhide image elements
    //
    smallImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
    var file = {
        Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
        ContentType: "image/jpeg",
        base64: imageURI,
        quality: 50,
        targetWidth: 400,
        targetHeight: 300
    };
    el.Files.create(file, function(response) {
        debugger;
        localStorage.removeItem('BarCodeUri');
         BarCodeUri = response.result.Uri;
         localStorage.setItem("BarCodeUri", BarCodeUri);
    }, function(err) {
        navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    });
    // Uncomment to view the image file URI 
    // console.log(imageURI);

    // Get image handle
    //
    var largeImage = document.getElementById('largeImage');

    // Unhide image elements
    //
    largeImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    largeImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL,
        targetWidth: 400,
        targetHeight: 300
    });
}

// A button will call this function
//
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20,
        allowEdit: true,
        destinationType: destinationType.DATA_URL
    });
}

// A button will call this function
//
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source
    });
}

// Called if something bad happens.
// 
function onFail(message) {
    alert('Failed because: ' + message);
}
/////
// var el = new Everlive('6e19r6m447rk5yqq');
// var image1 ="";
// var image2 ="";
// var image3 ="";
// var image4 ="";
function onPhotoDataSuccess1(imageData) {
    debugger;
    // var data = el.data('DamagedData');
    // var file = {
    //     Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
    //     ContentType: "image/jpeg",
    //     base64: imageData,
    //     quality: 50,
    //     targetWidth: 400,
    //     targetHeight: 300
    // };
    // el.Files.create(file, function(response) {
    //      image1 = response.result.Uri;
    // }, function(err) {
    //     navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    // });
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage1 = document.getElementById('smallImage1');

    // Unhide image elements
    //
    smallImage1.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage1.src = "data:image/jpeg;base64," + imageData;
     image1 =  imageData;
}
function onPhotoDataSuccess2(imageData) {
    // var data = el.data('DamagedData');
    // var file = {
    //     Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
    //     ContentType: "image/jpeg",
    //     base64: imageData,
    //     quality: 50,
    //     targetWidth: 400,
    //     targetHeight: 300
    // };
    // el.Files.create(file, function(response) {
    //     image2 = response.result.Uri;
    // }, function(err) {
    //     navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    // });
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage2 = document.getElementById('smallImage2');

    // Unhide image elements
    //
    smallImage2.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage2.src = "data:image/jpeg;base64," + imageData;
    image2 =  imageData;
}
function onPhotoDataSuccess3(imageData) {
    // var data = el.data('DamagedData');
    // var file = {
    //     Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
    //     ContentType: "image/jpeg",
    //     base64: imageData,
    //     quality: 50,
    //     targetWidth: 400,
    //     targetHeight: 300
    // };
    // el.Files.create(file, function(response) {
    //     image3 = response.result.Uri;
    // }, function(err) {
    //     navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    // });
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage3 = document.getElementById('smallImage3');

    // Unhide image elements
    //
    smallImage3.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage3.src = "data:image/jpeg;base64," + imageData;
    image3 =  imageData;
}
function onPhotoDataSuccess4(imageData) {
    // var data = el.data('DamagedData');
    // var file = {
    //     Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
    //     ContentType: "image/jpeg",
    //     base64: imageData,
    //     quality: 50,
    //     targetWidth: 400,
    //     targetHeight: 300
    // };
    // el.Files.create(file, function(response) {
    //     image4 = response.result.Uri;
    // }, function(err) {
    //     navigator.notification.alert("Unfortunately the upload failed: " + err.message);
    // });
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage4 = document.getElementById('smallImage4');

    // Unhide image elements
    //
    smallImage4.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage4.src = "data:image/jpeg;base64," + imageData;
    image4 =  imageData;
}



// A button will call this function
//
function capturePhoto1() {
    debugger;
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess1, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL,
        
        targetWidth: 400,
        targetHeight: 300
    });
}
function capturePhoto2() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess2, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL,
        
        targetWidth: 400,
        targetHeight: 300
    });
}
function capturePhoto3() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess3, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL,
      
        targetWidth: 400,
        targetHeight: 300
    });
}
function capturePhoto4() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess4, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL,
     
        targetWidth: 400,
        targetHeight: 300
    });
}


function onFail(message) {
    alert('Failed because: ' + message);
}

function mailImages(){
    debugger;
 var IhrVorname = localStorage.getItem('IhrVorname');
    var IhrNachname = localStorage.getItem('IhrNachname');
    var companyName = localStorage.getItem('NameIhresUnternehmens');
    var PostalCode = localStorage.getItem('PostalCode');
     var BarcodeResult = localStorage.getItem('BarcodeResult');
     var BarcodeWrittenOut = localStorage.getItem('barcodetext');//gets the barcode from the local storage
     var txtBeschreibung = localStorage.getItem('txtBeschreibung');
     var ddfirst = localStorage.getItem("ddfirst");
    var ddsecond = localStorage.getItem("ddsecond");
    localStorage.removeItem('BarcodeResult'); //barcode scanned cleared
    // localStorage.removeItem('ReklamationMessage');
    localStorage.removeItem('IhrVorname');
    localStorage.removeItem('IhrNachname');
    localStorage.removeItem('barcodetext'); // text barcode cleared
    // var DamagedMessage = document.getElementById("damagedMessage").value;
    var barcodelink = localStorage.getItem('BarCodeUri');
    var email = 'kris.sistrunk@gmail.com'; // please insert the customer email address
    var subject = 'Kunde Reklamation';
    var EmailAddress = localStorage.getItem('Email');
    //var emailBody = 'sdfsdff';
            $("#IhrVorname").val("");
            $("#IhrNachname").val("");
            $("#NameIhresUnternehmens").val("");
            $("#PostalCode").val("");
            $("#barcodewritten").val("");
            $("#txtBeschreibung").val("");
            $("#ddfirst").val("");
            $("#ddsecond").val("");
            $("#txtReklamationMessage").val("");
            $("#smallImage").attr('src','');
            $("#largeImage").attr('src','');
            $("#smallImage1").attr('src','');
            $("#smallImage2").attr('src','');
            $("#smallImage3").attr('src','');
            $("#smallImage4").attr('src','');
            // $("#damagedMessage").val("");
    var emailBody =  'IhrVorname: '+ IhrVorname + '%0D%0A'+'%0D%0A'+ 'IhrNachname: '+ IhrNachname + '%0D%0A'+'%0D%0A'+ 'CompanyName: '+ companyName + '%0D%0A'+'%0D%0A'+ 'FirstDropdown:'+ ddfirst + '%0D%0A'+'%0D%0A'+ 'SecondDropdown:'+ ddsecond + '%0D%0A'+'%0D%0A'+'Beschreibung Comment: ' + txtBeschreibung + '%0D%0A'+'%0D%0A'+  'Barcode Link: ' + barcodelink  +  '%0D%0A'+'%0D%0A'+ ' Image1 = '+ image1 + '%0D%0A'+'%0D%0A'+ ' Image2 = '+image2 + '%0D%0A'+'%0D%0A'+ ' image3 = '+ image3 + '%0D%0A'+'%0D%0A' + 'and image4 = ' + image4;
if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                app.mobileApp.navigate('components/homeView/view.html');// returns to homepage
                return true;
            } else if (window.cordova === undefined || window.cordova.plugins === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                app.mobileApp.navigate('components/homeView/view.html'); // returns to homepage
                return true;
            } else {
                cordova.plugins.email.open({
                    // to:          ['kris.sistrunk@gmail.com'],
                       to:          [EmailAddress],
                    // cc:          ['person2@domain.com'],
                    // bcc:         ['person3@domain.com', 'person4@domain.com'],
                    attachments: ['base64:image1.jpg//'+image1, 'base64:image2.jpg//'+image2,'base64:image3.jpg//'+image3,'base64:image4.jpg//'+image4],
                    subject:     'Kunde Reklamation',
                    body:        "<h2>Hallo !</h2><div><span>Vorname: "+IhrVorname +"</span><br><br><span>Nachname: "+ IhrNachname +"</span><br><br><span>CompanyName: "+ companyName +"</span><br><br><span>Grund Ihres Anliegens: "+ ddfirst +"</span><br><br><span>Betroffenes Kleidungsstück: "+ ddsecond +"</span><br><br><span>Barcode: "+ BarcodeResult +"</span><br><br><span>Manuelle Barcodeerfassung: "+ BarcodeWrittenOut +"</span><br><br></span><br><br><span>Beschreibung: "+txtBeschreibung +"</span><br><br>",
                    isHtml:      true
                })
            }
            app.mobileApp.navigate('components/homeView/view.html'); // returns to homepage
            
        image1 ="";
        image2 ="";
        image3 ="";
        image4 ="";
       
 }


// START_CUSTOM_CODE_anliegenmeldenViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_anliegenmeldenViewModel