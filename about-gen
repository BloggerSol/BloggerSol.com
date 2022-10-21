  <!-- HTML Script -->
 <div id="Main_Block">
  
<span style="color: #999999; display: inline-block; font-family: &quot;roboto&quot; , sans-serif; font-weight: 700; margin-bottom: 10px; margin-top: 15px;"> Website Name: </span>
<input id="name" cols="1" name="name" placeholder="Enter..." type="text"/>
  
<span style="color: #999999; display: inline-block; font-family: &quot;roboto&quot; , sans-serif; font-weight: 700; margin-bottom: 10px; margin-top: 15px;"> Website Type: </span>
<input id="type" cols="1" name="type" placeholder="Enter..." type="text"/>
  
<span style="color: #999999; display: inline-block; font-family: &quot;roboto&quot; , sans-serif; font-weight: 700; margin-bottom: 10px; margin-top: 15px;"> Website Speciality: </span>
<input id="Web_Spec" cols="1" name="Web_Spec" placeholder="Enter..." type="text"/>

<button id="btn" onclick="myFunction1()" type="button">Generate</button>

<p id="Msg"></p>
<textarea id="result" cols="25" name="result" rows="10"></textarea>
  
<button id="btn_cpy" onclick="myFunction2('result')" type="button">Copy HTML Code</button>
  
</div>

  <!-- JavaScript -->
 <script>
  function myFunction1(){
    var WebName = document.getElementById('name').value;
    var WebType = document.getElementById('type').value;
    var WebSpec = document.getElementById('Web_Spec').value;
    if(WebName == ""){
      document.getElementById('name').style.border = "1px solid red";
      alert("Please Enter Your Website Name")
    }else if(WebType == ""){
      document.getElementById('type').style.border = "1px solid red";
      alert("Please Enter Your Website Type")
    }else if(WebSpec == ""){
      document.getElementById('Web_Spec').style.border = "1px solid red";
      alert("Please Enter Your Website Specification")
    }else{
      document.getElementById('name').style.border = "1px solid green";
      document.getElementById('type').style.border = "1px solid green";
      document.getElementById('Web_Spec').style.border = "1px solid green";
      document.getElementById('W_Name1').innerHTML = WebName;
      document.getElementById('W_Name2').innerHTML = WebName;
      document.getElementById('W_Type1').innerHTML = WebType;
      document.getElementById('W_Type2').innerHTML = WebType;
      document.getElementById('W_Type3').innerHTML = WebType;
      document.getElementById('W_Type4').innerHTML = WebType;
      document.getElementById('W_Spec').innerHTML = WebSpec;
      var res = document.getElementById('P_Sample').innerHTML;
      document.getElementById('result').innerHTML = res;
      alert("Will you do me a favor? Please click on at least one ad before leaving the site.");
      document.getElementById('Msg').innerHTML = "Congrates, Your About Us page is generated successfully. Copy the HTML code below!"
    }
  };
  
  function myFunction2(id){    
    document.getElementById(id).select();
    document.execCommand('copy');
    document.getElementById('btn_cpy').innerHTML = "Copied!"    
    setTimeout(function(){
       document.getElementById('btn_cpy').innerHTML = "Copy HTML Code" 
    }, 5000);  
  };
</script>

<div id="P_Sample" style="display: none;"><h3 style="text-align: center;">Welcome To <span id="W_Name1">WebsiteName</span></h3>
    <p><span id="W_Name2">WebsiteName</span> is a Professional <span id="W_Type1">WebsiteType</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span id="W_Type2">WebsiteType</span>, with a focus on dependability and <span id="W_Spec">WebsiteSpeciality</span>. We're working to turn our passion for <span id="W_Type3">WebsiteType</span> into a booming online website. We hope you enjoy our <span id="W_Type4">WebsiteType</span> as much as we enjoy offering them to you.</p>
<p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
<p style="font-weight: bold; text-align: center;">Thanks For Visiting Our Site<br /><br />
<span style="color: blue; font-size: 16px; font-weight: bold; text-align: center;">Have a nice day!</span></p></div>
