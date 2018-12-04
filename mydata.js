import axios from 'axios';    
    function energygraph(){
        
        var year = document.getElementById("year").value;
        var date = document.getElementById("date").value;
        var type = document.getElementById("type").value;
        var duration = $("input:radio[name=r1]:checked").val();
        const data={
            selectedyear: year,
            selecteddate: date,
            selectedduration: duration
        }
        console.log("selected"+duration);
        console.log("year",year+date+type); 
        axios.get(`http://127.0.0.1:8081//myaction`, data)
            .then((response) => {
                console.log("response",response.data);
              });    

      }
