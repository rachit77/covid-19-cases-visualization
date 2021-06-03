function UpdateMap() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp.data);
      rsp.data.forEach(element => {
          longitude=element.longitude;
          latitude=element.latitude;

          cases=element.confirmed;

          if(cases<=1000)
          color= "rgb(35, 21, 235)";

          if(cases>1000 && cases<=10000)
          color= "rgb(24, 245, 24)";

          if(cases>10000 && cases<=30000)
          color= "rgb(241, 247, 45)";

          if(cases>30000 && cases<=100000)
          color="rgb(232, 53, 199)";
          

          if(cases>100000 && cases<=500000)
          color= "rgb(247, 57, 66)";

          if(cases>500000)
          color= "rgb(77, 11, 15)";

          
          var popup= new mapboxgl.Popup({ offset: 25 }).setText(
           `Confirmed covid cases in ${element.location} are: ${element.confirmed} ,
           Deaths in ${element.location} are ${element.dead} ,
           Number of recovered patients are ${element.recovered} `
          // element.confirmed
            );

          new mapboxgl.Marker({
            draggable: false,
            color: color
          })
            .setLngLat([longitude, latitude])
            .setPopup(popup)
            .addTo(map);

            
      })

      
    });
}

UpdateMap();
//Let interval= 2000;
//setInterval(UpdateMap, interval);

