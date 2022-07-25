Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  Webcam.attach( '#camera' );

camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JkTYLlkzx/model.json',modelLoaded);


function modelLoaded() {
    console.log('Model Loaded!');
  }

  function check(){
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);

  }

  function gotResult(error, result) {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      document.getElementById("result_name").innerHTML = result[0].label;
      document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
  }

  
